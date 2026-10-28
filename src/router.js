/**
 * Flexon Sports Foundation - Client Router & View Transition Engine
 * Authority: Blueprint v2.0 Section 4 & 21
 */

import { renderHomePage } from "./pages/Home.js";
import { renderAboutPage } from "./pages/About.js";
import { renderTeamPage } from "./pages/Team.js";
import { renderGovernancePage } from "./pages/Governance.js";
import { renderAnnualReturnsPage } from "./pages/AnnualReturns.js";
import { renderProgramsPage } from "./pages/Programs.js";
import { renderEmpowerYouthPage } from "./pages/EmpowerYouth.js";
import { renderEventsPage } from "./pages/Events.js";
import { renderFlexathonPage } from "./pages/Flexathon.js";
import { renderHyderabad2026Page } from "./pages/Hyderabad2026.js";
import { renderKochiTeaserPage } from "./pages/KochiTeaser.js";
import { renderVeteranSixesPage } from "./pages/VeteranSixes.js";
import { renderGlobalGoalsIndexPage } from "./pages/GlobalGoalsIndex.js";
import { renderGlobalGoalDetailPage } from "./pages/GlobalGoalDetail.js";
import { renderSdgApproachPage } from "./pages/SdgApproach.js";
import { renderGalleryPage } from "./pages/Gallery.js";
import { renderStoriesPage } from "./pages/Stories.js";
import { renderGetInvolvedPage } from "./pages/GetInvolved.js";
import { renderPartnershipsPage } from "./pages/Partnerships.js";
import { renderVolunteerPage } from "./pages/Volunteer.js";
import { renderDonatePage } from "./pages/Donate.js";
import { renderFaqsPage } from "./pages/Faqs.js";
import { renderContactPage } from "./pages/Contact.js";
import { renderPolicyPage } from "./pages/Policies.js";
import { renderAdminDashboardPage } from "./pages/AdminDashboard.js";
import { renderNotFoundPage } from "./pages/NotFound.js";

