/**
 * Flexon Sports Foundation - About Page
 * Authority: Blueprint v2.0 Section 6
 */

import { organization, objectives, values } from "../data/content.js";

export function renderAboutPage() {
  const container = document.createElement("div");
  container.className = "page-about";

  container.innerHTML = `
    <!-- Header Hero -->
    <section class="page-hero bg-surface" id="about-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            SECTION 8 NOT-FOR-PROFIT
          </span>
          <span class="hero-sdg-tag">🏛️ REGISTERED IN KERALA</span>
          <span class="hero-sdg-tag">NATIONAL OUTLOOK</span>
        </div>

        <h1 class="page-title">
          SPORT WITH A SHARED PURPOSE.<br />
          <span class="text-gradient-red">ABOUT FLEXON SPORTS FOUNDATION</span>
        </h1>

        <p class="hero-lead">
          Flexon Sports Foundation brings people and organisations together through sport. Based in Kerala with a national outlook, our work connects active living, learning, and community participation through structured events, training camps, and institutional partnerships.
        </p>

        <div class="page-hero-actions">
          <a href="/governance" class="btn btn-primary btn-lg">
            <span>Governance & Legal Identity</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="/team" class="btn btn-outline btn-lg">
            <span>Board & Catalysts</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">100%</span>
            <span class="page-metric-label">Not-For-Profit Company</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">12</span>
            <span class="page-metric-label">Retained Sports Programs</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">17</span>
            <span class="page-metric-label">Global Goals Framework</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Ernakulam</span>
            <span class="page-metric-label">Registered Office in Kerala</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="section section-vision-mission">
      <div class="container">
        <div class="dual-pillar-grid">
          <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-red);">
            <span class="card-eyebrow">OUR VISION</span>
            <h3 class="card-title mt-1" style="font-size: 1.5rem;">Communities empowered through active living.</h3>
            <p class="card-text text-muted mt-2">
              “Communities where people of all ages and backgrounds can stay active, develop their sporting potential, and contribute positively to society through the power of movement.”
            </p>
          </div>

          <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-ink);">
            <span class="card-eyebrow">OUR MISSION</span>
            <h3 class="card-title mt-1" style="font-size: 1.5rem;">Nurturing participation, health and teamwork.</h3>
            <p class="card-text text-muted mt-2">
              “To nurture sporting participation and talent through inclusive events, coaching camps, and community programmes that encourage health, learning, discipline, leadership, and teamwork, working with partners towards relevant Sustainable Development Goals.”
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7 Practical Objectives Connected to SDGs -->
    <section class="section section-objectives bg-surface">
      <div class="container">
        <div class="section-header text-center max-w-reading mx-auto">
          <span class="section-eyebrow">FRAMEWORK FOR ACTION</span>
          <h2 class="section-title">7 Practical Objectives</h2>
          <p class="section-desc">
            Our operational objectives translate our charitable objects into real athletic, educational, and community initiatives across India.
          </p>
        </div>

        <div class="objectives-grid mt-4">
          ${objectives.map(obj => `
            <div class="objective-card">
              <div class="objective-header">
                <span class="objective-num">0${obj.id}</span>
                <div class="objective-sdg-tags">
                  ${obj.sdgs.map(s => `<span class="sdg-pill">SDG ${s}</span>`).join(" ")}
                </div>
              </div>
              <h3 class="objective-title">${obj.title}</h3>
              <p class="objective-desc">${obj.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section section-values">
      <div class="container">
        <div class="section-header text-center max-w-reading mx-auto">
          <span class="section-eyebrow">WHAT WE STAND FOR</span>
          <h2 class="section-title">Our Core Values</h2>
          <p class="section-desc">
            We value fair play, clear information, realistic commitments, and genuine care for participants and communities.
          </p>
        </div>

        <div class="values-grid mt-4">
          ${values.map(val => `
            <div class="value-item">
              <h4 class="value-name">${val.name}</h4>
              <p class="value-desc">${val.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="section section-workflow bg-surface">
      <div class="container">
        <div class="section-header text-center max-w-reading mx-auto">
          <span class="section-eyebrow">OUR METHODOLOGY</span>
          <h2 class="section-title">How We Deliver Initiatives</h2>
          <p class="section-desc">A five-stage operational framework ensuring accountability, quality, and measurable civic impact.</p>
        </div>

        <div class="workflow-steps mt-4">
          <div class="step-card">
            <span class="step-num">1</span>
            <h4 class="step-title">Understand</h4>
            <p class="step-text">Identify grassroots community needs, physical activity gaps, and regional sports interest.</p>
          </div>
          <div class="step-card">
            <span class="step-num">2</span>
            <h4 class="step-title">Define</h4>
            <p class="step-text">Set realistic scope, confirmed participant categories, rules, and safety arrangements.</p>
          </div>
          <div class="step-card">
            <span class="step-num">3</span>
            <h4 class="step-title">Align</h4>
            <p class="step-text">Connect the sporting activity with a meaningful Global Goal theme (e.g. Quality Education).</p>
          </div>
          <div class="step-card">
            <span class="step-num">4</span>
            <h4 class="step-title">Deliver</h4>
            <p class="step-text">Execute structured events, refereeing, hydration, medical support, and safeguarding.</p>
          </div>
          <div class="step-card">
            <span class="step-num">5</span>
            <h4 class="step-title">Review</h4>
            <p class="step-text">Gather participant feedback, publish honest event highlights, and document learnings.</p>
          </div>
        </div>

        <div class="text-center mt-5">
          <a href="/team" class="btn btn-primary btn-lg">Meet Our Team</a>
          <a href="/governance" class="btn btn-outline btn-lg ml-2">View Governance</a>
          <a href="/partnerships" class="btn btn-ghost btn-lg ml-2">Work With Flexon</a>
        </div>
      </div>
    </section>
  `;

  return container;
}
