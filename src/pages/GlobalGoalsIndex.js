/**
 * Flexon Sports Foundation - All 17 Global Goals Index Page
 * Authority: Blueprint v2.0 Section 10
 */

import { sdgs, organization } from "../data/content.js";

export function renderGlobalGoalsIndexPage() {
  const container = document.createElement("div");
  container.className = "page-global-goals-index";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="goals-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            GLOBAL GOALS FRAMEWORK
          </span>
          <span class="hero-sdg-tag">🌍 17 UNITED NATIONS SDGS</span>
          <span class="hero-sdg-tag">SPORTS AS A CATALYST</span>
        </div>

        <h1 class="page-title">
          17 GOALS. A SHARED FUTURE.<br />
          <span class="text-gradient-red">SUSTAINABLE DEVELOPMENT FRAMEWORK</span>
        </h1>

        <p class="hero-lead">
          The Sustainable Development Goals describe global priorities for people and the planet. Explore each goal and discover how athletic participation, health awareness, and youth coaching spark meaningful civic conversations across communities.
        </p>

        <div class="page-hero-actions">
          <a href="#sdgs-catalog" class="btn btn-primary btn-lg">
            <span>Explore All 17 Goals</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/sdg-approach" class="btn btn-outline btn-lg">
            <span>Our 4-Level SDG Approach</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">17</span>
            <span class="page-metric-label">Global Goals Mapped</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">SDG 3 & 4</span>
            <span class="page-metric-label">Primary Active Focus</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">4 Levels</span>
            <span class="page-metric-label">Methodological Integrity</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Civic Focus</span>
            <span class="page-metric-label">Community Dialogue</span>
          </div>
        </div>

        <div class="sdg-disclaimer-pill mt-4">
          ${organization.sdgDisclaimer}
        </div>
      </div>
    </section>

    <!-- All 17 SDGs Grid -->
    <section class="section section-sdgs-catalog" id="sdgs-catalog">
      <div class="container">
        <div class="sdgs-full-grid">
          ${sdgs.map(s => `
            <a href="/global-goals/${s.slug}" class="sdg-catalog-card" style="border-top: 4px solid ${s.color};">
              <div class="sdg-card-top">
                <span class="sdg-card-num" style="background-color: ${s.color};">${s.number}</span>
                <span class="sdg-card-relevance">${s.relevanceLabel}</span>
              </div>
              <h3 class="sdg-card-title">${s.title}</h3>
              <p class="sdg-card-desc">${s.explanation}</p>
              <div class="sdg-card-action">
                <span class="sdg-link-text">Read Sports Connection →</span>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Framework Approach Callout -->
    <section class="section section-approach-cta bg-surface">
      <div class="container text-center max-w-reading mx-auto">
        <span class="section-eyebrow">METHODOLOGICAL INTEGRITY</span>
        <h2 class="section-title">How Flexon Approaches the Global Goals</h2>
        <p class="section-body">
          We distinguish between thematic awareness, active event delivery, direct beneficiary assistance, and measured outcomes. Learn more about our four-level contribution framework.
        </p>
        <div class="mt-4">
          <a href="/sdg-approach" class="btn btn-primary btn-lg">Our SDG Approach</a>
          <a href="/flexathon" class="btn btn-outline btn-lg ml-2">FLEXATHON Flagship Run</a>
        </div>
      </div>
    </section>
  `;

  return container;
}
