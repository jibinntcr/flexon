/**
 * Flexon Sports Foundation - Individual Global Goal Detail Template
 * Authority: Blueprint v2.0 Section 10
 * 
 * Reusable template providing distinct, verified text for each of the 17 goals.
 */

import { sdgs, organization } from "../data/content.js";

export function renderGlobalGoalDetailPage(slug) {
  const container = document.createElement("div");
  container.className = "page-sdg-detail";

  const goal = sdgs.find(s => s.slug === slug) || sdgs[0];
  const prevGoal = sdgs[(goal.number - 2 + 17) % 17];
  const nextGoal = sdgs[goal.number % 17];
  const officialUrl = `https://sdgs.un.org/goals/goal${goal.number}`;

  container.innerHTML = `
    <!-- Hero / Breadcrumb -->
    <section class="page-hero bg-surface" id="sdg-detail-hero">
      <div class="container text-center max-w-reading">
        <nav class="breadcrumb-nav mb-3 justify-center" aria-label="Breadcrumb">
          <a href="/">Home</a> / <a href="/global-goals">Global Goals</a> / <span>Goal ${goal.number}</span>
        </nav>

        <div class="page-hero-pills">
          <span class="hero-live-pill" style="border-color: ${goal.color}; background-color: rgba(0,0,0,0.03);">
            <span class="live-dot" style="background-color: ${goal.color}; box-shadow: none;" aria-hidden="true"></span>
            GLOBAL GOAL ${goal.number}
          </span>
          <span class="hero-sdg-tag">${goal.relevanceLabel}</span>
          <span class="hero-sdg-tag">UNITED NATIONS SDG FRAMEWORK</span>
        </div>

        <h1 class="page-title">
          GOAL ${goal.number}.<br />
          <span style="color: ${goal.color};">${goal.title}</span>
        </h1>

        <p class="hero-lead">
          ${goal.explanation}
        </p>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val" style="color: ${goal.color};">#0${goal.number}</span>
            <span class="page-metric-label">UN SDG Number</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">${goal.shortName}</span>
            <span class="page-metric-label">Goal Domain</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">${goal.relevanceLabel}</span>
            <span class="page-metric-label">Relevance Tier</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Dialogue</span>
            <span class="page-metric-label">Community Focus</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail Content Section -->
    <section class="section section-sdg-content">
      <div class="container max-w-reading">
        <!-- What this goal addresses -->
        <div class="content-block card p-4 shadow-sm border" style="border-top: 4px solid ${goal.color};">
          <span class="section-eyebrow" style="color: ${goal.color};">GLOBAL CHALLENGE</span>
          <h2 class="content-heading mt-1" style="font-size: 1.5rem;">Understanding Goal ${goal.number}</h2>
          <p class="content-text mt-2 text-muted" style="line-height: 1.7;">${goal.explanation}</p>
        </div>

        <!-- The Sports Connection -->
        <div class="content-block mt-4 card p-4 shadow-sm border" style="border-left: 4px solid ${goal.color};">
          <span class="section-eyebrow" style="color: ${goal.color};">ATHLETIC PERSPECTIVE</span>
          <h2 class="content-heading mt-1" style="font-size: 1.5rem;">The Sports Connection & Flexon Relevance</h2>
          <p class="content-text font-weight-medium mt-2" style="line-height: 1.7; font-size: 1.05rem;">
            ${goal.sportConnection}
          </p>
        </div>

        <!-- Institutional Note -->
        <div class="content-block mt-4">
          <div class="info-callout card p-3 bg-surface border">
            <h4 class="callout-title font-weight-bold text-sm">Methodological Integrity Note</h4>
            <p class="callout-text text-xs text-muted mt-1">
              ${organization.sdgDisclaimer} Flexon Sports Foundation highlights this goal to encourage community dialogue and positive athletic habits rather than claiming institutional UN affiliation.
            </p>
          </div>
        </div>

        <!-- External Official Resource Link -->
        <div class="official-un-link-wrap mt-4 text-center">
          <a href="${officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">
            <span>View Official Goal ${goal.number} Overview at UN.org ↗</span>
          </a>
        </div>

        <!-- Previous / Next Goal Navigation -->
        <div class="sdg-nav-pager mt-5 d-flex justify-between align-center flex-wrap gap-2 pt-4 border-top">
          <a href="/global-goals/${prevGoal.slug}" class="btn btn-ghost btn-sm">
            ← Goal ${prevGoal.number}: ${prevGoal.shortName}
          </a>
          <a href="/global-goals" class="btn btn-outline btn-sm">All 17 Goals</a>
          <a href="/global-goals/${nextGoal.slug}" class="btn btn-ghost btn-sm">
            Goal ${nextGoal.number}: ${nextGoal.shortName} →
          </a>
        </div>
      </div>
    </section>
  `;

  return container;
}
