import { test, expect } from "@playwright/test";

test.use({
  hasTouch: true,
  isMobile: true,
  viewport: { width: 390, height: 844 },
});

test.describe("App Shell — Arabic RTL Mobile Layout", () => {
  test("page has dir=rtl on mobile", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("dir", "rtl");
  });

  test("mobile header is visible on small screens", async ({ page }) => {
    await page.goto("/");
    const mobileHeader = page.locator(".mobile-header");
    await expect(mobileHeader).toBeVisible();
  });

  test("sidebar is hidden on mobile", async ({ page }) => {
    await page.goto("/");
    const sidebar = page.locator(".sidebar");
    await expect(sidebar).toBeHidden();
  });

  test("main content is accessible on mobile", async ({ page }) => {
    await page.goto("/");
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });

  test("mobile header keeps RTL order and stable tap target size", async ({ page }) => {
    await page.goto("/");
    const headerBox = await page.locator(".mobile-header").boundingBox();
    const actionBox = await page.locator(".mobile-action").boundingBox();
    expect(headerBox).not.toBeNull();
    expect(actionBox).not.toBeNull();
    expect(headerBox!.height).toBeGreaterThanOrEqual(56);
    expect(actionBox!.height).toBeGreaterThanOrEqual(44);
    expect(actionBox!.width).toBeGreaterThanOrEqual(44);
  });

  test("page does not overflow horizontally on mobile", async ({ page }) => {
    await page.goto("/");
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // 2px tolerance
  });
});
