#!/usr/bin/env python3
"""
Flexon Sports Foundation — Automated Git & BigRock VPS Deployment Script
Target Domain: https://flexonsports.org/
Target Directory on VPS: /var/www/flexon-sports
Target PM2 Process: flexon-sports (Port 3000)

Safety Guarantees:
- Does NOT modify system packages, Nginx configs, SSL certificates, or firewall rules.
- Does NOT touch any other running web apps (flexathonrun, infinitask, muneerkh.online, quantara).
- Creates a full timestamped backup of /var/www/flexon-sports before deploying.
- Reads VPS credentials from .env.deploy.local (git-ignored) or environment variables.
"""

import io
import os
import subprocess
import sys
import tarfile
import time
from datetime import datetime
from pathlib import Path

import paramiko

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

ROOT_DIR = Path(__file__).resolve().parent

EXCLUDE_DIRS = {
    ".git",
    ".next",
    "node_modules",
    ".venv",
    "test-results",
    "playwright-report",
    "__pycache__",
    "Photos",
    "Team",
    "LogoAssets",
    "Website Plan",
}

EXCLUDE_FILES = {
    ".env.deploy.local",
    ".DS_Store",
    "package-lock.json",
}


def load_env_file(env_path: Path) -> None:
    """Load key=value pairs from .env.deploy.local into os.environ if not already set."""
    if not env_path.exists():
        return
    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, val = line.split("=", 1)
        os.environ.setdefault(key.strip(), val.strip())


def run_local(cmd: list[str], check: bool = True) -> subprocess.CompletedProcess:
    """Execute a local command in ROOT_DIR."""
    print(f"  $ {' '.join(cmd)}")
    result = subprocess.run(
        cmd,
        cwd=str(ROOT_DIR),
        text=True,
        capture_output=True,
        encoding="utf-8",
        errors="replace",
    )
    if result.stdout.strip():
        print(result.stdout.strip())
    if result.stderr.strip():
        print(result.stderr.strip())
    if check and result.returncode != 0:
        raise RuntimeError(f"Command failed with exit code {result.returncode}: {' '.join(cmd)}")
    return result


def step_git_commit_and_push(commit_msg: str) -> bool:
    """Stage, commit, and push local changes to Git origin."""
    print("\n[1/5] Staging, committing, and pushing code to Git...")
    name_chk = run_local(["git", "config", "user.name"], check=False)
    if not name_chk.stdout.strip():
        run_local(["git", "config", "user.name", "JIBIN N"], check=False)
    email_chk = run_local(["git", "config", "user.email"], check=False)
    if not email_chk.stdout.strip():
        run_local(["git", "config", "user.email", "jibintcrtcr@gmail.com"], check=False)

    run_local(["git", "add", "-A"], check=True)

    status = run_local(["git", "status", "--porcelain"], check=True)
    if status.stdout.strip():
        run_local(["git", "commit", "-m", commit_msg], check=True)
    else:
        print("  Working tree already clean — no new commit needed.")

    branch_res = run_local(["git", "rev-parse", "--abbrev-ref", "HEAD"], check=True)
    branch = branch_res.stdout.strip() or "main"

    push_res = run_local(["git", "push", "origin", branch], check=False)
    if push_res.returncode == 0:
        print(f"  Successfully pushed to origin/{branch}.")
        return True
    else:
        print(
            f"  [Notice] git push returned code {push_res.returncode}. "
            "Proceeding with direct SFTP + Git repository sync to VPS."
        )
        return False


def create_project_tarball() -> bytes:
    """Create an in-memory .tar.gz archive of the project source files."""
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for item in ROOT_DIR.rglob("*"):
            rel_parts = item.relative_to(ROOT_DIR).parts
            if any(part in EXCLUDE_DIRS for part in rel_parts):
                continue
            if item.is_file() and item.name in EXCLUDE_FILES:
                continue
            if item.is_file() and item.name.startswith(".env") and item.name.endswith(".local"):
                continue
            arcname = "/".join(rel_parts)
            tar.add(str(item), arcname=arcname, recursive=False)
    buf.seek(0)
    return buf.read()


def run_remote(ssh: paramiko.SSHClient, command: str, timeout: int = 300, check: bool = True) -> str:
    """Run a shell command on the remote VPS and stream/return output."""
    print(f"  [VPS] $ {command}")
    stdin, stdout, stderr = ssh.exec_command(command, timeout=timeout)
    out = stdout.read().decode("utf-8", errors="replace").strip()
    err = stderr.read().decode("utf-8", errors="replace").strip()
    exit_code = stdout.channel.recv_exit_status()

    if out:
        print(out)
    if err:
        print(err)
    if check and exit_code != 0:
        raise RuntimeError(f"Remote command failed (exit {exit_code}): {command}")
    return out


