/**
 * Flexon Sports Foundation - Football Coaching Camp – Empower Youth Programme Page
 * Authority: Blueprint v2.0 Section 8
 *
 * Verified Programme Facts:
 * - Event / Camp: Football Coaching Camp – Empower Youth Programme
 * - Organised by: Flexon Sports Foundation
 * - Inaugurated by: MLA Manoj Moothedan
 * - Programme: Empower Youth
 * - Age Group: 10–15 years
 * - Training Period: 3 October 2026 to 27 February 2027
 * - Contact phone: +91 79075 99510
 * - Dedicated 33-Photo Archive: /assets/gallery/football-coaching-camp/
 */

import { FlexonDB } from "../server/db.js";
import { galleryAlbums } from "../data/content.js";
import { globalLightbox } from "../components/Lightbox.js";

export function renderEmpowerYouthPage() {
  const container = document.createElement("div");
  container.className = "page-empower-youth";

  const campAlbum =
    galleryAlbums.find((a) => a.id === "football-training") || galleryAlbums[1];
  const campPhotos = campAlbum ? campAlbum.items : [];

  const categoryCounts = {
    all: campPhotos.length,
    "pitch-kickoff": campPhotos.filter((i) => i.category === "pitch-kickoff").length,
    "camp-inauguration": campPhotos.filter((i) => i.category === "camp-inauguration").length,
    "youth-orientation": campPhotos.filter((i) => i.category === "youth-orientation").length
  };

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="camp-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            ACTIVE CAMP • 3 OCT 2026 TO 27 FEB 2027
          </span>
          <span class="hero-sdg-tag">⚽ EMPOWER YOUTH PROGRAMME</span>
          <span class="hero-sdg-tag">📸 ${campPhotos.length} CAMP PHOTOGRAPHS</span>
        </div>

        <h1 class="page-title">
          FOOTBALL COACHING CAMP<br />
          <span class="text-gradient-red">EMPOWER YOUTH PROGRAMME</span>
        </h1>

        <p class="hero-lead">
          The Football Coaching Camp is an initiative of <strong>Flexon Sports Foundation</strong> under its <strong>Empower Youth Programme</strong>, inaugurated by <strong>MLA Manoj Moothedan</strong>. The camp provides structured football training for children aged 10–15, focusing on football skills, physical fitness, teamwork, discipline and confidence.
        </p>

        <div class="page-hero-actions">
          <button type="button" class="btn btn-primary btn-lg" id="play-camp-slideshow-btn">
            <span>▶ Play Camp Slideshow (${campPhotos.length} Photos)</span>
          </button>
          <a href="#camp-photo-archive" class="btn btn-outline btn-lg">
            <span>Browse Camp Gallery ↓</span>
          </a>
          <a href="#guardian-enquiry" class="btn btn-outline btn-lg">
            <span>Guardian Enquiry →</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">10–15 Years</span>
            <span class="page-metric-label">Age Group</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">3 Oct 2026 – 27 Feb 2027</span>
            <span class="page-metric-label">Training Period</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">MLA Manoj Moothedan</span>
            <span class="page-metric-label">Inaugurated By</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Flexon Sports Foundation</span>
            <span class="page-metric-label">Organised By</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Programme Overview & Official Facts -->
    <section class="section section-curriculum bg-surface" id="camp-curriculum">
      <div class="container">
        <div class="split-feature-grid">
          <div class="split-feature-media">
            <img
              src="/assets/gallery/football-coaching-camp/football-camp-01.jpg"
              alt="Ceremonial kick-off at Football Coaching Camp – Empower Youth Programme"
              class="feature-img shadow-sm"
            />
          </div>
          <div class="split-feature-content">
            <span class="section-eyebrow">EMPOWER YOUTH PROGRAMME</span>
            <h2 class="section-title">Encouraging Young Talent & Sports Participation</h2>
            <p class="section-body">
              The <strong>Football Coaching Camp</strong> is an initiative of <strong>Flexon Sports Foundation</strong> under its <strong>Empower Youth Programme</strong>.
            </p>
            <p class="section-body mt-2">
              The camp provides structured football training for children aged 10–15, focusing on football skills, physical fitness, teamwork, discipline and confidence.
            </p>
            <p class="section-body mt-2">
              The programme aims to encourage young talent and promote sports participation among children.
            </p>

            <div class="key-points-grid mt-3">
              <div class="key-point">
                <strong>Organised by:</strong> Flexon Sports Foundation
              </div>
              <div class="key-point">
                <strong>Inaugurated by:</strong> MLA Manoj Moothedan
              </div>
              <div class="key-point">
                <strong>Programme:</strong> Empower Youth (Age Group: 10–15 years)
              </div>
              <div class="key-point">
                <strong>Training Period:</strong> 3 October 2026 to 27 February 2027
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Official 33-Photo Camp Archive Section -->
    <section class="section" id="camp-photo-archive">
      <div class="container">
        <div class="text-center max-w-reading mx-auto">
          <span class="section-eyebrow">OFFICIAL PROGRAMME GALLERY • ${campPhotos.length} VERIFIED PHOTOGRAPHS</span>
          <h2 class="section-title">Inauguration & Pitch Training Moments</h2>
          <p class="section-desc">
            Explore official photographs from the inauguration by MLA Manoj Moothedan, ceremonial pitch kick-off, and youth squad orientation. Click any photograph to inspect in full-screen HD.
          </p>
        </div>

        <!-- Moment Filter Chips -->
        <div class="gallery-subfilters-bar mt-4 mb-4 justify-center" id="camp-moment-filters">
          <div class="subfilter-chips">
            <button type="button" class="moment-chip is-active" data-moment="all">
              📸 All Camp Photos <span>(${categoryCounts.all})</span>
            </button>
            <button type="button" class="moment-chip" data-moment="pitch-kickoff">
              ⚽ Pitch Kick-Off & Drills <span>(${categoryCounts["pitch-kickoff"]})</span>
            </button>
            <button type="button" class="moment-chip" data-moment="camp-inauguration">
              🎙️ MLA Inauguration <span>(${categoryCounts["camp-inauguration"]})</span>
            </button>
            <button type="button" class="moment-chip" data-moment="youth-orientation">
              👥 Youth Squad & Orientation <span>(${categoryCounts["youth-orientation"]})</span>
            </button>
          </div>
        </div>

        <div class="gallery-modern-grid view-editorial" id="camp-archive-grid"></div>
      </div>
    </section>

    <!-- Core Development Areas (4-Card Pillar Grid) -->
    <section class="section section-features bg-surface">
      <div class="container">
        <div class="text-center max-w-reading">
          <span class="section-eyebrow">CURRICULUM MODULES</span>
          <h2 class="section-title">Structured Training Focus</h2>
          <p class="section-body">
            Our developmental structure emphasizes football fundamentals, physical fitness, teamwork, discipline, and confidence for children aged 10–15.
          </p>
        </div>

        <div class="feature-pillars-grid mt-4">
          <div class="feature-pillar-card">
            <span class="pillar-card-icon">⚽</span>
            <h3 class="pillar-card-title">Football Skills & Control</h3>
            <p class="pillar-card-desc">
              Close-control dribbling, first touch reception, passing accuracy, goalkeeper reflexes, and spatial agility on the pitch.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">💪</span>
            <h3 class="pillar-card-title">Physical Fitness</h3>
            <p class="pillar-card-desc">
              Age-appropriate mobility drills, endurance conditioning, coordination exercises, and active outdoor habits.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🤝</span>
            <h3 class="pillar-card-title">Teamwork & Discipline</h3>
            <p class="pillar-card-desc">
              Respecting coaches, teammates, and match rules while learning collective responsibility and positive communication.
            </p>
          </div>

          <div class="feature-pillar-card">
            <span class="pillar-card-icon">🌟</span>
            <h3 class="pillar-card-title">Confidence & Young Talent</h3>
            <p class="pillar-card-desc">
              Encouraging grassroot sporting talent and building self-belief through consistent practice from Oct 2026 to Feb 2027.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Parent / Guardian Enquiry Form -->
    <section class="section section-enquiry-form" id="guardian-enquiry">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-lg border" style="border-top: 4px solid var(--color-red);">
          <div class="text-center mb-4">
            <span class="section-eyebrow">SAFEGUARDING VERIFIED FLOW</span>
            <h2 class="card-title" style="font-size: 1.75rem;">Parent / Legal Guardian Enquiry</h2>
            <p class="text-sm text-muted mt-1">
              Pursuant to our participant safeguarding policy, session enquiries must be submitted by an adult parent or guardian. Please do not submit your child’s full legal name, date of birth, or identification documents through this web form.
            </p>
          </div>

          <form id="camp-enquiry-form" class="enquiry-form">
            <div class="form-group">
              <label for="guardian-name" class="form-label">Parent / Legal Guardian Name *</label>
              <input type="text" id="guardian-name" class="form-control" placeholder="Full name of adult applicant" required />
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="guardian-email" class="form-label">Email Address *</label>
                <input type="email" id="guardian-email" class="form-control" placeholder="name@example.com" required />
              </div>
              <div class="form-group col-half">
                <label for="guardian-phone" class="form-label">Mobile Number *</label>
                <input type="tel" id="guardian-phone" class="form-control" placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="guardian-city" class="form-label">City / Locality *</label>
                <input type="text" id="guardian-city" class="form-control" placeholder="e.g. Perumbavoor / Kochi" required />
              </div>
              <div class="form-group col-half">
                <label for="child-age-band" class="form-label">Child Age Band *</label>
                <select id="child-age-band" class="form-control" required>
                  <option value="" disabled selected>Select broad age group</option>
                  <option value="10-12">Ages 10 – 12</option>
                  <option value="13-15">Ages 13 – 15</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="guardian-question" class="form-label">Enquiry Details or Specific Question</label>
              <textarea id="guardian-question" class="form-control" rows="3" placeholder="Ask about batch timings, venue directions, or enrolment status..."></textarea>
            </div>

            <div class="form-notice text-xs text-muted mb-3">
              By submitting this enquiry, you acknowledge that session availability and formal registration arrangements will be communicated by the coaching team. Your details are governed by our <a href="/privacy-policy" target="_blank">Privacy Notice</a>.
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-camp-btn">
              Submit Guardian Enquiry
            </button>
          </form>

          <!-- Success Alert -->
          <div id="camp-success-box" class="alert alert-success mt-4" style="display: none;">
            <h4 class="alert-heading">Enquiry Received Successfully</h4>
            <p class="alert-body">
              Thank you. Your enquiry has been safely recorded in the foundation ledger under reference: <strong id="camp-ref-display"></strong>. The coaching coordinators will get in touch with current session timings.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  // Render filterable Camp photo grid & bind Lightbox
  const campGrid = container.querySelector("#camp-archive-grid");
  let activeMoment = "all";
  let currentFiltered = campPhotos;

  function renderCampGrid() {
    if (!campGrid) return;
    currentFiltered = campPhotos.filter(
      (item) => activeMoment === "all" || item.category === activeMoment
    );

    campGrid.innerHTML = currentFiltered
      .map((item, idx) => {
        const numStr = String(idx + 1).padStart(2, "0");
        const orientClass = item.orientation === "portrait" ? "is-portrait" : "is-landscape";
        const isWide = item.featured && item.orientation !== "portrait" && idx % 7 === 0;
        return `
          <figure
            class="gallery-modern-card ${orientClass} ${isWide ? "is-featured-span" : ""}"
            data-camp-idx="${idx}"
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
                <span class="gallery-inspect-btn">⤢ Click to Enlarge</span>
              </div>
            </div>
            <figcaption class="gallery-modern-caption">
              <p class="gallery-caption-text">${item.caption}</p>
            </figcaption>
          </figure>
        `;
      })
      .join("");
  }

  renderCampGrid();

  // Delegated click listener for slideshow, moment chips, and photo cards
  container.addEventListener("click", (e) => {
    const playBtn = e.target.closest("#play-camp-slideshow-btn");
    if (playBtn) {
      e.preventDefault();
      globalLightbox.open(campPhotos, 0, true);
      return;
    }

    const chip = e.target.closest("#camp-moment-filters .moment-chip");
    if (chip) {
      e.preventDefault();
      container
        .querySelectorAll("#camp-moment-filters .moment-chip")
        .forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeMoment = chip.getAttribute("data-moment") || "all";
      renderCampGrid();
      return;
    }

    const card = e.target.closest(".gallery-modern-card");
    if (card) {
      e.preventDefault();
      const idx = parseInt(card.getAttribute("data-camp-idx") || "0", 10);
      globalLightbox.open(currentFiltered, idx, false);
    }
  });

  // Form submission handling
  const form = container.querySelector("#camp-enquiry-form");
  const successBox = container.querySelector("#camp-success-box");
  const refDisplay = container.querySelector("#camp-ref-display");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = container.querySelector("#guardian-name").value.trim();
      const email = container.querySelector("#guardian-email").value.trim();
      const phone = container.querySelector("#guardian-phone").value.trim();
      const city = container.querySelector("#guardian-city").value.trim();
      const ageBand = container.querySelector("#child-age-band").value;
      const question = container.querySelector("#guardian-question").value.trim();

      const res = FlexonDB.createEnquiry({
        source: "camp_form",
        type: "football_camp",
        initiative: "Football Coaching Camp – Empower Youth Programme",
        name,
        email,
        phone,
        city,
        ageBand,
        message: `Parent enquiry (Age band ${ageBand}): ${question || "General batch schedule enquiry"}`
      });

      if (res.success) {
        refDisplay.textContent = res.reference;
        form.style.display = "none";
        successBox.style.display = "block";
      }
    });
  }

  return container;
}
