/**
 * Flexon Sports Foundation - Contact Page & Universal Enquiry Router
 * Authority: Blueprint v2.0 Section 12
 */

import { organization } from "../data/content.js";
import { FlexonDB } from "../server/db.js";

export function renderContactPage() {
  const container = document.createElement("div");
  container.className = "page-contact";

  // Check URL query parameters for prefill
  const params = new URLSearchParams(window.location.search);
  const prefillInterest = params.get("interest") || params.get("type") || "general";
  const prefillSubject = params.get("subject") || "";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface">
      <div class="container text-center max-w-reading">
        <div class="page-hero-pills">
          <span class="hero-live-pill"><span class="live-dot"></span> DIRECT FOUNDATION DESK</span>
          <span class="hero-sdg-tag">COMMUNICATION SECRETARIAT</span>
          <span class="hero-sdg-tag">TRACKABLE INQUIRIES</span>
        </div>
        <h1 class="page-title">Connect With <span class="text-gradient-red">Flexon Foundation</span></h1>
        <p class="hero-lead">
          Reach our administrative secretariat, event coordinators, or statutory grievance officer. Every message is permanently registered in the foundation operational ledger and assigned a trackable verification reference.
        </p>
        <div class="page-hero-actions">
          <a href="#contact-form-section" class="btn btn-primary btn-lg">Send Direct Message</a>
          <a href="/faqs" class="btn btn-outline btn-lg">Knowledge Base FAQs</a>
        </div>
      </div>
    </section>

    <!-- Page Metrics Ribbon -->
    <div class="page-metrics-ribbon">
      <div class="page-metric-item">
        <span class="metric-num">Ernakulam</span>
        <span class="metric-lbl">Contact Office (Kerala)</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">100%</span>
        <span class="metric-lbl">Ledger Reference Log</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">48 Hours</span>
        <span class="metric-lbl">Target Secretariat SLA</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">Rule 26</span>
        <span class="metric-lbl">Statutory Grievance Desk</span>
      </div>
    </div>

    <!-- Contact Grid -->
    <section class="section section-contact-channels" id="contact-form-section">
      <div class="container">
        <div class="contact-split-grid">
          <!-- Left: Contact Details Card -->
          <div class="contact-info-panel">
            <span class="section-eyebrow">VERIFIED CHANNELS</span>
            <h2 class="section-title">Direct Operational Desks</h2>
            <p class="text-sm text-muted mt-2">
              Reach out to our secretariat across our verified corporate communication channels.
            </p>

            <div class="contact-channels-list mt-4">
              <div class="channel-card card p-3 shadow-sm mb-3">
                <div class="d-flex align-center gap-3">
                  <div class="channel-icon" style="font-size: 1.5rem;">📍</div>
                  <div>
                    <h4 class="channel-name font-weight-bold">Contact Office</h4>
                    <p class="channel-val text-sm text-muted mb-0">${organization.contactAddress}</p>
                  </div>
                </div>
              </div>

              <div class="channel-card card p-3 shadow-sm mb-3">
                <div class="d-flex align-center gap-3">
                  <div class="channel-icon" style="font-size: 1.5rem;">✉️</div>
                  <div>
                    <h4 class="channel-name font-weight-bold">Foundation Email</h4>
                    <p class="channel-val text-sm mb-0"><a href="mailto:${organization.email}" class="text-primary font-weight-medium">${organization.email}</a></p>
                    <p class="text-xs text-muted mb-0">Governance, institutional inquiries & donor desk</p>
                  </div>
                </div>
              </div>

              <div class="channel-card card p-3 shadow-sm mb-3">
                <div class="d-flex align-center gap-3">
                  <div class="channel-icon" style="font-size: 1.5rem;">📞</div>
                  <div>
                    <h4 class="channel-name font-weight-bold">Foundation Telephones</h4>
                    <p class="channel-val text-sm font-mono mb-0">${organization.phones.join(" • ")}</p>
                  </div>
                </div>
              </div>

              <div class="channel-card card p-3 shadow-sm mb-3">
                <div class="d-flex align-center gap-3">
                  <div class="channel-icon" style="font-size: 1.5rem;">🏃</div>
                  <div>
                    <h4 class="channel-name font-weight-bold">FLEXATHON Event Support</h4>
                    <p class="channel-val text-sm mb-0"><a href="mailto:${organization.eventEmail}" class="text-primary font-weight-medium">${organization.eventEmail}</a></p>
                    <p class="text-xs text-muted mb-0">Race portal: <a href="${organization.eventWebsite}" target="_blank">${organization.eventWebsite}</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grievance-notice-box mt-4 p-4 bg-surface card" style="border-left: 3px solid var(--color-primary, #dc2626);">
              <h4 class="text-sm font-weight-bold mb-1">⚖️ Queries & Grievances Desk</h4>
              <p class="text-xs text-muted mb-0">
                <strong>Designated Officer:</strong> ${organization.grievanceContact.role}<br>
                <strong>Statutory Email:</strong> <a href="mailto:${organization.grievanceContact.channel}">${organization.grievanceContact.channel}</a><br>
                For data protection, parental image removal requests, or Section 8 compliance disclosures.
              </p>
            </div>
          </div>

          <!-- Right: Universal Contact Form -->
          <div class="contact-form-panel">
            <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-primary, #dc2626);">
              <div class="mb-3">
                <span class="badge badge-primary">Tracked Dispatch</span>
                <h2 class="card-title mt-2">Send an Official Enquiry</h2>
                <p class="text-sm text-muted mt-1">
                  Every enquiry is committed to our foundation ledger and assigned a trackable alphanumeric reference.
                </p>
              </div>

              <form id="universal-contact-form" class="enquiry-form mt-3">
                <div class="form-group">
                  <label for="c-name" class="form-label">Full Name *</label>
                  <input type="text" id="c-name" class="form-control" placeholder="Your full name" required />
                </div>

                <div class="form-row">
                  <div class="form-group col-half">
                    <label for="c-email" class="form-label">Email Address *</label>
                    <input type="email" id="c-email" class="form-control" placeholder="name@example.com" required />
                  </div>
                  <div class="form-group col-half">
                    <label for="c-phone" class="form-label">Phone Number *</label>
                    <input type="tel" id="c-phone" class="form-control" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-half">
                    <label for="c-city" class="form-label">City *</label>
                    <input type="text" id="c-city" class="form-control" placeholder="e.g. Kochi, Hyderabad" required />
                  </div>
                  <div class="form-group col-half">
                    <label for="c-interest" class="form-label">Enquiry Topic *</label>
                    <select id="c-interest" class="form-control" required>
                      <option value="general">General Foundation Enquiry</option>
                      <option value="flexathon">FLEXATHON Running Fixture</option>
                      <option value="football-camp">Empower Youth Football Camp</option>
                      <option value="veteran-sixes">Veteran Sixes Cricket</option>
                      <option value="school-meet">School / College Sports Meet</option>
                      <option value="partnership">Institutional Collaboration</option>
                      <option value="volunteer">Volunteering Interest</option>
                      <option value="donation">Donation / Philanthropy</option>
                      <option value="grievance">Grievance or Media Safeguard</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="c-message" class="form-label">Your Message *</label>
                  <textarea id="c-message" class="form-control" rows="4" placeholder="How can our secretariat assist your sporting initiative or inquiry?" required>${prefillSubject ? prefillSubject + "\n" : ""}</textarea>
                </div>

                <div class="form-notice text-xs text-muted mb-3 p-2 bg-surface" style="border-radius: 4px;">
                  Submissions are governed by our <a href="/privacy-policy" target="_blank">Privacy Notice</a>. Submitting an enquiry does not constitute confirmed event registration.
                </div>

                <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-contact-btn">
                  Submit Official Enquiry →
                </button>
              </form>

              <!-- Success Alert -->
              <div id="contact-success-box" class="alert alert-success mt-4" style="display: none;">
                <h4 class="alert-heading">✓ Enquiry Received & Logged</h4>
                <p class="alert-body">
                  Thank you! Your enquiry has been safely recorded in the foundation database under reference: <strong id="contact-ref-display" class="font-mono"></strong>. A member of our secretariat will review your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Pre-select interest if matched
  const interestSelect = container.querySelector("#c-interest");
  if (interestSelect && prefillInterest) {
    const opts = Array.from(interestSelect.options).map(o => o.value);
    if (opts.includes(prefillInterest)) {
      interestSelect.value = prefillInterest;
    }
  }

  // Handle submit
  const form = container.querySelector("#universal-contact-form");
  const successBox = container.querySelector("#contact-success-box");
  const refDisplay = container.querySelector("#contact-ref-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = container.querySelector("#c-name").value.trim();
    const email = container.querySelector("#c-email").value.trim();
    const phone = container.querySelector("#c-phone").value.trim();
    const city = container.querySelector("#c-city").value.trim();
    const interest = container.querySelector("#c-interest").value;
    const message = container.querySelector("#c-message").value.trim();

    const res = FlexonDB.createEnquiry({
      source: "contact_form",
      type: interest,
      name,
      email,
      phone,
      city,
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
