/**
 * Flexon Sports Foundation - Clean, Modern Hero Athletic Showcase
 * 
 * Simple, intuitive, inspiring, and user-friendly.
 * Highlights the Foundation's 3 Core Pillars:
 * 1. 🏃 FLEXATHON (Marathon & Community Endurance Runs - 3K • 5K • 10K)
 * 2. ⚽ Empower Youth Football (Grassroots skill training & teamwork)
 * 3. 🏏 Veteran Sixes Cricket (Lifelong sport & camaraderie)
 * 
 * Features:
 * - High-impact, authentic sports photography
 * - Smooth animated crossfades with gentle Ken Burns motion
 * - Interactive pillar selector tabs (FLEXATHON, Youth Football, Veteran Cricket)
 * - Auto-rotation with subtle progress bar (pauses on hover)
 * - Interactive 3D mouse parallax tilt
 * - Touch swipe support for mobile
 * - Glassmorphic metric chips and direct action links
 */

const PILLARS = [
  {
    id: 'flexathon',
    badge: 'FLAGSHIP ENDURANCE RUN',
    badgeIcon: '🏃',
    title: 'FLEXATHON 2026',
    subtitle: 'United by Sport. Driven by 17 Global Goals.',
    image: '/assets/hero/flexathon-runner.jpg',
    alt: 'Dynamic athlete crossing the finish line at Flexon Sports marathon',
    metrics: [
      { label: 'Distances', value: '3K • 5K • 10K' },
      { label: 'Editions', value: 'Hyderabad • Kochi Next' },
      { label: 'Prize Pool', value: '₹60,000 Advertised' }
    ],
    sdgTag: 'SDG 4 Quality Education Aligned',
    link: '/events',
    linkText: 'Explore FLEXATHON'
  },
  {
    id: 'football',
    badge: 'GRASSROOTS DEVELOPMENT',
    badgeIcon: '⚽',
    title: 'Empower Youth Football',
    subtitle: 'Nurturing grassroots athletic talent, discipline, and teamwork.',
    image: '/assets/hero/youth-football.jpg',
    alt: 'Children and youth training at grassroots football soccer academy',
    metrics: [
      { label: 'Age Group', value: '10–15 Years' },
      { label: 'Coaching', value: 'Structured Drills' },
      { label: 'Access', value: 'Community Focused' }
    ],
    sdgTag: 'SDG 3 Good Health & Well-being',
    link: '/programs',
    linkText: 'Explore Youth Football'
  },
  {
    id: 'cricket',
    badge: 'LIFELONG PARTICIPATION',
    badgeIcon: '🏏',
    title: 'Veteran Sixes Cricket',
    subtitle: 'Celebrating sportsmanship, fair play, and lifelong athletic passion.',
    image: '/assets/hero/veteran-cricket.jpg',
    alt: 'Veteran cricket players celebrating sportsmanship with bat and wickets',
    metrics: [
      { label: 'Format', value: 'Veteran Sixes' },
      { label: 'Spirit', value: 'Multi-Generational' },
      { label: 'Community', value: 'Active Lifestyles' }
    ],
    sdgTag: 'SDG 10 Reduced Inequalities',
    link: '/programs',
    linkText: 'Explore Veteran Sixes'
  }
];

