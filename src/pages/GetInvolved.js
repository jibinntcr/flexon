/**
 * Flexon Sports Foundation - Get Involved Page
 * Authority: Blueprint v2.0 Section 12
 */

export function renderGetInvolvedPage() {
  const container = document.createElement("div");
  container.className = "page-get-involved";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="involved-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            COMMUNITY PATHWAYS
          </span>
          <span class="hero-sdg-tag">🤝 ACTIVE ENGAGEMENT</span>
          <span class="hero-sdg-tag">INCLUSIVE OPPORTUNITIES</span>
        </div>

        <h1 class="page-title">
          BRING YOUR ENERGY.<br />
          <span class="text-gradient-red">BUILD A SHARED PURPOSE</span>
        </h1>

        <p class="hero-lead">
          Take part in an athletic gathering, volunteer your energy, enroll in youth football coaching, or explore what your school, club, or corporate CSR squad can contribute to grassroots sporting development.
        </p>

        <div class="page-hero-actions">
          <a href="#action-pathways" class="btn btn-primary btn-lg">
            <span>Explore 8 Action Pathways</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/volunteer" class="btn btn-outline btn-lg">
            <span>Volunteer With Flexon</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">8</span>
            <span class="page-metric-label">Action Pathways</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Athletes</span>
            <span class="page-metric-label">Runners, Cricketers, Youth</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Partners</span>
            <span class="page-metric-label">Schools, Corporates & CSR</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Volunteers</span>
            <span class="page-metric-label">Race Crew & Mentors</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pathways Grid -->
    <section class="section section-pathways" id="action-pathways">
      <div class="container">
        <div class="section-intro-header text-center max-w-reading mx-auto mb-4">
          <span class="section-eyebrow">CHOOSE YOUR PATHWAY</span>
          <h2 class="section-title">How You Can Participate</h2>
        </div>

        <div class="paths-grid mt-4">
          <!-- Pathway 1: Participant -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid var(--color-red);">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">🏃</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Athletes & Runners</h3>
            <p class="path-desc text-muted mt-2">Take part in community runs, chip-timed 5K and 10K events, and sports challenges across cities.</p>
            <a href="/events" class="path-link font-weight-bold mt-3 d-block text-primary">Explore Calendar →</a>
          </div>

          <!-- Pathway 2: Parent / Guardian -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid #16A34A;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">⚽</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Parents & Guardians</h3>
            <p class="path-desc text-muted mt-2">Enquire about grassroots football training batches for children aged 10–15 under Empower Youth.</p>
            <a href="/programs/empower-youth-football-camp" class="path-link font-weight-bold mt-3 d-block text-primary">Camp Details →</a>
          </div>

          <!-- Pathway 3: Volunteers -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid #F59E0B;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">🤝</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Volunteers</h3>
            <p class="path-desc text-muted mt-2">Contribute time and enthusiasm to race operations, hydration stations, medical desks, and logistics.</p>
            <a href="/volunteer" class="path-link font-weight-bold mt-3 d-block text-primary">Register Interest →</a>
          </div>

          <!-- Pathway 4: Schools & Colleges -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid #2563EB;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">🏫</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Schools & Colleges</h3>
            <p class="path-desc text-muted mt-2">Partner with us to organize structured sports meets, inter-school tournaments, or training.</p>
            <a href="/partnerships?type=school" class="path-link font-weight-bold mt-3 d-block text-primary">Institutional Brief →</a>
          </div>

          <!-- Pathway 5: Corporate Teams -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid #9333EA;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">🏢</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Corporate Partners</h3>
            <p class="path-desc text-muted mt-2">Enter corporate running squads, sponsor event hydration/prizes, or support community play.</p>
            <a href="/partnerships?type=corporate" class="path-link font-weight-bold mt-3 d-block text-primary">Corporate Partnering →</a>
          </div>

          <!-- Pathway 6: Clubs & Communities -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid #D97706;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">🏆</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Cricket & Sports Clubs</h3>
            <p class="path-desc text-muted mt-2">Register team interest for Veteran Sixes cricket or local tournament formats.</p>
            <a href="/veteran-sixes" class="path-link font-weight-bold mt-3 d-block text-primary">Cricket Enquiries →</a>
          </div>

          <!-- Pathway 7: Donors & Supporters -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid #DC2626;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">❤️</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Donors & Philanthropy</h3>
            <p class="path-desc text-muted mt-2">Support grassroots sports equipment, coaching camps, and community sports initiatives.</p>
            <a href="/donate" class="path-link font-weight-bold mt-3 d-block text-primary">Support Flexon →</a>
          </div>

          <!-- Pathway 8: Media & Enquiries -->
          <div class="path-card card p-4 shadow-sm" style="border-top: 4px solid #475569;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">📰</div>
            <h3 class="path-title font-weight-bold" style="font-size: 1.3rem;">Media & Civic Groups</h3>
            <p class="path-desc text-muted mt-2">Request information, interview leadership, or discuss local sporting events.</p>
            <a href="/contact" class="path-link font-weight-bold mt-3 d-block text-primary">Contact Secretariat →</a>
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
