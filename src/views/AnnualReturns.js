/**
 * Flexon Sports Foundation - Annual Returns Archive
 * Authority: Companies Act Section 92(3), Blueprint v2.0 Section 17
 */

import { organization } from "../data/content.js";

export function renderAnnualReturnsPage() {
  const container = document.createElement("div");
  container.className = "page-annual-returns";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="returns-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            STATUTORY REPOSITORY
          </span>
          <span class="hero-sdg-tag">📑 SECTION 92(3) COMPLIANCE</span>
          <span class="hero-sdg-tag">MCA DISCLOSURES</span>
        </div>

        <h1 class="page-title">
          STATUTORY ARCHIVE.<br />
          <span class="text-gradient-red">ANNUAL RETURNS & AUDITS</span>
        </h1>

        <p class="hero-lead">
          In compliance with Section 92(3) of the Companies Act, 2013, Flexon Sports Foundation maintains public, year-wise access to its statutory annual return filings, financial statements, and regulatory disclosures.
        </p>

        <div class="page-hero-actions">
          <a href="#returns-list" class="btn btn-primary btn-lg">
            <span>Browse Annual Filings</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/governance" class="btn btn-outline btn-lg">
            <span>Back to Governance</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">Sec 92(3)</span>
            <span class="page-metric-label">Statutory Transparency Clause</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">FY 2026–27</span>
            <span class="page-metric-label">Active Financial Period</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Form MGT-7</span>
            <span class="page-metric-label">Prescribed Annual Return</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">MCA Portal</span>
            <span class="page-metric-label">Ministry of Corporate Affairs</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Archive Records List -->
    <section class="section section-returns-list" id="returns-list">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-red);">
          <div class="returns-header">
            <span class="badge badge-primary">Current Financial Year</span>
            <h3 class="returns-fy-title mt-1" style="font-size: 1.5rem;">Financial Year 2026–2027</h3>
          </div>
          <p class="text-muted mt-2">
            <strong>Status:</strong> Active Financial Year. The annual return (Form MGT-7/7A) for FY 2026–27 will be finalized and uploaded following the conclusion of the Annual General Meeting (AGM) as prescribed under Ministry of Corporate Affairs regulations.
          </p>
          <div class="returns-metadata mt-3 pt-3 border-top">
            <span class="text-sm">Corporate Legal Entity: <strong>${organization.name}</strong></span><br>
            <span class="text-sm text-muted">Statutory Regulatory Body: Ministry of Corporate Affairs (MCA), Government of India</span>
          </div>
        </div>

        <div class="card p-4 shadow-sm mt-4 bg-surface border" style="border-left: 4px solid var(--color-ink);">
          <h4 class="card-title font-weight-bold" style="font-size: 1.3rem;">Public Inspection & Information Requests</h4>
          <p class="card-text text-muted mt-2">
            Copies of official returns, audited financial statements, and statutory registers are maintained at the registered office of the foundation for inspection in accordance with the provisions of the Companies Act, 2013.
          </p>
          <div class="mt-4">
            <a href="mailto:${organization.email}?subject=Statutory%20Information%20Request" class="btn btn-outline btn-sm">Request Statutory Information</a>
            <a href="/governance" class="btn btn-ghost btn-sm ml-2">Back to Governance Overview</a>
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
