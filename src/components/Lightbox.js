/**
 * Flexon Sports Foundation - Modern Interactive Lightbox Theater
 * Authority: Blueprint v2.0 Section 11 & 20
 *
 * Features:
 * - High-resolution image/media theater modal with glassmorphic UI
 * - Top bar with counter, category pill, auto-play slideshow toggle, zoom toggle, download link, and close button
 * - Keyboard navigation (Esc to close, ArrowLeft for previous, ArrowRight for next, Space to play/pause, Z to zoom)
 * - Touch swipe navigation (left/right) for mobile & tablet
 * - Interactive thumbnail filmstrip with automatic active-item centering
 * - Focus restoration and safe DOM mounting
 */

export class Lightbox {
  constructor() {
    this.items = [];
    this.currentIndex = 0;
    this.isOpen = false;
    this.isZoomed = false;
    this.autoPlayTimer = null;
    this.previouslyFocused = null;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.createDom();
    this.bindEvents();
  }

  createDom() {
    const existing = document.getElementById("global-lightbox");
    if (existing) {
      existing.remove();
    }

    this.el = document.createElement("div");
    this.el.className = "lightbox-modal";
    this.el.id = "global-lightbox";
    this.el.setAttribute("role", "dialog");
    this.el.setAttribute("aria-modal", "true");
    this.el.setAttribute("aria-hidden", "true");
    this.el.setAttribute("aria-label", "High-Resolution Media Viewer");

    this.el.innerHTML = `
      <div class="lightbox-backdrop" id="lightbox-backdrop"></div>
      <div class="lightbox-shell">
        <!-- Top Toolbar -->
        <header class="lightbox-topbar">
          <div class="lightbox-meta-left">
            <span class="lightbox-counter-pill" id="lightbox-counter">01 / 01</span>
            <span class="lightbox-category-pill" id="lightbox-category">Documentary Archive</span>
          </div>
          <div class="lightbox-actions-right">
            <button type="button" class="lightbox-tool-btn" id="lightbox-play-btn" aria-label="Toggle slideshow autoplay" title="Auto-play slideshow">
              <span class="tool-icon" id="lightbox-play-icon" aria-hidden="true">▶</span>
              <span class="tool-label" id="lightbox-play-label">Slideshow</span>
            </button>
            <button type="button" class="lightbox-tool-btn" id="lightbox-zoom-btn" aria-label="Toggle zoom" title="Zoom in/out (Z)">
              <span class="tool-icon" aria-hidden="true">🔍</span>
              <span class="tool-label" id="lightbox-zoom-label">Zoom</span>
            </button>
            <a href="" download data-no-router="true" class="lightbox-tool-btn" id="lightbox-download-btn" aria-label="Download high-resolution photo" title="Download high-res photo">
              <span class="tool-icon" aria-hidden="true">⬇</span>
              <span class="tool-label">Download</span>
            </a>
            <button type="button" class="lightbox-close-pill-btn" id="lightbox-close" aria-label="Close media viewer" title="Close (Esc)">
              <span aria-hidden="true">✕</span>
              <span class="close-label">Close</span>
            </button>
          </div>
        </header>

        <!-- Main Image Stage -->
        <div class="lightbox-stage" id="lightbox-stage">
          <button type="button" class="lightbox-nav-btn prev-btn" id="lightbox-prev" aria-label="Previous image" title="Previous photo (Left Arrow)">
            ‹
          </button>

          <figure class="lightbox-figure" id="lightbox-figure">
            <div class="lightbox-img-container" id="lightbox-img-container">
              <img src="" alt="" class="lightbox-img" id="lightbox-img" />
            </div>
            <figcaption class="lightbox-caption-bar">
              <p class="lightbox-caption" id="lightbox-caption"></p>
            </figcaption>
          </figure>

          <button type="button" class="lightbox-nav-btn next-btn" id="lightbox-next" aria-label="Next image" title="Next photo (Right Arrow)">
            ›
          </button>
        </div>

        <!-- Interactive Filmstrip -->
        <div class="lightbox-filmstrip-wrap" id="lightbox-filmstrip-wrap">
          <div class="lightbox-filmstrip" id="lightbox-filmstrip" role="listbox" aria-label="Album thumbnails"></div>
        </div>
      </div>
    `;

    document.body.appendChild(this.el);

    this.imgEl = this.el.querySelector("#lightbox-img");
    this.imgContainer = this.el.querySelector("#lightbox-img-container");
    this.figureEl = this.el.querySelector("#lightbox-figure");
    this.captionEl = this.el.querySelector("#lightbox-caption");
    this.counterEl = this.el.querySelector("#lightbox-counter");
    this.categoryEl = this.el.querySelector("#lightbox-category");
    this.closeBtn = this.el.querySelector("#lightbox-close");
    this.prevBtn = this.el.querySelector("#lightbox-prev");
    this.nextBtn = this.el.querySelector("#lightbox-next");
    this.playBtn = this.el.querySelector("#lightbox-play-btn");
    this.playIcon = this.el.querySelector("#lightbox-play-icon");
    this.playLabel = this.el.querySelector("#lightbox-play-label");
    this.zoomBtn = this.el.querySelector("#lightbox-zoom-btn");
    this.zoomLabel = this.el.querySelector("#lightbox-zoom-label");
    this.downloadBtn = this.el.querySelector("#lightbox-download-btn");
    this.backdrop = this.el.querySelector("#lightbox-backdrop");
    this.stage = this.el.querySelector("#lightbox-stage");
    this.filmstripWrap = this.el.querySelector("#lightbox-filmstrip-wrap");
    this.filmstrip = this.el.querySelector("#lightbox-filmstrip");
  }

