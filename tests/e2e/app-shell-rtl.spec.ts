import { test, expect } from "@playwright/test";

test.describe("App Shell — Arabic RTL Desktop Layout", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("page has dir=rtl and lang=ar", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("dir", "rtl");
    await expect(html).toHaveAttribute("lang", "ar");
  });

  test("page title contains Landing EState", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Landing EState/);
  });

  test("sidebar navigation is visible on desktop", async ({ page }) => {
    await page.goto("/");
    const sidebar = page.locator(".sidebar");
    await expect(sidebar).toBeVisible();
  });

  test("Arabic text is present in the shell", async ({ page }) => {
    await page.goto("/");
    const body = page.locator("body");
    const text = await body.textContent();
    expect(text).toMatch(/لوحة|عقارية|جاهز/);
  });

  test("health API returns healthy JSON", async ({ page }) => {
    const res = await page.request.get("/api/health");
    expect(res.status()).toBe(200);
    const body = await res.json() as Record<string, unknown>;
    expect(body["runtime"]).toBe("app-worker");
    expect(body["status"]).toBe("healthy");
  });
});
