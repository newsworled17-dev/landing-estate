import { test, expect, devices } from "@playwright/test";

test.describe("App Shell — Arabic RTL Mobile Layout", () => {
  test.use({ ...devices["iPhone 12"] });

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

  test("page does not overflow horizontally on mobile", async ({ page }) => {
    await page.goto("/");
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // 2px tolerance
  });
});
