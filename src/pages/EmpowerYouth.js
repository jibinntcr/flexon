/**
 * Flexon Sports Foundation - Empower Youth Football Coaching Camp Page
 * Authority: Blueprint v2.0 Section 8
 * 
 * Strict Facts:
 * - Programme led by MLA Manoj Moothedan
 * - Organised by Flexon Sports Foundation
 * - Target age group: 10–15 years
 * - Training period: 3 October 2026 – 27 February 2027
 * - Contact phone: +91 79075 99510
 * - Guardian-only enquiry flow with zero sensitive child PII
 */

import { FlexonDB } from "../server/db.js";

export function renderEmpowerYouthPage() {
  const container = document.createElement("div");
  container.className = "page-empower-youth";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="camp-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            ACTIVE CAMP • OCT 2026 – FEB 2027
          </span>
          <span class="hero-sdg-tag">⚽ YOUTH SPORTS INITIATIVE</span>
          <span class="hero-sdg-tag">SDG 4: QUALITY EDUCATION</span>
        </div>

        <h1 class="page-title">
          EMPOWER YOUTH.<br />
          <span class="text-gradient-red">CONFIDENCE THROUGH FOOTBALL</span>
        </h1>

        <p class="hero-lead">
          Flexon Sports Foundation is organising a football coaching camp under the Empower Youth programme led by MLA Manoj Moothedan. Through structured training, children aged 10–15 develop football skills while learning discipline, teamwork and the value of consistent effort.
        </p>

        <div class="page-hero-actions">
          <a href="#guardian-enquiry" class="btn btn-primary btn-lg">
            <span>Guardian Enquiry Flow</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#camp-curriculum" class="btn btn-outline btn-lg">
            <span>Core Development Focus</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">10 – 15</span>
            <span class="page-metric-label">Target Age Group</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">5 Months</span>
            <span class="page-metric-label">3 Oct 2026 – 27 Feb 2027</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Leadership</span>
            <span class="page-metric-label">MLA Manoj Moothedan</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Support</span>
            <span class="page-metric-label">+91 79075 99510</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual & Core Areas -->
    <section class="section section-curriculum bg-surface" id="camp-curriculum">
      <div class="container">
        <div class="split-feature-grid">
          <div class="split-feature-media">
            <img 
              src="/assets/animated/football-camp-animated.jpg" 
              alt="Youth football coaching drills and mentorship" 
              class="feature-img shadow-sm"
            />
          </div>
          <div class="split-feature-content">
            <span class="section-eyebrow">GRASSROOTS METHODOLOGY</span>
            <h2 class="section-title">Beyond the Scoreline</h2>
            <p class="section-body">
              Sport offers young people far more than physical exercise. In an era of heavy digital screen time, football creates an engaging outdoor environment where children build real-world friendships, spatial reflexes, and emotional resilience.
            </p>
            <p class="section-body mt-2">
              Our coaching curriculum focuses on age-appropriate football drills designed by certified instructors. Sessions combine playful coordination with structured tactical learning.
            </p>
            <div class="key-points-grid mt-3">
              <div class="key-point">
                <strong>Certified Coaches:</strong> Experienced mentors delivering positive, encouraging guidance.
              </div>
              <div class="key-point">
                <strong>Progressive Skills:</strong> From foundational footwork to tactical team coordination.
              </div>
              <div class="key-point">
                <strong>Safeguarded Ground:</strong> Safe training environment strictly managed under child safety norms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Development Areas (4-Card Pillar Grid) -->
    <section class="section section-features">
      <div class="container">
        <div class="text-center max-w-reading">
          <span class="section-eyebrow">CURRICULUM MODULES</span>
          <h2 class="section-title">Intended Training Focus</h2>
          <p class="section-body">
            Our developmental structure emphasizes athletic fundamentals, physical coordination, and life habits that extend far beyond the pitch.
          </p>
        </div>

        <div class="feature-pillars-grid mt-4">
          <div class="feature-pillar-card">
            <span class="pillar-card-icon">⚽</span>
            <h3 class="pillar-card-title">Ball Mastery & Control</h3>
            <p class="pillar-card-desc">
              Close-control dribbling, first touch reception, aerial trajectory assessment, and spatial agility under game conditions.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🎯</span>
            <h3 class="pillar-card-title">Passing & Team Movement</h3>
            <p class="pillar-card-desc">
              Short-passing triangles, spatial opening, positioning without the ball, and positive vocal communication between teammates.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🤝</span>
            <h3 class="pillar-card-title">Discipline & Fair Play</h3>
            <p class="pillar-card-desc">
              Respecting match officials, teammates, and opponents. Learning how to win humbly and handle competitive setbacks gracefully.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🌱</span>
            <h3 class="pillar-card-title">Healthy Athletic Habits</h3>
            <p class="pillar-card-desc">
              Punctuality, structured warm-ups, hydration awareness, rest protocols, and building lifelong confidence through effort.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Parent / Guardian Enquiry Form -->
    <section class="section section-enquiry-form bg-surface" id="guardian-enquiry">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-lg border" style="border-top: 4px solid var(--color-red);">
          <div class="text-center mb-4">
            <span class="section-eyebrow">SAFEGUARDING VERIFIED FLOW</span>
            <h2 class="card-title" style="font-size: 1.75rem;">Parent / Legal Guardian Enquiry</h2>
            <p class="text-sm text-muted mt-1">
              Pursuant to our participant safeguarding policy, session enquiries must be submitted by an adult parent or guardian. Please do not submit your child’s full legal name, date of birth, or identification documents through this web form.
            </p>
          </div>

          <form id="camp-enquiry-form" class="enquiry-form">
            <div class="form-group">
              <label for="guardian-name" class="form-label">Parent / Legal Guardian Name *</label>
              <input type="text" id="guardian-name" class="form-control" placeholder="Full name of adult applicant" required />
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="guardian-email" class="form-label">Email Address *</label>
                <input type="email" id="guardian-email" class="form-control" placeholder="name@example.com" required />
              </div>
              <div class="form-group col-half">
                <label for="guardian-phone" class="form-label">Mobile Number *</label>
                <input type="tel" id="guardian-phone" class="form-control" placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="guardian-city" class="form-label">City / Locality *</label>
                <input type="text" id="guardian-city" class="form-control" placeholder="e.g. Perumbavoor / Kochi" required />
              </div>
              <div class="form-group col-half">
                <label for="child-age-band" class="form-label">Child Age Band *</label>
                <select id="child-age-band" class="form-control" required>
                  <option value="" disabled selected>Select broad age group</option>
                  <option value="10-12">Ages 10 – 12</option>
                  <option value="13-15">Ages 13 – 15</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="guardian-question" class="form-label">Enquiry Details or Specific Question</label>
              <textarea id="guardian-question" class="form-control" rows="3" placeholder="Ask about batch timings, venue directions, or enrolment status..."></textarea>
            </div>

            <div class="form-notice text-xs text-muted mb-3">
              By submitting this enquiry, you acknowledge that session availability and formal registration arrangements will be communicated by the coaching team. Your details are governed by our <a href="/privacy-policy" target="_blank">Privacy Notice</a>.
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-camp-btn">
              Submit Guardian Enquiry
            </button>
          </form>

          <!-- Success Alert -->
          <div id="camp-success-box" class="alert alert-success mt-4" style="display: none;">
            <h4 class="alert-heading">Enquiry Received Successfully</h4>
            <p class="alert-body">
              Thank you. Your enquiry has been safely recorded in the foundation ledger under reference: <strong id="camp-ref-display"></strong>. The coaching coordinators will get in touch with current session timings.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  // Form submission handling
  const form = container.querySelector("#camp-enquiry-form");
  const successBox = container.querySelector("#camp-success-box");
  const refDisplay = container.querySelector("#camp-ref-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = container.querySelector("#guardian-name").value.trim();
    const email = container.querySelector("#guardian-email").value.trim();
    const phone = container.querySelector("#guardian-phone").value.trim();
    const city = container.querySelector("#guardian-city").value.trim();
    const ageBand = container.querySelector("#child-age-band").value;
    const question = container.querySelector("#guardian-question").value.trim();

    const res = FlexonDB.createEnquiry({
      source: "camp_form",
      type: "football_camp",
      initiative: "Empower Youth Football Camp",
      name,
      email,
      phone,
      city,
      ageBand,
      message: `Parent enquiry (Age band ${ageBand}): ${question || "General batch schedule enquiry"}`
    });

    if (res.success) {
      refDisplay.textContent = res.reference;
      form.style.display = "none";
      successBox.style.display = "block";
    }
  });

  return container;
}
