/**
 * Flexon Sports Foundation - Support & Donation Journey Page
 * Authority: Blueprint v2.0 Section 13 (Credible support and real payment controls)
 * 
 * Strict Controls:
 * - Mode A: Genuine enquiry flow while payment gateway is in configuration
 * - Mode B Architecture: Comprehensive disclosure of payment integration & receipts
 * - Tax notice under the 2026–27 framework (no false promises of instant tax relief)
 * - Zero dummy QR codes, fake bank numbers, or unverified foreign donations
 */

import { FlexonDB } from "../server/db.js";
import { organization } from "../data/content.js";

export function renderDonatePage() {
  const container = document.createElement("div");
  container.className = "page-donate";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface">
      <div class="container text-center max-w-reading">
        <div class="page-hero-pills">
          <span class="hero-live-pill"><span class="live-dot"></span> STATUTORY PHILANTHROPY</span>
          <span class="hero-sdg-tag">SECTION 8 NOT-FOR-PROFIT</span>
          <span class="hero-sdg-tag">SDG 3 & 4 DIRECT IMPACT</span>
        </div>
        <h1 class="page-title">Direct Community Impact <span class="text-gradient-red">Through Sport</span></h1>
        <p class="hero-lead">
          Help Flexon Sports Foundation expand verified grassroots sporting initiatives and health clinics. All philanthropic resources are dedicated exclusively to public physical wellbeing, participant safety, and youth athletic coaching under strict Section 8 governance.
        </p>
        <div class="page-hero-actions">
          <a href="#donation-enquiry" class="btn btn-primary btn-lg">Discuss Programme Support</a>
          <a href="/governance" class="btn btn-outline btn-lg">Statutory Governance</a>
        </div>
      </div>
    </section>

    <!-- Page Metrics Ribbon -->
    <div class="page-metrics-ribbon">
      <div class="page-metric-item">
        <span class="metric-num">100%</span>
        <span class="metric-lbl">Direct Programmatic Application</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">Sec 8</span>
        <span class="metric-lbl">Companies Act 2013 Compliant</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">FY 26–27</span>
        <span class="metric-lbl">Audited Governance Ledger</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">Zero</span>
        <span class="metric-lbl">Intermediary Commission</span>
      </div>
    </div>

    <!-- Support Purpose & Impact Channels -->
    <section class="section section-support-channels">
      <div class="container">
        <div class="split-feature-grid">
          <div class="split-feature-media">
            <img 
              src="/assets/hero/support-impact-real.jpg" 
              alt="FLEXATHON Hyderabad 2026 podium winner receiving official award plaque and prize cheque from Flexon Sports Foundation dignitaries" 
              class="feature-img shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="split-feature-content">
            <span class="section-eyebrow">HOW FUNDS ARE APPLIED</span>
            <h2 class="section-title">Transparent Sporting Impact</h2>
            <p class="section-body">
              As a Section 8 not-for-profit company registered under the Ministry of Corporate Affairs, all resources received by Flexon Sports Foundation are dedicated exclusively to advancing community athletic opportunities and health awareness:
            </p>
            <ul class="camp-feature-list mt-3">
              <li><strong>Youth Sports Coaching:</strong> Football gear, training cones, match balls, and weekend pitch support for children aged 10–15.</li>
              <li><strong>Community Running Logistics:</strong> Safe hydration stations, medical response first aid, certified course marshals, and bib timing.</li>
              <li><strong>Inclusive Access:</strong> Fee-waiver arrangements with institutional partners so lack of funds never excludes an aspiring participant.</li>
              <li><strong>Equipment & Facilities:</strong> Sponsoring cricket equipment, goal nets, and sports day equipment for local community schools.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Impact Pillars -->
    <section class="section bg-surface py-5">
      <div class="container">
        <div class="text-center max-w-reading mx-auto mb-5">
          <span class="section-eyebrow">ALLOCATION INTEGRITY</span>
          <h2 class="section-title">Four Principles of Foundation Stewardship</h2>
          <p class="section-body text-muted">Every rupee received follows statutory ledger records, board oversight, and transparent annual filings.</p>
        </div>

        <div class="feature-pillars-grid">
          <div class="feature-pillar-card">
            <div class="pillar-icon">🎯</div>
            <h3 class="pillar-title">Direct Program Earmarking</h3>
            <p class="pillar-desc">Contributors can explicitly select the specific sporting vertical (Youth Football, FLEXATHON, or School Kits) their support advances.</p>
          </div>
          <div class="feature-pillar-card">
            <div class="pillar-icon">📋</div>
            <h3 class="pillar-title">Audited Section 8 Accounts</h3>
            <p class="pillar-desc">Financial statements are reviewed by chartered accountants and publicly disclosed in compliance with Rule 26 of Companies Rules 2014.</p>
          </div>
          <div class="feature-pillar-card">
            <div class="pillar-icon">🔒</div>
            <h3 class="pillar-title">Verified Bank Transmission</h3>
            <p class="pillar-desc">No informal UPI IDs or personal accounts. Contributions route exclusively via official foundation bank accounts under corporate verification.</p>
          </div>
          <div class="feature-pillar-card">
            <div class="pillar-icon">📜</div>
            <h3 class="pillar-title">Official Acknowledgements</h3>
            <p class="pillar-desc">Every donation is issued an official numbered foundation receipt and recorded in the permanent MCA compliance ledger.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mode A: Donation Enquiry Flow -->
    <section class="section section-donation-mode-a" id="donation-enquiry">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-primary, #dc2626);">
          <div class="text-center mb-4">
            <span class="badge badge-primary">Mode A: Programmatic Support Consultation</span>
            <h2 class="card-title mt-2">Discuss Supporting an Initiative</h2>
            <p class="text-sm text-muted mt-1">
              Direct online credit card/UPI checkout is currently undergoing regulatory gateway integration. To support a specific initiative or explore institutional contributions, please connect with our foundation finance desk.
            </p>
          </div>

          <form id="donation-enquiry-form" class="enquiry-form">
            <div class="form-row">
              <div class="form-group col-half">
                <label for="don-name" class="form-label">Full Name *</label>
                <input type="text" id="don-name" class="form-control" placeholder="Your name" required />
              </div>
              <div class="form-group col-half">
                <label for="don-city" class="form-label">City *</label>
                <input type="text" id="don-city" class="form-control" placeholder="e.g. Kochi, Hyderabad" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="don-email" class="form-label">Email Address *</label>
                <input type="email" id="don-email" class="form-control" placeholder="name@example.com" required />
              </div>
              <div class="form-group col-half">
                <label for="don-phone" class="form-label">Mobile Number *</label>
                <input type="tel" id="don-phone" class="form-control" placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div class="form-group">
              <label for="don-program" class="form-label">Programme Area You Wish to Support *</label>
              <select id="don-program" class="form-control" required>
                <option value="Empower Youth Football Camp">Empower Youth Football Coaching (Ages 10–15)</option>
                <option value="FLEXATHON Community Running">FLEXATHON Community Running & Hydration</option>
                <option value="Veteran Sixes Cricket">Veteran Sixes Master Athletic Series</option>
                <option value="Grassroots Sports Equipment">Grassroots Sports Equipment & Kits</option>
                <option value="General Foundation Objectives">General Foundation Objectives</option>
              </select>
            </div>

            <div class="form-group">
              <label for="don-message" class="form-label">Support Details / Comments</label>
              <textarea id="don-message" class="form-control" rows="3" placeholder="Specify if you represent an individual, family trust, or company CSR desk..."></textarea>
            </div>

            <div class="form-notice text-xs text-muted mb-3 p-3 bg-surface" style="border-radius: 6px; border-left: 3px solid var(--color-primary, #dc2626);">
              <strong>Zero Informal Payments:</strong> We do not publish informal personal bank accounts or unverified QR codes online. Official bank transfer particulars (NEFT/RTGS) are shared solely following direct finance verification and KYC compliance.
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-don-btn">
              Submit Donation Enquiry →
            </button>
          </form>

          <!-- Success Box -->
          <div id="don-success-box" class="alert alert-success mt-4" style="display: none;">
            <h4 class="alert-heading">✓ Donation Enquiry Recorded</h4>
            <p class="alert-body">
              Thank you for your generous intent! Your enquiry has been registered in the foundation ledger under reference: <strong id="don-ref-display" class="font-mono"></strong>. Our finance secretariat will reach out with authorized contribution coordinates.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statutory Regulatory & Tax Framework Notice -->
    <section class="section section-tax-notice bg-surface">
      <div class="container max-w-reading">
        <div class="info-callout p-4 card shadow-sm">
          <div class="d-flex align-center gap-2 mb-2">
            <span style="font-size: 1.5rem;">⚖️</span>
            <h4 class="callout-title mb-0">Regulatory & Tax Reporting Notice (FY 2026–27)</h4>
          </div>
          <p class="callout-text text-sm text-muted mt-2">
            Flexon Sports Foundation operates strictly within the non-profit regulatory framework of the Companies Act, 2013. Under prevailing income tax reporting standards, any applicable tax deduction depends on formal statutory approvals and prevailing certificates. We maintain complete factual honesty and do not make automated promises of income tax deductions on web forms.
          </p>
          <p class="callout-text text-sm text-muted mt-2">
            <strong>Foreign Contributions Notice:</strong> Contributions from foreign citizens or non-resident entities are disabled pending official Foreign Contribution Regulation Act (FCRA) approvals.
          </p>
        </div>

        <div class="text-center mt-4">
          <a href="/donation-policy" class="btn btn-outline btn-sm">Read Full Donation Policy</a>
          <a href="/governance" class="btn btn-ghost btn-sm ml-2">Governance Disclosures</a>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector("#donation-enquiry-form");
  const successBox = container.querySelector("#don-success-box");
  const refDisplay = container.querySelector("#don-ref-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = container.querySelector("#don-name").value.trim();
    const city = container.querySelector("#don-city").value.trim();
    const email = container.querySelector("#don-email").value.trim();
    const phone = container.querySelector("#don-phone").value.trim();
    const proposedSupport = container.querySelector("#don-program").value;
    const message = container.querySelector("#don-message").value.trim();

    const res = FlexonDB.recordDonationEnquiry({
      name,
      email,
      phone,
      city,
      proposedSupport,
      message
    });

    if (res.success) {
      refDisplay.textContent = res.reference;
      form.style.display = "none";
      successBox.style.display = "block";
    }
  });

  return container;
}
