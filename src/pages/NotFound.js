/**
 * Flexon Sports Foundation - 404 Not Found Page
 * Authority: Blueprint v2.0 Section 18
 */

export function renderNotFoundPage() {
  const container = document.createElement("div");
  container.className = "page-not-found";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface py-5">
      <div class="container text-center max-w-reading">
        <div class="page-hero-pills">
          <span class="hero-live-pill"><span class="live-dot" style="background:#f59e0b"></span> STATUS 404 • ROUTE UNMATCHED</span>
          <span class="hero-sdg-tag">OUT OF PLAY</span>
        </div>
        <h1 class="page-title text-4xl">This page is <span class="text-gradient-red">off the field</span>.</h1>
        <p class="hero-lead text-muted">
          The link you followed may have moved, expired, or the fixture path is not currently active on our server. Let's get you back into the action.
        </p>

        <div class="page-hero-actions mt-4">
          <a href="/" class="btn btn-primary btn-lg">Return to Homepage</a>
          <a href="/programs" class="btn btn-outline btn-lg">Browse Programmes</a>
        </div>
      </div>
    </section>

    <!-- Quick Navigation Shortcuts -->
    <section class="section py-5">
      <div class="container max-w-reading">
        <div class="text-center mb-4">
          <span class="section-eyebrow">POPULAR SPORTING DESTINATIONS</span>
          <h2 class="section-title text-xl">Looking for One of These Fixtures?</h2>
        </div>

        <div class="feature-pillars-grid">
          <a href="/flexathon" class="feature-pillar-card text-left" style="text-decoration: none; color: inherit;">
            <div class="pillar-icon">🏃</div>
            <h3 class="pillar-title">FLEXATHON</h3>
            <p class="pillar-desc">Explore Hyderabad 2026 results or register interest for Kochi Waterfront.</p>
          </a>
          <a href="/programs/empower-youth" class="feature-pillar-card text-left" style="text-decoration: none; color: inherit;">
            <div class="pillar-icon">⚽</div>
            <h3 class="pillar-title">Empower Youth</h3>
            <p class="pillar-desc">Community football training camp for children aged 10–15.</p>
          </a>
          <a href="/programs/veteran-sixes" class="feature-pillar-card text-left" style="text-decoration: none; color: inherit;">
            <div class="pillar-icon">🏏</div>
            <h3 class="pillar-title">Veteran Sixes</h3>
            <p class="pillar-desc">Masters cricket tournament celebrating fellowship and lifelong fitness.</p>
          </a>
          <a href="/contact" class="feature-pillar-card text-left" style="text-decoration: none; color: inherit;">
            <div class="pillar-icon">✉️</div>
            <h3 class="pillar-title">Contact Secretariat</h3>
            <p class="pillar-desc">Direct communication channels for queries and event assistance.</p>
          </a>
        </div>
      </div>
    </section>
  `;

  return container;
}
