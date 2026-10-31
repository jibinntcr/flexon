/**
 * Flexon Sports Foundation - SDG Approach & Contribution Framework
 * Authority: Blueprint v2.0 Section 10
 */

import { organization } from "../data/content.js";

export function renderSdgApproachPage() {
  const container = document.createElement("div");
  container.className = "page-sdg-approach";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="approach-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            METHODOLOGICAL INTEGRITY
          </span>
          <span class="hero-sdg-tag">📊 4-LEVEL TAXONOMY</span>
          <span class="hero-sdg-tag">FACTUAL HONESTY</span>
        </div>

        <h1 class="page-title">
          METHODOLOGY & METRICS.<br />
          <span class="text-gradient-red">OUR SDG CONTRIBUTION FRAMEWORK</span>
        </h1>

        <p class="hero-lead">
          We start with a community need, select a relevant developmental focus, agree the activity and responsibilities, and review evidence. We strictly distinguish between thematic awareness, event delivery, beneficiary support, and measured outcomes.
        </p>

        <div class="page-hero-actions">
          <a href="#taxonomy-levels" class="btn btn-primary btn-lg">
            <span>Explore 4 Levels</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/global-goals" class="btn btn-outline btn-lg">
            <span>All 17 Global Goals</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">Level 1</span>
            <span class="page-metric-label">Thematic Awareness</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Level 2</span>
            <span class="page-metric-label">Activity Delivery</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Level 3</span>
            <span class="page-metric-label">Beneficiary Support</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Level 4</span>
            <span class="page-metric-label">Measured Outcomes</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Levels of Contribution -->
    <section class="section section-levels" id="taxonomy-levels">
      <div class="container max-w-reading">
        <div class="section-header text-center mb-4">
          <span class="section-eyebrow">CONTRIBUTION TAXONOMY</span>
          <h2 class="section-title">Four Distinct Levels of Contribution</h2>
          <p class="section-desc">
            Awareness, activity delivery, beneficiary support, and measured outcomes represent distinct forms of engagement. We never conflate simple awareness with funded outcomes.
          </p>
        </div>

        <div class="levels-stack mt-4">
          <div class="card p-4 shadow-sm mb-3 border" style="border-left: 4px solid #E5243B;">
            <div class="level-header d-flex justify-between align-center">
              <span class="level-tag badge badge-red">Level 1</span>
              <span class="text-xs text-muted font-weight-bold uppercase">Public Visibility</span>
            </div>
            <h3 class="level-title mt-2 font-weight-bold" style="font-size: 1.3rem;">Thematic Awareness</h3>
            <p class="text-muted mt-2" style="line-height: 1.65;">
              Using an athletic gathering to draw public, participant, and civic attention to a development priority (e.g. promoting inclusive education awareness at FLEXATHON Hyderabad).
            </p>
          </div>

          <div class="card p-4 shadow-sm mb-3 border" style="border-left: 4px solid #4C9F38;">
            <div class="level-header d-flex justify-between align-center">
              <span class="level-tag badge badge-green">Level 2</span>
              <span class="text-xs text-muted font-weight-bold uppercase">Active Participation</span>
            </div>
            <h3 class="level-title mt-2 font-weight-bold" style="font-size: 1.3rem;">Direct Activity Delivery</h3>
            <p class="text-muted mt-2" style="line-height: 1.65;">
              Directly executing inclusive sporting formats—such as community 3K walks, school sports meets, or six-a-side cricket—that encourage regular physical activity (SDG 3: Good Health & Well-being).
            </p>
          </div>

          <div class="card p-4 shadow-sm mb-3 border" style="border-left: 4px solid #F59E0B;">
            <div class="level-header d-flex justify-between align-center">
              <span class="level-tag badge badge-gold">Level 3</span>
              <span class="text-xs text-muted font-weight-bold uppercase">Targeted Development</span>
            </div>
            <h3 class="level-title mt-2 font-weight-bold" style="font-size: 1.3rem;">Beneficiary Support</h3>
            <p class="text-muted mt-2" style="line-height: 1.65;">
              Targeted, sustained engagement such as the Empower Youth football camp (ages 10–15), fostering discipline, team coordination, and healthy habits over an extended multi-month training calendar.
            </p>
          </div>

          <div class="card p-4 shadow-sm border" style="border-left: 4px solid #2563EB;">
            <div class="level-header d-flex justify-between align-center">
              <span class="level-tag badge badge-primary">Level 4</span>
              <span class="text-xs text-muted font-weight-bold uppercase">Verified Impact</span>
            </div>
            <h3 class="level-title mt-2 font-weight-bold" style="font-size: 1.3rem;">Measured Long-Term Outcomes</h3>
            <p class="text-muted mt-2" style="line-height: 1.65;">
              Long-term tracking of participant retention, verified physical fitness milestones, and formal community feedback. Only published when supported by documented verification records.
            </p>
          </div>
        </div>

        <!-- Official Disclaimer Callout -->
        <div class="info-callout mt-5 card p-3 bg-surface border">
          <p class="text-xs text-muted">
            <strong>Institutional Disclaimer:</strong> ${organization.sdgDisclaimer}
          </p>
        </div>

        <div class="text-center mt-5">
          <a href="/global-goals" class="btn btn-primary btn-lg">Explore All 17 Goals</a>
          <a href="/flexathon" class="btn btn-outline btn-lg ml-2">FLEXATHON Flagship</a>
        </div>
      </div>
    </section>
  `;

  return container;
}
