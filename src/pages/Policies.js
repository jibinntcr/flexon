/**
 * Flexon Sports Foundation - Policy Pages Hub
 * Authority: Blueprint v2.0 Section 18
 * 
 * Includes:
 * - Privacy Notice (with Chat Transcript disclosure)
 * - Terms of Use
 * - Donation & Refund Policy
 * - Event Policies & Waivers
 * - Safeguarding Policy (Child protection & guardian consent)
 * - Accessibility Statement
 */

import { organization } from "../data/content.js";

export function renderPolicyPage(policyType) {
  const container = document.createElement("div");
  container.className = "page-policy";

  let title = "Foundation Policy";
  let content = "";

  if (policyType === "privacy") {
    title = "Privacy Notice & Data Protection";
    content = `
      <h2 class="text-xl font-weight-bold mb-2">1. About This Notice</h2>
      <p class="text-muted">Flexon Sports Foundation (“Flexon”, “we”, “us”) is a Section 8 not-for-profit company registered under the Companies Act, 2013, with its contact office at ${organization.contactAddress}. We respect the privacy of our participants, volunteers, donors, and website visitors.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">2. What Personal Data We Collect</h2>
      <p class="text-muted">We collect personal information solely where voluntarily provided for specific operational purposes:</p>
      <ul class="text-muted" style="line-height: 1.7;">
        <li><strong>Enquiry & Contact Data:</strong> Name, email address, phone number, city, and message content submitted through web forms.</li>
        <li><strong>Automated Chat Transcripts:</strong> When you choose to initiate a chat with our automated assistant ("Ask Flexon"), conversation turns and your chosen topics are securely saved on our server to help resolve your inquiry. Browsing FAQs does not create a saved session.</li>
        <li><strong>Volunteer & Partnership Details:</strong> Organisation name, availability, and skills.</li>
        <li><strong>Children's Safeguarding:</strong> We strictly do not collect children’s full legal names, dates of birth, or identification documents through general web forms. Enquiries regarding youth football camps must be submitted by an adult parent or guardian.</li>
      </ul>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">3. Purpose of Processing</h2>
      <p class="text-muted">Your details are used exclusively to respond to your specific enquiries, manage event and volunteer participation, provide receipts for contributions, and uphold our statutory compliance responsibilities under Indian law.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">4. Data Retention & Grievances</h2>
      <p class="text-muted">Enquiry records are retained in our operational ledger for administrative review. To request an update, correction, or deletion of your contact information, please write to our designated grievance officer at <a href="mailto:${organization.grievanceContact.channel}" class="text-primary font-weight-medium">${organization.grievanceContact.channel}</a>.</p>
    `;
  } else if (policyType === "terms") {
    title = "Website Terms of Use";
    content = `
      <h2 class="text-xl font-weight-bold mb-2">1. Acceptance of Terms</h2>
      <p class="text-muted">By accessing or browsing this website (flexonsports.org), you agree to these Terms of Use and all applicable laws and regulations governing Section 8 companies in India.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">2. Purpose of Website</h2>
      <p class="text-muted">This website serves to provide accurate public information regarding Flexon Sports Foundation’s sporting initiatives, educational alignments with the Sustainable Development Goals, and community participation pathways.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">3. Enquiries vs Confirmed Registrations</h2>
      <p class="text-muted">Submitting an online enquiry, volunteer interest form, or pre-registration does not constitute a guaranteed event slot, school partnership, or camp admission. Official entries are confirmed solely upon completion of authorized circulars or registration procedures.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">4. Intellectual Property</h2>
      <p class="text-muted">All brand marks, editorial content, original 3D sporting artwork, and event documentary photography are the property of Flexon Sports Foundation or its licensed contributors. Unauthorized reproduction without prior written permission is prohibited.</p>
    `;
  } else if (policyType === "donation") {
    title = "Donation & Philanthropy Policy";
    content = `
      <h2 class="text-xl font-weight-bold mb-2">1. Application of Contributions</h2>
      <p class="text-muted">Flexon Sports Foundation is dedicated to the charitable promotion of sports, youth training, and community physical health. All philanthropic contributions received are applied directly towards our approved non-profit programmes.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">2. Tax Framework Notice (FY 2026–27)</h2>
      <p class="text-muted">Tax deductibility of donations depends on valid statutory approvals and the applicable Income Tax reporting rules in force for the financial year. Prospective contributors should verify current approval certificates directly with our finance secretariat before claiming income tax deductions.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">3. Foreign Contributions</h2>
      <p class="text-muted">Contributions from foreign citizens or overseas entities cannot be accepted online until formal Foreign Contribution Regulation Act (FCRA) registrations or prior permissions are in place.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">4. Refunds & Rectification</h2>
      <p class="text-muted">If an erroneous contribution or duplicate payment occurs, please contact <a href="mailto:${organization.email}" class="text-primary font-weight-medium">${organization.email}</a> within 7 days with your transaction reference for finance reconciliation.</p>
    `;
  } else if (policyType === "safeguarding") {
    title = "Participant Safeguarding Policy";
    content = `
      <h2 class="text-xl font-weight-bold mb-2">1. Commitment to Child & Youth Protection</h2>
      <p class="text-muted">Flexon Sports Foundation is committed to providing a safe, positive, and supportive environment for all participants, with special diligence given to children and young athletes taking part in youth coaching programmes (such as Empower Youth).</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">2. Adult & Guardian Mediated Communication</h2>
      <p class="text-muted">All program enrolments, fee consultations, and medical advisories for participants under 18 must be conducted directly with an adult parent or legal guardian. Coaches and staff do not collect private social media details or conduct unmonitored digital messaging with youth participants.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">3. Photographic & Media Consent</h2>
      <p class="text-muted">Event photographs are captured strictly for public documentary and editorial purposes. If any parent or guardian wishes to request the removal or blurring of an image featuring their child from our website gallery, please reach out to <a href="mailto:${organization.grievanceContact.channel}" class="text-primary font-weight-medium">${organization.grievanceContact.channel}</a> and your request will be addressed promptly.</p>
    `;
  } else if (policyType === "events") {
    title = "Event Participation Policies & Rules";
    content = `
      <h2 class="text-xl font-weight-bold mb-2">1. General Event Rules</h2>
      <p class="text-muted">Participation in Flexon events (including FLEXATHON and Veteran Sixes) requires adherence to fair play, sportsmanship, and organizer safety instructions.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">2. Medical Fitness & Safety</h2>
      <p class="text-muted">Participants in endurance runs and competitive matches are responsible for ensuring they are physically fit to participate. Medical first-aid response is stationed along event courses for emergency assistance.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">3. Event Postponement & Weather</h2>
      <p class="text-muted">In the event of severe weather, civil directives, or venue force majeure, the organizing committee reserves the right to adapt routes, delay start times, or reschedule editions for participant safety.</p>
    `;
  } else {
    title = "Accessibility Statement";
    content = `
      <h2 class="text-xl font-weight-bold mb-2">1. Accessible Web Design</h2>
      <p class="text-muted">Flexon Sports Foundation is committed to ensuring our digital platforms are accessible to all visitors, including individuals using screen readers, keyboard navigation, or assistive devices.</p>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">2. Key Accessibility Features</h2>
      <ul class="text-muted" style="line-height: 1.7;">
        <li>WCAG AA compliant contrast ratios across text and interactive buttons.</li>
        <li>Skip to main content links for keyboard and screen-reader users.</li>
        <li>Visible focus indicators and accessible ARIA dialog controls on the chat assistant and modal lightbox.</li>
        <li>Full support for reduced-motion browser preferences (prefers-reduced-motion).</li>
      </ul>

      <h2 class="text-xl font-weight-bold mt-4 mb-2">3. Feedback & Contact</h2>
      <p class="text-muted">If you experience any accessibility barrier while navigating our website or require assistance registering for an event, please notify us at <a href="mailto:${organization.email}" class="text-primary font-weight-medium">${organization.email}</a>.</p>
    `;
  }

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface">
      <div class="container text-center max-w-reading">
        <div class="page-hero-pills">
          <span class="hero-live-pill"><span class="live-dot"></span> STATUTORY POLICY</span>
          <span class="hero-sdg-tag">VERSION 2.0 (OCTOBER 2026)</span>
          <span class="hero-sdg-tag">SECTION 8 COMPLIANT</span>
        </div>
        <h1 class="page-title">${title}</h1>
        <p class="hero-lead">
          Official statutory disclosures, participant safeguards, and operational rules governing the activities of Flexon Sports Foundation.
        </p>
      </div>
    </section>

    <!-- Page Metrics Ribbon -->
    <div class="page-metrics-ribbon">
      <div class="page-metric-item">
        <span class="metric-num">Ver 2.0</span>
        <span class="metric-lbl">Current Directive</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">Oct 2026</span>
        <span class="metric-lbl">Latest Foundation Review</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">Sec 8</span>
        <span class="metric-lbl">Companies Act 2013</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num">Rule 26</span>
        <span class="metric-lbl">Transparent Disclosure</span>
      </div>
    </div>

    <!-- Quick Policy Switcher -->
    <div class="bg-surface py-3" style="border-bottom: 1px solid var(--color-border, #e5e7eb);">
      <div class="container">
        <div class="d-flex flex-wrap justify-center gap-2">
          <a href="/privacy-policy" class="btn btn-xs ${policyType === 'privacy' ? 'btn-primary' : 'btn-outline'}">Privacy Notice</a>
          <a href="/terms-of-use" class="btn btn-xs ${policyType === 'terms' ? 'btn-primary' : 'btn-outline'}">Terms of Use</a>
          <a href="/donation-policy" class="btn btn-xs ${policyType === 'donation' ? 'btn-primary' : 'btn-outline'}">Donation Policy</a>
          <a href="/safeguarding" class="btn btn-xs ${policyType === 'safeguarding' ? 'btn-primary' : 'btn-outline'}">Safeguarding</a>
          <a href="/event-policies" class="btn btn-xs ${policyType === 'events' ? 'btn-primary' : 'btn-outline'}">Event Rules</a>
          <a href="/accessibility" class="btn btn-xs ${policyType === 'accessibility' ? 'btn-primary' : 'btn-outline'}">Accessibility</a>
        </div>
      </div>
    </div>

    <!-- Policy Text Section -->
    <section class="section section-policy-body py-5">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-sm policy-content" style="border-top: 4px solid var(--color-primary, #dc2626); line-height: 1.7;">
          ${content}
        </div>

        <div class="policy-footer-nav mt-4 text-center">
          <a href="/governance" class="btn btn-outline btn-sm">Governance Disclosures</a>
          <a href="/contact" class="btn btn-ghost btn-sm ml-2">Contact Secretariat</a>
        </div>
      </div>
    </section>
  `;

  return container;
}
