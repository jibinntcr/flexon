"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { renderDomNodeToHtml } from "../lib/ssrDomShim.js";
import { createHeader } from "./Header.js";
import { createFooter } from "./Footer.js";
import { createChatbot } from "./Chatbot.js";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function AppShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const chatbotRef = useRef(null);

  const headerHtmlObj = useMemo(
    () => ({
      __html: typeof window === "undefined" ? renderDomNodeToHtml(createHeader) : ""
    }),
    []
  );
  const footerHtmlObj = useMemo(
    () => ({
      __html: typeof window === "undefined" ? renderDomNodeToHtml(createFooter) : ""
    }),
    []
  );
  const chatbotHtmlObj = useMemo(
    () => ({
      __html: typeof window === "undefined" ? renderDomNodeToHtml(createChatbot) : ""
    }),
    []
  );

  // Mount live Header, Footer, and Chatbot DOM widgets and ensure they stay hydrated
  useIsomorphicLayoutEffect(() => {
    if (headerRef.current && !headerRef.current.querySelector("[data-live-header]")) {
      const headerEl = createHeader();
      headerEl.setAttribute("data-live-header", "true");
      headerRef.current.replaceChildren(headerEl);
    }
    if (footerRef.current && !footerRef.current.querySelector("[data-live-footer]")) {
      const footerEl = createFooter();
      footerEl.setAttribute("data-live-footer", "true");
      footerRef.current.replaceChildren(footerEl);
    }
    if (chatbotRef.current && !chatbotRef.current.querySelector("[data-live-chatbot]")) {
      const chatbotEl = createChatbot();
      chatbotEl.setAttribute("data-live-chatbot", "true");
      chatbotRef.current.replaceChildren(chatbotEl);
    }
  });

  // Ensure mobile drawer and body scroll lock reset when route changes
  useEffect(() => {
    document.body.style.overflow = "";
    const drawer = document.getElementById("mobile-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    if (drawer) {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
    }
    if (backdrop) {
      backdrop.classList.remove("open");
    }
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  }, [pathname]);

  // Intercept internal anchor clicks for smooth Next.js App Router transitions
  useEffect(() => {
    function handleDocumentClick(e) {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const link = e.target.closest ? e.target.closest("a") : null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Ignore external, mailto, tel, download, or fragment-only links
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.hasAttribute("data-no-router")
      ) {
        return;
      }

      e.preventDefault();
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          router.push(href);
        });
      } else {
        router.push(href);
      }
    }

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [router]);

  return (
    <div id="app">
      <div
        ref={headerRef}
        suppressHydrationWarning
        dangerouslySetInnerHTML={headerHtmlObj}
      />
      <main id="app-main" className="site-main">
        {children}
      </main>
      <div
        ref={footerRef}
        suppressHydrationWarning
        dangerouslySetInnerHTML={footerHtmlObj}
      />
      <div
        ref={chatbotRef}
        suppressHydrationWarning
        dangerouslySetInnerHTML={chatbotHtmlObj}
      />
    </div>
  );
}
