/**
 * Flexon Sports Foundation - "Ask Flexon" Automated Enquiry Assistant
 * Authority: Blueprint v2.0 Section 14 & 15
 * 
 * Strict Privacy & Architectural Controls:
 * - Pre-chat consent notice BEFORE any transcript persistence
 * - Browse FAQs option without starting saved session
 * - Guided deterministic pathways
 * - Guardian verification for youth camp enquiries
 * - Message-by-message server persistence via FlexonDB
 * - Trackable reference code generation (FLX-2026-XXXXX)
 */

import { FlexonDB } from "../server/db.js";
import { faqs } from "../data/content.js";

export function createChatbot() {
  const container = document.createElement("div");
  container.className = "chatbot-wrapper";
  container.id = "chatbot-container";

  container.innerHTML = `
    <!-- Launcher Button -->
    <button class="chatbot-launcher" id="chat-launcher-btn" aria-label="Open Ask Flexon assistant" aria-expanded="false" aria-controls="chat-dialog">
      <span class="chatbot-launcher-icon">💬</span>
      <span class="font-weight-bold text-sm">Ask Flexon</span>
    </button>

    <!-- Chat Modal Window -->
    <div class="chatbot-window" id="chat-dialog" role="dialog" aria-modal="true" aria-labelledby="chat-title" aria-hidden="true">
      <!-- Header -->
      <div class="chatbot-header">
        <div>
          <div class="chatbot-header-title" id="chat-title">
            <span style="color: var(--color-green);">●</span> Ask Flexon
          </div>
          <span class="chatbot-header-subtitle">Automated Foundation Assistant</span>
        </div>
        <button class="chatbot-close-btn" id="chat-close-btn" aria-label="Close chat dialog">&times;</button>
      </div>

      <!-- Pre-Chat Consent Screen (Before any transcript is recorded) -->
      <div class="p-4" id="chat-consent-screen" style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <div class="card p-3 border shadow-sm">
          <div class="text-primary font-weight-bold mb-1">ℹ️ Privacy & Consent Notice</div>
          <p class="text-xs text-muted">
            Hi! I’m Flexon’s automated assistant. I can help with events, football coaching, volunteering, donations and collaborations.
          </p>
          <p class="text-xs text-muted mt-2">
            If you choose to start, your messages will be saved on our server so we can answer and manage your enquiry. Please avoid sharing sensitive medical or child identity details. Read our <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Notice</a>.
          </p>
          <div class="mt-3 d-flex flex-column gap-2">
            <button class="btn btn-primary btn-sm btn-block" id="chat-start-consent-btn">Start Chat</button>
            <button class="btn btn-outline btn-sm btn-block" id="chat-browse-faqs-btn">Browse FAQs Instead</button>
          </div>
        </div>
      </div>

      <!-- Active Chat Body -->
      <div class="chatbot-body" id="chat-body" style="display: none;">
        <div id="chat-messages-scroll" style="display: flex; flex-direction: column; gap: 10px;">
          <!-- Dynamically inserted messages -->
        </div>
        <div class="chat-options-group" id="chat-suggestions">
          <!-- Quick action chips -->
        </div>
      </div>

      <!-- FAQ Viewer Screen (When user declines saved chat) -->
      <div class="p-3" id="chat-faq-screen" style="display: none; flex-grow: 1; overflow-y: auto;">
        <div class="d-flex justify-between align-center mb-2">
          <button class="btn btn-ghost btn-xs" id="faq-back-to-consent-btn">← Back</button>
          <span class="text-xs font-weight-bold">Browse FAQs</span>
        </div>
        <input type="text" id="faq-search-input" class="form-control form-control-sm mb-2" placeholder="Search questions..." />
        <div id="faq-mini-list" class="d-flex flex-column gap-2 text-xs">
          <!-- Populated from faqs data -->
        </div>
      </div>

      <!-- Input Bar (Only active after consent) -->
      <div class="chatbot-footer" id="chat-input-bar" style="display: none;">
        <input 
          type="text" 
          id="chat-user-input" 
          class="chatbot-input" 
          placeholder="Type your question..." 
          aria-label="Your message"
          autocomplete="off"
        />
        <button class="chatbot-send-btn" id="chat-send-btn" aria-label="Send message">
          ➤
        </button>
      </div>
    </div>
  `;

  setupChatInteractions(container);
  return container;
}

