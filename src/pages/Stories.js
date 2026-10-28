/**
 * Flexon Sports Foundation - Stories & Reports Index Page
 * Authority: Blueprint v2.0 Section 11
 */

import { stories } from "../data/content.js";

export function renderStoriesPage() {
  const container = document.createElement("div");
  container.className = "page-stories";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="stories-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            DOCUMENTARY ARCHIVE
          </span>
          <span class="hero-sdg-tag">📰 FIELD REPORTS</span>
          <span class="hero-sdg-tag">VERIFIED ACCOUNTS</span>
        </div>

        <h1 class="page-title">
          WHAT SPORT BRINGS TOGETHER.<br />
          <span class="text-gradient-red">STORIES & IMPACT REPORTS</span>
        </h1>

        <p class="hero-lead">
          Verified updates, athlete narratives, event retrospective reports, and community milestones from our grassroots coaching camps and flagship city runs.
        </p>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">Documentary</span>
            <span class="page-metric-label">Field Journalism</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Verified</span>
            <span class="page-metric-label">Ground Accounts</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Inclusive</span>
            <span class="page-metric-label">Youth to Veteran Stories</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Community</span>
            <span class="page-metric-label">Grassroots Voices</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Stories List -->
    <section class="section section-stories-list">
      <div class="container max-w-reading">
        <div class="stories-stack">
          ${stories.map(story => `
            <article class="story-article-card card shadow-sm mb-4 border" style="border-top: 4px solid var(--color-red); overflow: hidden;">
              <div class="story-card-img-wrap" style="max-height: 380px; overflow: hidden;">
                <img src="${story.image}" alt="${story.title}" class="story-card-img" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div class="story-card-body p-4">
                <div class="story-meta d-flex align-center flex-wrap gap-2">
                  <span class="badge badge-primary font-weight-bold">${story.category}</span>
                  <span class="story-date text-xs text-muted">📅 ${story.date}</span>
                  <span class="story-author text-xs text-muted">✍️ ${story.author}</span>
                </div>
                <h2 class="story-title mt-2 font-weight-bold" style="font-size: 1.6rem;">${story.title}</h2>
                <p class="story-summary mt-2 text-muted font-weight-medium" style="font-size: 1.05rem;">${story.summary}</p>
                <div class="story-full-content mt-3 pt-3 border-top" style="line-height: 1.75; color: #334155;">
                  ${story.content.split("\n\n").map(p => `<p class="story-paragraph mb-3">${p}</p>`).join("")}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;

  return container;
}
