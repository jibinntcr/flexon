/**
 * Flexon Sports Foundation - Veteran Sixes Cricket Initiative Page
 * Authority: Blueprint v2.0 Section 9
 * 
 * Strict Editorial Controls:
 * - Evergreen cricket initiative celebrating experienced players
 * - No invented tournament dates, age limits (avoiding 35+ vs 45+ dispute), or prize assertions
 * - Team and individual enquiry flow
 */

import { FlexonDB } from "../server/db.js";

export function renderVeteranSixesPage() {
  const container = document.createElement("div");
  container.className = "page-veteran-sixes";

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="page-hero bg-surface" id="veteran-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            EVERGREEN INITIATIVE
          </span>
          <span class="hero-sdg-tag">🏏 CRICKET FOR LIFE</span>
          <span class="hero-sdg-tag">SDG 3: GOOD HEALTH & WELL-BEING</span>
        </div>

        <h1 class="page-title">
          THE GAME GOES ON.<br />
          <span class="text-gradient-red">VETERAN SIXES CRICKET</span>
        </h1>

        <p class="hero-lead">
          Veteran Sixes celebrates experienced players, the friendships built through cricket and the enjoyment of staying involved in sport. It offers a structured platform for team spirit, fair play and continued sporting participation across communities.
        </p>

        <div class="page-hero-actions">
          <a href="#veteran-enquiry-section" class="btn btn-primary btn-lg">
            <span>Register Team Interest</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#tournament-format" class="btn btn-outline btn-lg">
            <span>Tournament Format & Rules</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">6-a-Side</span>
            <span class="page-metric-label">Fast-Paced Format</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Seasoned</span>
            <span class="page-metric-label">Experienced Cricketers</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Certified</span>
            <span class="page-metric-label">Impartial Umpiring</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">SDG 3</span>
            <span class="page-metric-label">Active Health & Well-being</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Initiative Philosophy & Visual -->
    <section class="section section-cricket-philosophy">
      <div class="container">
        <div class="split-feature-grid">
          <div class="split-feature-media">
            <img 
              src="/assets/hero/veteran-cricket.jpg" 
              alt="Veteran Sixes cricket teammates celebrating sportsmanship on the field" 
              class="feature-img shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="split-feature-content">
            <span class="section-eyebrow">SPORT FOR LIFE</span>
            <h2 class="section-title">Celebrating Experience & Camaraderie</h2>
            <p class="section-body">
              Cricket is woven into the social fabric of our communities. For many who played actively in school, college, or club leagues, finding organized, supportive, and age-appropriate competitive formats can be challenging.
            </p>
            <p class="section-body mt-2">
              Veteran Sixes provides a structured tournament format tailored for seasoned cricketers. The emphasis is on sportsmanship, mutual respect, healthy physical exercise, and renewing lifelong sporting bonds.
            </p>
            <div class="key-points-grid mt-3">
              <div class="key-point">
                <strong>Fast-Paced Six-a-Side:</strong> Dynamic, engaging match formats allowing all team members to bat and bowl.
              </div>
              <div class="key-point">
                <strong>Impartial Umpiring:</strong> Standard match regulations, licensed balls, and professional officiating.
              </div>
              <div class="key-point">
                <strong>Camaraderie First:</strong> Celebrating the love of the sport, mutual health, and positive fellowship.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tournament Experience Pillars -->
    <section class="section section-pillars bg-surface" id="tournament-format">
      <div class="container">
        <div class="text-center max-w-reading">
          <span class="section-eyebrow">THE EXPERIENCE</span>
          <h2 class="section-title">Designed for Seasoned Players</h2>
          <p class="section-body">
            Every match day is organized with player health, fair competition, and great sportsmanship at the forefront.
          </p>
        </div>

        <div class="feature-pillars-grid mt-4">
          <div class="feature-pillar-card">
            <span class="pillar-card-icon">⚡</span>
            <h3 class="pillar-card-title">Dynamic Sixes</h3>
            <p class="pillar-card-desc">
              Short, high-intensity five-to-six over innings where every squad member contributes. No waiting on the sidelines—dynamic rotation ensures active play.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🛡️</span>
            <h3 class="pillar-card-title">Fair Play & Rules</h3>
            <p class="pillar-card-desc">
              Neutral, certified match umpires, licensed tournament cricket balls, standard safety gear requirements, and transparent electronic scoring boards.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">💪</span>
            <h3 class="pillar-card-title">Health & Longevity</h3>
            <p class="pillar-card-desc">
              Pre-match guided mobility warm-ups, pitch-side first aid coverage, and match intervals planned to support long-term athletic wellness.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🤝</span>
            <h3 class="pillar-card-title">Post-Match Fellowship</h3>
            <p class="pillar-card-desc">
              Team presentations celebrating decades of cricket camaraderie, player awards, and renewing inter-club relationships across regions.
            </p>
          </div>
        </div>

        <!-- Format Specifications -->
        <div class="specs-overview-box mt-5">
          <div class="text-center max-w-reading mb-3">
            <span class="section-eyebrow">TOURNAMENT SPECIFICATIONS</span>
            <h3 class="section-title" style="font-size: 1.6rem;">Edition Match Standards</h3>
            <p class="text-sm text-muted">Specific dates, venues, and registration fees are notified in the official edition circular.</p>
          </div>

          <div class="specs-grid">
            <div class="spec-box-item">
              <strong>Squad Size</strong>
              <span>6 Playing XI + 2 Reserves</span>
            </div>
            <div class="spec-box-item">
              <strong>Match Duration</strong>
              <span>45 – 60 Minutes per fixture</span>
            </div>
            <div class="spec-box-item">
              <strong>Pitch Standards</strong>
              <span>Turf / Synthetic Cricket Pitch</span>
            </div>
            <div class="spec-box-item">
              <strong>Ball Type</strong>
              <span>Specified per tournament circular</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tournament Enquiries & Circular Note -->
    <section class="section section-cricket-enquiry" id="veteran-enquiry-section">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-lg border" style="border-top: 4px solid var(--color-red);">
          <div class="text-center mb-4">
            <span class="section-eyebrow">TEAM & INDIVIDUAL ENQUIRY</span>
            <h2 class="card-title" style="font-size: 1.75rem;">Ask About the Next Edition</h2>
            <p class="text-sm text-muted mt-1">
              Exact age brackets, registration fees, match schedules, and venue circulars are confirmed separately for each tournament edition. Submit an enquiry to connect with the cricket committee.
            </p>
          </div>

          <form id="veteran-enquiry-form" class="enquiry-form">
            <div class="form-group">
              <label for="vet-name" class="form-label">Contact Person / Captain Name *</label>
              <input type="text" id="vet-name" class="form-control" placeholder="Full name" required />
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="vet-email" class="form-label">Email Address *</label>
                <input type="email" id="vet-email" class="form-control" placeholder="name@example.com" required />
              </div>
              <div class="form-group col-half">
                <label for="vet-phone" class="form-label">Mobile Number *</label>
                <input type="tel" id="vet-phone" class="form-control" placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="vet-city" class="form-label">City / District *</label>
                <input type="text" id="vet-city" class="form-control" placeholder="e.g. Ernakulam / Kozhikode" required />
              </div>
              <div class="form-group col-half">
                <label for="vet-team" class="form-label">Club / Team Name (If applicable)</label>
                <input type="text" id="vet-team" class="form-control" placeholder="Optional team name" />
              </div>
            </div>

            <div class="form-group">
              <label for="vet-message" class="form-label">Enquiry Details</label>
              <textarea id="vet-message" class="form-control" rows="3" placeholder="Tell us about your team or proposed participation..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-vet-btn">
              Submit Cricket Enquiry
            </button>
          </form>

          <!-- Success Alert -->
          <div id="vet-success-box" class="alert alert-success mt-4" style="display: none;">
            <h4 class="alert-heading">Enquiry Received</h4>
            <p class="alert-body">
              Thank you. Your cricket inquiry has been recorded in the foundation ledger under reference: <strong id="vet-ref-display"></strong>. The tournament desk will contact you with relevant circulars.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector("#veteran-enquiry-form");
  const successBox = container.querySelector("#vet-success-box");
  const refDisplay = container.querySelector("#vet-ref-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = container.querySelector("#vet-name").value.trim();
    const email = container.querySelector("#vet-email").value.trim();
    const phone = container.querySelector("#vet-phone").value.trim();
    const city = container.querySelector("#vet-city").value.trim();
    const team = container.querySelector("#vet-team").value.trim();
    const message = container.querySelector("#vet-message").value.trim();

    const res = FlexonDB.createEnquiry({
      source: "web_form",
      type: "cricket_enquiry",
      initiative: "Veteran Sixes Cricket",
      name,
      email,
      phone,
      city,
      organization: team || null,
      message: message || "Enquiry regarding Veteran Sixes cricket tournament participation."
    });

    if (res.success) {
      refDisplay.textContent = res.reference;
      form.style.display = "none";
      successBox.style.display = "block";
    }
  });

  return container;
}
