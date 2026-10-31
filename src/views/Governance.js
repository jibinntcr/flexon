/**
 * Flexon Sports Foundation - Governance & Legal Page
 * Authority: Blueprint v2.0 Section 17
 */

import { organization } from "../data/content.js";

export function renderGovernancePage() {
  const container = document.createElement("div");
  container.className = "page-governance";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="gov-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            STATUTORY TRANSPARENCY
          </span>
          <span class="hero-sdg-tag">⚖️ COMPANIES ACT, 2013</span>
          <span class="hero-sdg-tag">RULE 26 COMPLIANT</span>
        </div>

        <h1 class="page-title">
          CLEAR PURPOSE. ACCOUNTABLE GOVERNANCE.<br />
          <span class="text-gradient-red">LEGAL IDENTITY & DISCLOSURES</span>
        </h1>

        <p class="hero-lead">
          Find the foundation’s verified legal identity, Ministry of Corporate Affairs regulatory status, institutional policies, and public statutory archives.
        </p>

        <div class="page-hero-actions">
          <a href="#statutory-filings" class="btn btn-primary btn-lg">
            <span>View MCA Disclosures</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/governance/annual-returns" class="btn btn-outline btn-lg">
            <span>Annual Returns Archive</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">Section 8</span>
            <span class="page-metric-label">Not-For-Profit Incorporation</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">MCA India</span>
            <span class="page-metric-label">Regulatory Jurisdiction</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Sec 92(3)</span>
            <span class="page-metric-label">Annual Returns Public Access</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">100%</span>
            <span class="page-metric-label">Charitable Reapplication</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal Identity & Regulatory Status -->
    <section class="section section-legal-identity" id="statutory-filings">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-red);">
          <div class="card-eyebrow">LEGAL CONSTITUTION</div>
          <h2 class="card-title mt-1" style="font-size: 1.6rem;">Section 8 Not-For-Profit Incorporation</h2>
          <p class="card-text text-muted mt-2">
            Flexon Sports Foundation is constituted as a not-for-profit company under Section 8 of the Companies Act, 2013 (Ministry of Corporate Affairs, Government of India). Our objects are solely dedicated to the advancement of sports, physical education, health awareness, and community development, with all surpluses strictly reapplied to our charitable objects.
          </p>

          <div class="statutory-table-wrap mt-4">
            <table class="statutory-table">
              <tbody>
                <tr>
                  <th>Corporate Legal Name</th>
                  <td><strong>${organization.name}</strong></td>
                </tr>
                <tr>
                  <th>Statutory Classification</th>
                  <td>${organization.legalStatus}</td>
                </tr>
                <tr>
                  <th>Corporate Identity Number (CIN)</th>
                  <td><em>${organization.cin}</em> (Formal MCA certificate undergoing validation)</td>
                </tr>
                <tr>
                  <th>Registered & Contact Office</th>
                  <td>${organization.registeredAddress}</td>
                </tr>
                <tr>
                  <th>Official Email</th>
                  <td><a href="mailto:${organization.email}">${organization.email}</a></td>
                </tr>
                <tr>
                  <th>Contact Telephones</th>
                  <td>${organization.phones.join(" / ")}</td>
                </tr>
                <tr>
                  <th>Grievance Officer</th>
                  <td>${organization.grievanceContact.role} (<a href="mailto:${organization.grievanceContact.channel}">${organization.grievanceContact.channel}</a>)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance Pillars -->
    <section class="section section-gov-pillars bg-surface">
      <div class="container">
        <div class="section-header text-center max-w-reading mx-auto">
          <span class="section-eyebrow">GOVERNANCE CONTROLS</span>
          <h2 class="section-title">Institutional Safeguards</h2>
          <p class="section-desc">Key operational mechanisms guaranteeing child safety, fiscal compliance, and public access.</p>
        </div>

        <div class="paths-grid mt-4">
          <div class="path-card">
            <div class="path-icon">📄</div>
            <h3 class="path-title">Annual Returns</h3>
            <p class="path-desc">Pursuant to Section 92(3) of the Companies Act, accessible copies of annual returns are archived online.</p>
            <a href="/governance/annual-returns" class="path-link">View Annual Returns →</a>
          </div>

          <div class="path-card">
            <div class="path-icon">🛡</div>
            <h3 class="path-title">Participant Safeguarding</h3>
            <p class="path-desc">Adopted child safety standards, guardian consent workflows, and strict prevention of sensitive data exposure.</p>
            <a href="/safeguarding" class="path-link">Read Safeguarding Policy →</a>
          </div>

          <div class="path-card">
            <div class="path-icon">⚖️</div>
            <h3 class="path-title">Donation & Tax Oversight</h3>
            <p class="path-desc">Contributions comply with applicable 2026–27 income tax reporting and non-profit regulatory approvals.</p>
            <a href="/donation-policy" class="path-link">Donation Controls →</a>
          </div>

          <div class="path-card">
            <div class="path-icon">📢</div>
            <h3 class="path-title">Grievance Redressal</h3>
            <p class="path-desc">Direct institutional channel to the Foundation Secretariat for inquiries, corrections, or formal representations.</p>
            <a href="/contact#grievance" class="path-link">Grievance Desk →</a>
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
