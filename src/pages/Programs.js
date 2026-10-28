/**
 * Flexon Sports Foundation - Programs Portfolio Page
 * Authority: Blueprint v2.0 Section 8 (Retain entire 12-program portfolio)
 */

import { programs } from "../data/content.js";

export function renderProgramsPage() {
  const container = document.createElement("div");
  container.className = "page-programs";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="programs-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            12 ACTIVE PROGRAMMES
          </span>
          <span class="hero-sdg-tag">🏅 COMPREHENSIVE PORTFOLIO</span>
          <span class="hero-sdg-tag">SDG 3 & 4 ALIGNED</span>
        </div>

        <h1 class="page-title">
          MORE WAYS TO TAKE PART.<br />
          <span class="text-gradient-red">SPORTS & COMMUNITY INITIATIVES</span>
        </h1>

        <p class="hero-lead">
          Explore Flexon’s sporting and community programme areas. Confirmed dates, eligibility, and joining arrangements are provided separately for each activity to foster inclusive, active living across generations.
        </p>

        <div class="page-hero-actions">
          <a href="#programs-catalog" class="btn btn-primary btn-lg">
            <span>Explore 12 Programmes</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/partnerships" class="btn btn-outline btn-lg">
            <span>Bring a Programme to Your Venue</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">12</span>
            <span class="page-metric-label">Retained Programme Areas</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">4</span>
            <span class="page-metric-label">Primary Sport Disciplines</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Grassroots</span>
            <span class="page-metric-label">Community & School Delivery</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">100%</span>
            <span class="page-metric-label">Section 8 Not-For-Profit</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Buttons & Program Catalog -->
    <section class="section section-programs-catalog" id="programs-catalog">
      <div class="container">
        <div class="section-intro-header text-center max-w-reading mx-auto mb-4">
          <span class="section-eyebrow">PROGRAMME DIRECTORY</span>
          <h2 class="section-title">Filter by Athletic Discipline</h2>
        </div>

        <div class="filter-bar justify-center">
          <button class="filter-btn is-active" data-filter="all">All 12 Programs</button>
          <button class="filter-btn" data-filter="Running">Running & Endurance</button>
          <button class="filter-btn" data-filter="Football">Football</button>
          <button class="filter-btn" data-filter="Cricket">Cricket</button>
          <button class="filter-btn" data-filter="Education">Education & Community</button>
        </div>

        <!-- Programs Grid -->
        <div class="programs-grid mt-4" id="programs-grid">
          ${programs.map(prog => `
            <div class="program-card" data-category="${prog.category}">
              <div class="program-img-wrap">
                <img src="${prog.image}" alt="${prog.title}" class="program-img" />
                ${prog.badge ? `<span class="program-badge">${prog.badge}</span>` : ""}
              </div>
              <div class="program-body">
                <span class="program-category">${prog.category}</span>
                <h3 class="program-title">${prog.title}</h3>
                <p class="program-desc">${prog.fullDesc}</p>
                <div class="program-action mt-3">
                  <a href="${prog.actionLink}" class="btn btn-outline btn-sm">${prog.actionText} →</a>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Institutional Collaboration Callout -->
    <section class="section section-programs-cta bg-surface">
      <div class="container text-center max-w-reading mx-auto">
        <span class="section-eyebrow">PARTNERSHIP INQUIRIES</span>
        <h2 class="section-title">Interested in bringing a programme to your venue?</h2>
        <p class="section-body">
          We work with educational institutions, community grounds, athletic clubs, and corporate organizations to deliver tailored sports activities.
        </p>
        <div class="mt-4">
          <a href="/partnerships" class="btn btn-primary btn-lg">Connect With Flexon</a>
          <a href="/contact" class="btn btn-outline btn-lg ml-2">General Enquiries</a>
        </div>
      </div>
    </section>
  `;

  // Filter interactivity
  const filterBtns = container.querySelectorAll(".filter-btn");
  const programCards = container.querySelectorAll(".program-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const filter = btn.getAttribute("data-filter");
      programCards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter || (filter === "Education" && (cat === "Education" || cat === "Community" || cat === "Advocacy" || cat === "Fitness" || cat === "Basketball" || cat === "Netball"))) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  return container;
}
