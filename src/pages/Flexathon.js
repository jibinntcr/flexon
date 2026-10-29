/**
 * Flexon Sports Foundation - FLEXATHON Flagship Overview Page
 * Authority: Blueprint v2.0 Section 9
 */

import { organization } from "../data/content.js";

export function renderFlexathonPage() {
  const container = document.createElement("div");
  container.className = "page-flexathon";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="flexathon-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            FLAGSHIP RUNNING INITIATIVE
          </span>
          <span class="hero-sdg-tag">🏃 GLOBAL GOALS RUN</span>
          <span class="hero-sdg-tag">₹60K ADVERTISED PRIZE POOL</span>
        </div>

        <h1 class="page-title">
          MOVE TOGETHER.<br />
          <span class="text-gradient-red">FLEXATHON RUN SERIES</span>
        </h1>

        <p class="hero-lead">
          FLEXATHON connects the universal energy of running with the United Nations Sustainable Development Goals. Organised by Flexon Sports Foundation, each edition pairs community athletic participation with a designated global developmental theme.
        </p>

        <div class="page-hero-actions">
          <a href="/flexathon/hyderabad-2026" class="btn btn-primary btn-lg">
            <span>Hyderabad 2026 Highlights</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="/flexathon/kochi" class="btn btn-outline btn-lg">
            <span>Kochi Edition Teaser</span>
          </a>
          <a href="${organization.eventWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
            <span>Official Event Portal ↗</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">3K • 5K • 10K</span>
            <span class="page-metric-label">Race Categories</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">₹60,000</span>
            <span class="page-metric-label">Run Prize Pool</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Edition 01</span>
            <span class="page-metric-label">Hyderabad (18 Oct 2026)</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Edition 02</span>
            <span class="page-metric-label">Kochi Waterfront (Announced)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Why We Run -->
    <section class="section section-why-run">
      <div class="container">
        <div class="split-feature-grid">
          <div class="split-feature-media">
            <img 
              src="/assets/hero/flexathon-hyd-hero-1.jpg" 
              alt="Official flag-off at FLEXATHON Hyderabad 2026 at ESCI Campus, Gachibowli" 
              class="feature-img shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="split-feature-content">
            <span class="section-eyebrow">MOVEMENT WITH PURPOSE</span>
            <h2 class="section-title">Why We Run with Purpose</h2>
            <p class="section-body">
              Running is one of the most accessible and democratic forms of physical activity. It brings people together regardless of age, background, or prior athletic experience.
            </p>
            <p class="section-body mt-2">
              With FLEXATHON, we attach each city edition to a specific Sustainable Development Goal. Rather than treating sport in isolation, our runs create an active civic platform for awareness, public health, and community solidarity.
            </p>
            <div class="key-points-grid mt-3">
              <div class="key-point">
                <strong>Accessible Distances:</strong> 3K Community Walk/Run, 5K Fitness Run, and 10K Endurance Challenge.
              </div>
              <div class="key-point">
                <strong>Goal in Focus:</strong> Each edition spotlights a designated developmental objective (e.g. Quality Education).
              </div>
              <div class="key-point">
                <strong>Inclusive Atmosphere:</strong> Welcoming student runners, corporate squads, families, and seasoned marathoners.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Pillars Grid -->
    <section class="section section-pillars bg-surface">
      <div class="container">
        <div class="text-center max-w-reading">
          <span class="section-eyebrow">RACE DAY PILLARS</span>
          <h2 class="section-title">The FLEXATHON Standard</h2>
          <p class="section-body">
            Every edition is executed with professional race marshaling, medical safety, and memorable participant celebrations.
          </p>
        </div>

        <div class="feature-pillars-grid mt-4">
          <div class="feature-pillar-card">
            <span class="pillar-card-icon">⏱️</span>
            <h3 class="pillar-card-title">Chip-Timed Bibs</h3>
            <p class="pillar-card-desc">
              Accurate electronic timing for 5K and 10K participants with instant digital timing certificates and leaderboards.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">💧</span>
            <h3 class="pillar-card-title">Hydration & Medical</h3>
            <p class="pillar-card-desc">
              Dedicated hydration stations every kilometer, certified paramedical staff, ambulance standby, and post-run recovery fruit.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🏅</span>
            <h3 class="pillar-card-title">Medals & Race Kits</h3>
            <p class="pillar-card-desc">
              Eco-friendly dri-fit running tee, commemorative finisher medals, drawstring bags, and verified participation credentials.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🌍</span>
            <h3 class="pillar-card-title">SDG Civic Dialogue</h3>
            <p class="pillar-card-desc">
              Active engagement with local educators, NGOs, and community champions advancing the spotlighted Sustainable Development Goal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Editions Grid -->
    <section class="section section-editions">
      <div class="container">
        <div class="section-header text-center max-w-reading">
          <span class="section-eyebrow">CITY EDITIONS</span>
          <h2 class="section-title">FLEXATHON Across Cities</h2>
          <p class="section-body">Explore completed archives and upcoming edition announcements across India.</p>
        </div>

        <div class="dual-pillar-grid mt-4">
          <!-- Edition 1: Hyderabad (Completed) -->
          <div class="edition-card card p-4 shadow-sm" style="border-top: 4px solid var(--color-ink);">
            <div class="edition-badge badge-past">Edition 01 • Completed Archive</div>
            <h3 class="edition-title mt-2">Hyderabad 2026</h3>
            <p class="edition-meta text-sm text-muted">18 October 2026 • ESCI Campus, Gachibowli</p>
            <p class="edition-desc mt-2">
              The inaugural edition of FLEXATHON spotlighted <strong>SDG 4: Quality Education</strong>, bringing hundreds of participants together in Gachibowli for 3K, 5K, and 10K races with ₹60K in prize awards.
            </p>
            <div class="edition-actions mt-4">
              <a href="/flexathon/hyderabad-2026" class="btn btn-outline btn-sm">View Edition Highlights →</a>
            </div>
          </div>

          <!-- Edition 2: Kochi (Announced) -->
          <div class="edition-card card p-4 shadow-sm" style="border-top: 4px solid var(--color-red);">
            <div class="edition-badge badge-announced">Edition 02 • Announced</div>
            <h3 class="edition-title mt-2">Kochi Waterfront Edition</h3>
            <p class="edition-meta text-sm text-muted">Details to follow • Kochi, Kerala</p>
            <p class="edition-desc mt-2">
              The Global Goals Run is heading to Kochi. Express your interest now to be the first to receive notifications when race dates, venue routes, and registration entries open.
            </p>
            <div class="edition-actions mt-4">
              <a href="/flexathon/kochi" class="btn btn-primary btn-sm">Register Interest →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support and Event Partner CTA -->
    <section class="section section-partner-cta bg-surface">
      <div class="container text-center max-w-reading">
        <span class="section-eyebrow">CORPORATE & CIVIC ENGAGEMENT</span>
        <h2 class="section-title">Host or partner on a FLEXATHON edition.</h2>
        <p class="section-body">
          We welcome collaboration with municipalities, educational campuses, sporting brands, and corporate CSR teams interested in championing active health and Global Goals in their city.
        </p>
        <div class="mt-4">
          <a href="/partnerships?type=flexathon" class="btn btn-primary">Discuss Event Partnership</a>
          <a href="/contact" class="btn btn-outline ml-2">Contact Secretariat</a>
        </div>
      </div>
    </section>
  `;

  return container;
}
