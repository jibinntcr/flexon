/**
 * Flexon Sports Foundation - Header Component
 * Strict light/white theme navbar with accessible dropdowns and mobile drawer
 */

export function createHeader() {
  const header = document.createElement("header");
  header.className = "site-header";
  header.id = "main-header";

  header.innerHTML = `
    <div class="container header-inner">
      <a href="/" class="brand-link" aria-label="Flexon Sports Foundation Home">
        <img 
          src="/assets/brand/flexon-sports-logo-light.png" 
          alt="Flexon Sports Foundation" 
          class="brand-logo-img"
          onerror="this.onerror=null; this.src='/assets/brand/flexon-sports-logo.png';"
        />
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="desktop-nav" aria-label="Main Navigation">
        <!-- About Dropdown -->
        <div class="nav-item-dropdown">
          <a href="/about" class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">
            About ▾
          </a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="/about" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">About the Foundation</span>
              <span class="dropdown-desc">Purpose, vision, and practical objectives</span>
            </a>
            <a href="/team" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Team & Directors</span>
              <span class="dropdown-desc">Board oversight and program leadership</span>
            </a>
            <a href="/governance" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Governance & Legal</span>
              <span class="dropdown-desc">Section 8 status & statutory disclosures</span>
            </a>
            <a href="/governance/annual-returns" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Annual Returns Archive</span>
              <span class="dropdown-desc">Public statutory filings under Sec 92(3)</span>
            </a>
          </div>
        </div>

        <!-- Programs Dropdown -->
        <div class="nav-item-dropdown">
          <a href="/programs" class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">
            Programs ▾
          </a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="/programs" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">All 12 Program Areas</span>
              <span class="dropdown-desc">Running, football, cricket & community sports</span>
            </a>
            <a href="/programs/empower-youth-football-camp" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Empower Youth Football Camp</span>
              <span class="dropdown-desc">Coaching for ages 10–15 led by MLA Manoj Moothedan</span>
            </a>
            <a href="/veteran-sixes" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Veteran Sixes Cricket</span>
              <span class="dropdown-desc">Lifelong sport and camaraderie for adult players</span>
            </a>
          </div>
        </div>

        <!-- Events Dropdown -->
        <div class="nav-item-dropdown">
          <a href="/events" class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">
            Events ▾
          </a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="/events" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Events Calendar</span>
              <span class="dropdown-desc">Upcoming, announced, and completed runs</span>
            </a>
            <a href="/flexathon" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">FLEXATHON Flagship Run</span>
              <span class="dropdown-desc">The Global Goals Run connecting sport & themes</span>
            </a>
            <a href="/flexathon/hyderabad-2026" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Hyderabad 2026 Archive</span>
              <span class="dropdown-desc">Completed 18 Oct 2026 at ESCI Campus</span>
            </a>
            <a href="/flexathon/kochi" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Kochi Edition (Announced)</span>
              <span class="dropdown-desc">Waterfront run teaser & interest registration</span>
            </a>
          </div>
        </div>

        <!-- Global Goals Dropdown -->
        <div class="nav-item-dropdown">
          <a href="/global-goals" class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">
            Global Goals ▾
          </a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="/global-goals" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">All 17 Global Goals</span>
              <span class="dropdown-desc">Educational index & sports connections</span>
            </a>
            <a href="/sdg-approach" class="dropdown-link" role="menuitem">
              <span class="dropdown-title">Our SDG Framework</span>
              <span class="dropdown-desc">4 levels of contribution & integrity</span>
            </a>
          </div>
        </div>

        <!-- Direct Links -->
        <a href="/gallery" class="nav-link">Gallery</a>
        <a href="/stories" class="nav-link">Stories</a>
        <a href="/get-involved" class="nav-link">Get Involved</a>
      </nav>

      <!-- Right CTAs -->
      <div class="d-flex align-center gap-2">
        <a href="/contact" class="btn btn-ghost btn-sm header-contact-link">Contact</a>
        <a href="/donate" class="btn btn-primary btn-sm header-donate-btn">Donate</a>
        <button class="mobile-toggle-btn" id="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="drawer-header">
        <span class="drawer-title font-weight-bold">Navigation</span>
        <button class="btn btn-ghost btn-sm" id="drawer-close" aria-label="Close menu">&times;</button>
      </div>
      <div class="drawer-body mt-3">
        <ul class="drawer-nav-list" style="list-style: none; display: flex; flex-direction: column; gap: 14px;">
          <li><a href="/" class="drawer-link font-weight-bold">Home</a></li>
          <li>
            <div class="text-xs text-muted font-weight-bold text-uppercase mt-2">About</div>
            <ul style="list-style: none; padding-left: 10px; display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
              <li><a href="/about" class="drawer-sublink text-sm">About the Foundation</a></li>
              <li><a href="/team" class="drawer-sublink text-sm">Team & Directors</a></li>
              <li><a href="/governance" class="drawer-sublink text-sm">Governance & Legal</a></li>
              <li><a href="/governance/annual-returns" class="drawer-sublink text-sm">Annual Returns Archive</a></li>
            </ul>
          </li>
          <li>
            <div class="text-xs text-muted font-weight-bold text-uppercase mt-2">Programs</div>
            <ul style="list-style: none; padding-left: 10px; display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
              <li><a href="/programs" class="drawer-sublink text-sm">All 12 Program Areas</a></li>
              <li><a href="/programs/empower-youth-football-camp" class="drawer-sublink text-sm">Empower Youth Football Camp</a></li>
              <li><a href="/veteran-sixes" class="drawer-sublink text-sm">Veteran Sixes Cricket</a></li>
            </ul>
          </li>
          <li>
            <div class="text-xs text-muted font-weight-bold text-uppercase mt-2">Events</div>
            <ul style="list-style: none; padding-left: 10px; display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
              <li><a href="/events" class="drawer-sublink text-sm">Events Index</a></li>
              <li><a href="/flexathon" class="drawer-sublink text-sm">FLEXATHON Flagship Run</a></li>
              <li><a href="/flexathon/hyderabad-2026" class="drawer-sublink text-sm">Hyderabad 2026 Archive</a></li>
              <li><a href="/flexathon/kochi" class="drawer-sublink text-sm">Kochi Edition (Announced)</a></li>
            </ul>
          </li>
          <li>
            <div class="text-xs text-muted font-weight-bold text-uppercase mt-2">Global Goals</div>
            <ul style="list-style: none; padding-left: 10px; display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
              <li><a href="/global-goals" class="drawer-sublink text-sm">All 17 Global Goals</a></li>
              <li><a href="/sdg-approach" class="drawer-sublink text-sm">Our SDG Framework</a></li>
            </ul>
          </li>
          <li><a href="/gallery" class="drawer-link font-weight-bold">Media Gallery</a></li>
          <li><a href="/stories" class="drawer-link font-weight-bold">Stories & Reports</a></li>
          <li><a href="/get-involved" class="drawer-link font-weight-bold">Get Involved</a></li>
          <li><a href="/faqs" class="drawer-link font-weight-bold">FAQs</a></li>
          <li><a href="/contact" class="drawer-link font-weight-bold">Contact</a></li>
        </ul>
        <div class="drawer-footer mt-4 pt-3 border-top">
          <a href="/donate" class="btn btn-primary btn-block">Support / Donate</a>
        </div>
      </div>
    </div>
    <div class="drawer-backdrop" id="drawer-backdrop"></div>
  `;

  setupHeaderInteractions(header);
  return header;
}

function setupHeaderInteractions(header) {
  const toggleBtn = header.querySelector("#mobile-menu-toggle");
  const closeBtn = header.querySelector("#drawer-close");
  const drawer = header.querySelector("#mobile-drawer");
  const backdrop = header.querySelector("#drawer-backdrop");

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  header.querySelectorAll(".drawer-link, .drawer-sublink").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}