  bindEvents() {
    this.closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.close();
    });

    this.backdrop.addEventListener("click", () => this.close());

    this.prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.stopAutoPlay();
      this.prev();
    });

    this.nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.stopAutoPlay();
      this.next();
    });

    this.playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleAutoPlay();
    });

    this.zoomBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleZoom();
    });

    this.imgEl.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleZoom();
    });

    // Close when clicking empty area of stage outside image/buttons
    this.stage.addEventListener("click", (e) => {
      if (e.target === this.stage || e.target === this.figureEl || e.target === this.imgContainer) {
        this.close();
      }
    });

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
      if (!this.isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        this.close();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.stopAutoPlay();
        this.prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.stopAutoPlay();
        this.next();
      } else if (e.key === "z" || e.key === "Z") {
        e.preventDefault();
        this.toggleZoom();
      }
    });

    // Touch swipe support
    this.stage.addEventListener(
      "touchstart",
      (e) => {
        if (!e.changedTouches || !e.changedTouches[0]) return;
        this.touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    this.stage.addEventListener(
      "touchend",
      (e) => {
        if (!e.changedTouches || !e.changedTouches[0]) return;
        this.touchEndX = e.changedTouches[0].screenX;
        const delta = this.touchEndX - this.touchStartX;
        if (Math.abs(delta) > 45 && !this.isZoomed) {
          this.stopAutoPlay();
          if (delta < 0) {
            this.next();
          } else {
            this.prev();
          }
        }
      },
      { passive: true }
    );
  }

  open(items, startIndex = 0, startSlideshow = false) {
    if (!items || items.length === 0) return;

    if (!document.body.contains(this.el)) {
      document.body.appendChild(this.el);
    }

    this.items = items;
    this.currentIndex = Math.max(0, Math.min(startIndex, items.length - 1));
    this.previouslyFocused = document.activeElement;
    this.isOpen = true;
    this.setZoom(false);
    this.stopAutoPlay();

    this.renderFilmstrip();

    this.el.classList.add("is-open", "open");
    this.el.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    this.updateContent();

    if (startSlideshow && this.items.length > 1) {
      this.startAutoPlay();
    }

    this.closeBtn.focus();
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.setZoom(false);
    this.stopAutoPlay();
    this.el.classList.remove("is-open", "open");
    this.el.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (this.previouslyFocused && typeof this.previouslyFocused.focus === "function") {
      this.previouslyFocused.focus();
    }
  }

  toggleAutoPlay() {
    if (this.autoPlayTimer) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    if (this.items.length <= 1) return;
    this.playBtn.classList.add("is-active");
    this.playIcon.textContent = "⏸";
    this.playLabel.textContent = "Pause";
    this.autoPlayTimer = setInterval(() => {
      this.next();
    }, 3200);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
    if (this.playBtn) {
      this.playBtn.classList.remove("is-active");
      this.playIcon.textContent = "▶";
      this.playLabel.textContent = "Slideshow";
    }
  }

  toggleZoom() {
    this.setZoom(!this.isZoomed);
  }

  setZoom(zoomState) {
    this.isZoomed = Boolean(zoomState);
    if (this.isZoomed) {
      this.imgEl.classList.add("is-zoomed");
      this.zoomBtn.classList.add("is-active");
      this.zoomLabel.textContent = "Reset";
    } else {
      this.imgEl.classList.remove("is-zoomed");
      this.zoomBtn.classList.remove("is-active");
      this.zoomLabel.textContent = "Zoom";
    }
  }

  prev() {
    if (this.items.length <= 1) return;
    this.setZoom(false);
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateContent();
  }

  next() {
    if (this.items.length <= 1) return;
    this.setZoom(false);
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateContent();
  }

  renderFilmstrip() {
    if (this.items.length <= 1) {
      this.filmstripWrap.style.display = "none";
      this.filmstrip.innerHTML = "";
      return;
    }

    this.filmstripWrap.style.display = "block";
    this.filmstrip.innerHTML = this.items
      .map(
        (item, idx) => `
        <button
          type="button"
          class="lightbox-thumb-btn ${idx === this.currentIndex ? "is-active" : ""}"
          data-idx="${idx}"
          role="option"
          aria-selected="${idx === this.currentIndex ? "true" : "false"}"
          aria-label="View image ${idx + 1}"
        >
          <img src="${item.src}" alt="" class="lightbox-thumb-img" loading="lazy" />
        </button>
      `
      )
      .join("");

    this.filmstrip.querySelectorAll(".lightbox-thumb-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute("data-idx") || "0", 10);
        this.stopAutoPlay();
        this.setZoom(false);
        this.currentIndex = idx;
        this.updateContent();
      });
    });
  }

  updateContent() {
    const current = this.items[this.currentIndex];
    if (!current) return;

    this.imgEl.src = current.src;
    this.imgEl.alt = current.alt || current.caption || "Gallery photograph";
    this.captionEl.textContent = current.caption || "";

    const total = String(this.items.length).padStart(2, "0");
    const currNum = String(this.currentIndex + 1).padStart(2, "0");
    this.counterEl.textContent = `${currNum} / ${total}`;

    if (current.categoryLabel) {
      this.categoryEl.textContent = current.categoryLabel;
      this.categoryEl.style.display = "inline-flex";
    } else {
      this.categoryEl.textContent = "Documentary Archive";
    }

    this.downloadBtn.href = current.src;
    const filename = current.src.split("/").pop() || `flexon-photo-${currNum}.jpg`;
    this.downloadBtn.setAttribute("download", filename);

    // Hide navigation arrows if only 1 item
    this.prevBtn.style.display = this.items.length > 1 ? "flex" : "none";
    this.nextBtn.style.display = this.items.length > 1 ? "flex" : "none";
    this.playBtn.style.display = this.items.length > 1 ? "inline-flex" : "none";

    // Sync active thumbnail in filmstrip
    const thumbBtns = this.filmstrip.querySelectorAll(".lightbox-thumb-btn");
    thumbBtns.forEach((btn, idx) => {
      const active = idx === this.currentIndex;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
      if (active && typeof btn.scrollIntoView === "function") {
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });
  }
}

// Global Lightbox Singleton
export const globalLightbox = new Lightbox();
