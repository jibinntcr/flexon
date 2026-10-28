/**
 * Flexon Sports Foundation - Clean, Editorial Hero Showcase Slider
 *
 * Designed for maximum visual clarity and zero clutter:
 * - Top-Left: Compact segmented pillar tabs
 * - Top-Right: Clean Prev / Pause / Next controls (never overlapping photo subjects or text)
 * - Unobstructed, vibrant event photography (top 65% completely clear)
 * - Sleek bottom bar: Left = Eyebrow + Title + 1-line summary; Right = CTA button + slide dots
 */

const PILLARS = [
  {
    id: "flexathon",
    tabLabel: "FLEXATHON",
    badgeIcon: "🏃",
    metaPill: "HYDERABAD 2026 • 3K • 5K • 10K • ESCI CAMPUS",
    title: "FLEXATHON Hyderabad 2026",
    subtitle: "Official flag-off and community endurance run aligned with SDG 4: Quality Education.",
    image: "/assets/hero/flexathon-hyd-hero-1.jpg",
    alt: "Official flag-off at FLEXATHON Hyderabad 2026 starting arch at ESCI Campus",
    link: "/flexathon/hyderabad-2026",
    linkText: "View 39 Photos"
  },
  {
    id: "football",
    tabLabel: "Football Camp",
    badgeIcon: "⚽",
    metaPill: "EMPOWER YOUTH • AGES 10–15 • OCT 2026 – FEB 2027",
    title: "Football Coaching Camp",
    subtitle: "Inaugurated by MLA Manoj Moothedan — building skills, fitness, teamwork, and confidence.",
    image: "/assets/hero/football-camp-hero-1.jpg",
    alt: "Ceremonial kick-off at Football Coaching Camp Empower Youth Programme with MLA Manoj Moothedan",
    link: "/programs/empower-youth-football-camp",
    linkText: "View 33 Photos"
  },
  {
    id: "race-action",
    tabLabel: "10K & 5K Run",
    badgeIcon: "🏁",
    metaPill: "COMMUNITY WAVES • ₹60,000 PRIZE POOL • HYDERABAD",
    title: "10K & 5K Start Line Surge",
    subtitle: "Athletes, students, and families striding together across the ESCI Gachibowli circuit.",
    image: "/assets/hero/flexathon-hyd-hero-2.jpg",
    alt: "10K runners surging across the start line at FLEXATHON Hyderabad 2026",
    link: "/gallery",
    linkText: "Open Gallery"
  },
  {
    id: "cricket",
    tabLabel: "Veteran Sixes",
    badgeIcon: "🏏",
    metaPill: "LIFELONG SPORT • SIX-A-SIDE CRICKET • KERALA",
    title: "Veteran Sixes Cricket",
    subtitle: "Celebrating seasoned players, fair play, and lifelong camaraderie on and off the pitch.",
    image: "/assets/hero/veteran-cricket.jpg",
    alt: "Veteran cricket players celebrating sportsmanship with bat and wickets",
    link: "/veteran-sixes",
    linkText: "Explore Cricket"
  }
];

