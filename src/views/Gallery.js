/**
 * Flexon Sports Foundation - Scalable Multi-Event Media Gallery Page
 * Authority: Blueprint v2.0 Section 11
 *
 * Information Architecture (Best-Practice 3-Tier Faceted Pattern for Multi-Event Scale):
 * - Tier 1 (Macro Horizon): Sport / Programme Discipline Tabs (Running, Football, Cricket, etc.) + View Mode Switcher
 * - Tier 2 (Structured Facet Bar): 4-Column Responsive Grid — Event/Edition Dropdown, Location Filter, Sort/Season, Instant Search
 * - Tier 3 (Contextual Micro-Facets): Dynamic Event Moment/Tag Chips derived automatically from active event(s)
 * - Event Directory Strip: Interactive visual Event Album Cards for 1-click event switching
 * - Backend-Ready: Powered by `galleryService.js` (`fetchBackendGalleryAlbums` & `window.FlexonGalleryAPI`)
 */

import {
  getAllGalleryAlbums,
  fetchBackendGalleryAlbums,
  computeGalleryFacets
} from "../services/galleryService.js";
import { globalLightbox } from "../components/Lightbox.js";

export function renderGalleryPage() {
  const container = document.createElement("div");
  container.className = "page-gallery";

  let albums = getAllGalleryAlbums();
  const hydAlbum = albums.find((a) => a.id === "hyderabad-2026") || albums[0];
  const initialTotalPhotos = albums.reduce((acc, a) => acc + a.items.length, 0);

  // Unified Faceted Filter State
  const state = {
    sport: "all",          // Tier 1: Macro Sport ("all" | "running" | "football" | "cricket" | ...)
    eventId: "all",        // Tier 2: Specific Event Album ID ("all" | album.id)
    city: "all",           // Tier 2: City / Location ("all" | "Hyderabad" | "Kerala" | ...)
    year: "all",           // Tier 2: Season / Year ("all" | "2026" | ...)
    sortBy: "newest",      // Tier 2: Sort order ("newest" | "most-photos" | "title")
    moment: "all",         // Tier 3: Contextual photo moment/category ("all" | "flag-off" | ...)
    search: "",            // Keyword query
    viewMode: "editorial"  // "editorial" | "masonry" | "compact" | "albums"
  };

  // Pagination limit per album for large backend events (e.g. 200+ photos)
  const INITIAL_ALBUM_LIMIT = 48;
  let expandedAlbums = new Set();

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="gallery-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            OFFICIAL MULTI-EVENT MEDIA ARCHIVE
          </span>
          <span class="hero-sdg-tag" id="hero-total-photos-pill">📸 ${initialTotalPhotos} VERIFIED PHOTOGRAPHS</span>
          <span class="hero-sdg-tag" id="hero-total-events-pill">🗂️ ${albums.length} EVENT ALBUMS</span>
        </div>

        <h1 class="page-title">
          PEOPLE. EFFORT. MOMENTS THAT MATTER.<br />
          <span class="text-gradient-red">FOUNDATION MEDIA GALLERY</span>
        </h1>

        <p class="hero-lead">
          Browse verified documentary photography across all Flexon Sports Foundation events, championships, and grassroots programmes — starting with <strong>FLEXATHON Hyderabad 2026</strong> at ESCI Campus. Filter by sport, event edition, location, or race moment.
        </p>

        <div class="page-hero-actions">
          <button type="button" class="btn btn-primary btn-lg" data-action="play-hyd-slideshow">
            <span>▶ Play Featured Event Slideshow (${hydAlbum ? hydAlbum.items.length : 0} Photos)</span>
          </button>
          <a href="#gallery-archive-section" class="btn btn-outline btn-lg" data-action="scroll-to-archive">
            <span>Explore Event Archive ↓</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val" id="metric-total-photos">${initialTotalPhotos}</span>
            <span class="page-metric-label">Verified Archive Photos</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val" id="metric-total-albums">${albums.length} Events</span>
            <span class="page-metric-label">Published Event Albums</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">${hydAlbum ? hydAlbum.items.length : 0} Photos</span>
            <span class="page-metric-label">FLEXATHON Hyderabad 2026</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">HD Theater</span>
            <span class="page-metric-label">Slideshow, Zoom & Filmstrip</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Interactive Multi-Event Gallery Section -->
    <section class="section section-albums" id="gallery-archive-section">
      <div class="container">

        <!-- =================================================================
             3-TIER SCALABLE FILTER COMMAND CENTER (Backend-Ready Architecture)
             ================================================================= -->
        <div class="gallery-command-center" role="region" aria-label="Gallery Archive Filters">

          <!-- TIER 1: Macro Sport / Programme Verticals (Left) + Display View Switcher (Right) -->
          <div class="gcc-tier1-bar">
            <div class="gcc-sport-tabs-wrap">
              <span class="gcc-step-tag">SPORT</span>
              <div class="gcc-sport-tabs" id="gcc-sport-tabs" role="tablist" aria-label="Filter by sport discipline">
                <!-- Populated dynamically by renderFilterHub() -->
              </div>
            </div>

            <div class="gcc-view-controls">
              <span class="gcc-step-tag hide-sm">VIEW</span>
              <div class="gallery-view-switcher" role="group" aria-label="Gallery layout view">
                <button
                  type="button"
                  class="view-mode-btn is-active"
                  data-view="editorial"
                  title="Editorial Photo Grid"
                >
                  ⊞ Grid
                </button>
                <button
                  type="button"
                  class="view-mode-btn"
                  data-view="masonry"
                  title="Natural Aspect Ratio Masonry"
                >
                  ▤ Natural
                </button>
                <button
                  type="button"
                  class="view-mode-btn"
                  data-view="compact"
                  title="High-Density Contact Sheet"
                >
                  ▦ Compact
                </button>
                <button
                  type="button"
                  class="view-mode-btn"
                  data-view="albums"
                  title="Browse Event Album Cards"
                >
                  🗂️ Albums
                </button>
              </div>
            </div>
          </div>

          <!-- TIER 2: 4-Column Structured Facet Controls (Scales to 100s of Backend Events) -->
          <div class="gcc-tier2-grid">
            <!-- Col 1: Event / Edition Dropdown -->
            <div class="gcc-field">
              <label for="gcc-event-select" class="gcc-field-label">
                <span>📅 Event / Edition</span>
                <span class="gcc-field-hint" id="gcc-event-count-hint"></span>
              </label>
              <div class="gcc-select-wrap">
                <select id="gcc-event-select" class="gcc-select" aria-label="Select Event Album">
                  <!-- Populated dynamically -->
                </select>
              </div>
            </div>

            <!-- Col 2: Location / City Dropdown -->
            <div class="gcc-field">
              <label for="gcc-city-select" class="gcc-field-label">
                <span>📍 Location / City</span>
              </label>
              <div class="gcc-select-wrap">
                <select id="gcc-city-select" class="gcc-select" aria-label="Filter by City or Location">
                  <!-- Populated dynamically -->
                </select>
              </div>
            </div>

            <!-- Col 3: Sort & Season Order -->
            <div class="gcc-field">
              <label for="gcc-sort-select" class="gcc-field-label">
                <span>⇅ Sort Archive</span>
              </label>
              <div class="gcc-select-wrap">
                <select id="gcc-sort-select" class="gcc-select" aria-label="Sort events and photographs">
                  <option value="newest">Newest Events First (2026)</option>
                  <option value="most-photos">Most Photographs First</option>
                  <option value="title">Event Name (A–Z)</option>
                </select>
              </div>
            </div>

            <!-- Col 4: Instant Keyword Search -->
            <div class="gcc-field gcc-field-search">
              <label for="gallery-search-input" class="gcc-field-label">
                <span>🔍 Search Captions & Moments</span>
              </label>
              <div class="gcc-search-input-wrap">
                <input
                  type="search"
                  id="gallery-search-input"
                  class="gcc-search-input"
                  placeholder="Search runner, stage, 10K, award..."
                  aria-label="Search photographs by caption, event, or moment"
                />
                <button
                  type="button"
                  class="gcc-search-clear-btn"
                  id="gcc-search-clear"
                  data-action="clear-search"
                  title="Clear search"
                  aria-label="Clear search query"
                  style="display: none;"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          <!-- TIER 3: Dynamic Contextual Moment Chips (Derived from selected Event/Sport) -->
          <div class="gcc-tier3-moments" id="gcc-moments-bar">
            <div class="gcc-moments-left">
              <span class="subfilter-label">MOMENT / CATEGORY:</span>
              <div class="subfilter-chips" id="gcc-moment-chips" role="group" aria-label="Filter by event moment">
                <!-- Populated dynamically from active album(s) -->
              </div>
            </div>
          </div>

          <!-- TIER 4: Live Filter Status Bar & Active Filter Trail -->
          <div class="gcc-status-footer" id="gallery-status-bar">
            <!-- Populated dynamically -->
          </div>
        </div>

        <!-- =================================================================
             EVENT ALBUMS QUICK-SWITCHER STRIP (Visual Event Directory)
             ================================================================= -->
        <div class="event-directory-strip-wrap" id="event-directory-strip-wrap">
          <div class="event-directory-header">
            <span class="event-directory-title" id="event-directory-title">
              📂 Event Albums Directory — Click an event card to focus its archive
            </span>
            <span class="event-directory-sub text-xs text-muted">
              Supports multi-event backend collections
            </span>
          </div>
          <div class="event-directory-cards" id="event-directory-cards">
            <!-- Populated dynamically -->
          </div>
        </div>

        <!-- Featured Bento Spotlight (Shown when viewing All or Hyderabad with no subfilter) -->
        <div class="gallery-bento-section-wrap" id="gallery-bento-wrap"></div>

        <!-- Main Albums / Photos Display Container -->
        <div class="albums-display-wrap mt-4" id="albums-display"></div>

        <!-- Privacy & Image Correction Note -->
        <div class="card p-3 bg-surface mt-5 text-center max-w-reading mx-auto border" style="border-left: 4px solid var(--color-ink);">
          <p class="text-xs text-muted">
            <strong>Participant Privacy Notice:</strong> Photographs published here depict official public sporting events. If you or a family member appear in an image and wish to request an image caption correction or removal, please reach out to our grievance desk at <a href="mailto:flexonsport@gmail.com" class="text-primary font-weight-bold">flexonsport@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  `;

  // DOM References
  const sportTabsEl = container.querySelector("#gcc-sport-tabs");
  const eventSelectEl = container.querySelector("#gcc-event-select");
  const eventCountHintEl = container.querySelector("#gcc-event-count-hint");
  const citySelectEl = container.querySelector("#gcc-city-select");
  const sortSelectEl = container.querySelector("#gcc-sort-select");
  const searchInputEl = container.querySelector("#gallery-search-input");
  const searchClearBtn = container.querySelector("#gcc-search-clear");
  const momentChipsEl = container.querySelector("#gcc-moment-chips");
  const momentsBarEl = container.querySelector("#gcc-moments-bar");
  const statusBarEl = container.querySelector("#gallery-status-bar");
  const eventDirectoryWrapEl = container.querySelector("#event-directory-strip-wrap");
  const eventDirectoryCardsEl = container.querySelector("#event-directory-cards");
  const bentoWrapEl = container.querySelector("#gallery-bento-wrap");
  const albumsDisplayEl = container.querySelector("#albums-display");

  // Map of currently filtered items per album ID for accurate Lightbox indexing
  let currentFilteredMap = {};
  let latestFacets = null;

  /**
   * Renders the Featured Bento Spotlight for the active featured event
   */
  function renderFeaturedBento(facets) {
    if (!bentoWrapEl) return;

    const showBento =
      state.viewMode !== "albums" &&
      state.moment === "all" &&
      !state.search.trim();

    if (!showBento || !facets.filteredAlbumsResult.length) {
      bentoWrapEl.style.display = "none";
      return;
    }

    const featuredEntry =
      facets.filteredAlbumsResult.find(({ album }) => album.featured && album.items.filter((i) => i.featured).length >= 3) ||
      facets.filteredAlbumsResult[0];

    const featuredAlbum = featuredEntry ? featuredEntry.album : null;
    if (!featuredAlbum || !featuredAlbum.items.length) {
      bentoWrapEl.style.display = "none";
      return;
    }

    const featuredItems = featuredAlbum.items.filter((i) => i.featured).slice(0, 5);
    if (featuredItems.length < 3) {
      bentoWrapEl.style.display = "none";
      return;
    }

    const reportHref =
      featuredAlbum.id === "football-training"
        ? "/programs/empower-youth-football-camp"
        : "/flexathon/hyderabad-2026";
    const reportLabel =
      featuredAlbum.id === "football-training" ? "Camp Details →" : "Event Report →";

    bentoWrapEl.style.display = "block";
    bentoWrapEl.innerHTML = `
      <div class="gallery-bento-header">
        <div>
          <span class="text-eyebrow">FEATURED EVENT SPOTLIGHT • ${featuredAlbum.date.toUpperCase()}</span>
          <h2 class="heading-section" style="margin-bottom: 4px; font-size: 1.6rem;">
            ${featuredAlbum.shortTitle || featuredAlbum.title} Highlights
          </h2>
          <p class="text-sm text-muted">
            ${featuredAlbum.subtitle} • Click any highlight below to inspect in HD
          </p>
        </div>
        <div class="gallery-bento-actions">
          <button type="button" class="btn btn-primary btn-sm" data-action="open-album" data-album-open="${featuredAlbum.id}">
            <span>⤢ Open All ${featuredAlbum.items.length} Photos</span>
          </button>
          <a href="${reportHref}" class="btn btn-outline btn-sm">
            <span>${reportLabel}</span>
          </a>
        </div>
      </div>

      <div class="gallery-bento-mosaic">
        ${featuredItems
          .map((item, idx) => {
            const albumIndex = featuredAlbum.items.findIndex((x) => x.id === item.id);
            const isHero = idx === 0;
            return `
              <article
                class="bento-mosaic-card ${isHero ? "bento-card-hero" : `bento-card-sub-${idx}`}"
                data-bento-album="${featuredAlbum.id}"
                data-bento-idx="${albumIndex >= 0 ? albumIndex : 0}"
                tabindex="0"
                role="button"
                aria-label="Open featured photo: ${item.caption}"
              >
                <img
                  src="${item.src}"
                  alt="${item.alt}"
                  class="bento-mosaic-img"
                  ${isHero ? 'fetchpriority="high"' : 'loading="lazy"'}
                />
                <div class="bento-mosaic-overlay">
                  <div class="bento-mosaic-top">
                    <span class="bento-cat-pill">${item.categoryLabel || "Highlight"}</span>
                    <span class="bento-expand-icon" aria-hidden="true">⤢</span>
                  </div>
                  <div class="bento-mosaic-bottom">
                    <p class="bento-mosaic-caption">${item.caption}</p>
                    ${
                      idx === featuredItems.length - 1
                        ? `<span class="bento-more-badge">Click to view all ${featuredAlbum.items.length} photos</span>`
                        : ""
                    }
                  </div>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    `;
  }

  /**
   * Master render function that synchronizes all 3 filter tiers, the Event Directory Strip,
   * and the main photo/album display from `state`
   */
  function updateGalleryUI() {
    const facets = computeGalleryFacets(albums, state);
    latestFacets = facets;
    currentFilteredMap = {};

    // If the currently selected eventId is no longer in eventsFacet (e.g. user switched Sport or City),
    // automatically reset eventId to "all" and recompute
    if (
      state.eventId !== "all" &&
      !facets.eventsFacet.some((ev) => ev.id === state.eventId)
    ) {
      state.eventId = "all";
      state.moment = "all";
      return updateGalleryUI();
    }

    // If the currently selected moment is no longer in momentsFacet, reset moment to "all"
    if (
      state.moment !== "all" &&
      !facets.momentsFacet.some((m) => m.id === state.moment)
    ) {
      state.moment = "all";
      return updateGalleryUI();
    }

    // 1. Render Tier 1: Sport Discipline Tabs
    if (sportTabsEl) {
      sportTabsEl.innerHTML = facets.sportsFacet
        .map((sp) => {
          const isActive = state.sport === sp.id;
          return `
            <button
              type="button"
              class="gcc-sport-pill ${isActive ? "is-active" : ""}"
              data-sport="${sp.id}"
              role="tab"
              aria-selected="${isActive ? "true" : "false"}"
            >
              <span class="gcc-sport-icon" aria-hidden="true">${sp.icon}</span>
              <span>${sp.label}</span>
              <span class="gcc-sport-badge">${sp.photoCount}</span>
            </button>
          `;
        })
        .join("");
    }

    // Sync View Switcher buttons
    container.querySelectorAll(".view-mode-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-view") === state.viewMode);
    });

    // 2. Render Tier 2: Event Select Dropdown, City Select Dropdown, Sort Select, Search Clear
    if (eventCountHintEl) {
      eventCountHintEl.textContent = `${facets.eventsFacet.length} ${
        facets.eventsFacet.length === 1 ? "Event" : "Events"
      }`;
    }

    if (eventSelectEl) {
      const totalInEvents = facets.eventsFacet.reduce((s, e) => s + e.photoCount, 0);
      eventSelectEl.innerHTML = `
        <option value="all" ${state.eventId === "all" ? "selected" : ""}>
          All Events (${facets.eventsFacet.length} ${
        facets.eventsFacet.length === 1 ? "Album" : "Albums"
      } • ${totalInEvents} Photos)
        </option>
        ${facets.eventsFacet
          .map(
            (ev) => `
          <option value="${ev.id}" ${state.eventId === ev.id ? "selected" : ""}>
            ${ev.sportIcon} ${ev.title} — ${ev.city} (${ev.photoCount} Photos)
          </option>
        `
          )
          .join("")}
      `;
    }

    if (citySelectEl) {
      citySelectEl.innerHTML = `
        <option value="all" ${state.city === "all" ? "selected" : ""}>
          All Locations (${facets.citiesFacet.length} ${
        facets.citiesFacet.length === 1 ? "Region" : "Regions"
      })
        </option>
        ${facets.citiesFacet
          .map(
            (c) => `
          <option value="${c.id}" ${state.city === c.id ? "selected" : ""}>
            📍 ${c.label} (${c.count} Photos)
          </option>
        `
          )
          .join("")}
      `;
    }

    if (sortSelectEl && sortSelectEl.value !== state.sortBy) {
      sortSelectEl.value = state.sortBy;
    }

    if (searchClearBtn) {
      searchClearBtn.style.display = state.search.trim() ? "inline-flex" : "none";
    }

    // 3. Render Tier 3: Contextual Moment Chips (Dynamic per selected Event/Sport)
    if (momentsBarEl && momentChipsEl) {
      if (facets.momentsFacet.length <= 1 || state.viewMode === "albums") {
        momentsBarEl.style.display = "none";
      } else {
        momentsBarEl.style.display = "flex";
        momentChipsEl.innerHTML = facets.momentsFacet
          .map((m) => {
            const isActive = state.moment === m.id;
            return `
              <button
                type="button"
                class="moment-chip ${isActive ? "is-active" : ""}"
                data-moment="${m.id}"
              >
                <span>${m.icon} ${m.label}</span>
                <span class="moment-chip-count">(${m.count})</span>
              </button>
            `;
          })
          .join("");
      }
    }

    // 4. Render Tier 4: Live Filter Status Bar & Removable Filter Chips
    if (statusBarEl) {
      const activeChips = [];
      if (state.sport !== "all") {
        const spObj = facets.sportsFacet.find((s) => s.id === state.sport);
        activeChips.push({
          key: "sport",
          label: `Sport: ${spObj ? spObj.label : state.sport}`
        });
      }
      if (state.eventId !== "all") {
        const evObj = facets.eventsFacet.find((e) => e.id === state.eventId);
        activeChips.push({
          key: "eventId",
          label: `Event: ${evObj ? evObj.title : state.eventId}`
        });
      }
      if (state.city !== "all") {
        activeChips.push({
          key: "city",
          label: `City: ${state.city}`
        });
      }
      if (state.moment !== "all") {
        const mObj = facets.momentsFacet.find((m) => m.id === state.moment);
        activeChips.push({
          key: "moment",
          label: `Moment: ${mObj ? mObj.label : state.moment}`
        });
      }
      if (state.search.trim()) {
        activeChips.push({
          key: "search",
          label: `Search: "${state.search.trim()}"`
        });
      }

      const isAnyFilterActive = activeChips.length > 0;
      const matchedAlbumCount = facets.filteredAlbumsResult.length;

      statusBarEl.innerHTML = `
        <div class="status-bar-left">
          <span class="status-dot" aria-hidden="true"></span>
          <span>
            Showing <strong>${facets.totalMatchedPhotos}</strong> of ${facets.totalArchivePhotos} photographs
            across <strong>${matchedAlbumCount}</strong> ${
        matchedAlbumCount === 1 ? "event album" : "event albums"
      }
          </span>
          ${
            activeChips.length > 0
              ? `<div class="active-filter-trail">
                  ${activeChips
                    .map(
                      (chip) => `
                    <button
                      type="button"
                      class="applied-filter-tag"
                      data-action="remove-filter"
                      data-filter-key="${chip.key}"
                      title="Remove ${chip.label} filter"
                    >
                      <span>${chip.label}</span>
                      <span class="tag-x" aria-hidden="true">✕</span>
                    </button>
                  `
                    )
                    .join("")}
                </div>`
              : `<span class="status-hint-text">— <em>Click any photo to open HD Theater</em></span>`
          }
        </div>
        ${
          isAnyFilterActive
            ? `<button type="button" class="status-reset-btn" data-action="reset-filters">
                ✕ Reset All Filters
              </button>`
            : ""
        }
      `;
    }

    // 5. Render Event Directory Strip (Quick Visual Event Switcher Cards)
    if (eventDirectoryWrapEl && eventDirectoryCardsEl) {
      if (state.viewMode === "albums" || facets.eventsFacet.length === 0) {
        eventDirectoryWrapEl.style.display = "none";
      } else {
        eventDirectoryWrapEl.style.display = "block";
        eventDirectoryCardsEl.innerHTML = facets.eventsFacet
          .map((ev) => {
            const isSelected = state.eventId === ev.id;
            return `
              <button
                type="button"
                class="event-strip-card ${isSelected ? "is-selected" : ""}"
                data-action="select-event-card"
                data-event-id="${ev.id}"
                aria-pressed="${isSelected ? "true" : "false"}"
              >
                <div class="event-strip-thumb-wrap">
                  <img src="${ev.cover}" alt="${ev.title}" class="event-strip-thumb" loading="lazy" />
                  <span class="event-strip-count">${ev.photoCount}</span>
                </div>
                <div class="event-strip-body">
                  <div class="event-strip-top">
                    <span class="event-strip-initiative">${ev.sportIcon} ${ev.initiative}</span>
                    ${
                      isSelected
                        ? `<span class="event-strip-active-pill">✓ Selected</span>`
                        : ""
                    }
                  </div>
                  <h4 class="event-strip-name">${ev.title}</h4>
                  <span class="event-strip-meta">📍 ${ev.city} • ${ev.date}</span>
                </div>
              </button>
            `;
          })
          .join("");
      }
    }

    // 6. Render Featured Bento Spotlight
    renderFeaturedBento(facets);

    // 7. Render Main Display Area (Either "Albums Overview Mode" or "Photo Stream Mode")
    if (facets.totalMatchedPhotos === 0) {
      albumsDisplayEl.innerHTML = `
        <div class="card p-5 text-center bg-surface">
          <p class="text-muted mb-3">No photographs match your current filter combination.</p>
          <button type="button" class="btn btn-primary btn-sm" data-action="reset-filters">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    // Mode A: Dedicated Event Albums Overview Grid (`viewMode === "albums"`)
    if (state.viewMode === "albums") {
      albumsDisplayEl.innerHTML = `
        <div class="albums-overview-grid">
          ${facets.filteredAlbumsResult
            .map(({ album, items }) => {
              currentFilteredMap[album.id] = items;
              const previewThumbs = items.slice(0, 4);
              return `
                <article class="album-overview-card" data-album-id="${album.id}">
                  <div
                    class="album-overview-cover-wrap"
                    data-action="drill-into-album"
                    data-album-open="${album.id}"
                    role="button"
                    tabindex="0"
                  >
                    <img src="${album.cover}" alt="${album.title}" class="album-overview-cover" loading="lazy" />
                    <div class="album-overview-badges">
                      <span class="badge badge-primary">${album.sportIcon} ${album.initiative}</span>
                      <span class="album-overview-count-pill">📸 ${items.length} Photos</span>
                    </div>
                  </div>
                  <div class="album-overview-body">
                    <div class="album-overview-meta">
                      <span>📍 ${album.city}</span>
                      <span>•</span>
                      <span>📅 ${album.date}</span>
                    </div>
                    <h3 class="album-overview-title">${album.title}</h3>
                    <p class="album-overview-sub">${album.subtitle}</p>

                    <div class="album-overview-thumb-row">
                      ${previewThumbs
                        .map(
                          (t, idx) => `
                        <img
                          src="${t.src}"
                          alt="${t.alt}"
                          class="album-mini-thumb"
                          loading="lazy"
                          data-album="${album.id}"
                          data-filtered-idx="${idx}"
                        />
                      `
                        )
                        .join("")}
                    </div>

                    <div class="album-overview-actions">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        data-action="drill-into-album"
                        data-album-open="${album.id}"
                      >
                        <span>Open Event Photos (${items.length}) →</span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline btn-sm"
                        data-action="play-album"
                        data-album-open="${album.id}"
                      >
                        <span>▶ Slideshow</span>
                      </button>
                    </div>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      `;
      return;
    }

    // Mode B: Photo Stream grouped by Event Album (`editorial`, `masonry`, `compact`)
    albumsDisplayEl.innerHTML = facets.filteredAlbumsResult
      .map(({ album, items }) => {
        currentFilteredMap[album.id] = items;
        const isExpanded = expandedAlbums.has(album.id);
        const visibleItems = isExpanded ? items : items.slice(0, INITIAL_ALBUM_LIMIT);
        const hasMore = items.length > visibleItems.length;

        return `
          <div class="album-block" data-album-id="${album.id}">
            <div class="album-folder-header">
              <div class="album-folder-info">
                <div class="album-folder-badges">
                  <span class="badge badge-primary font-weight-bold">${album.sportIcon} ${album.initiative}</span>
                  <span class="album-location-pill">📍 ${album.city} • ${album.date}</span>
                  ${
                    album.folder
                      ? `<span class="album-folder-path" title="Dedicated gallery folder">📁 ${album.folder}</span>`
                      : ""
                  }
                  <span class="album-photo-count-pill">${items.length} ${
          items.length === 1 ? "Photo" : "Photos"
        }</span>
                </div>
                <h3 class="album-title mt-1">${album.title}</h3>
                <p class="album-meta text-xs text-muted">${album.subtitle}</p>
                ${
                  album.inauguratedBy || album.ageGroup || album.trainingPeriod
                    ? `<div class="album-detail-facts mt-2">
                        ${album.organisedBy ? `<span class="album-fact-chip"><strong>Organised by:</strong> ${album.organisedBy}</span>` : ""}
                        ${album.inauguratedBy ? `<span class="album-fact-chip"><strong>Inaugurated by:</strong> ${album.inauguratedBy}</span>` : ""}
                        ${album.programme ? `<span class="album-fact-chip"><strong>Programme:</strong> ${album.programme}</span>` : ""}
                        ${album.ageGroup ? `<span class="album-fact-chip"><strong>Age Group:</strong> ${album.ageGroup}</span>` : ""}
                        ${album.trainingPeriod ? `<span class="album-fact-chip"><strong>Training Period:</strong> ${album.trainingPeriod}</span>` : ""}
                      </div>`
                    : ""
                }
                ${
                  album.description
                    ? `<p class="album-desc-text mt-2">${album.description}</p>`
                    : ""
                }
              </div>
              <div class="album-folder-actions">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  data-action="play-album"
                  data-album-open="${album.id}"
                >
                  <span>▶ Play Slideshow (${items.length})</span>
                </button>
                <button
                  type="button"
                  class="btn btn-outline btn-sm"
                  data-action="open-album"
                  data-album-open="${album.id}"
                >
                  <span>⤢ Fullscreen Viewer</span>
                </button>
              </div>
            </div>

            <div class="gallery-modern-grid view-${state.viewMode}">
              ${visibleItems
                .map((item, idx) => {
                  const numStr = String(idx + 1).padStart(2, "0");
                  const isWide =
                    state.viewMode === "editorial" &&
                    item.featured &&
                    item.orientation !== "portrait" &&
                    idx % 7 === 0;
                  const orientClass =
                    item.orientation === "portrait" ? "is-portrait" : "is-landscape";

                  return `
                    <figure
                      class="gallery-modern-card ${orientClass} ${isWide ? "is-featured-span" : ""}"
                      data-album="${album.id}"
                      data-filtered-idx="${idx}"
                      tabindex="0"
                      role="button"
                      aria-label="Inspect photo ${numStr}: ${item.caption}"
                    >
                      <div class="gallery-modern-img-wrap">
                        <img
                          src="${item.src}"
                          alt="${item.alt}"
                          class="gallery-modern-img"
                          loading="lazy"
                        />
                        <div class="gallery-card-top-badges">
                          <span class="gallery-idx-pill">#${numStr}</span>
                          ${
                            item.categoryLabel
                              ? `<span class="gallery-cat-tag">${item.categoryLabel}</span>`
                              : ""
                          }
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
                .join("")}
            </div>

            ${
              hasMore
                ? `<div class="text-center mt-4">
                    <button
                      type="button"
                      class="btn btn-outline"
                      data-action="expand-album"
                      data-album-id="${album.id}"
                    >
                      Load All ${items.length} Photographs (+${items.length - visibleItems.length} More)
                    </button>
                  </div>`
                : ""
            }
          </div>
        `;
      })
      .join("");
  }

  function resetAllFilters() {
    state.sport = "all";
    state.eventId = "all";
    state.city = "all";
    state.year = "all";
    state.moment = "all";
    state.search = "";
    if (searchInputEl) searchInputEl.value = "";
    updateGalleryUI();
  }

  // Unified Event Delegation on Container
  container.addEventListener("click", (e) => {
    // 1. Action buttons
    const actionBtn = e.target.closest("[data-action]");
    if (actionBtn) {
      const action = actionBtn.getAttribute("data-action");

      if (action === "play-hyd-slideshow") {
        e.preventDefault();
        if (hydAlbum) globalLightbox.open(hydAlbum.items, 0, true);
        return;
      }
      if (action === "open-hyd-first") {
        e.preventDefault();
        if (hydAlbum) globalLightbox.open(hydAlbum.items, 0, false);
        return;
      }
      if (action === "scroll-to-archive") {
        e.preventDefault();
        const archiveSec = container.querySelector("#gallery-archive-section");
        if (archiveSec) archiveSec.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (action === "reset-filters") {
        e.preventDefault();
        resetAllFilters();
        return;
      }
      if (action === "clear-search") {
        e.preventDefault();
        state.search = "";
        if (searchInputEl) {
          searchInputEl.value = "";
          searchInputEl.focus();
        }
        updateGalleryUI();
        return;
      }
      if (action === "remove-filter") {
        e.preventDefault();
        const key = actionBtn.getAttribute("data-filter-key");
        if (key === "sport") state.sport = "all";
        if (key === "eventId") state.eventId = "all";
        if (key === "city") state.city = "all";
        if (key === "moment") state.moment = "all";
        if (key === "search") {
          state.search = "";
          if (searchInputEl) searchInputEl.value = "";
        }
        updateGalleryUI();
        return;
      }
      if (action === "select-event-card") {
        e.preventDefault();
        const clickedEventId = actionBtn.getAttribute("data-event-id");
        // Toggle: clicking the already selected event card returns to "all"
        state.eventId = state.eventId === clickedEventId ? "all" : clickedEventId;
        state.moment = "all";
        updateGalleryUI();
        return;
      }
      if (action === "drill-into-album") {
        e.preventDefault();
        const albumId = actionBtn.getAttribute("data-album-open");
        state.eventId = albumId || "all";
        state.viewMode = "editorial";
        state.moment = "all";
        updateGalleryUI();
        const archiveSec = container.querySelector("#gallery-archive-section");
        if (archiveSec) archiveSec.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (action === "expand-album") {
        e.preventDefault();
        const albumId = actionBtn.getAttribute("data-album-id");
        if (albumId) {
          expandedAlbums.add(albumId);
          updateGalleryUI();
        }
        return;
      }
      if (action === "play-album" || action === "open-album") {
        e.preventDefault();
        const albumId = actionBtn.getAttribute("data-album-open");
        const album = albums.find((a) => a.id === albumId);
        if (!album) return;
        const list =
          currentFilteredMap[albumId] && currentFilteredMap[albumId].length
            ? currentFilteredMap[albumId]
            : album.items;
        globalLightbox.open(list, 0, action === "play-album");
        return;
      }
    }

    // 2. Tier 1: Sport Discipline Pill click
    const sportBtn = e.target.closest(".gcc-sport-pill");
    if (sportBtn) {
      e.preventDefault();
      state.sport = sportBtn.getAttribute("data-sport") || "all";
      state.eventId = "all";
      state.moment = "all";
      updateGalleryUI();
      return;
    }

    // 3. View Mode Switcher click
    const viewBtn = e.target.closest(".view-mode-btn");
    if (viewBtn) {
      e.preventDefault();
      state.viewMode = viewBtn.getAttribute("data-view") || "editorial";
      updateGalleryUI();
      return;
    }

    // 4. Tier 3: Moment Chip click
    const momentChip = e.target.closest(".moment-chip");
    if (momentChip) {
      e.preventDefault();
      state.moment = momentChip.getAttribute("data-moment") || "all";
      updateGalleryUI();
      return;
    }

    // 5. Featured Bento Mosaic card click
    const bentoCard = e.target.closest(".bento-mosaic-card");
    if (bentoCard) {
      e.preventDefault();
      const bAlbumId = bentoCard.getAttribute("data-bento-album");
      const bIdx = parseInt(bentoCard.getAttribute("data-bento-idx") || "0", 10);
      const bAlbum = albums.find((a) => a.id === bAlbumId) || hydAlbum;
      if (bAlbum) globalLightbox.open(bAlbum.items, bIdx, false);
      return;
    }

    // 6. Mini thumb click inside Albums Overview card
    const miniThumb = e.target.closest(".album-mini-thumb");
    if (miniThumb) {
      e.preventDefault();
      const albumId = miniThumb.getAttribute("data-album");
      const idx = parseInt(miniThumb.getAttribute("data-filtered-idx") || "0", 10);
      const album = albums.find((a) => a.id === albumId);
      if (album) {
        const list = currentFilteredMap[albumId] || album.items;
        globalLightbox.open(list, idx, false);
      }
      return;
    }

    // 7. Modern Gallery Photo Card click
    const photoCard = e.target.closest(".gallery-modern-card");
    if (photoCard) {
      e.preventDefault();
      const albumId = photoCard.getAttribute("data-album");
      const idx = parseInt(photoCard.getAttribute("data-filtered-idx") || "0", 10);
      const album = albums.find((a) => a.id === albumId);
      if (!album) return;
      const list =
        currentFilteredMap[albumId] && currentFilteredMap[albumId].length
          ? currentFilteredMap[albumId]
          : album.items;
      globalLightbox.open(list, idx, false);
    }
  });

  // Select Dropdown Listeners (Tier 2)
  if (eventSelectEl) {
    eventSelectEl.addEventListener("change", (e) => {
      state.eventId = e.target.value || "all";
      state.moment = "all";
      updateGalleryUI();
    });
  }

  if (citySelectEl) {
    citySelectEl.addEventListener("change", (e) => {
      state.city = e.target.value || "all";
      state.eventId = "all";
      state.moment = "all";
      updateGalleryUI();
    });
  }

  if (sortSelectEl) {
    sortSelectEl.addEventListener("change", (e) => {
      state.sortBy = e.target.value || "newest";
      updateGalleryUI();
    });
  }

  // Search box live filtering
  if (searchInputEl) {
    searchInputEl.addEventListener("input", (e) => {
      state.search = e.target.value || "";
      updateGalleryUI();
    });
  }

  // Keyboard accessibility for cards
  container.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(
      ".bento-mosaic-card, .gallery-modern-card, .album-overview-cover-wrap"
    );
    if (card) {
      e.preventDefault();
      card.click();
    }
  });

  // Listen for runtime backend updates via `window.FlexonGalleryAPI`
  if (typeof window !== "undefined" && typeof window.addEventListener === "function") window.addEventListener("flexon:gallery-updated", () => {
    if (!container.isConnected) return;
    albums = getAllGalleryAlbums();
    const totalP = albums.reduce((s, a) => s + a.items.length, 0);
    const pPill = container.querySelector("#hero-total-photos-pill");
    const ePill = container.querySelector("#hero-total-events-pill");
    const mPhotos = container.querySelector("#metric-total-photos");
    const mAlbums = container.querySelector("#metric-total-albums");
    if (pPill) pPill.textContent = `📸 ${totalP} VERIFIED PHOTOGRAPHS`;
    if (ePill) ePill.textContent = `🗂️ ${albums.length} EVENT ALBUMS`;
    if (mPhotos) mPhotos.textContent = String(totalP);
    if (mAlbums) mAlbums.textContent = `${albums.length} Events`;
    updateGalleryUI();
  });

  // Initial synchronous render
  updateGalleryUI();

  // Optional async backend sync if window.FLEXON_GALLERY_API_URL is configured
  if (typeof window !== "undefined" && window.FLEXON_GALLERY_API_URL) {
    fetchBackendGalleryAlbums().then((freshAlbums) => {
      albums = freshAlbums;
      updateGalleryUI();
    });
  }

  return container;
}
