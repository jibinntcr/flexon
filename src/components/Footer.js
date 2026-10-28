/**
 * Flexon Sports Foundation - Footer Component
 * Authority: Blueprint v2.0 Sections 5, 17, Fact Register
 * 
 * Elevated Features:
 * - Pure white/light surface background with athletic red line indicator
 * - Pre-footer action ribbon with status pills, dynamic CTAs & newsletter subscription
 * - Comprehensive 4-column structured grid (Identity, Initiatives, Governance, Policies)
 * - Trust chips, direct office contact & social media community links
 * - Status chips on flagship programs (Flagship, Announced, Archive, Grassroots)
 * - Rule 26 Companies Act 2013 mandatory statutory disclosure card in 2-column format
 * - Iconic 17-color United Nations Global Goals spectrum bar and disclaimer
 * - Sub-footer legal row with interactive smooth "Back to top ↑" scroller
 */

import { organization } from "../data/content.js";

export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.id = "main-footer";

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
    <!-- Pre-Footer Action Ribbon -->
    <div class="footer-ribbon">
      <div class="container footer-ribbon-content">
        <div class="footer-ribbon-text">
          <div class="footer-ribbon-pills">
            <span class="ribbon-pill pill-red">● Grassroots to National Movement</span>
            <span class="ribbon-pill pill-amber">⚡ Kochi 2026 Edition Announced</span>
            <span class="ribbon-pill pill-blue">🏛️ Section 8 Licensed Non-Profit</span>
          </div>
          <h3 class="footer-ribbon-title">United by Sport. Driven by Global Goals.</h3>
          <p class="footer-ribbon-desc">Connecting communities across India through athletic opportunity, inclusive grassroots youth coaching, and sustainable physical health.</p>
        </div>
        <div class="footer-ribbon-actions">
          <a href="/programs" class="btn btn-outline btn-sm">Explore Programs</a>
          <a href="/partnerships" class="btn btn-outline btn-sm">Corporate & CSR</a>
          <a href="/donate" class="btn btn-primary btn-sm">Support Flexon</a>
        </div>
      </div>

      <!-- Pre-Footer Newsletter Subscription Strip -->
      <div class="container footer-newsletter-wrap">
        <div class="footer-newsletter-box">
          <div class="newsletter-text-wrap">
            <h4 class="newsletter-title">📬 Stay Connected with Flexon Sports</h4>
            <p class="newsletter-desc">Receive official notices on tournament fixtures, grassroots football camp registrations, and verified annual impact reports.</p>
          </div>
          <form class="footer-newsletter-form" id="footer-newsletter-form">
            <input 
              type="email" 
              class="footer-newsletter-input" 
              id="footer-newsletter-email" 
              placeholder="Enter your email address..." 
              required 
              aria-label="Email address for Flexon community updates"
            />
            <button type="submit" class="btn btn-primary btn-sm">Get Updates</button>
          </form>
          <div class="newsletter-success-alert" id="footer-newsletter-success">
            <span>✓</span> Thank you! You are now subscribed to official Flexon Sports bulletins and fixture notices.
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Columns -->
    <div class="container footer-main">
      <div class="footer-grid">
        <!-- Brand & Contact Summary Column -->
        <div class="footer-col brand-col">
          <a href="/" class="footer-brand-link" aria-label="Flexon Sports Foundation Home">
            <img 
              src="/assets/brand/flexon-sports-logo-light.png" 
              alt="Flexon Sports Foundation Logo" 
              class="footer-brand-logo"
              onerror="this.onerror=null; this.src='/assets/brand/flexon-sports-logo.png';"
            />
          </a>
          <p class="footer-bio">
            Flexon Sports Foundation is an Indian Section 8 not-for-profit company registered under the Companies Act, 2013. Dedicated to grassroots athletic coaching, inclusive community festivals, and public physical health aligned with the UN Sustainable Development Goals.
          </p>

          <div class="footer-trust-chips">
            <span class="trust-chip">🏛️ Section 8 Non-Profit</span>
            <span class="trust-chip">🏆 12 Disciplines</span>
            <span class="trust-chip">🎯 17 Global Goals</span>
          </div>

          <div class="footer-contact-details">
            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">📍</span>
              <div>
                <strong>Registered & Operational Office:</strong><br />
                ${organization.contactAddress}
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">📞</span>
              <div>
                <strong>Helplines:</strong> 
                <a href="tel:+919605206461">+91 96052 06461</a> · <a href="tel:+919074934014">+91 90749 34014</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">✉️</span>
              <div>
                <strong>Official Email:</strong> 
                <a href="mailto:${organization.email}">${organization.email}</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">🌐</span>
              <div>
                <strong>Event Portal:</strong> 
                <a href="${organization.eventWebsite}" target="_blank" rel="noopener noreferrer">${organization.eventWebsite}</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">⚽</span>
              <div>
                <strong>Football Camp Desk:</strong> 
                <a href="tel:${organization.campPhone}">${organization.campPhone}</a>
              </div>
            </div>
          </div>

          <!-- Social Channels Row -->
          <div class="footer-social-row">
            <a href="https://www.linkedin.com/company/flexon-sports/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" title="LinkedIn" aria-label="Flexon Sports on LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" title="Instagram" aria-label="Flexon Sports on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" title="YouTube" aria-label="Flexon Sports on YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" title="X (Twitter)" aria-label="Flexon Sports on X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://wa.me/919605206461" target="_blank" rel="noopener noreferrer" class="footer-social-btn" title="WhatsApp Community" aria-label="Flexon Sports WhatsApp Desk">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.805 1.554 5.352L2.054 22l4.749-1.464a9.972 9.972 0 0 0 5.228 1.495c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.836 14.198c-.244.688-1.226 1.282-1.708 1.343-.464.059-1.04.084-3.14-.783-2.684-1.107-4.417-3.83-4.551-4.009-.133-.178-1.09-1.45-1.09-2.766 0-1.316.689-1.963.933-2.229.244-.266.533-.333.71-.333.178 0 .356.002.511.01.167.008.39-.063.61.466.244.577.822 2.01.896 2.155.074.145.122.316.024.509-.098.192-.147.312-.293.483-.146.17-.308.38-.44.51-.148.145-.302.304-.13.599.172.296.764 1.258 1.637 2.036 1.122.999 2.067 1.309 2.363 1.455.296.146.467.126.638-.071.171-.197.733-.854.929-1.147.196-.293.391-.244.659-.145.268.098 1.708.805 2.002.952.294.147.489.22.562.342.073.122.073.708-.171 1.396z"/></svg>
            </a>
          </div>
        </div>

        <!-- Initiatives & Programs Column -->
        <div class="footer-col">
          <span class="footer-eyebrow">Fixtures & Athletics</span>
          <h4 class="footer-heading">Initiatives & Programs</h4>
          <ul class="footer-links">
            <li>
              <a href="/flexathon">
                <span class="link-label-group"><span class="link-bullet">›</span> FLEXATHON Flagship Run</span>
                <span class="footer-chip chip-flagship">Flagship</span>
              </a>
            </li>
            <li>
              <a href="/flexathon/hyderabad-2026">
                <span class="link-label-group"><span class="link-bullet">›</span> Hyderabad 2026 Edition</span>
                <span class="footer-chip chip-completed">Archive</span>
              </a>
            </li>
            <li>
              <a href="/flexathon/kochi">
                <span class="link-label-group"><span class="link-bullet">›</span> Kochi Edition Teaser</span>
                <span class="footer-chip chip-announced">Announced</span>
              </a>
            </li>
            <li>
              <a href="/programs/empower-youth-football-camp">
                <span class="link-label-group"><span class="link-bullet">›</span> Empower Youth Football</span>
                <span class="footer-chip chip-camp">Grassroots</span>
              </a>
            </li>
            <li>
              <a href="/veteran-sixes">
                <span class="link-label-group"><span class="link-bullet">›</span> Veteran Sixes Cricket</span>
              </a>
            </li>
            <li>
              <a href="/programs">
                <span class="link-label-group"><span class="link-bullet">›</span> Community Athletics Meets</span>
              </a>
            </li>
            <li>
              <a href="/programs">
                <span class="link-label-group"><span class="link-bullet">›</span> Inclusive Sports Festivals</span>
              </a>
            </li>
            <li>
              <a href="/programs">
                <span class="link-label-group"><span class="link-bullet">›</span> Grassroots Coaching Clinics</span>
              </a>
            </li>
            <li>
              <a href="/programs">
                <span class="link-label-group"><span class="link-bullet">›</span> School Physical Literacy</span>
              </a>
            </li>
            <li>
              <a href="/programs" class="highlight-link">
                <span class="link-label-group">Browse All 12 Programs →</span>
              </a>
            </li>
            <li>
              <a href="/events" class="highlight-link">
                <span class="link-label-group">Events Calendar & Fixtures →</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Global Goals & Foundation Column -->
        <div class="footer-col">
          <span class="footer-eyebrow">Leadership & Transparency</span>
          <h4 class="footer-heading">Foundation & Goals</h4>
          <ul class="footer-links">
            <li>
              <a href="/about">
                <span class="link-label-group"><span class="link-bullet">›</span> About the Foundation</span>
              </a>
            </li>
            <li>
              <a href="/team">
                <span class="link-label-group"><span class="link-bullet">›</span> Founders & Leadership Team</span>
              </a>
            </li>
            <li>
              <a href="/governance">
                <span class="link-label-group"><span class="link-bullet">›</span> Governance & Legal Identity</span>
              </a>
            </li>
            <li>
              <a href="/governance/annual-returns">
                <span class="link-label-group"><span class="link-bullet">›</span> Annual Returns Archive</span>
              </a>
            </li>
            <li>
              <a href="/about#objectives">
                <span class="link-label-group"><span class="link-bullet">›</span> 7 Foundation Objectives</span>
              </a>
            </li>
            <li>
              <a href="/global-goals">
                <span class="link-label-group"><span class="link-bullet">›</span> All 17 UN Global Goals</span>
              </a>
            </li>
            <li>
              <a href="/sdg-approach">
                <span class="link-label-group"><span class="link-bullet">›</span> Our SDG Framework</span>
              </a>
            </li>
            <li>
              <a href="/stories">
                <span class="link-label-group"><span class="link-bullet">›</span> Stories & Verified Reports</span>
              </a>
            </li>
            <li>
              <a href="/gallery">
                <span class="link-label-group"><span class="link-bullet">›</span> Media & Photo Gallery</span>
              </a>
            </li>
            <li>
              <a href="/faqs">
                <span class="link-label-group"><span class="link-bullet">›</span> FAQs & Guidance</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Participation & Policies Column -->
        <div class="footer-col">
          <span class="footer-eyebrow">Engage & Compliance</span>
          <h4 class="footer-heading">Get Involved & Legal</h4>
          <ul class="footer-links">
            <li>
              <a href="/partnerships">
                <span class="link-label-group"><span class="link-bullet">›</span> Corporate CSR & Partners</span>
              </a>
            </li>
            <li>
              <a href="/volunteer">
                <span class="link-label-group"><span class="link-bullet">›</span> Volunteer With Flexon</span>
              </a>
            </li>
            <li>
              <a href="/donate">
                <span class="link-label-group"><span class="link-bullet">›</span> Support / Donation Journey</span>
              </a>
            </li>
            <li>
              <a href="/contact">
                <span class="link-label-group"><span class="link-bullet">›</span> Contact & Help Desk</span>
              </a>
            </li>
            <li>
              <a href="/safeguarding">
                <span class="link-label-group"><span class="link-bullet">›</span> Participant Safeguarding</span>
              </a>
            </li>
            <li>
              <a href="/safeguarding">
                <span class="link-label-group"><span class="link-bullet">›</span> Anti-Doping & Fair Play</span>
              </a>
            </li>
            <li>
              <a href="/privacy-policy">
                <span class="link-label-group"><span class="link-bullet">›</span> Privacy Notice & Cookies</span>
              </a>
            </li>
            <li>
              <a href="/terms-of-use">
                <span class="link-label-group"><span class="link-bullet">›</span> Terms of Use</span>
              </a>
            </li>
            <li>
              <a href="/donation-policy">
                <span class="link-label-group"><span class="link-bullet">›</span> Donation & Refund Policy</span>
              </a>
            </li>
            <li>
              <a href="/accessibility">
                <span class="link-label-group"><span class="link-bullet">›</span> Accessibility (WCAG 2.1)</span>
              </a>
            </li>
            <li>
              <a href="/admin" class="highlight-link" style="color: #64748B;">
                <span class="link-label-group">Staff Operations Portal →</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Rule 26 Statutory Disclosure Block (Mandatory Baseline) -->
    <div class="footer-statutory">
      <div class="container">
        <div class="statutory-box">
          <div class="statutory-header-row">
            <span class="statutory-badge">Mandatory Statutory Disclosures (Rule 26, Companies Act 2013)</span>
            <span class="statutory-compliance-tag">MCA Rule 26 Compliant</span>
          </div>
          <div class="statutory-grid">
            <div class="statutory-col">
              <p><strong>FLEXON SPORTS FOUNDATION</strong></p>
              <p>Section 8 Not-for-Profit Company licensed under the Companies Act, 2013</p>
              <p>Corporate Identity Number (CIN): <em>${organization.cin}</em></p>
              <p>Registered & Contact Office: ${organization.registeredAddress}</p>
            </div>
            <div class="statutory-col">
              <p>Telephone: ${organization.phones.join(" / ")}</p>
              <p>Official Communications: <a href="mailto:${organization.email}">${organization.email}</a></p>
              <p>Designated Grievance Officer: <strong>${organization.grievanceContact.role}</strong> (<a href="mailto:${organization.grievanceContact.channel}">${organization.grievanceContact.channel}</a>)</p>
              <p>Event Operations Desk: <a href="${organization.eventWebsite}" target="_blank" rel="noopener noreferrer">${organization.eventWebsite}</a></p>
            </div>
          </div>
        </div>

        <!-- 17-Color United Nations Global Goals Spectrum Bar -->
        <div class="sdg-spectrum-bar" title="The 17 United Nations Sustainable Development Goals Color Spectrum" aria-hidden="true"></div>

        <div class="sdg-disclaimer-wrap">
          <span style="font-size: 1.15rem;" aria-hidden="true">🎯</span>
          <p class="sdg-disclaimer-text">
            <strong>UN SDG Alignment Note:</strong> ${organization.sdgDisclaimer} References to the 17 UN SDGs describe thematic alignment with our grassroots athletic, health, and gender equity programs with international development priorities. This does not represent United Nations agency endorsement, authorization, or official sponsorship.
          </p>
        </div>

        <!-- Bottom Row & Smooth Back to Top -->
        <div class="footer-bottom-row">
          <span>&copy; ${currentYear} Flexon Sports Foundation. All rights reserved. Registered under Section 8 of the Companies Act, 2013.</span>
          <div class="footer-bottom-links">
            <a href="/privacy-policy">Privacy Notice</a>
            <span class="sep">•</span>
            <a href="/terms-of-use">Terms of Use</a>
            <span class="sep">•</span>
            <a href="/safeguarding">Safeguarding</a>
            <span class="sep">•</span>
            <a href="/donation-policy">Refund Policy</a>
            <span class="sep">•</span>
            <a href="/accessibility">Accessibility</a>
            <span class="sep">•</span>
            <a href="/contact">Grievance Portal</a>
            <span class="sep">•</span>
            <button type="button" class="footer-back-to-top" id="footer-back-to-top" aria-label="Back to top of page">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Interactive Newsletter Form Listener
  const newsletterForm = footer.querySelector("#footer-newsletter-form");
  const newsletterInput = footer.querySelector("#footer-newsletter-email");
  const newsletterSuccess = footer.querySelector("#footer-newsletter-success");

  if (newsletterForm && newsletterInput && newsletterSuccess) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterInput.value.trim();
      if (email) {
        newsletterForm.style.display = "none";
        newsletterSuccess.style.display = "flex";
      }
    });
  }

  // Smooth Back to Top Scroll Listener
  const backToTopBtn = footer.querySelector("#footer-back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return footer;
}
