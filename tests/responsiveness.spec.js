import { test, expect } from '@playwright/test';

const ALL_ROUTES = [
  '/',
  '/about',
  '/team',
  '/governance',
  '/governance/annual-returns',
  '/programs',
  '/programs/empower-youth-football-camp',
  '/events',
  '/flexathon',
  '/flexathon/hyderabad-2026',
  '/flexathon/kochi',
  '/veteran-sixes',
  '/global-goals',
  '/global-goals/quality-education',
  '/sdg-approach',
  '/gallery',
  '/stories',
  '/get-involved',
  '/partnerships',
  '/volunteer',
  '/donate',
  '/faqs',
  '/contact',
  '/privacy-policy',
  '/terms-of-use',
  '/donation-policy',
  '/event-policies',
  '/safeguarding',
  '/accessibility',
  '/admin',
  '/non-existent-route-404',
];

const SCREENSHOT_ROUTES = new Set([
  '/',
  '/programs',
  '/flexathon',
  '/global-goals',
  '/donate',
  '/contact',
]);

test.describe('Playwright Multi-Device Responsiveness & Runtime Audit', () => {
  test('All 31 routes fit viewport with zero horizontal overflow and zero errors', async ({ page }, testInfo) => {
    test.setTimeout(180000);

    const pageErrors = [];
    const consoleErrors = [];

    page.on('pageerror', (err) => {
      pageErrors.push({ message: err.message });
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        // Ignore expected browser 404 resource log when testing the 404 route
        if (text.includes('404') && page.url().endsWith('/non-existent-route-404')) {
          return;
        }
        consoleErrors.push({ url: page.url(), text });
      }
    });

    for (const route of ALL_ROUTES) {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      const expectedStatus = route === '/non-existent-route-404' ? 404 : 200;
      expect(response?.status(), `HTTP status for ${route}`).toBe(expectedStatus);

      // Wait for header and main content to be attached
      await page.waitForSelector('#main-header', { state: 'attached', timeout: 30000 });
      await page.waitForSelector('#app-main', { state: 'attached', timeout: 30000 });
      await page.waitForTimeout(150);

      const layoutAudit = await page.evaluate(() => {
        const docW = document.documentElement.clientWidth;
        const scrollW = document.documentElement.scrollWidth;
        const overflowingElements = [];

        document.querySelectorAll('*').forEach((el) => {
          if (['HTML', 'BODY', 'SCRIPT', 'STYLE', 'LINK', 'META'].includes(el.tagName)) return;
          if (
            el.closest('#mobile-drawer:not(.open)') ||
            el.closest('#global-lightbox:not(.open)') ||
            el.closest('#chat-dialog:not(.open)')
          ) {
            return;
          }

          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
            return;
          }

          const r = el.getBoundingClientRect();
          if (r.width === 0 && r.height === 0) return;

          // Ignore descendants inside horizontal scroll containers that themselves fit the viewport
          let parent = el.parentElement;
          let insideClippedContainer = false;
          while (parent && parent !== document.body && parent !== document.documentElement) {
            const ps = window.getComputedStyle(parent);
            if (
              ps.overflowX === 'auto' ||
              ps.overflowX === 'scroll' ||
              ps.overflowX === 'hidden' ||
              ps.overflow === 'hidden'
            ) {
              const pr = parent.getBoundingClientRect();
              if (pr.right <= docW + 1.5 && pr.left >= -1.5) {
                insideClippedContainer = true;
                break;
              }
            }
            parent = parent.parentElement;
          }

          if (!insideClippedContainer && (r.right > docW + 2 || r.left < -2)) {
            overflowingElements.push({
              tag: el.tagName,
              id: el.id || '',
              className: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
              left: Math.round(r.left),
              right: Math.round(r.right),
              width: Math.round(r.width),
              docW,
            });
          }
        });

        return {
          docW,
          scrollW,
          hasDocOverflow: scrollW > docW + 1,
          overflowingElements: overflowingElements.slice(0, 5),
        };
      });

      expect(
        layoutAudit.hasDocOverflow,
        `Route ${route} has horizontal scroll (scrollWidth=${layoutAudit.scrollW}, clientWidth=${layoutAudit.docW})`
      ).toBe(false);

      expect(
        layoutAudit.overflowingElements,
        `Route ${route} has overflowing elements on ${testInfo.project.name}`
      ).toEqual([]);

      if (SCREENSHOT_ROUTES.has(route)) {
        const slug = route === '/' ? 'home' : route.slice(1).replace(/\//g, '-');
        const screenshot = await page.screenshot({ fullPage: false });
        await testInfo.attach(`viewport-${slug}`, {
          body: screenshot,
          contentType: 'image/png',
        });
      }
    }

    expect(pageErrors, 'Uncaught runtime page errors').toEqual([]);
    expect(consoleErrors, 'Browser console errors').toEqual([]);
  });

  test('Interactive navigation & Ask Flexon chatbot adapt properly to viewport', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#main-header[data-live-header="true"]', { state: 'attached' });
    await page.waitForTimeout(250);

    const vpSize = page.viewportSize();
    const isMobileOrTablet = vpSize && vpSize.width <= 1024;

    if (isMobileOrTablet) {
      const toggleBtn = page.locator('#mobile-menu-toggle');
      await expect(toggleBtn).toBeVisible();

      await toggleBtn.click();
      const drawer = page.locator('#mobile-drawer');
      await expect(drawer).toHaveClass(/open/);

      // Wait for CSS slide-in transition (300ms)
      await page.waitForTimeout(400);

      const drawerBounds = await drawer.boundingBox();
      expect(drawerBounds).not.toBeNull();
      expect(drawerBounds.x).toBeGreaterThanOrEqual(-1);
      expect(drawerBounds.x + drawerBounds.width).toBeLessThanOrEqual(vpSize.width + 2);

      const closeBtn = page.locator('#drawer-close');
      await closeBtn.click();
      await expect(drawer).not.toHaveClass(/open/);
    } else {
      const desktopNav = page.locator('.desktop-nav');
      await expect(desktopNav).toBeVisible();
    }

    // Test Ask Flexon Chatbot Dialog responsiveness
    const chatBtn = page.locator('#chat-launcher-btn');
    await expect(chatBtn).toBeVisible();
    await chatBtn.click();

    const chatDialog = page.locator('#chat-dialog');
    await expect(chatDialog).toHaveClass(/open/);
    await page.waitForTimeout(300);

    const chatBounds = await chatDialog.boundingBox();
    expect(chatBounds).not.toBeNull();
    expect(chatBounds.x).toBeGreaterThanOrEqual(-1);
    expect(chatBounds.x + chatBounds.width).toBeLessThanOrEqual(vpSize.width + 2);

    const chatCloseBtn = page.locator('#chat-close-btn');
    await chatCloseBtn.click();
    await expect(chatDialog).not.toHaveClass(/open/);
  });
});
