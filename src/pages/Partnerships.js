/**
 * Flexon Sports Foundation - Partnerships & Collaboration Brief Page
 * Authority: Blueprint v2.0 Section 12
 */

import { FlexonDB } from "../server/db.js";

export function renderPartnershipsPage() {
  const container = document.createElement("div");
  container.className = "page-partnerships";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="partnerships-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            INSTITUTIONAL COLLABORATION
          </span>
          <span class="hero-sdg-tag">🤝 CSR & CORPORATE SQUADS</span>
          <span class="hero-sdg-tag">CAMPUS ALLIANCES</span>
        </div>

        <h1 class="page-title">
          BUILD SOMETHING MEANINGFUL.<br />
          <span class="text-gradient-red">PARTNERSHIPS THROUGH SPORT</span>
        </h1>

        <p class="hero-lead">
          Tell us about your community, organization, and objectives. We welcome conversations regarding corporate running squads, event hydration/prize sponsorships, campus sports meets, in-kind ground support, and co-created sports development initiatives.
        </p>

        <div class="page-hero-actions">
          <a href="#collab-form-section" class="btn btn-primary btn-lg">
            <span>Submit Collaboration Brief</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="#partnership-models" class="btn btn-outline btn-lg">
            <span>3 Engagement Models</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">Participate</span>
            <span class="page-metric-label">Squads & Delegations</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Support</span>
            <span class="page-metric-label">Venues, In-Kind, CSR</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Co-Create</span>
            <span class="page-metric-label">Grassroots Sports Clinics</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Verified</span>
            <span class="page-metric-label">Stored Reference Receipt</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Collaboration Models -->
    <section class="section section-models" id="partnership-models">
      <div class="container">
        <div class="section-header text-center max-w-reading mx-auto mb-4">
          <span class="section-eyebrow">ENGAGEMENT MODELS</span>
          <h2 class="section-title">Three Ways to Partner</h2>
          <p class="section-body">Flexible collaboration frameworks tailored for institutions, corporations, and community bodies.</p>
        </div>

        <div class="initiatives-bar-grid mt-4">
          <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-red);">
            <span class="badge badge-primary font-weight-bold">Model 1</span>
            <h3 class="card-title mt-2 font-weight-bold" style="font-size: 1.3rem;">Participate</h3>
            <p class="text-sm text-muted mt-2" style="line-height: 1.6;">
              Enter collegiate athletic squads, corporate running contingents, or community teams into our organized events.
            </p>
          </div>

          <div class="card p-4 shadow-sm" style="border-top: 4px solid #16A34A;">
            <span class="badge badge-green font-weight-bold">Model 2</span>
            <h3 class="card-title mt-2 font-weight-bold" style="font-size: 1.3rem;">Support & Sponsor</h3>
            <p class="text-sm text-muted mt-2" style="line-height: 1.6;">
              Provide approved event venues, sports equipment, hydration, nutrition, or thematic sponsorship for designated editions.
            </p>
          </div>

          <div class="card p-4 shadow-sm" style="border-top: 4px solid #2563EB;">
            <span class="badge badge-subtle font-weight-bold">Model 3</span>
            <h3 class="card-title mt-2 font-weight-bold" style="font-size: 1.3rem;">Co-Create Programs</h3>
            <p class="text-sm text-muted mt-2" style="line-height: 1.6;">
              Collaborate on custom grassroots sports coaching, inter-school tournaments, or community health campaigns aligned with Global Goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration Brief Form -->
    <section class="section section-brief-form bg-surface" id="collab-form-section">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-lg border" style="border-top: 4px solid var(--color-red);">
          <div class="text-center mb-4">
            <span class="section-eyebrow">SUBMIT A BRIEF</span>
            <h2 class="card-title" style="font-size: 1.75rem;">Institutional Collaboration Brief</h2>
            <p class="text-sm text-muted mt-1">
              Provide initial details about your organisation and partnership vision. Our team will review and reply with a stored reference.
            </p>
          </div>

          <form id="collab-brief-form" class="enquiry-form">
            <div class="form-row">
              <div class="form-group col-half">
                <label for="collab-name" class="form-label">Contact Person Name *</label>
                <input type="text" id="collab-name" class="form-control" placeholder="Full name" required />
              </div>
              <div class="form-group col-half">
                <label for="collab-org" class="form-label">Organisation / Institution Name *</label>
                <input type="text" id="collab-org" class="form-control" placeholder="School, Company, or Club" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="collab-email" class="form-label">Work / Official Email *</label>
                <input type="email" id="collab-email" class="form-control" placeholder="name@organisation.com" required />
              </div>
              <div class="form-group col-half">
                <label for="collab-phone" class="form-label">Phone Number *</label>
                <input type="tel" id="collab-phone" class="form-control" placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="collab-city" class="form-label">City / Headquarters *</label>
                <input type="text" id="collab-city" class="form-control" placeholder="e.g. Kochi, Hyderabad, Bangalore" required />
              </div>
              <div class="form-group col-half">
                <label for="collab-type" class="form-label">Collaboration Model *</label>
                <select id="collab-type" class="form-control" required>
                  <option value="Event Sponsorship">Event Sponsorship</option>
                  <option value="School / College Sports Meet">School / College Sports Meet</option>
                  <option value="Corporate Team Entry">Corporate Team Entry</option>
                  <option value="In-Kind Support (Venue/Gear)">In-Kind Support (Venue/Gear)</option>
                  <option value="Co-Designed Community Programme">Co-Designed Community Programme</option>
                  <option value="CSR Inquiry">CSR Dialogue</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="collab-program" class="form-label">Programme Interest</label>
                <select id="collab-program" class="form-control">
                  <option value="FLEXATHON">FLEXATHON</option>
                  <option value="Empower Youth Football">Empower Youth Football</option>
                  <option value="Veteran Sixes Cricket">Veteran Sixes Cricket</option>
                  <option value="School Sports Meets">School & College Sports Meets</option>
                  <option value="Special Campaigns">Special Sports Campaigns</option>
                </select>
              </div>
              <div class="form-group col-half">
                <label for="collab-size" class="form-label">Approximate Group / Student Size</label>
                <input type="text" id="collab-size" class="form-control" placeholder="e.g. 50–100 participants" />
              </div>
            </div>

            <div class="form-group">
              <label for="collab-summary" class="form-label">Summary of Proposed Collaboration *</label>
              <textarea id="collab-summary" class="form-control" rows="4" placeholder="Describe your objectives, proposed timeline, and how we can work together..." required></textarea>
            </div>

            <div class="form-notice text-xs text-muted mb-3">
              Submissions are stored securely in our foundation ledger. We do not share partner contact details with external third parties.
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-collab-btn">
              Submit Collaboration Brief
            </button>
          </form>

          <!-- Success Box -->
          <div id="collab-success-box" class="alert alert-success mt-4" style="display: none;">
            <h4 class="alert-heading">Collaboration Brief Received</h4>
            <p class="alert-body">
              Thank you. Your proposal has been recorded in the foundation database under reference: <strong id="collab-ref-display"></strong>. Our partnership team will review your scope and get in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector("#collab-brief-form");
  const successBox = container.querySelector("#collab-success-box");
  const refDisplay = container.querySelector("#collab-ref-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = container.querySelector("#collab-name").value.trim();
    const organization = container.querySelector("#collab-org").value.trim();
    const workEmail = container.querySelector("#collab-email").value.trim();
    const phone = container.querySelector("#collab-phone").value.trim();
    const city = container.querySelector("#collab-city").value.trim();
    const collaborationType = container.querySelector("#collab-type").value;
    const programmeInterest = container.querySelector("#collab-program").value;
    const groupSize = container.querySelector("#collab-size").value.trim();
    const summary = container.querySelector("#collab-summary").value.trim();

    const res = FlexonDB.submitCollaborationBrief({
      name,
      organization,
      workEmail,
      phone,
      city,
      collaborationType,
      programmeInterest,
      groupSize,
      summary
    });

    if (res.success) {
      refDisplay.textContent = res.reference;
      form.style.display = "none";
      successBox.style.display = "block";
    }
  });

  return container;
}
