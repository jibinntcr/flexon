/**
 * Flexon Sports Foundation - Media Gallery Page
 * Authority: Blueprint v2.0 Section 11
 */

import { galleryAlbums } from "../data/content.js";
import { globalLightbox } from "../components/Lightbox.js";

export function renderGalleryPage() {
  const container = document.createElement("div");
  container.className = "page-gallery";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="gallery-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            MEDIA ARCHIVE
          </span>
          <span class="hero-sdg-tag">📸 HIGH-RES DOCUMENTARY</span>
          <span class="hero-sdg-tag">SAFEGUARDED MEDIA</span>
        </div>

        <h1 class="page-title">
          PEOPLE. EFFORT. MOMENTS THAT MATTER.<br />
          <span class="text-gradient-red">FOUNDATION MEDIA GALLERY</span>
        </h1>

        <p class="hero-lead">
          Explore documentary photographs and verified highlights from Flexon events, youth football coaching clinics, and community cricket tournaments. Click any image to inspect in high resolution with documentary captions.
        </p>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">3</span>
            <span class="page-metric-label">Documented Albums</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">High-Res</span>
            <span class="page-metric-label">Full Screen Lightbox</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Verified</span>
            <span class="page-metric-label">Official Event Cameras</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Privacy</span>
            <span class="page-metric-label">Safeguarded Public Records</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Albums Section -->
    <section class="section section-albums">
      <div class="container">
        <!-- Album Selectors -->
        <div class="albums-tabs text-center mb-4">
          <button class="tab-btn is-active" data-album="all">All Media Albums</button>
          <button class="tab-btn" data-album="hyderabad-2026">Hyderabad 2026</button>
          <button class="tab-btn" data-album="football-training">Youth Football</button>
          <button class="tab-btn" data-album="veteran-cricket">Veteran Cricket</button>
        </div>

        <!-- Albums Grid -->
        <div class="albums-display-wrap mt-4" id="albums-display">
          ${galleryAlbums.map(album => `
            <div class="album-block mb-5" data-album-id="${album.id}">
              <div class="album-header d-flex justify-between align-center flex-wrap gap-2 pb-2 mb-3 border-bottom">
                <div>
                  <span class="badge badge-primary font-weight-bold">${album.initiative}</span>
                  <h3 class="album-title mt-1 font-weight-bold" style="font-size: 1.4rem;">${album.title}</h3>
                  <p class="album-meta text-xs text-muted">${album.subtitle} • ${album.count} Photos</p>
                </div>
              </div>

              <div class="gallery-grid mt-3">
                ${album.items.map((item, idx) => `
                  <div class="gallery-item-card" data-album="${album.id}" data-idx="${idx}">
                    <img src="${item.src}" alt="${item.alt}" class="gallery-card-img" loading="lazy" />
                    <div class="gallery-item-caption">
                      <span>${item.caption}</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Privacy & Image Correction Note -->
        <div class="card p-3 bg-surface mt-5 text-center max-w-reading mx-auto border" style="border-left: 4px solid var(--color-ink);">
          <p class="text-xs text-muted">
            <strong>Participant Privacy Notice:</strong> Photographs published here depict official public events. If you or a family member appear in an image and wish to request an image caption correction or removal, please reach out to our grievance desk at <a href="mailto:flexonsport@gmail.com" class="text-primary font-weight-bold">flexonsport@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  `;

  // Attach Lightbox triggers
  const items = container.querySelectorAll(".gallery-item-card");
  items.forEach(card => {
    card.addEventListener("click", () => {
      const albumId = card.getAttribute("data-album");
      const idx = parseInt(card.getAttribute("data-idx") || "0", 10);
      const album = galleryAlbums.find(a => a.id === albumId);
      if (album) {
        globalLightbox.open(album.items, idx);
      }
    });
  });

  // Filter Albums
  const tabBtns = container.querySelectorAll(".tab-btn");
  const albumBlocks = container.querySelectorAll(".album-block");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const target = btn.getAttribute("data-album");
      albumBlocks.forEach(block => {
        if (target === "all" || block.getAttribute("data-album-id") === target) {
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      });
    });
  });

  return container;
}