def deploy_to_vps() -> None:
    load_env_file(ROOT_DIR / ".env.deploy.local")

    host = os.environ.get("VPS_HOST", "66.116.243.185")
    port = int(os.environ.get("VPS_PORT", "22"))
    user = os.environ.get("VPS_USER", "root")
    password = os.environ.get("VPS_PASSWORD", "")
    app_dir = os.environ.get("VPS_APP_DIR", "/var/www/flexon-sports")
    pm2_name = os.environ.get("VPS_PM2_NAME", "flexon-sports")
    internal_port = os.environ.get("VPS_PORT_INTERNAL", "3000")
    git_remote = os.environ.get("GIT_REMOTE_URL", "https://github.com/jibinntcr/flexon.git")

    if not password:
        raise RuntimeError(
            "VPS_PASSWORD is not set. Set it in .env.deploy.local or as an environment variable."
        )

    commit_msg = (
        sys.argv[1]
        if len(sys.argv) > 1
        else f"Deploy Next.js Flexon Sports Foundation update ({datetime.now().strftime('%Y-%m-%d %H:%M')})"
    )

    # 1. Commit & push to Git
    step_git_commit_and_push(commit_msg)

    # 2. Package clean source tarball
    print("\n[2/5] Packaging project source archive for deployment...")
    tar_bytes = create_project_tarball()
    print(f"  Created source archive ({len(tar_bytes) / (1024 * 1024):.2f} MB)")

    # 3. Connect to VPS & create safe backup of existing /var/www/flexon-sports
    print(f"\n[3/5] Connecting to VPS ({user}@{host}:{port})...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, port=port, username=user, password=password, timeout=30)

    try:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_dir = f"/var/www/flexon-sports-backup-{timestamp}"

        print(f"  Backing up existing {app_dir} to {backup_dir} (excluding node_modules/.next)...")
        backup_cmd = (
            f"mkdir -p {backup_dir} && "
            f"rsync -a --exclude='node_modules' --exclude='.next' {app_dir}/ {backup_dir}/"
        )
        run_remote(ssh, backup_cmd, timeout=120)

        # Upload source archive to /tmp/flexon-next-deploy.tar.gz
        remote_tar = "/tmp/flexon-next-deploy.tar.gz"
        print(f"  Uploading source archive to {remote_tar} via SFTP...")
        sftp = ssh.open_sftp()
        try:
            with sftp.file(remote_tar, "wb") as rf:
                rf.write(tar_bytes)
        finally:
            sftp.close()

        # 4. Replace code in /var/www/flexon-sports while preserving .env & data files, then build
        print(f"\n[4/5] Updating {app_dir} and building production Next.js bundle...")
        staging_dir = "/tmp/flexon-next-staging"
        extract_and_sync_cmd = " && ".join(
            [
                f"rm -rf {staging_dir}",
                f"mkdir -p {staging_dir}",
                f"tar -xzf {remote_tar} -C {staging_dir}",
                f"rm -f {remote_tar}",
                # Sync new project files into /var/www/flexon-sports while preserving .env and db files
                (
                    f"rsync -a --delete "
                    f"--exclude='.git' "
                    f"--exclude='node_modules' "
                    f"--exclude='.next' "
                    f"--exclude='.env' "
                    f"--exclude='.env.local' "
                    f"--exclude='registrations.db' "
                    f"--exclude='registrations.json' "
                    f"--exclude='admin_config.json' "
                    f"{staging_dir}/ {app_dir}/"
                ),
                f"rm -rf {staging_dir}",
                # Point git remote in /var/www/flexon-sports to the new repo
                f"cd {app_dir} && (git remote set-url origin {git_remote} 2>/dev/null || true)",
            ]
        )
        run_remote(ssh, extract_and_sync_cmd, timeout=180)

        # Install clean production dependencies for Linux and build Next.js production app
        build_cmd = (
            f"cd {app_dir} && "
            f"rm -rf .next node_modules package-lock.json && "
            f"npm install --omit=dev --no-audit --no-fund && "
            f"npm run build"
        )
        run_remote(ssh, build_cmd, timeout=600)

        # 5. Restart ONLY the flexon-sports PM2 process on port 3000
        print(f"\n[5/5] Restarting PM2 process '{pm2_name}' on port {internal_port}...")
        pm2_cmd = (
            f"cd {app_dir} && "
            f"(pm2 restart {pm2_name} --update-env || "
            f"pm2 start npm --name '{pm2_name}' -- start -- -p {internal_port}) && "
            f"pm2 save"
        )
        run_remote(ssh, pm2_cmd, timeout=120)

        # Wait briefly and verify local port 3000 + public HTTPS status
        time.sleep(3)
        verify_cmd = (
            f"curl -s -o /dev/null -w 'Local Port {internal_port} HTTP: %{{http_code}}\\n' http://127.0.0.1:{internal_port}/ && "
            f"curl -s -o /dev/null -w 'Public HTTPS flexonsports.org: %{{http_code}}\\n' https://flexonsports.org/ && "
            f"pm2 status"
        )
        run_remote(ssh, verify_cmd, timeout=60)

        print("\n✅ Deployment to https://flexonsports.org/ completed successfully!")
        print(f"   Backup saved on VPS at: {backup_dir}")

    finally:
        ssh.close()


if __name__ == "__main__":
    deploy_to_vps()
