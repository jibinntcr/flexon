/**
 * Flexon Sports Foundation - Events Index Page
 * Authority: Blueprint v2.0 Section 9
 * 
 * Strict Distinction: Lifecycle status vs Registration status
 * - Hyderabad: Completed (Registration closed)
 * - Kochi: Announced (Registration not open yet)
 * - Veteran Sixes: Ongoing / Evergreen (Enquiries open)
 */

import { events } from "../data/content.js";

export function renderEventsPage() {
  const container = document.createElement("div");
  container.className = "page-events";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="events-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            FOUNDATION CALENDAR
          </span>
          <span class="hero-sdg-tag">📅 VERIFIED FIXTURES</span>
          <span class="hero-sdg-tag">SDG THEMED EDITIONS</span>
        </div>

        <h1 class="page-title">
          FIND YOUR PLACE IN THE GAME.<br />
          <span class="text-gradient-red">EVENTS & ACTIVE FIXTURES</span>
        </h1>

        <p class="hero-lead">
          Explore upcoming city editions, ongoing athletic initiatives, and past community archives. Every Flexon event connects professional organization and safety with community participation and developmental purpose.
        </p>

        <div class="page-hero-actions">
          <a href="#events-catalog" class="btn btn-primary btn-lg">
            <span>Browse Event Fixtures</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/partnerships?type=event" class="btn btn-outline btn-lg">
            <span>Propose a City Edition</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">3</span>
            <span class="page-metric-label">Key Event Formats</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Verified</span>
            <span class="page-metric-label">Safety & Route Standards</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">₹60,000</span>
            <span class="page-metric-label">Run Prize Awards</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Multi-Gen</span>
            <span class="page-metric-label">Youth to Veteran Sports</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter & Lifecycle Tabs -->
    <section class="section section-events-list" id="events-catalog">
      <div class="container">
        <!-- Status Tabs -->
        <div class="events-tabs text-center">
          <button class="tab-btn is-active" data-tab="all">All Events</button>
          <button class="tab-btn" data-tab="Announced">Announced</button>
          <button class="tab-btn" data-tab="Ongoing">Ongoing</button>
          <button class="tab-btn" data-tab="Past">Past Editions</button>
        </div>

        <!-- Sport & City Filters -->
        <div class="events-filter-bar mt-3">
          <div class="filter-group">
            <label for="filter-sport" class="text-xs text-muted font-weight-bold">Sport:</label>
            <select id="filter-sport" class="form-select-sm">
              <option value="all">All Sports</option>
              <option value="Running">Running / FLEXATHON</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="filter-city" class="text-xs text-muted font-weight-bold">City:</label>
            <select id="filter-city" class="form-select-sm">
              <option value="all">All Locations</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Kochi">Kochi</option>
              <option value="Kerala">Kerala (Regional)</option>
            </select>
          </div>
        </div>

        <!-- Events Grid -->
        <div class="events-grid mt-4" id="events-grid">
          ${events.map(ev => `
            <div class="event-card" data-lifecycle="${ev.lifecycle}" data-sport="${ev.initiative === 'FLEXATHON' ? 'Running' : ev.initiative === 'Veteran Sixes' ? 'Cricket' : 'Football'}" data-city="${ev.city}">
              <div class="event-card-img-wrap">
                <img src="${ev.image}" alt="${ev.title}" class="event-card-img" />
                <span class="event-lifecycle-badge badge-${ev.lifecycle.toLowerCase()}">${ev.status}</span>
              </div>
              <div class="event-card-body">
                <div class="event-card-meta">
                  <span class="event-date">📅 ${ev.date}</span>
                  <span class="event-city">📍 ${ev.city}</span>
                </div>
                <h3 class="event-card-title">${ev.title}</h3>
                <p class="event-card-venue text-sm text-muted">${ev.venue}</p>
                <p class="event-card-summary mt-2">${ev.summary}</p>
                
                ${ev.themeGoal ? `
                  <div class="event-sdg-tag mt-2">
                    <span class="sdg-pill">SDG ${ev.themeGoal}: ${ev.themeTitle}</span>
                  </div>
                ` : ""}

                <div class="event-card-footer mt-4">
                  ${ev.slug === "flexathon-hyderabad-2026" ? `
                    <a href="/flexathon/hyderabad-2026" class="btn btn-outline btn-sm">Explore Highlights →</a>
                  ` : ev.slug === "flexathon-kochi" ? `
                    <a href="/flexathon/kochi" class="btn btn-primary btn-sm">Register Interest →</a>
                  ` : `
                    <a href="/veteran-sixes" class="btn btn-outline btn-sm">Ask About Edition →</a>
                  `}
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Empty State (Shown when filters match no events) -->
        <div id="events-empty-state" class="empty-state-box text-center mt-5" style="display: none;">
          <div class="empty-icon">📅</div>
          <h3 class="empty-title">No events match these filters.</h3>
          <p class="empty-desc text-muted">Try choosing another sport, city or lifecycle tab, or reach out to tell us what you're looking for.</p>
          <a href="/contact" class="btn btn-outline btn-sm mt-3">Contact Organizing Team</a>
        </div>
      </div>
    </section>
  `;

  // Wire up filter logic
  const tabBtns = container.querySelectorAll(".tab-btn");
  const sportSelect = container.querySelector("#filter-sport");
  const citySelect = container.querySelector("#filter-city");
  const cards = container.querySelectorAll(".event-card");
  const emptyState = container.querySelector("#events-empty-state");

  let activeTab = "all";
  let activeSport = "all";
  let activeCity = "all";

  function applyFilters() {
    let visibleCount = 0;
    cards.forEach(card => {
      const cardLifecycle = card.getAttribute("data-lifecycle");
      const cardSport = card.getAttribute("data-sport");
      const cardCity = card.getAttribute("data-city");

      const matchesTab = activeTab === "all" || cardLifecycle.toLowerCase() === activeTab.toLowerCase();
      const matchesSport = activeSport === "all" || cardSport === activeSport;
      const matchesCity = activeCity === "all" || cardCity.includes(activeCity);

      if (matchesTab && matchesSport && matchesCity) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (visibleCount === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeTab = btn.getAttribute("data-tab");
      applyFilters();
    });
  });

  sportSelect.addEventListener("change", (e) => {
    activeSport = e.target.value;
    applyFilters();
  });

  citySelect.addEventListener("change", (e) => {
    activeCity = e.target.value;
    applyFilters();
  });

  return container;
}
