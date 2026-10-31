/**
 * Flexon Sports Foundation - Our Leadership & Team Page
 * Authority: Blueprint v2.0 Section 7 & Antigravity Leadership Brief
 * 
 * Essential Governance & Accuracy:
 * - Jibin N is a Founder of Flexon Sports Foundation
 * - Arun Francis is a Founder of Flexon Sports Foundation
 * - Muneer K H and Mohammed Raneef are Leadership Team
 * - Real, authentic portrait images from public/assets/team/
 * - LinkedIn buttons shown ONLY when verified URLs exist (Jibin N and Muneer K H)
 * - Section 8 statutory governance transparency
 */

import { teamMembers, teamStructure } from "../data/content.js";

export function renderTeamPage() {
  const container = document.createElement("div");
  container.className = "page-team";

  const founders = teamMembers.filter(m => m.group === "Founders");
  const leadership = teamMembers.filter(m => m.group === "Leadership Team");

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="team-hero">
      <div class="container text-center max-w-reading">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            THE PEOPLE BEHIND FLEXON
          </span>
          <span class="hero-sdg-tag">FOUNDERS & LEADERSHIP</span>
          <span class="hero-sdg-tag">SECTION 8 NON-PROFIT</span>
        </div>

        <h1 class="page-title">
          Our Leadership <span class="text-gradient-red">& Team</span>
        </h1>

        <p class="hero-tagline font-weight-bold text-lg mt-2 mb-3" style="color: var(--color-ink, #0f172a);">
          Building Opportunities. Empowering Communities. Transforming Lives Through Sport.
        </p>

        <p class="hero-lead">
          At Flexon Sports Foundation, we believe sport has the power to develop individuals, strengthen communities, and create meaningful opportunities.
        </p>

        <p class="text-muted text-sm mt-2" style="line-height: 1.65;">
          Our team brings together experience in technology, entrepreneurship, sports coaching, organisational development, and community engagement. Together, we work to make sporting opportunities more accessible, encourage active lifestyles, nurture emerging talent, and support positive social impact.
        </p>

        <p class="text-muted text-xs mt-2" style="line-height: 1.6;">
          Our initiatives reflect a commitment to the United Nations Sustainable Development Goals, particularly Good Health and Well-being (SDG 3), Quality Education (SDG 4), Gender Equality (SDG 5), Reduced Inequalities (SDG 10), and Partnerships for the Goals (SDG 17). This alignment describes our thematic focus rather than formal UN endorsement.
        </p>

        <div class="page-hero-actions mt-4">
          <a href="#founders-leadership" class="btn btn-primary btn-lg">
            <span>Meet The Team</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="/governance" class="btn btn-outline btn-lg">
            <span>Governance & Transparency</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Page Metrics Ribbon -->
    <div class="metrics-ribbon-container container d-flex justify-center">
      <div class="page-metrics-ribbon">
        <div class="page-metric-item">
          <span class="page-metric-val">15+ Years</span>
          <span class="page-metric-label">Technology & Innovation</span>
        </div>
        <div class="page-metric-item">
          <span class="page-metric-val">Grassroots</span>
          <span class="page-metric-label">Athlete Development</span>
        </div>
        <div class="page-metric-item">
          <span class="page-metric-val">Sec 8</span>
          <span class="page-metric-label">Companies Act 2013</span>
        </div>
        <div class="page-metric-item">
          <span class="page-metric-val">SDG 3 & 4</span>
          <span class="page-metric-label">Primary Alignment</span>
        </div>
      </div>
    </div>

    <!-- Founders & Leadership Section -->
    <section class="section section-team-profiles" id="founders-leadership">
      <div class="container">
        
        <!-- Subsection: Founders -->
        <div class="mb-5">
          <div class="section-header text-center max-w-reading mx-auto mb-4">
            <span class="section-eyebrow">FOUNDING STEWARDSHIP</span>
            <h2 class="section-title">Foundation Founders</h2>
            <p class="section-desc">
              The strategic and sports development architects establishing Flexon Sports Foundation's non-profit mission.
            </p>
          </div>

          <div class="team-profiles-grid">
            ${founders.map(member => `
              <div class="team-card founder-card shadow-sm">
                <div class="team-portrait-wrap">
                  <img 
                    src="${member.image}" 
                    alt="Portrait of ${member.name}" 
                    class="team-portrait-img"
                    loading="eager"
                    decoding="async"
                  />
                  <div class="portrait-badge-overlay">
                    <span class="portrait-status-pill">
                      <span class="portrait-status-dot" aria-hidden="true"></span>
                      Founder
                    </span>
                  </div>
                </div>
                <div class="team-info d-flex flex-column" style="flex-grow: 1;">
                  <span class="team-role">${member.displayTitle}</span>
                  <h3 class="team-name">${member.name}</h3>
                  <p class="team-bio">${member.bio}</p>
                  
                  ${member.linkedinUrl ? `
                    <div class="team-card-actions mt-auto pt-3 border-top">
                      <a 
                        href="${member.linkedinUrl}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="team-linkedin-btn"
                        aria-label="${member.name} on LinkedIn"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                        </svg>
                        <span>LinkedIn Profile ↗</span>
                      </a>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Subsection: Leadership Team -->
        <div class="mt-5 pt-3">
          <div class="section-header text-center max-w-reading mx-auto mb-4">
            <span class="section-eyebrow">STRATEGY & PROGRAMMES</span>
            <h2 class="section-title">Leadership Team</h2>
            <p class="section-desc">
              Driving strategic partnerships, sustainable programme initiatives, and community athletic engagements.
            </p>
          </div>

          <div class="team-profiles-grid">
            ${leadership.map(member => `
              <div class="team-card leadership-card shadow-sm">
                <div class="team-portrait-wrap">
                  <img 
                    src="${member.image}" 
                    alt="Portrait of ${member.name}" 
                    class="team-portrait-img"
                    loading="eager"
                    decoding="async"
                  />
                  <div class="portrait-badge-overlay">
                    <span class="portrait-status-pill">
                      <span class="portrait-status-dot" style="background: #38BDF8;" aria-hidden="true"></span>
                      Leadership
                    </span>
                  </div>
                </div>
                <div class="team-info d-flex flex-column" style="flex-grow: 1;">
                  <span class="team-role">${member.displayTitle}</span>
                  <h3 class="team-name">${member.name}</h3>
                  <p class="team-bio">${member.bio}</p>
                  
                  ${member.linkedinUrl ? `
                    <div class="team-card-actions mt-auto pt-3 border-top">
                      <a 
                        href="${member.linkedinUrl}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="team-linkedin-btn"
                        aria-label="${member.name} on LinkedIn"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                        </svg>
                        <span>LinkedIn Profile ↗</span>
                      </a>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

      </div>
    </section>

    <!-- Governance & Transparency -->
    <section class="section section-governance bg-surface py-5" id="governance-section">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-primary, #dc2626); border-radius: 16px;">
          <div class="d-flex align-center gap-2 mb-2">
            <span style="font-size: 1.5rem;">⚖️</span>
            <h3 class="card-title mb-0">Governance & Transparency</h3>
          </div>
          <p class="text-sm text-muted mt-2">
            ${teamStructure.governanceNote}
          </p>
          <div class="bg-surface p-3 rounded mt-3 text-xs text-muted" style="border-left: 3px solid var(--color-primary, #dc2626);">
            <strong>Statutory Record Maintenance:</strong> Under the Companies Act, 2013 and Rule 26 of the Companies (Incorporation) Rules, 2014, statutory registers, director identification details, and annual returns are maintained at the registered office and published through certified MCA channels.
          </div>
          <div class="mt-4 d-flex flex-wrap gap-2">
            <a href="/governance" class="btn btn-outline btn-sm">View Statutory Filings →</a>
            <a href="/governance/annual-returns" class="btn btn-ghost btn-sm">Annual Returns Archive</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Programme Delivery Leadership -->
    <section class="section section-programme-leadership py-5">
      <div class="container">
        <div class="section-header text-center max-w-reading mx-auto mb-4">
          <span class="section-eyebrow">GRASSROOTS INITIATIVES</span>
          <h2 class="section-title">Programme Delivery Leadership</h2>
          <p class="section-desc">Community leaders steering grassroots coaching and regional sports formats.</p>
        </div>

        <div class="delivery-grid max-w-reading mx-auto">
          ${teamStructure.programmeDelivery.map(prog => `
            <div class="delivery-card card p-4 shadow-sm" style="border-top: 4px solid #16A34A; border-radius: 16px;">
              <span class="badge badge-green" style="background: #DCFCE7; color: #166534; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px;">Active Sports Programme</span>
              <h3 class="delivery-title mt-2 font-weight-bold" style="font-size: 1.35rem;">${prog.name}</h3>
              <p class="delivery-leadership mt-2 mb-1"><strong>Leadership:</strong> ${prog.leadership}</p>
              <p class="delivery-organizer mb-1 text-sm text-muted"><strong>Organiser:</strong> ${prog.organizer}</p>
              <p class="delivery-focus text-sm text-muted mt-2">${prog.focus}</p>
              <div class="delivery-contact mt-3 pt-3 border-top">
                <span class="text-sm">Camp Enquiries: <a href="tel:+917907599510" class="text-primary font-mono font-weight-bold" style="text-decoration: underline;">${prog.contact}</a></span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Closing Section: Working Together & Collaborate CTA -->
    <section class="section section-team-cta bg-surface py-5">
      <div class="container text-center max-w-reading mx-auto">
        <span class="section-eyebrow">UNITED BY SPORT. DRIVEN BY PURPOSE.</span>
        <h2 class="section-title">Working Together for Greater Impact</h2>
        <p class="section-body text-muted mt-2">
          Behind every programme is a shared commitment to creating opportunities that go beyond competition. Through youth development, sports education, inclusive events, and community partnerships, we aim to make a measurable and lasting difference.
        </p>

        <div class="card p-4 shadow-sm mt-4 bg-surface" style="border-top: 3px solid var(--color-primary, #dc2626); background: #FFFFFF;">
          <h3 class="card-title text-base font-weight-bold">Collaborate With Our Team</h3>
          <p class="text-sm text-muted mt-1">
            We welcome collaborations with schools, colleges, sports associations, corporate CSR teams, coaches, volunteers, and individuals who share our vision.
          </p>
          <div class="mt-4 d-flex justify-center flex-wrap gap-2">
            <a href="/partnerships" class="btn btn-primary btn-sm">Partner With Us →</a>
            <a href="/get-involved" class="btn btn-outline btn-sm">Get Involved</a>
            <a href="/contact" class="btn btn-ghost btn-sm">Contact Our Team</a>
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
