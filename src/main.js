/**
 * Flexon Sports Foundation - Main Application Entry Point
 * Authority: Blueprint v2.0
 */

import "./styles/index.css";
import { createHeader } from "./components/Header.js";
import { createFooter } from "./components/Footer.js";
import { createChatbot } from "./components/Chatbot.js";
import { Router } from "./router.js";

function initApp() {
  const root = document.getElementById("app");
  if (!root) return;

  // Prevent duplicate mounting in HMR scenarios
  if (root.hasChildNodes()) {
    root.innerHTML = "";
  }

  // 1. Mount Header
  const header = createHeader();
  root.appendChild(header);

  // 2. Mount Main Router Outlet
  const main = document.createElement("main");
  main.id = "app-main";
  main.className = "site-main";
  root.appendChild(main);

  // 3. Mount Footer
  const footer = createFooter();
  root.appendChild(footer);

  // 4. Mount "Ask Flexon" Automated Assistant Widget
  const chatbot = createChatbot();
  root.appendChild(chatbot);

  // 5. Initialize Client Router
  new Router(main);

  setTimeout(() => {
    const bad = [];
    const docW = document.documentElement.clientWidth;
    document.querySelectorAll('*').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.right > docW + 1 && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
        bad.push({
          tag: el.tagName,
          cls: (el.className || '').toString().slice(0, 40),
          id: el.id,
          right: Math.round(r.right),
          w: Math.round(r.width),
          text: (el.textContent || '').trim().slice(0, 25)
        });
      }
    });
    console.log("OVERFLOW_DETECTED_START:" + JSON.stringify(bad) + ":OVERFLOW_DETECTED_END");
  }, 1000);
}

// Safely initialize whether DOM is loading, interactive, or complete
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

