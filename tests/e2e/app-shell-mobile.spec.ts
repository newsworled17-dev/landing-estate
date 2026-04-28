import { test, expect } from "@playwright/test";

test.use({
  hasTouch: true,
  isMobile: true,
  viewport: { width: 390, height: 844 },
});

test.describe("App Shell - Arabic RTL Estate Studio Mobile Layout", () => {
  test("page has dir=rtl on mobile", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("dir", "rtl");
  });

  test("mobile header and bottom sheet are visible on small screens", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".mobile-header")).toBeVisible();
    await expect(page.locator(".mobile-bottom-sheet")).toBeVisible();
  });

  test("desktop rail, library, and inspector are hidden on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".studio-rail")).toBeHidden();
    await expect(page.locator(".section-library")).toBeHidden();
    await expect(page.locator(".inspector-panel")).toBeHidden();
  });

  test("preview-first canvas remains accessible on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".canvas-workspace")).toBeVisible();
    await expect(page.locator(".preview-page")).toBeVisible();
  });

  test("mobile header keeps RTL order and stable tap target size", async ({ page }) => {
    await page.goto("/");
    const headerBox = await page.locator(".mobile-header").boundingBox();
    const markBox = await page.locator(".mobile-header .brand-mark").boundingBox();
    const actionBox = await page.locator(".mobile-action").boundingBox();

    expect(headerBox).not.toBeNull();
    expect(markBox).not.toBeNull();
    expect(actionBox).not.toBeNull();
    expect(headerBox!.height).toBeGreaterThanOrEqual(56);
    expect(actionBox!.height).toBeGreaterThanOrEqual(44);
    expect(actionBox!.width).toBeGreaterThanOrEqual(44);
    expect(markBox!.x).toBeGreaterThan(actionBox!.x);
  });

  test("mobile bottom sheet tabs keep stable tap targets", async ({ page }) => {
    await page.goto("/");
    const tabs = page.locator(".mobile-sheet-tabs button");
    await expect(tabs).toHaveCount(3);
    const count = await tabs.count();
    for (let i = 0; i < count; i += 1) {
      const box = await tabs.nth(i).boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(44);
    }
  });

  test("page does not overflow horizontally on mobile", async ({ page }) => {
    await page.goto("/");
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });
});
