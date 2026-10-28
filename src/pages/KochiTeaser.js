/**
 * Flexon Sports Foundation - FLEXATHON Kochi Edition Teaser Page
 * Authority: Blueprint v2.0 Section 9
 * 
 * Strict Editorial Controls:
 * - Edition announced, details to follow
 * - Zero invented dates, fees, or routes
 * - Pre-registration of interest with reference generation
 */

import { FlexonDB } from "../server/db.js";

export function renderKochiTeaserPage() {
  const container = document.createElement("div");
  container.className = "page-kochi-teaser";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="kochi-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            EDITION 02 • ANNOUNCED
          </span>
          <span class="hero-sdg-tag">🌴 KOCHI WATERFRONT</span>
          <span class="hero-sdg-tag">PRIORITY INTEREST REGISTRY</span>
        </div>

        <h1 class="page-title">
          KOCHI, GET READY.<br />
          <span class="text-gradient-red">THE GLOBAL GOALS RUN</span>
        </h1>

        <p class="hero-lead">
          FLEXATHON is heading to the historic waterfront city of Kochi, Kerala. Register your interest today to receive verified circulars the moment official race dates, scenic coastal courses, and registration categories are announced.
        </p>

        <div class="page-hero-actions">
          <a href="#kochi-form-section" class="btn btn-primary btn-lg">
            <span>Register Interest Early</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="/flexathon/hyderabad-2026" class="btn btn-outline btn-lg">
            <span>View Hyderabad Edition 01</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">Edition 02</span>
            <span class="page-metric-label">Host City: Kochi, Kerala</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Waterfront</span>
            <span class="page-metric-label">Scenic Coastal Course</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Priority</span>
            <span class="page-metric-label">Early Entry Notifications</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">SDG Focus</span>
            <span class="page-metric-label">Thematic Announcement Pending</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Banner & Details -->
    <section class="section section-kochi-media">
      <div class="container">
        <div class="split-feature-grid">
          <div class="split-feature-media">
            <img 
              src="/assets/animated/flexathon-kochi-animated.jpg" 
              alt="FLEXATHON Kochi waterfront marathon teaser with Chinese fishing nets" 
              class="feature-img shadow-sm"
            />
          </div>
          <div class="split-feature-content">
            <span class="section-eyebrow">UPCOMING RUN</span>
            <h2 class="section-title">The Global Goals Run comes to the Queen of the Arabian Sea.</h2>
            <p class="section-body">
              Following the success of our inaugural run in Hyderabad, Flexon Sports Foundation is preparing to bring the energy of community running to Kerala.
            </p>
            <p class="section-body mt-2">
              We are working closely with regional athletic coordinators and civic partners to finalize an accessible, scenic waterfront course. Once venue clearances, categories, and safety arrangements are officially in place, registered participants will be the first to receive invitation circulars.
            </p>
            
            <div class="card p-3 bg-surface mt-3" style="border-left: 4px solid var(--color-red);">
              <h4 class="card-title text-sm font-weight-bold">Honest Event Status:</h4>
              <p class="text-xs text-muted mt-1">
                Official race date, registration fee structure, distance categories, and development theme will be released on this portal and the official event site. No advance fees are collected at this stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Register Interest Form -->
    <section class="section section-kochi-form bg-surface" id="kochi-form-section">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-lg border" style="border-top: 4px solid var(--color-red);">
          <div class="text-center mb-4">
            <span class="section-eyebrow">PRE-REGISTRATION</span>
            <h2 class="card-title" style="font-size: 1.75rem;">Register Your Interest</h2>
            <p class="text-sm text-muted mt-1">
              Be notified when dates and official registrations open for FLEXATHON Kochi.
            </p>
          </div>

          <form id="kochi-interest-form" class="enquiry-form">
            <div class="form-group">
              <label for="kochi-name" class="form-label">Full Name *</label>
              <input type="text" id="kochi-name" class="form-control" placeholder="Your name" required />
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="kochi-email" class="form-label">Email Address *</label>
                <input type="email" id="kochi-email" class="form-control" placeholder="name@example.com" required />
              </div>
              <div class="form-group col-half">
                <label for="kochi-phone" class="form-label">Mobile Number (Optional)</label>
                <input type="tel" id="kochi-phone" class="form-control" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div class="form-group">
              <label for="kochi-interest-type" class="form-label">Participation Type</label>
              <select id="kochi-interest-type" class="form-control">
                <option value="Individual Runner">Individual Runner</option>
                <option value="Running Club / Group">Running Club / Group</option>
                <option value="Corporate / Institution Squad">Corporate / Institution Squad</option>
                <option value="Volunteer Interest">Volunteer Interest</option>
                <option value="Potential Sponsor">Potential Sponsor / Partner</option>
              </select>
            </div>

            <div class="form-checkbox-group mb-3">
              <label class="checkbox-label">
                <input type="checkbox" id="kochi-updates-consent" checked />
                <span>Send me email updates when official dates and venues are confirmed for Kochi.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-kochi-btn">
              Register Interest for Kochi
            </button>
          </form>

          <!-- Success Alert -->
          <div id="kochi-success-box" class="alert alert-success mt-4" style="display: none;">
            <h4 class="alert-heading">Interest Registered</h4>
            <p class="alert-body">
              Thank you! Your interest has been recorded in our event register under reference: <strong id="kochi-ref-display"></strong>. We will notify you directly when race dates are officially published.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector("#kochi-interest-form");
  const successBox = container.querySelector("#kochi-success-box");
  const refDisplay = container.querySelector("#kochi-ref-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = container.querySelector("#kochi-name").value.trim();
    const email = container.querySelector("#kochi-email").value.trim();
    const phone = container.querySelector("#kochi-phone").value.trim();
    const interestType = container.querySelector("#kochi-interest-type").value;

    const res = FlexonDB.createEnquiry({
      source: "web_form",
      type: "kochi_interest",
      initiative: "FLEXATHON Kochi Edition",
      name,
      email,
      phone: phone || null,
      city: "Kochi",
      message: `Pre-registration interest for FLEXATHON Kochi (${interestType}).`
    });

    if (res.success) {
      refDisplay.textContent = res.reference;
      form.style.display = "none";
      successBox.style.display = "block";
    }
  });

  return container;
}
