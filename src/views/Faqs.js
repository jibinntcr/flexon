/**
 * Flexon Sports Foundation - FAQs Page
 * Authority: Blueprint v2.0 Section 19 (FAQ page copy)
 */

import { faqs } from "../data/content.js";

export function renderFaqsPage() {
  const container = document.createElement("div");
  container.className = "page-faqs";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface">
      <div class="container text-center max-w-reading">
        <div class="page-hero-pills">
          <span class="hero-live-pill"><span class="live-dot"></span> KNOWLEDGE BASE</span>
          <span class="hero-sdg-tag">VERIFIED CLARIFICATIONS</span>
          <span class="hero-sdg-tag">PUBLIC DISCLOSURES</span>
        </div>
        <h1 class="page-title">Frequently Asked <span class="text-gradient-red">Questions</span></h1>
        <p class="hero-lead">
          Find practical, verified answers regarding our sporting initiatives, event registrations, youth coaching camps, institutional partnerships, and Section 8 governance.
        </p>
        <div class="page-hero-actions">
          <a href="#faqs-stack" class="btn btn-primary btn-lg">Browse Questions</a>
          <a href="/contact" class="btn btn-outline btn-lg">Contact Secretariat</a>
        </div>
      </div>
    </section>

    <!-- Page Metrics Ribbon -->
    <div class="page-metrics-ribbon">
      <div class="page-metric-item">
        <span class="metric-num">14+</span>
        <span class="metric-lbl">Documented Topics</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">100%</span>
        <span class="metric-lbl">Factual Disclosures</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">Realtime</span>
        <span class="metric-lbl">Keyword Search Filter</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">48h</span>
        <span class="metric-lbl">Custom Inquiry SLA</span>
      </div>
    </div>

    <!-- FAQ Search and Accordion -->
    <section class="section section-faqs-list">
      <div class="container max-w-reading">
        <div class="faq-search-box-wrap mb-4">
          <div class="card p-3 shadow-sm bg-surface">
            <label for="page-faq-search" class="text-xs font-weight-bold text-muted mb-2 d-block">Search Knowledge Base:</label>
            <input 
              type="text" 
              id="page-faq-search" 
              class="form-control form-control-lg" 
              placeholder="Search by topic or keyword (e.g. Hyderabad, Kochi, Football, Tax, Volunteer)..." 
            />
          </div>
        </div>

        <div class="faqs-accordion-stack" id="faqs-stack">
          ${faqs.map((f, i) => `
            <details class="faq-accordion-item card shadow-sm mb-3" ${i === 0 ? "open" : ""}>
              <summary class="faq-summary p-3 d-flex justify-between align-center" style="cursor: pointer; user-select: none;">
                <span class="faq-q-text font-weight-bold" style="color: var(--color-foreground, #111827);">${f.q}</span>
                <span class="faq-icon-indicator text-primary font-weight-bold" style="font-size: 1.25rem;">▾</span>
              </summary>
              <div class="faq-answer-body p-3 text-muted" style="border-top: 1px solid var(--color-border, #e5e7eb); line-height: 1.6;">
                <p class="mb-0">${f.a}</p>
              </div>
            </details>
          `).join("")}
        </div>

        <!-- Question not answered -->
        <div class="card p-4 bg-surface mt-5 text-center shadow-sm" style="border-top: 3px solid var(--color-primary, #dc2626);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">💬</div>
          <h3 class="card-title text-base font-weight-bold">Have a question not covered here?</h3>
          <p class="text-sm text-muted mt-1 max-w-reading mx-auto">
            Our foundation secretariat is pleased to assist with custom event circulars, corporate team entries, or institutional partnership inquiries.
          </p>
          <div class="mt-4 d-flex justify-center flex-wrap gap-2">
            <a href="/contact" class="btn btn-primary btn-sm">Contact Foundation Secretariat →</a>
            <button class="btn btn-outline btn-sm" id="trigger-chat-btn">Ask Automated Assistant ⚡</button>
          </div>
        </div>
      </div>
    </section>
  `;

  // Search filter
  const searchInput = container.querySelector("#page-faq-search");
  const items = container.querySelectorAll(".faq-accordion-item");

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // Trigger chat widget if clicked
  const chatTrigger = container.querySelector("#trigger-chat-btn");
  if (chatTrigger) {
    chatTrigger.addEventListener("click", () => {
      const launcher = document.querySelector("#chat-launcher-btn");
      if (launcher) launcher.click();
    });
  }

  return container;
}