const routes = [
  { path: /^\/$/, renderer: renderHomePage, title: "Flexon Sports Foundation — Sport, Community & Global Goals" },
  { path: /^\/about\/?$/, renderer: renderAboutPage, title: "About the Foundation — Flexon Sports Foundation" },
  { path: /^\/(?:team|our-team|leadership)\/?$/, renderer: renderTeamPage, title: "Our Leadership & Team — Flexon Sports Foundation" },
  { path: /^\/governance\/?$/, renderer: renderGovernancePage, title: "Governance & Legal Identity — Flexon Sports Foundation" },
  { path: /^\/governance\/annual-returns\/?$/, renderer: renderAnnualReturnsPage, title: "Annual Returns Archive — Flexon Sports Foundation" },
  { path: /^\/programs\/?$/, renderer: renderProgramsPage, title: "Sports & Community Programs — Flexon Sports Foundation" },
  { path: /^\/(?:programs\/)?(?:empower-youth|empower-youth-football|empower-youth-football-camp)\/?$/, renderer: renderEmpowerYouthPage, title: "Empower Youth Football Camp — Flexon Sports Foundation" },
  { path: /^\/events\/?$/, renderer: renderEventsPage, title: "Events Calendar — Flexon Sports Foundation" },
  { path: /^\/flexathon\/?$/, renderer: renderFlexathonPage, title: "FLEXATHON — The Global Goals Run" },
  { path: /^\/flexathon\/(?:hyderabad-2026|hyderabad)\/?$/, renderer: renderHyderabad2026Page, title: "FLEXATHON Hyderabad 2026 — First Edition Highlights" },
  { path: /^\/flexathon\/(?:kochi|kochi-edition)\/?$/, renderer: renderKochiTeaserPage, title: "FLEXATHON Kochi Edition — Register Interest" },
  { path: /^\/(?:programs\/)?(?:veteran-sixes|veteran-sixes-cricket|cricket)\/?$/, renderer: renderVeteranSixesPage, title: "Veteran Sixes Cricket — Flexon Sports Foundation" },
  { path: /^\/global-goals\/?$/, renderer: renderGlobalGoalsIndexPage, title: "Explore the 17 Global Goals — Flexon Sports Foundation" },
  { 
    path: /^\/global-goals\/([a-z0-9-]+)\/?$/, 
    renderer: (params) => renderGlobalGoalDetailPage(params[1]), 
    title: "Global Goal Detail — Flexon Sports Foundation" 
  },
  { path: /^\/sdg-approach\/?$/, renderer: renderSdgApproachPage, title: "Our SDG Approach — Flexon Sports Foundation" },
  { path: /^\/gallery\/?$/, renderer: renderGalleryPage, title: "Media Gallery — Flexon Sports Foundation" },
  { path: /^\/stories\/?$/, renderer: renderStoriesPage, title: "Stories & Verified Reports — Flexon Sports Foundation" },
  { path: /^\/get-involved\/?$/, renderer: renderGetInvolvedPage, title: "Get Involved — Flexon Sports Foundation" },
  { path: /^\/partnerships\/?$/, renderer: renderPartnershipsPage, title: "Institutional Partnerships — Flexon Sports Foundation" },
  { path: /^\/volunteer\/?$/, renderer: renderVolunteerPage, title: "Volunteer Registration — Flexon Sports Foundation" },
  { path: /^\/donate\/?$/, renderer: renderDonatePage, title: "Support Flexon Sports Foundation — Donation Journey" },
  { path: /^\/faqs\/?$/, renderer: renderFaqsPage, title: "Frequently Asked Questions — Flexon Sports Foundation" },
  { path: /^\/contact\/?$/, renderer: renderContactPage, title: "Talk to Flexon — Contact & Enquiries" },
  { path: /^\/privacy-policy\/?$/, renderer: () => renderPolicyPage("privacy"), title: "Privacy Notice — Flexon Sports Foundation" },
  { path: /^\/terms-of-use\/?$/, renderer: () => renderPolicyPage("terms"), title: "Terms of Use — Flexon Sports Foundation" },
  { path: /^\/donation-policy\/?$/, renderer: () => renderPolicyPage("donation"), title: "Donation Policy — Flexon Sports Foundation" },
  { path: /^\/event-policies\/?$/, renderer: () => renderPolicyPage("events"), title: "Event Policies — Flexon Sports Foundation" },
  { path: /^\/safeguarding\/?$/, renderer: () => renderPolicyPage("safeguarding"), title: "Safeguarding Policy — Flexon Sports Foundation" },
  { path: /^\/accessibility\/?$/, renderer: () => renderPolicyPage("accessibility"), title: "Accessibility Statement — Flexon Sports Foundation" },
  { path: /^\/admin\/?$/, renderer: renderAdminDashboardPage, title: "Staff Operations Dashboard — Flexon Sports Foundation" }
];

export class Router {
  constructor(appMount) {
    this.appMount = appMount;
    this.init();
  }

  init() {
    window.addEventListener("popstate", () => this.handleRoute());

    // Intercept internal link clicks
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Ignore external, mailto, tel, or fragment-only links
      if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#") || link.target === "_blank") {
        return;
      }

      e.preventDefault();
      this.navigate(href);
    });

    this.handleRoute();
  }

  navigate(url) {
    window.history.pushState({}, "", url);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    let matched = null;
    let matchParams = null;

    for (const r of routes) {
      const m = path.match(r.path);
      if (m) {
        matched = r;
        matchParams = m;
        break;
      }
    }

    const renderAction = () => {
      this.appMount.innerHTML = "";
      if (matched) {
        document.title = matched.title;
        const pageEl = matched.renderer(matchParams);
        this.appMount.appendChild(pageEl);
      } else {
        document.title = "Page Off the Field — Flexon Sports Foundation";
        this.appMount.appendChild(renderNotFoundPage());
      }
      window.scrollTo(0, 0);
    };

    if (document.startViewTransition) {
      document.startViewTransition(renderAction);
    } else {
      renderAction();
    }
  }
}