export function createHero3D(container) {
  let currentIndex = 0;
  let isPlaying = true;
  let timer = null;
  const slideDuration = 6000; // 6 seconds per slide

  // Create Showcase Wrapper
  const showcase = document.createElement('div');
  showcase.className = 'hero-showcase-card';
  showcase.setAttribute('role', 'region');
  showcase.setAttribute('aria-label', 'Flexon Sports Foundation Flagship Programs Showcase');

  showcase.innerHTML = `
    <!-- Top Auto-Advance Progress Bar -->
    <div class="showcase-progress-track" aria-hidden="true">
      <div class="showcase-progress-bar" id="showcase-progress"></div>
    </div>

    <!-- Top Pillar Selector Tabs -->
    <div class="showcase-tabs" role="tablist" aria-label="Select sports pillar">
      ${PILLARS.map((p, i) => `
        <button 
          class="showcase-tab ${i === 0 ? 'active' : ''}" 
          data-index="${i}" 
          role="tab" 
          aria-selected="${i === 0 ? 'true' : 'false'}"
          aria-controls="showcase-slide-${i}"
        >
          <span class="showcase-tab-icon">${p.badgeIcon}</span>
          <span class="showcase-tab-text">${p.title.split(' ')[0]}</span>
        </button>
      `).join('')}
    </div>

    <!-- Slide Containers -->
    <div class="showcase-viewport">
      ${PILLARS.map((p, i) => `
        <div 
          class="showcase-slide ${i === 0 ? 'active' : ''}" 
          id="showcase-slide-${i}"
          role="tabpanel"
          aria-hidden="${i === 0 ? 'false' : 'true'}"
        >
          <div class="showcase-img-wrap">
            <img 
              src="${p.image}" 
              alt="${p.alt}" 
              class="showcase-img" 
              loading="${i === 0 ? 'eager' : 'lazy'}" 
            />
            <div class="showcase-overlay" aria-hidden="true"></div>
          </div>

          <!-- Top-Right Live Status Pill -->
          <div class="showcase-live-tag">
            <span class="showcase-live-dot" aria-hidden="true"></span>
            <span>${p.sdgTag}</span>
          </div>

          <!-- Bottom Editorial Glassmorphic Card -->
          <div class="showcase-content">
            <div class="showcase-eyebrow">
              <span class="eyebrow-icon">${p.badgeIcon}</span>
              <span class="eyebrow-text">${p.badge}</span>
            </div>
            
            <h2 class="showcase-title">${p.title}</h2>
            <p class="showcase-subtitle">${p.subtitle}</p>

            <div class="showcase-metrics-row">
              ${p.metrics.map(m => `
                <div class="showcase-metric-chip">
                  <span class="metric-label">${m.label}</span>
                  <span class="metric-val">${m.value}</span>
                </div>
              `).join('')}
            </div>

            <div class="showcase-action-row">
              <a href="${p.link}" class="showcase-cta-btn">
                <span>${p.linkText}</span>
                <span class="cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Navigation Chevrons & Controls -->
    <button class="showcase-nav-btn prev" id="showcase-prev" aria-label="Previous sport pillar">
      <span>‹</span>
    </button>
    <button class="showcase-nav-btn next" id="showcase-next" aria-label="Next sport pillar">
      <span>›</span>
    </button>

    <!-- Bottom Controls Bar (Indicator Dots & Play/Pause) -->
    <div class="showcase-footer-controls">
      <div class="showcase-dots" role="tablist" aria-label="Slide indicators">
        ${PILLARS.map((_, i) => `
          <button 
            class="showcase-dot ${i === 0 ? 'active' : ''}" 
            data-index="${i}" 
            aria-label="Go to slide ${i + 1}"
          ></button>
        `).join('')}
      </div>

      <button class="showcase-pause-btn" id="showcase-pause" aria-label="Pause slide rotation">
        <span id="showcase-pause-icon">⏸</span>
      </button>
    </div>
  `;

  container.appendChild(showcase);

  // DOM Elements
  const slides = showcase.querySelectorAll('.showcase-slide');
  const tabs = showcase.querySelectorAll('.showcase-tab');
  const dots = showcase.querySelectorAll('.showcase-dot');
  const progressBar = showcase.querySelector('#showcase-progress');
  const prevBtn = showcase.querySelector('#showcase-prev');
  const nextBtn = showcase.querySelector('#showcase-next');
  const pauseBtn = showcase.querySelector('#showcase-pause');
  const pauseIcon = showcase.querySelector('#showcase-pause-icon');

  // Go to Slide Function
  function goToSlide(index) {
    currentIndex = (index + PILLARS.length) % PILLARS.length;

    slides.forEach((s, i) => {
      const isActive = i === currentIndex;
      s.classList.toggle('active', isActive);
      s.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    tabs.forEach((t, i) => {
      const isActive = i === currentIndex;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
    });

    // Reset progress animation
    resetProgressBar();
  }

  function resetProgressBar() {
    if (!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    void progressBar.offsetWidth; // Trigger reflow
    if (isPlaying) {
      progressBar.style.transition = `width ${slideDuration}ms linear`;
      progressBar.style.width = '100%';
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
      progressBar.style.transition = 'none';
      progressBar.style.width = computedW;
    }
  }

  // Next / Prev listeners
  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    goToSlide(currentIndex + 1);
    startTimer();
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    goToSlide(currentIndex - 1);
    startTimer();
  });

  // Tab listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(tab.getAttribute('data-index') || '0', 10);
      goToSlide(idx);
      startTimer();
    });
  });

  // Dot listeners
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
      goToSlide(idx);
      startTimer();
    });
  });

  // Play / Pause toggle
  pauseBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    isPlaying = !isPlaying;
    pauseIcon.textContent = isPlaying ? '⏸' : '▶';
    pauseBtn.setAttribute('aria-label', isPlaying ? 'Pause slide rotation' : 'Play slide rotation');
    if (isPlaying) {
      startTimer();
    } else {
      stopTimer();
    }
  });

  // Pause on hover
  showcase.addEventListener('mouseenter', () => {
    if (isPlaying) stopTimer();
  });

  showcase.addEventListener('mouseleave', () => {
    if (isPlaying) startTimer();
  });

  // Connect External Footer Badges from Home.js if present
  function bindExternalBadges() {
    const footerBadges = container.parentElement?.querySelectorAll('.hero-badge-item');
    if (footerBadges && footerBadges.length >= 3) {
      footerBadges[0].style.cursor = 'pointer';
      footerBadges[0].onclick = () => { goToSlide(0); startTimer(); };

      footerBadges[1].style.cursor = 'pointer';
      footerBadges[1].onclick = () => { goToSlide(1); startTimer(); };

      footerBadges[2].style.cursor = 'pointer';
      footerBadges[2].onclick = () => { goToSlide(2); startTimer(); };
    }
  }
  setTimeout(bindExternalBadges, 200);

  // 3D Parallax Tilt Effect on Mouse Move (Subtle, Apple/Nike aesthetic)
  let isHovered = false;
  showcase.addEventListener('mouseenter', () => { isHovered = true; });
  showcase.addEventListener('mouseleave', () => {
    isHovered = false;
    showcase.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });

  showcase.addEventListener('mousemove', (e) => {
    if (!isHovered) return;
    const rect = showcase.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    showcase.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.008, 1.008, 1.008)`;
  });

  // Touch Swipe Gesture Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  showcase.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  showcase.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToSlide(currentIndex + 1); // Swipe left -> Next
      } else {
        goToSlide(currentIndex - 1); // Swipe right -> Prev
      }
      startTimer();
    }
  }, { passive: true });

  // Start auto-advance
  startTimer();

  // Return cleanup helper
  return {
    destroy() {
      stopTimer();
      showcase.remove();
    }
  };
}
