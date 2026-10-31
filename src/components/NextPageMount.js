"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { renderDomNodeToHtml } from "../lib/ssrDomShim.js";

import { renderHomePage } from "../views/Home.js";
import { renderAboutPage } from "../views/About.js";
import { renderTeamPage } from "../views/Team.js";
import { renderGovernancePage } from "../views/Governance.js";
import { renderAnnualReturnsPage } from "../views/AnnualReturns.js";
import { renderProgramsPage } from "../views/Programs.js";
import { renderEmpowerYouthPage } from "../views/EmpowerYouth.js";
import { renderEventsPage } from "../views/Events.js";
import { renderFlexathonPage } from "../views/Flexathon.js";
import { renderHyderabad2026Page } from "../views/Hyderabad2026.js";
import { renderKochiTeaserPage } from "../views/KochiTeaser.js";
import { renderVeteranSixesPage } from "../views/VeteranSixes.js";
import { renderGlobalGoalsIndexPage } from "../views/GlobalGoalsIndex.js";
import { renderGlobalGoalDetailPage } from "../views/GlobalGoalDetail.js";
import { renderSdgApproachPage } from "../views/SdgApproach.js";
import { renderGalleryPage } from "../views/Gallery.js";
import { renderStoriesPage } from "../views/Stories.js";
import { renderGetInvolvedPage } from "../views/GetInvolved.js";
import { renderPartnershipsPage } from "../views/Partnerships.js";
import { renderVolunteerPage } from "../views/Volunteer.js";
import { renderDonatePage } from "../views/Donate.js";
import { renderFaqsPage } from "../views/Faqs.js";
import { renderContactPage } from "../views/Contact.js";
import { renderPolicyPage } from "../views/Policies.js";
import { renderAdminDashboardPage } from "../views/AdminDashboard.js";
import { renderNotFoundPage } from "../views/NotFound.js";

const PAGE_RENDERERS = {
  home: () => renderHomePage(),
  about: () => renderAboutPage(),
  team: () => renderTeamPage(),
  governance: () => renderGovernancePage(),
  "annual-returns": () => renderAnnualReturnsPage(),
  programs: () => renderProgramsPage(),
  "empower-youth": () => renderEmpowerYouthPage(),
  events: () => renderEventsPage(),
  flexathon: () => renderFlexathonPage(),
  "hyderabad-2026": () => renderHyderabad2026Page(),
  kochi: () => renderKochiTeaserPage(),
  "veteran-sixes": () => renderVeteranSixesPage(),
  "global-goals": () => renderGlobalGoalsIndexPage(),
  "global-goal-detail": (slug) => renderGlobalGoalDetailPage(slug),
  "sdg-approach": () => renderSdgApproachPage(),
  gallery: () => renderGalleryPage(),
  stories: () => renderStoriesPage(),
  "get-involved": () => renderGetInvolvedPage(),
  partnerships: () => renderPartnershipsPage(),
  volunteer: () => renderVolunteerPage(),
  donate: () => renderDonatePage(),
  faqs: () => renderFaqsPage(),
  contact: () => renderContactPage(),
  policy: (policyType) => renderPolicyPage(policyType),
  admin: () => renderAdminDashboardPage(),
  "not-found": () => renderNotFoundPage()
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function NextPageMount({ pageKey, param }) {
  const mountRef = useRef(null);
  const renderer = PAGE_RENDERERS[pageKey] || PAGE_RENDERERS["not-found"];

  const ssrHtmlObj = useMemo(
    () => ({
      __html:
        typeof window === "undefined" ? renderDomNodeToHtml(renderer, param) : ""
    }),
    [renderer, param]
  );

  useIsomorphicLayoutEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Reset body scroll lock and close any open lightbox on page mount
    document.body.style.overflow = "";
    const openLightbox = document.getElementById("global-lightbox");
    if (openLightbox) {
      openLightbox.classList.remove("is-open", "open");
      openLightbox.setAttribute("aria-hidden", "true");
    }

    const pageEl = renderer(param);
    pageEl.setAttribute("data-live-page", pageKey);
    container.replaceChildren(pageEl);

    // Handle hash scroll if URL has a fragment, otherwise scroll to top
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (pageEl && typeof pageEl._cleanup === "function") {
        pageEl._cleanup();
      }
    };
  }, [pageKey, param, renderer]);

  return (
    <div
      ref={mountRef}
      className="next-page-outlet"
      suppressHydrationWarning
      dangerouslySetInnerHTML={ssrHtmlObj}
    />
  );
}