export function createHero3D(container) {
  let currentIndex = 0;
  let isPlaying = true;
  let timer = null;
  const slideDuration = 6000;

  const showcase = document.createElement("div");
  showcase.className = "hero-showcase-card";
  showcase.setAttribute("role", "region");
  showcase.setAttribute("aria-label", "Flexon Sports Foundation Featured Events Showcase");

  showcase.innerHTML = `
    <!-- Top Auto-Advance Progress Bar -->
    <div class="showcase-progress-track" aria-hidden="true">
      <div class="showcase-progress-bar" id="showcase-progress"></div>
    </div>

    <!-- Clean Top Header Bar: Tabs on Left, Compact Nav Controls on Right -->
    <div class="showcase-top-bar">
      <div class="showcase-tabs" role="tablist" aria-label="Select featured event">
        ${PILLARS.map(
          (p, i) => `
          <button
            type="button"
            class="showcase-tab ${i === 0 ? "active" : ""}"
            data-index="${i}"
            role="tab"
            aria-selected="${i === 0 ? "true" : "false"}"
            aria-controls="showcase-slide-${i}"
          >
            <span class="showcase-tab-icon">${p.badgeIcon}</span>
            <span class="showcase-tab-text">${p.tabLabel}</span>
          </button>
        `
        ).join("")}
      </div>

      <div class="showcase-top-nav" aria-label="Slide controls">
        <button type="button" class="showcase-ctrl-btn" id="showcase-prev" aria-label="Previous slide" title="Previous slide">
          ‹
        </button>
        <button type="button" class="showcase-ctrl-btn showcase-pause-btn" id="showcase-pause" aria-label="Pause slide rotation" title="Pause / Play">
          <span id="showcase-pause-icon">⏸</span>
        </button>
        <button type="button" class="showcase-ctrl-btn" id="showcase-next" aria-label="Next slide" title="Next slide">
          ›
        </button>
      </div>
    </div>

    <!-- Slide Containers -->
    <div class="showcase-viewport">
      ${PILLARS.map(
        (p, i) => `
        <div
          class="showcase-slide ${i === 0 ? "active" : ""}"
          id="showcase-slide-${i}"
          role="tabpanel"
          aria-hidden="${i === 0 ? "false" : "true"}"
        >
          <div class="showcase-img-wrap">
            <img
              src="${p.image}"
              alt="${p.alt}"
              class="showcase-img"
              ${i === 0 ? 'fetchpriority="high" loading="eager"' : 'loading="lazy" decoding="async"'}
            />
            <div class="showcase-overlay" aria-hidden="true"></div>
          </div>

          <!-- Sleek, Uncluttered Bottom Editorial Bar -->
          <div class="showcase-bottom-bar">
            <div class="showcase-text-col">
              <div class="showcase-meta-pill">
                <span class="showcase-live-dot" aria-hidden="true"></span>
                <span>${p.metaPill}</span>
              </div>
              <h2 class="showcase-title">${p.title}</h2>
              <p class="showcase-subtitle">${p.subtitle}</p>
            </div>

            <div class="showcase-action-col">
              <a href="${p.link}" class="showcase-cta-btn">
                <span>${p.linkText}</span>
                <span class="cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      `
      ).join("")}
    </div>

    <!-- Subtle Bottom-Center Slide Dots -->
    <div class="showcase-dots-bar" role="tablist" aria-label="Slide indicators">
      ${PILLARS.map(
        (_, i) => `
        <button
          type="button"
          class="showcase-dot ${i === 0 ? "active" : ""}"
          data-index="${i}"
          aria-label="Go to slide ${i + 1}"
        ></button>
      `
      ).join("")}
    </div>
  `;

  container.appendChild(showcase);

  const slides = showcase.querySelectorAll(".showcase-slide");
  const tabs = showcase.querySelectorAll(".showcase-tab");
  const dots = showcase.querySelectorAll(".showcase-dot");
  const progressBar = showcase.querySelector("#showcase-progress");
  const prevBtn = showcase.querySelector("#showcase-prev");
  const nextBtn = showcase.querySelector("#showcase-next");
  const pauseBtn = showcase.querySelector("#showcase-pause");
  const pauseIcon = showcase.querySelector("#showcase-pause-icon");

  function goToSlide(index) {
    currentIndex = (index + PILLARS.length) % PILLARS.length;

    slides.forEach((s, i) => {
      const isActive = i === currentIndex;
      s.classList.toggle("active", isActive);
      s.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    tabs.forEach((t, i) => {
      const isActive = i === currentIndex;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentIndex);
    });

    resetProgressBar();
  }

  function resetProgressBar() {
    if (!progressBar) return;
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    void progressBar.offsetWidth;
    if (isPlaying) {
      progressBar.style.transition = `width ${slideDuration}ms linear`;
      progressBar.style.width = "100%";
    }
  }

  function startTimer() {
    stopTimer();
    if (isPlaying) {
      resetProgressBar();
      timer = setTimeout(() => {
        goToSlide(currentIndex + 1);
        startTimer();
      }, slideDuration);
    }
  }

  function stopTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (progressBar) {
      const computedW = window.getComputedStyle(progressBar).width;
      progressBar.style.transition = "none";
      progressBar.style.width = computedW;
    }
  }

  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    goToSlide(currentIndex + 1);
    startTimer();
  });

  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    goToSlide(currentIndex - 1);
    startTimer();
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(tab.getAttribute("data-index") || "0", 10);
      goToSlide(idx);
      startTimer();
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(dot.getAttribute("data-index") || "0", 10);
      goToSlide(idx);
      startTimer();
    });
  });

  pauseBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    isPlaying = !isPlaying;
    if (pauseIcon) pauseIcon.textContent = isPlaying ? "⏸" : "▶";
    pauseBtn.setAttribute(
      "aria-label",
      isPlaying ? "Pause slide rotation" : "Play slide rotation"
    );
    if (isPlaying) {
      startTimer();
    } else {
      stopTimer();
    }
  });

  showcase.addEventListener("mouseenter", () => {
    if (isPlaying) stopTimer();
  });

  showcase.addEventListener("mouseleave", () => {
    if (isPlaying) startTimer();
  });

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  showcase.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  showcase.addEventListener(
    "touchend",
    (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
        startTimer();
      }
    },
    { passive: true }
  );

  requestAnimationFrame(() => {
    startTimer();
  });

  return {
    destroy() {
      stopTimer();
    }
  };
}