function setupChatInteractions(container) {
  const launcher = container.querySelector("#chat-launcher-btn");
  const dialog = container.querySelector("#chat-dialog");
  const closeBtn = container.querySelector("#chat-close-btn");
  const consentScreen = container.querySelector("#chat-consent-screen");
  const chatBody = container.querySelector("#chat-body");
  const messagesWrap = container.querySelector("#chat-messages-scroll");
  const suggestionsWrap = container.querySelector("#chat-suggestions");
  const inputBar = container.querySelector("#chat-input-bar");
  const inputField = container.querySelector("#chat-user-input");
  const sendBtn = container.querySelector("#chat-send-btn");

  const startConsentBtn = container.querySelector("#chat-start-consent-btn");
  const browseFaqsBtn = container.querySelector("#chat-browse-faqs-btn");
  const faqScreen = container.querySelector("#chat-faq-screen");
  const faqBackBtn = container.querySelector("#faq-back-to-consent-btn");
  const faqSearchInput = container.querySelector("#faq-search-input");
  const faqList = container.querySelector("#faq-mini-list");

  let session = null;
  let pendingEnquiryData = {};

  function openChat() {
    dialog.classList.add("open");
    dialog.setAttribute("aria-hidden", "false");
    launcher.setAttribute("aria-expanded", "true");
    if (session) inputField.focus();
  }

  function closeChat() {
    dialog.classList.remove("open");
    dialog.setAttribute("aria-hidden", "true");
    launcher.setAttribute("aria-expanded", "false");
  }

  launcher.addEventListener("click", () => {
    if (dialog.classList.contains("open")) {
      closeChat();
    } else {
      openChat();
    }
  });

  closeBtn.addEventListener("click", closeChat);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dialog.classList.contains("open")) {
      closeChat();
    }
  });

  // Consent accepted
  startConsentBtn.addEventListener("click", () => {
    session = FlexonDB.startChatSession("2.0", true);
    consentScreen.style.display = "none";
    faqScreen.style.display = "none";
    chatBody.style.display = "flex";
    inputBar.style.display = "flex";

    appendMessage("bot", "Hello! How can I assist you with Flexon Sports Foundation today? Select an area below or ask a question.");
    renderInitialSuggestions();
  });

  // FAQs only
  browseFaqsBtn.addEventListener("click", () => {
    consentScreen.style.display = "none";
    chatBody.style.display = "none";
    inputBar.style.display = "none";
    faqScreen.style.display = "block";
    renderFaqList(faqs);
  });

  faqBackBtn.addEventListener("click", () => {
    faqScreen.style.display = "none";
    consentScreen.style.display = "flex";
  });

  faqSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = faqs.filter(f => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query));
    renderFaqList(filtered);
  });

  function renderFaqList(items) {
    if (items.length === 0) {
      faqList.innerHTML = `<p class="text-muted">No matching questions found.</p>`;
      return;
    }
    faqList.innerHTML = items.map(f => `
      <details class="p-2 border rounded bg-surface">
        <summary class="font-weight-bold cursor-pointer">${f.q}</summary>
        <p class="mt-1 text-muted">${f.a}</p>
      </details>
    `).join("");
  }

  function appendMessage(role, text) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble chat-bubble-${role}`;
    bubble.innerHTML = text;
    messagesWrap.appendChild(bubble);
    chatBody.scrollTop = chatBody.scrollHeight;

    if (session && session.conversationId) {
      FlexonDB.saveMessage(session.conversationId, role === "bot" ? "assistant" : "user", text);
    }
  }

  function renderInitialSuggestions() {
    suggestionsWrap.innerHTML = `
      <button class="chat-option-btn" data-intent="events">Events & Registration</button>
      <button class="chat-option-btn" data-intent="football">Football Camp (Ages 10–15)</button>
      <button class="chat-option-btn" data-intent="volunteer">Volunteering</button>
      <button class="chat-option-btn" data-intent="collab">Partnership / School</button>
      <button class="chat-option-btn" data-intent="donate">Donation Info</button>
    `;

    suggestionsWrap.querySelectorAll(".chat-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const intent = btn.getAttribute("data-intent");
        handleGuidedIntent(intent);
      });
    });
  }

  function handleGuidedIntent(intent) {
    if (intent === "events") {
      appendMessage("user", "Events & Registration");
      setTimeout(() => {
        appendMessage("bot", "Our first FLEXATHON in Hyderabad (18 Oct 2026) is completed. The Kochi Edition has been announced and registrations will open once dates are finalized. Would you like to leave your details for updates or enquire about Veteran Sixes?");
        renderActionButtons([
          { label: "Kochi Updates", action: () => promptEnquiry("FLEXATHON Kochi", "running") },
          { label: "Veteran Sixes", action: () => promptEnquiry("Veteran Sixes Cricket", "cricket") }
        ]);
      }, 400);
    } 
    else if (intent === "football") {
      appendMessage("user", "Empower Youth Football Camp");
      setTimeout(() => {
        appendMessage("bot", "The camp is organised by Flexon under MLA Manoj Moothedan for ages 10–15 (3 Oct 2026 – 27 Feb 2027). Under safeguarding rules, enquiries must come from an adult parent or legal guardian.");
        renderActionButtons([
          { label: "Parent / Guardian Enquiry", action: () => promptEnquiry("Empower Youth Football Camp", "football_camp", true) }
        ]);
      }, 400);
    }
    else if (intent === "volunteer") {
      appendMessage("user", "Volunteering Interest");
      setTimeout(() => {
        appendMessage("bot", "We welcome volunteers for race operations, hydration stations, and sports events. Share your contact details to register.");
        promptEnquiry("Volunteer Registration", "volunteering");
      }, 400);
    }
    else if (intent === "collab") {
      appendMessage("user", "Partnership Inquiry");
      setTimeout(() => {
        appendMessage("bot", "We collaborate with schools, colleges, and corporate partners on athletic meets and fitness campaigns.");
        promptEnquiry("Institutional Collaboration", "collaboration");
      }, 400);
    }
    else if (intent === "donate") {
      appendMessage("user", "Donation Support");
      setTimeout(() => {
        appendMessage("bot", "Online payment gateway integration is currently underway. You can submit an enquiry to discuss supporting a sports coaching or community initiative.");
        promptEnquiry("Donation Support", "donation");
      }, 400);
    }
  }

  function renderActionButtons(actions) {
    suggestionsWrap.innerHTML = "";
    actions.forEach(act => {
      const btn = document.createElement("button");
      btn.className = "chat-option-btn";
      btn.textContent = act.label;
      btn.addEventListener("click", act.action);
      suggestionsWrap.appendChild(btn);
    });
  }

  function promptEnquiry(initiativeName, type, isGuardian = false) {
    pendingEnquiryData = { initiative: initiativeName, type };
    appendMessage("bot", isGuardian 
      ? "Please provide your Name and Email/Phone as parent/guardian along with any specific question." 
      : "Please share your Name and Email/Phone so our secretariat can follow up with a stored reference.");

    suggestionsWrap.innerHTML = `
      <div class="p-2 border rounded bg-surface w-100 text-xs">
        <input type="text" id="chat-q-name" class="form-control form-control-sm mb-1" placeholder="${isGuardian ? 'Parent/Guardian Name *' : 'Your Name *'}" />
        <input type="text" id="chat-q-contact" class="form-control form-control-sm mb-1" placeholder="Email or Phone Number *" />
        <input type="text" id="chat-q-notes" class="form-control form-control-sm mb-2" placeholder="Brief note or inquiry..." />
        <button class="btn btn-primary btn-xs btn-block" id="chat-q-submit">Submit Enquiry</button>
      </div>
    `;

    const subBtn = suggestionsWrap.querySelector("#chat-q-submit");
    subBtn.addEventListener("click", () => {
      const name = suggestionsWrap.querySelector("#chat-q-name").value.trim();
      const contact = suggestionsWrap.querySelector("#chat-q-contact").value.trim();
      const notes = suggestionsWrap.querySelector("#chat-q-notes").value.trim();

      if (!name || !contact) {
        alert("Please provide both name and a contact email or phone.");
        return;
      }

      const email = contact.includes("@") ? contact : null;
      const phone = !contact.includes("@") ? contact : null;

      const res = FlexonDB.createEnquiry({
        source: "chat",
        type: pendingEnquiryData.type,
        initiative: pendingEnquiryData.initiative,
        name,
        email,
        phone,
        message: notes || `Enquiry for ${pendingEnquiryData.initiative}`,
        conversationId: session?.conversationId
      });

      suggestionsWrap.innerHTML = "";
      appendMessage("bot", `Thank you, ${name}. Your enquiry is saved in our database under reference: <strong>${res.reference}</strong>. The secretariat will review your request.`);
      renderInitialSuggestions();
    });
  }

  function handleUserSubmit() {
    const text = inputField.value.trim();
    if (!text) return;

    inputField.value = "";
    appendMessage("user", text);

    setTimeout(() => {
      const match = findFaqMatch(text);
      if (match) {
        appendMessage("bot", match.a);
      } else {
        appendMessage("bot", "Thank you for asking. I don’t have confirmed details for that query in my fact register. Would you like me to connect you with our team?");
      }
      renderActionButtons([
        { label: "Connect With Team", action: () => promptEnquiry("Question: " + text, "general") },
        { label: "Back to Topics", action: renderInitialSuggestions }
      ]);
    }, 400);
  }

  sendBtn.addEventListener("click", handleUserSubmit);
  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleUserSubmit();
  });

  function findFaqMatch(text) {
    const lower = text.toLowerCase();
    return faqs.find(f => {
      const qWords = f.q.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      const matches = qWords.filter(w => lower.includes(w));
      return matches.length >= 2;
    });
  }
}
