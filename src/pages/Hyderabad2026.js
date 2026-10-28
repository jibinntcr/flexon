/**
 * Flexon Sports Foundation - FLEXATHON Hyderabad 2026 Archive Page
 * Authority: Blueprint v2.0 Section 9
 * 
 * Strict Facts:
 * - 18 October 2026 at ESCI Campus, Gachibowli, Hyderabad
 * - 3K Community Run, 5K Run, 10K Challenge
 * - Theme: SDG 4 - Quality Education
 * - Advertised prize pool: ₹60,000 total
 * - Confirmed Edition Partners: ESCI (Venue), Tata Copper+, SMAAASH, Akshayakalpa Organic
 */

import { galleryAlbums, organization } from "../data/content.js";
import { globalLightbox } from "../components/Lightbox.js";

export function renderHyderabad2026Page() {
  const container = document.createElement("div");
  container.className = "page-hyderabad-archive";

  const hydAlbum = galleryAlbums.find(a => a.id === "hyderabad-2026") || galleryAlbums[0];

  container.innerHTML = `
    <!-- Hero Archive -->
    <section class="page-hero bg-surface" id="hyd-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            EDITION 01 • COMPLETED ARCHIVE
          </span>
          <span class="hero-sdg-tag">🏛️ ESCI CAMPUS, GACHIBOWLI</span>
          <span class="hero-sdg-tag">SDG 4: QUALITY EDUCATION</span>
        </div>

        <h1 class="page-title">
          HYDERABAD 2026.<br />
          <span class="text-gradient-red">WHERE THE JOURNEY BEGAN</span>
        </h1>

        <p class="hero-lead">
          On 18 October 2026, FLEXATHON’s inaugural edition brought the Global Goals Run to ESCI Campus in Gachibowli, Hyderabad. Hundreds of runners took part across 3K, 5K and 10K categories, championing inclusive, equitable education for youth.
        </p>

        <div class="page-hero-actions">
          <a href="#event-gallery" class="btn btn-primary btn-lg">
            <span>View Event Gallery</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="${organization.eventWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">
            <span>Official Race Results Portal ↗</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">18 Oct 2026</span>
            <span class="page-metric-label">Inaugural Race Date</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">ESCI Campus</span>
            <span class="page-metric-label">Gachibowli, Hyderabad</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">3K • 5K • 10K</span>
            <span class="page-metric-label">Completed Categories</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">₹60,000</span>
            <span class="page-metric-label">Prize Awards Distributed</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Retrospective & Theme Story -->
    <section class="section section-story">
      <div class="container">
        <div class="split-feature-grid">
          <div class="split-feature-media">
            <img 
              src="/assets/gallery/flexathon-hyderabad/flexathon-hyd-14.jpg" 
              alt="Official flag-off at the FLEXATHON Hyderabad 2026 starting arch at ESCI Campus" 
              class="feature-img shadow-sm"
            />
          </div>
          <div class="split-feature-content">
            <span class="section-eyebrow">THEMATIC FOCUS</span>
            <h2 class="section-title">Spotlighting Quality Education (SDG 4)</h2>
            <p class="section-body">
              Sport and physical activity are proven catalysts for cognitive health, social discipline, and lifelong learning. The Hyderabad edition centered on bringing public attention to inclusive, equitable educational opportunities for youth of all socio-economic backgrounds.
            </p>
            <p class="section-body mt-2">
              Runners of all ages—from young school students completing their first 3K community walk to veteran runners competing in the chip-timed 10K division—crossed the finish arch celebrating fitness and educational solidarity.
            </p>
            <div class="key-points-grid mt-3">
              <div class="key-point">
                <strong>Certified Circuit:</strong> Beautiful tree-lined running course inside the serene ESCI Campus.
              </div>
              <div class="key-point">
                <strong>Civic Solidarity:</strong> Runners and educators uniting behind youth learning initiatives.
              </div>
              <div class="key-point">
                <strong>Finisher Honors:</strong> Commemorative medals and timing certificates issued to all finishers.
              </div>
            </div>
            <div class="mt-4">
              <a href="${organization.eventWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                View Race Timing & Official Archive ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentary Photo Gallery -->
    <section class="section section-hyd-gallery bg-surface" id="event-gallery">
      <div class="container">
        <div class="section-header text-center max-w-reading">
          <span class="section-eyebrow">OFFICIAL EVENT ALBUM • ${hydAlbum.items.length} PHOTOGRAPHS</span>
          <h2 class="section-title">Hyderabad 2026 Visual Archive</h2>
          <p class="section-desc">
            Filter by race-day moment or click any photograph to inspect in full-screen high resolution with filmstrip navigation.
          </p>
        </div>

        <div class="gallery-subfilters-bar justify-center mt-3 mb-4" id="hyd-page-subfilters">
          <div class="subfilter-chips">
            <button type="button" class="moment-chip is-active" data-moment="all">
              📸 All Photos (${hydAlbum.items.length})
            </button>
            <button type="button" class="moment-chip" data-moment="flag-off">
              🏁 Flag-Off & Start Line
            </button>
            <button type="button" class="moment-chip" data-moment="community-waves">
              🏃 5K & 3K Waves
            </button>
            <button type="button" class="moment-chip" data-moment="warm-up">
              🔥 Warm-Up & Assembly
            </button>
            <button type="button" class="moment-chip" data-moment="podium-awards">
              🏆 Podium & Awards
            </button>
          </div>
        </div>

        <div class="gallery-modern-grid view-editorial mt-4" id="hyd-archive-grid"></div>

        <div class="text-center mt-4">
          <a href="/gallery" class="btn btn-outline">
            Open Full Foundation Media Gallery →
          </a>
        </div>
      </div>
    </section>

    <!-- Historical Partners -->
    <section class="section section-partners">
      <div class="container text-center">
        <div class="max-w-reading mx-auto">
          <span class="section-eyebrow">HYDERABAD 2026 PARTNERS</span>
          <h2 class="section-title">Collaborating Organisations</h2>
          <p class="section-desc">
            We gratefully acknowledge the official partners whose support made the first edition at ESCI Campus possible:
          </p>
        </div>

        <div class="partners-grid mt-4">
          <div class="partner-card">
            <h4 class="partner-name">ESCI</h4>
            <span class="partner-role">Venue Partner</span>
          </div>
          <div class="partner-card">
            <h4 class="partner-name">Tata Copper+</h4>
            <span class="partner-role">Official Hydration Partner</span>
          </div>
          <div class="partner-card">
            <h4 class="partner-name">SMAAASH</h4>
            <span class="partner-role">Official Entertainment Partner</span>
          </div>
          <div class="partner-card">
            <h4 class="partner-name">Akshayakalpa Organic</h4>
            <span class="partner-role">Official Nutrition Partner</span>
          </div>
        </div>

        <div class="thank-you-note mt-5 max-w-reading mx-auto">
          <p class="text-muted">
            “Thank you to every participant, volunteer, partner and supporter who helped bring this first edition together.”
          </p>
        </div>

        <div class="mt-4">
          <a href="/flexathon/kochi" class="btn btn-primary">Explore Kochi Updates →</a>
          <a href="/contact?subject=Hyderabad%20Certificate%20Query" class="btn btn-outline ml-2">Event Support Enquiry</a>
        </div>
      </div>
    </section>
  `;

  // Render filterable Hyderabad gallery grid & bind Lightbox triggers
  const hydGrid = container.querySelector("#hyd-archive-grid");
  let activeMoment = "all";

  function renderHydGrid() {
    if (!hydGrid) return;
    const filtered = hydAlbum.items.filter(
      (item) => activeMoment === "all" || item.category === activeMoment
    );

    hydGrid.innerHTML = filtered
      .map((item, idx) => {
        const numStr = String(idx + 1).padStart(2, "0");
        const orientClass = item.orientation === "portrait" ? "is-portrait" : "is-landscape";
        const isWide = item.featured && item.orientation !== "portrait" && idx % 7 === 0;
        return `
          <figure
            class="gallery-modern-card ${orientClass} ${isWide ? "is-featured-span" : ""}"
            data-idx="${idx}"
            tabindex="0"
            role="button"
            aria-label="Inspect photo ${numStr}: ${item.caption}"
          >
            <div class="gallery-modern-img-wrap">
              <img src="${item.src}" alt="${item.alt}" class="gallery-modern-img" loading="lazy" />
              <div class="gallery-card-top-badges">
                <span class="gallery-idx-pill">#${numStr}</span>
                ${item.categoryLabel ? `<span class="gallery-cat-tag">${item.categoryLabel}</span>` : ""}
              </div>
              <div class="gallery-card-hover-veil">
                <span class="gallery-inspect-btn">⤢ Inspect HD</span>
              </div>
            </div>
            <figcaption class="gallery-modern-caption">
              <p class="gallery-caption-text">${item.caption}</p>
            </figcaption>
          </figure>
        `;
      })
      .join("");

    hydGrid.querySelectorAll(".gallery-modern-card").forEach((card) => {
      const openCard = () => {
        const idx = parseInt(card.getAttribute("data-idx") || "0", 10);
        globalLightbox.open(filtered, idx);
      };
      card.addEventListener("click", openCard);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCard();
        }
      });
    });
  }

  container.querySelectorAll("#hyd-page-subfilters .moment-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeMoment = chip.getAttribute("data-moment") || "all";
      container.querySelectorAll("#hyd-page-subfilters .moment-chip").forEach((c) => {
        c.classList.toggle("is-active", c.getAttribute("data-moment") === activeMoment);
      });
      renderHydGrid();
    });
  });

  renderHydGrid();

  return container;
}
