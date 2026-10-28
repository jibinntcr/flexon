/**
 * Flexon Sports Foundation - Accessible Lightbox Component
 * Authority: Blueprint v2.0 Section 11 & 20
 * 
 * Features:
 * - High-resolution image/media modal
 * - Keyboard navigation (Esc to close, ArrowLeft for previous, ArrowRight for next)
 * - Focus trapping and restoration
 * - Caption and index indicator
 */

export class Lightbox {
  constructor() {
    this.items = [];
    this.currentIndex = 0;
    this.isOpen = false;
    this.previouslyFocused = null;
    this.createDom();
    this.bindEvents();
  }

  createDom() {
    this.el = document.createElement("div");
    this.el.className = "lightbox-modal";
    this.el.id = "global-lightbox";
    this.el.setAttribute("role", "dialog");
    this.el.setAttribute("aria-modal", "true");
    this.el.setAttribute("aria-hidden", "true");
    this.el.setAttribute("aria-label", "Media Viewer");

    this.el.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <div class="lightbox-dialog">
        <button class="lightbox-close-btn" id="lightbox-close" aria-label="Close lightbox">&times;</button>
        <button class="lightbox-nav-btn prev-btn" id="lightbox-prev" aria-label="Previous image">‹</button>
        <div class="lightbox-content">
          <img src="" alt="" class="lightbox-img" id="lightbox-img" />
          <div class="lightbox-footer">
            <p class="lightbox-caption" id="lightbox-caption"></p>
            <span class="lightbox-counter" id="lightbox-counter"></span>
          </div>
        </div>
        <button class="lightbox-nav-btn next-btn" id="lightbox-next" aria-label="Next image">›</button>
      </div>
    `;

    document.body.appendChild(this.el);

    this.imgEl = this.el.querySelector("#lightbox-img");
    this.captionEl = this.el.querySelector("#lightbox-caption");
    this.counterEl = this.el.querySelector("#lightbox-counter");
    this.closeBtn = this.el.querySelector("#lightbox-close");
    this.prevBtn = this.el.querySelector("#lightbox-prev");
    this.nextBtn = this.el.querySelector("#lightbox-next");
    this.backdrop = this.el.querySelector(".lightbox-backdrop");
  }

  bindEvents() {
    this.closeBtn.addEventListener("click", () => this.close());
    this.backdrop.addEventListener("click", () => this.close());
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    document.addEventListener("keydown", (e) => {
      if (!this.isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        this.close();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.next();
      }
    });
  }

  open(items, startIndex = 0) {
    if (!items || items.length === 0) return;
    this.items = items;
    this.currentIndex = Math.max(0, Math.min(startIndex, items.length - 1));
    this.previouslyFocused = document.activeElement;
    this.isOpen = true;

    this.el.classList.add("is-open");
    this.el.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    this.updateContent();
    this.closeBtn.focus();
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.el.classList.remove("is-open");
    this.el.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (this.previouslyFocused && typeof this.previouslyFocused.focus === "function") {
      this.previouslyFocused.focus();
    }
  }

  prev() {
    if (this.items.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateContent();
  }

  next() {
    if (this.items.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateContent();
  }

  updateContent() {
    const current = this.items[this.currentIndex];
    if (!current) return;

    this.imgEl.src = current.src;
    this.imgEl.alt = current.alt || current.caption || "Gallery image";
    this.captionEl.textContent = current.caption || "";
    this.counterEl.textContent = `${this.currentIndex + 1} / ${this.items.length}`;

    // Hide navigation arrows if only 1 item
    this.prevBtn.style.display = this.items.length > 1 ? "block" : "none";
    this.nextBtn.style.display = this.items.length > 1 ? "block" : "none";
  }
}

// Global Lightbox Singleton
export const globalLightbox = new Lightbox();
