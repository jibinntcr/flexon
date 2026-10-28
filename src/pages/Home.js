/**
 * Flexon Sports Foundation - Home Page (Redesigned & Elevated)
 * Authority: Blueprint v2.0
 * 
 * Features:
 * - High-energy athletic aesthetic with crisp contrast & rich typography
 * - Perfectly centered & framed interactive Three.js 3D Hero Scene
 * - Impact & stats counter ribbon
 * - 3 Featured initiative cards (FLEXATHON, Empower Youth, Veteran Sixes)
 * - Foundation philosophy & core values triad
 * - Flagship editorial showcase: FLEXATHON Hyderabad 2026 + Kochi teaser card
 * - Multi-generational sports pillar (Youth Football + Veteran Cricket)
 * - Global Goals framework with SDG 4 spotlight & interactive goal tiles
 * - Documentary archive gallery with lightbox preview
 * - 4 Pathways to action (Take Part, Volunteer, Collaborate, Support)
 * - Premium non-profit support CTA banner
 */

import { organization, sdgs, galleryAlbums } from "../data/content.js";
import { createHero3D } from "../components/Hero3D.js";
import { globalLightbox } from "../components/Lightbox.js";

export function renderHomePage() {
  const container = document.createElement("div");
  container.className = "page-home";

  const hydAlbum = galleryAlbums.find((a) => a.id === "hyderabad-2026") || galleryAlbums[0];
  const campAlbum = galleryAlbums.find((a) => a.id === "football-training") || galleryAlbums[1];
  const totalArchiveCount = galleryAlbums.reduce((sum, a) => sum + a.items.length, 0);

  // Curated 6-photo mix: 3 best from FLEXATHON Hyderabad + 3 best from Football Coaching Camp
  const homeShowcaseItems = [
    ...(hydAlbum ? hydAlbum.items.filter((i) => i.orientation === "landscape").slice(0, 3) : []),
    ...(campAlbum ? campAlbum.items.filter((i) => i.orientation === "landscape").slice(0, 3) : [])
  ];

  container.innerHTML = `
    <!-- 1. Hero Section -->
    <section class="hero-section" id="hero" aria-label="Hero Section">
      <div class="hero-bg-accent" aria-hidden="true"></div>
      
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-pill-row">
            <span class="hero-live-pill">
              <span class="live-dot" aria-hidden="true"></span>
              SECTION 8 NOT-FOR-PROFIT
            </span>
            <span class="hero-sdg-tag">SDG ALIGNED</span>
          </div>

          <h1 class="hero-title">
            MOVE TOGETHER.<br />
            <span class="text-gradient-red">GO FURTHER.</span>
          </h1>

          <p class="hero-lead">
            ${organization.heroSubheadline}
          </p>

          <div class="hero-actions">
            <a href="/events" class="btn btn-primary btn-lg">
              <span>Explore Our Events</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="/partnerships" class="btn btn-outline btn-lg">
              <span>Partner With Us</span>
            </a>
          </div>

          <div class="hero-tagline-box">
            <span class="tagline-icon" aria-hidden="true">●</span>
            <span class="tagline-text">${organization.tagline}</span>
          </div>
        </div>

        <div class="hero-media-column">
          <div class="hero-3d-card" id="hero-3d-card">
            <div class="hero-3d-mount" id="hero-3d-mount" role="region" aria-label="Interactive 3D sports scene">
              <!-- Three.js Interactive 3D Canvas mounted here -->
            </div>
            <div class="hero-3d-footer-badge">
              <span class="hero-badge-item">🏃 Flagship Runs</span>
              <span class="hero-badge-divider">•</span>
              <span class="hero-badge-item">⚽ Youth Football</span>
              <span class="hero-badge-divider">•</span>
              <span class="hero-badge-item">🏏 Veteran Cricket</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Athletic Impact Metrics Bar -->
      <div class="container">
        <div class="hero-stats-bar">
          <div class="stat-item">
            <span class="stat-number">17</span>
            <span class="stat-label">Global Goals Aligned</span>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat-item">
            <span class="stat-number">12</span>
            <span class="stat-label">Retained Sports Programs</span>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat-item">
            <span class="stat-number">₹60K</span>
            <span class="stat-label">Run Prize Pool Advertised</span>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Section 8 Non-Profit</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Fast Initiative Quick Cards -->
    <section class="section section-initiatives-bar bg-surface" aria-labelledby="initiatives-heading">
      <div class="container">
        <div class="section-intro-header text-center">
          <span class="text-eyebrow">KEY FOUNDATION INITIATIVES</span>
          <h2 id="initiatives-heading" class="heading-section">Where Movement Meets Purpose</h2>
        </div>

        <div class="initiatives-bar-grid">
          <a href="/flexathon" class="initiative-quick-card card-hover-lift">
            <div class="quick-card-top">
              <span class="quick-card-badge badge-red">Flagship Run</span>
              <span class="quick-card-icon" aria-hidden="true">🏃</span>
            </div>
            <h3 class="quick-card-title">FLEXATHON</h3>
            <p class="quick-card-desc">The Global Goals Run bringing communities together around health, endurance, and education.</p>
            <div class="quick-card-tags">
              <span class="tag-chip">3K</span>
              <span class="tag-chip">5K</span>
              <span class="tag-chip">10K</span>
            </div>
            <span class="quick-card-link">Explore FLEXATHON →</span>
          </a>

          <a href="/programs/empower-youth-football-camp" class="initiative-quick-card card-hover-lift">
            <div class="quick-card-top">
              <span class="quick-card-badge badge-green">Youth Coaching</span>
              <span class="quick-card-icon" aria-hidden="true">⚽</span>
            </div>
            <h3 class="quick-card-title">Empower Youth</h3>
            <p class="quick-card-desc">Structured grassroots football training for children ages 10–15 led by MLA Manoj Moothedan in Kerala.</p>
            <div class="quick-card-tags">
              <span class="tag-chip">Ages 10–15</span>
              <span class="tag-chip">Kerala</span>
              <span class="tag-chip">Oct–Feb</span>
            </div>
            <span class="quick-card-link">View Camp Details →</span>
          </a>

          <a href="/veteran-sixes" class="initiative-quick-card card-hover-lift">
            <div class="quick-card-top">
              <span class="quick-card-badge badge-gold">Cricket Initiative</span>
              <span class="quick-card-icon" aria-hidden="true">🏏</span>
            </div>
            <h3 class="quick-card-title">Veteran Sixes</h3>
            <p class="quick-card-desc">Celebrating seasoned cricket players, sportsmanship, and lifelong camaraderie on and off the pitch.</p>
            <div class="quick-card-tags">
              <span class="tag-chip">6-a-Side</span>
              <span class="tag-chip">Evergreen</span>
              <span class="tag-chip">Fair Play</span>
            </div>
            <span class="quick-card-link">Explore Veteran Sixes →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 3. Foundation Philosophy -->
    <section class="section section-philosophy" aria-labelledby="philosophy-heading">
      <div class="container">
        <div class="philosophy-card">
          <div class="philosophy-header text-center">
            <span class="text-eyebrow">OUR PHILOSOPHY</span>
            <h2 id="philosophy-heading" class="philosophy-title">
              “Sport creates the opportunity.<br />
              <span class="text-gradient-red">People give it purpose.”</span>
            </h2>
            <p class="philosophy-lead">
              Flexon Sports Foundation connects sporting participation with active living, education and community engagement. We work with people, institutions and civic partners to create accessible ways to take part, learn and contribute.
            </p>
          </div>

          <div class="philosophy-grid">
            <div class="philosophy-item">
              <div class="philosophy-num">01</div>
              <h3 class="philosophy-item-title">Active Living</h3>
              <p class="philosophy-item-desc">Encouraging regular physical exercise, fitness habits, and inclusive recreation across all life stages.</p>
            </div>
            <div class="philosophy-item">
              <div class="philosophy-num">02</div>
              <h3 class="philosophy-item-title">Holistic Learning</h3>
              <p class="philosophy-item-desc">Nurturing discipline, athletic fundamentals, mutual respect, and teamwork in young athletes.</p>
            </div>
            <div class="philosophy-item">
              <div class="philosophy-num">03</div>
              <h3 class="philosophy-item-title">Community Purpose</h3>
              <p class="philosophy-item-desc">Uniting schools, clubs, families, and businesses to advance shared Sustainable Development Goals.</p>
            </div>
          </div>

          <div class="philosophy-action text-center">
            <a href="/about" class="btn btn-outline">About the Foundation</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Flagship Editorial Feature: FLEXATHON -->
    <section class="section section-flagship bg-surface" aria-labelledby="flagship-heading">
      <div class="container">
        <div class="editorial-split-grid">
          <div class="editorial-media">
            <div class="flagship-image-wrapper">
              <img 
                src="/assets/hero/flexathon-hyd-hero-1.jpg" 
                alt="FLEXATHON Hyderabad 2026 official flag-off at ESCI Campus" 
                class="flagship-img"
                loading="lazy"
                decoding="async"
              />
              <div class="flagship-img-overlay">
                <span class="flagship-pill-badge">Hyderabad Edition • 18 Oct 2026</span>
                <span class="flagship-venue-tag">ESCI Campus, Gachibowli</span>
              </div>
            </div>
            
            <!-- Partners Logo/Name Chips -->
            <div class="flagship-partners-bar">
              <span class="partners-label">Official Event Partners:</span>
              <div class="partner-chips">
                <span class="partner-chip">ESCI Campus</span>
                <span class="partner-chip">Tata Copper+</span>
                <span class="partner-chip">SMAAASH</span>
                <span class="partner-chip">Akshayakalpa Organic</span>
              </div>
            </div>
          </div>

          <div class="editorial-content">
            <div class="status-pill status-pill-completed">
              <span class="status-indicator-dot"></span>
              Hyderabad 2026 • Completed Archive
            </div>
            
            <h2 id="flagship-heading" class="heading-section flagship-title">
              FLEXATHON.<br />
              <span class="text-gradient-red">The Global Goals Run.</span>
            </h2>
            
            <p class="section-lead">
              Our flagship running initiative connects athletic endurance with a shared development theme. The first edition took place at ESCI Campus on 18 October 2026, spotlighting <strong>SDG 4: Quality Education</strong> across 3K, 5K, and 10K categories.
            </p>

            <div class="flagship-highlights-list">
              <div class="highlight-item">
                <span class="highlight-check">✓</span>
                <span><strong>Community Categories:</strong> 3K Fun Run, 5K Timed, and 10K Challenge</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-check">✓</span>
                <span><strong>Advertised Prize Pool:</strong> ₹60,000 for top performing category runners</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-check">✓</span>
                <span><strong>Development Focus:</strong> Education access and youth athletic habits</span>
              </div>
            </div>

            <div class="feature-actions">
              <a href="/flexathon/hyderabad-2026" class="btn btn-primary">Explore Hyderabad Highlights</a>
              <a href="/flexathon" class="btn btn-outline">Why We Run</a>
            </div>

            <!-- Kochi Next Stop Card -->
            <div class="kochi-announcement-card">
              <div class="kochi-card-icon" aria-hidden="true">📍</div>
              <div class="kochi-card-content">
                <div class="kochi-badge">UPCOMING DESTINATION</div>
                <h4 class="kochi-card-title">Kochi is Next.</h4>
                <p class="kochi-card-text">
                  Register your interest to receive confirmed venue, date, and race categories the moment official registrations open.
                </p>
                <a href="/flexathon/kochi" class="btn btn-sm btn-outline kochi-link">Kochi Updates & Notification →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Youth and Lifelong Sport Panels -->
    <section class="section section-pillars" aria-labelledby="generations-heading">
      <div class="container">
        <div class="section-intro-header text-center">
          <span class="text-eyebrow">SPORT ACROSS GENERATIONS</span>
          <h2 id="generations-heading" class="heading-section">Active From Youth to Veteran Sport</h2>
          <p class="lead-text mx-auto">
            Sport provides vital lessons at every stage of life — from grassroots technique in early childhood to lifelong fitness and camaraderie for experienced players.
          </p>
        </div>

        <div class="dual-pillar-grid">
          <!-- Pillar 1: Youth Football -->
          <div class="pillar-card card-hover-lift">
            <div class="pillar-img-wrap">
              <img 
                src="/assets/hero/football-camp-hero-1.jpg" 
                alt="Football Coaching Camp – Empower Youth Programme inaugurated by MLA Manoj Moothedan" 
                class="pillar-img"
                loading="lazy"
                decoding="async"
              />
              <span class="pillar-floating-tag tag-green">Empower Youth Programme</span>
            </div>
            <div class="pillar-body">
              <span class="pillar-badge">Ages 10–15 • 3 Oct 2026 to 27 Feb 2027 • Inaugurated by MLA Manoj Moothedan</span>
              <h3 class="pillar-title">Football Coaching Camp – Empower Youth Programme</h3>
              <p class="pillar-desc">
                An initiative of Flexon Sports Foundation under its Empower Youth Programme. Provides structured football training for children aged 10–15, focusing on football skills, physical fitness, teamwork, discipline and confidence.
              </p>
              <div class="pillar-meta">
                <span class="meta-tag">⚽ Football Skills</span>
                <span class="meta-tag">💪 Physical Fitness</span>
                <span class="meta-tag">🤝 Teamwork & Confidence</span>
              </div>
              <div class="pillar-footer">
                <a href="/programs/empower-youth-football-camp" class="btn btn-outline btn-sm">Camp Details & 33 Photos →</a>
              </div>
            </div>
          </div>

          <!-- Pillar 2: Veteran Sixes -->
          <div class="pillar-card card-hover-lift">
            <div class="pillar-img-wrap">
              <img 
                src="/assets/animated/cricket-animated.jpg" 
                alt="Veteran cricket teammates celebrating camaraderie" 
                class="pillar-img"
                loading="lazy"
              />
              <span class="pillar-floating-tag tag-gold">Evergreen Sport</span>
            </div>
            <div class="pillar-body">
              <span class="pillar-badge">Cricket Initiative • Regional Kerala</span>
              <h3 class="pillar-title">The Love of the Game Carries On.</h3>
              <p class="pillar-desc">
                Veteran Sixes cricket celebrates seasoned players, fair play, and enduring friendships on and off the field. A fast-paced six-a-side format celebrating sporting longevity.
              </p>
              <div class="pillar-meta">
                <span class="meta-tag">🏏 Six-a-Side</span>
                <span class="meta-tag">🌟 Fair Play</span>
                <span class="meta-tag">👥 Camaraderie</span>
              </div>
              <div class="pillar-footer">
                <a href="/veteran-sixes" class="btn btn-outline btn-sm">Cricket Details & Registration →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Global Goals Framework Section -->
    <section class="section section-sdgs bg-surface" aria-labelledby="sdg-heading">
      <div class="container">
        <div class="sdg-split-layout">
          <div class="sdg-content-column">
            <span class="text-eyebrow">GLOBAL FRAMEWORK</span>
            <h2 id="sdg-heading" class="heading-section">
              Global Goals.<br />
              <span class="text-gradient-red">Local Sporting Action.</span>
            </h2>
            <p class="lead-text">
              The 17 Sustainable Development Goals provide a shared international roadmap for communities. We align our sporting events with relevant goals to build awareness, participation, and measurable grassroots impact.
            </p>

            <!-- Spotlight Card: SDG 4 Quality Education -->
            <div class="sdg-spotlight-card">
              <div class="sdg-spotlight-badge" style="background-color: #C5192D;">
                <span class="sdg-badge-num">04</span>
              </div>
              <div class="sdg-spotlight-text">
                <h4 class="sdg-spotlight-title">Quality Education (SDG 4)</h4>
                <p class="sdg-spotlight-desc">
                  Featured in FLEXATHON Hyderabad 2026. Emphasizing the link between physical activity, lifelong mental discipline, and equitable learning environments.
                </p>
              </div>
            </div>

            <div class="feature-actions">
              <a href="/global-goals" class="btn btn-primary">Explore All 17 Goals</a>
              <a href="/sdg-approach" class="btn btn-outline">Our SDG Approach</a>
            </div>

            <p class="sdg-disclaimer-note">
              <small>※ ${organization.sdgDisclaimer}</small>
            </p>
          </div>

          <div class="sdg-grid-column">
            <div class="sdg-interactive-grid">
              ${sdgs.slice(0, 8).map(s => `
                <a href="/global-goals/${s.slug}" class="sdg-interactive-tile" style="--tile-color: ${s.color};">
                  <div class="tile-bar" style="background-color: ${s.color};"></div>
                  <div class="tile-num">${s.number < 10 ? '0' + s.number : s.number}</div>
                  <div class="tile-name">${s.shortName}</div>
                  <div class="tile-arrow" aria-hidden="true">→</div>
                </a>
              `).join("")}
            </div>
            <div class="text-right mt-3">
              <a href="/global-goals" class="view-all-link">Browse All 17 Goals Directory →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Curated Documentary Archive (Gallery Preview) -->
    <section class="section section-gallery" aria-labelledby="gallery-heading">
      <div class="container">
        <div class="section-header-row">
          <div>
            <span class="text-eyebrow">DOCUMENTARY ARCHIVE • FLEXATHON HYDERABAD & EMPOWER YOUTH FOOTBALL CAMP</span>
            <h2 id="gallery-heading" class="heading-section">The Effort. The People. The Moments.</h2>
          </div>
          <a href="/gallery" class="btn btn-outline btn-sm">Explore All ${totalArchiveCount} Event Photos →</a>
        </div>

        <div class="gallery-showcase-grid">
          ${homeShowcaseItems.map((item, idx) => `
            <div class="gallery-showcase-card" data-index="${idx}" tabindex="0" role="button" aria-label="Open photo: ${item.caption}">
              <div class="gallery-showcase-img-wrap">
                <img 
                  src="${item.src}" 
                  alt="${item.alt}" 
                  class="gallery-showcase-img"
                  loading="lazy"
                  decoding="async"
                />
                ${item.categoryLabel ? `<span class="gallery-showcase-tag">${item.categoryLabel}</span>` : ""}
                <div class="gallery-zoom-icon" aria-hidden="true">⤢</div>
              </div>
              <div class="gallery-showcase-caption">
                <span class="caption-text">${item.caption}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- 8. Pathways to Action -->
    <section class="section section-paths bg-surface" aria-labelledby="paths-heading">
      <div class="container">
        <div class="section-intro-header text-center">
          <span class="text-eyebrow">GET INVOLVED</span>
          <h2 id="paths-heading" class="heading-section">Ways to Participate in Flexon’s Journey</h2>
          <p class="lead-text mx-auto">
            Whether you run, coach, volunteer, or lead an institution, there is a clear and welcoming pathway to participate.
          </p>
        </div>

        <div class="paths-grid">
          <div class="path-card card-hover-lift">
            <div class="path-icon-wrap icon-red">🏃</div>
            <h3 class="path-title">Take Part</h3>
            <p class="path-desc">Join our runs, football coaching, or cricket matches as an athlete, runner, or student participant.</p>
            <a href="/events" class="path-link">Explore Events Calendar →</a>
          </div>

          <div class="path-card card-hover-lift">
            <div class="path-icon-wrap icon-green">🤝</div>
            <h3 class="path-title">Volunteer</h3>
            <p class="path-desc">Contribute your time, skills, and energy to event logistics, race hydration, participant safety, and coordination.</p>
            <a href="/volunteer" class="path-link">Register Volunteer Interest →</a>
          </div>

          <div class="path-card card-hover-lift">
            <div class="path-icon-wrap icon-blue">🏛</div>
            <h3 class="path-title">Collaborate</h3>
            <p class="path-desc">Partner your school, college, corporate team, or sporting club to organize an inclusive event or tournament.</p>
            <a href="/partnerships" class="path-link">Submit a Partnership Brief →</a>
          </div>

          <div class="path-card card-hover-lift">
            <div class="path-icon-wrap icon-gold">❤️</div>
            <h3 class="path-title">Support</h3>
            <p class="path-desc">Help widen opportunities for young athletes by discussing approved CSR, sponsorships, or sporting equipment grants.</p>
            <a href="/donate" class="path-link">Support & Sponsorship Options →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Support & Non-Profit Mission Banner -->
    <section class="section section-support" aria-labelledby="support-heading">
      <div class="container">
        <div class="support-banner-card">
          <div class="support-banner-content">
            <span class="support-eyebrow">SECTION 8 NOT-FOR-PROFIT FOUNDATION</span>
            <h2 id="support-heading" class="support-title">
              Help Create More Opportunities Through Sport.
            </h2>
            <p class="support-desc">
              Explore how you can support Flexon's approved sporting and community initiatives across youth football camps, community endurance runs, and inclusive sports.
            </p>
            <div class="support-actions">
              <a href="/donate" class="btn btn-primary btn-lg">
                <span>Support Flexon</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="/contact?interest=donation" class="btn btn-outline-white btn-lg">
                <span>Discuss Contribution</span>
              </a>
            </div>
            <div class="support-trust-row">
              <span class="trust-badge">✓ Licensed under Companies Act, 2013</span>
              <span class="trust-badge">✓ Transparent Statutory Disclosures</span>
              <span class="trust-badge">✓ Zero Private Benefit</span>
            </div>
          </div>
          <div class="support-banner-visual">
            <img 
              src="/assets/animated/support-donate-animated.jpg" 
              alt="Community sports participants celebrating with trophy and equipment" 
              class="support-visual-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  `;

  // Mount 3D Hero scene
  const heroMount = container.querySelector("#hero-3d-mount");
  if (heroMount) {
    createHero3D(heroMount);
  }

  // Lightbox preview triggers
  const galleryItems = container.querySelectorAll(".gallery-showcase-card");
  galleryItems.forEach(item => {
    const trigger = () => {
      const idx = parseInt(item.getAttribute("data-index") || "0", 10);
      globalLightbox.open(homeShowcaseItems, idx);
    };
    item.addEventListener("click", trigger);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });

  return container;
}
