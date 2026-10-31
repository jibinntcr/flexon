/**
 * Lightweight synchronous SSR DOM shim so vanilla DOM builder functions
 * (`render*Page`, `createHeader`, `createFooter`, `createChatbot`) can
 * generate static HTML during Next.js Server-Side Rendering / `next build`,
 * before hydrating into live interactive DOM nodes on the client.
 */

class MockElement {
  constructor(tag = "div") {
    this.tagName = String(tag).toUpperCase();
    this.className = "";
    this.id = "";
    this.innerHTML = "";
    this.textContent = "";
    this.value = "";
    this.src = "";
    this.alt = "";
    this.href = "";
    this.offsetWidth = 0;
    this.scrollTop = 0;
    this.scrollHeight = 0;
    this.isConnected = false;
    this.options = [];
    this.style = {};
    this.classList = {
      add() {},
      remove() {},
      toggle() {},
      contains() {
        return false;
      }
    };
  }

  setAttribute() {}
  getAttribute() {
    return "";
  }
  hasAttribute() {
    return false;
  }
  addEventListener() {}
  removeEventListener() {}
  appendChild(child) {
    return child;
  }
  remove() {}
  focus() {}
  click() {}
  contains() {
    return false;
  }
  closest() {
    return null;
  }
  querySelector() {
    return new MockElement("div");
  }
  querySelectorAll() {
    return [];
  }
}

export function renderDomNodeToHtml(builderFn, ...args) {
  if (typeof window !== "undefined" && typeof document !== "undefined" && typeof document.createElement === "function") {
    // On client, we mount live DOM directly in useLayoutEffect/useEffect
    return null;
  }

  const prevDoc = globalThis.document;
  const prevWin = globalThis.window;
  const prevRaf = globalThis.requestAnimationFrame;

  const mockBody = new MockElement("body");
  const mockDoc = {
    createElement: (tag) => new MockElement(tag),
    getElementById: () => null,
    querySelector: () => new MockElement("div"),
    querySelectorAll: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    body: mockBody,
    activeElement: null
  };

  const mockWin = {
    location: { search: "", pathname: "/" },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
    scrollTo: () => {},
    getComputedStyle: () => ({ width: "0px" })
  };

  try {
    globalThis.document = mockDoc;
    globalThis.window = mockWin;
    globalThis.requestAnimationFrame = () => 0;

    const el = builderFn(...args);
    if (!el) return "";
    const tag = (el.tagName || "DIV").toLowerCase();
    const cls = el.className ? ` class="${el.className}"` : "";
    const id = el.id ? ` id="${el.id}"` : "";
    return `<${tag}${id}${cls}>${el.innerHTML || ""}</${tag}>`;
  } catch (err) {
    console.warn("[SSR Shim] Fallback during static render:", err?.message);
    return "";
  } finally {
    globalThis.document = prevDoc;
    globalThis.window = prevWin;
    globalThis.requestAnimationFrame = prevRaf;
  }
}

