import { test, expect } from "@playwright/test";

test.describe("App Shell - Arabic RTL Estate Studio Desktop Layout", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("page has dir=rtl and lang=ar", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("dir", "rtl");
    await expect(html).toHaveAttribute("lang", "ar");
  });

  test("page title contains Landing EState and Estate Studio", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Landing EState/);
    await expect(page).toHaveTitle(/Estate Studio/);
  });

  test("studio rail, smart section library, canvas, and inspector are visible on desktop", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".studio-rail")).toBeVisible();
    await expect(page.locator(".section-library")).toBeVisible();
    await expect(page.locator(".canvas-workspace")).toBeVisible();
    await expect(page.locator(".inspector-panel")).toBeVisible();
  });

  test("RTL studio layout anchors rail and section library to the right while inspector stays left", async ({ page }) => {
    await page.goto("/");
    const railBox = await page.locator(".studio-rail").boundingBox();
    const libraryBox = await page.locator(".section-library").boundingBox();
    const canvasBox = await page.locator(".canvas-workspace").boundingBox();
    const inspectorBox = await page.locator(".inspector-panel").boundingBox();

    expect(railBox).not.toBeNull();
    expect(libraryBox).not.toBeNull();
    expect(canvasBox).not.toBeNull();
    expect(inspectorBox).not.toBeNull();
    expect(railBox!.x).toBeGreaterThan(libraryBox!.x);
    expect(libraryBox!.x).toBeGreaterThan(canvasBox!.x);
    expect(inspectorBox!.x).toBeLessThan(canvasBox!.x);
  });

  test("selected smart section outline is visible inside the preview", async ({ page }) => {
    await page.goto("/");
    const selectedSection = page.locator(".selected-section");
    await expect(selectedSection).toBeVisible();
    const boxShadow = await selectedSection.evaluate((node) => getComputedStyle(node).boxShadow);
    expect(boxShadow).toContain("22, 131, 248");
  });

  test("Arabic Estate Studio text is present in the shell", async ({ page }) => {
    await page.goto("/");
    const body = page.locator("body");
    const text = await body.textContent();
    expect(text).toMatch(/استوديو|أقسام ذكية|صفحة عقارية|الشعار الرئيسي/);
  });

  test("Estate Studio shell screenshot is capturable and non-empty", async ({ page }) => {
    await page.goto("/");
    const screenshot = await page.screenshot({ fullPage: true });
    expect(screenshot.length).toBeGreaterThan(20_000);
  });

  test("health API returns healthy JSON", async ({ page }) => {
    const res = await page.request.get("/api/health");
    expect(res.status()).toBe(200);
    const body = await res.json() as Record<string, unknown>;
    expect(body["runtime"]).toBe("app-worker");
    expect(body["status"]).toBe("healthy");
  });
});
