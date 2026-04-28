import { describe, it, expect } from "vitest";
import app from "../src/index.js";

describe("App Worker Shell Contract", () => {
  it("GET / returns 200", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
  });

  it("GET / returns HTML with dir=rtl and lang=ar", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain('dir="rtl"');
    expect(html).toContain('lang="ar"');
  });

  it("GET / contains Estate Studio Light placeholder content", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toMatch(/Landing EState|Estate Studio|استوديو|أقسام ذكية|صفحة عقارية/);
  });

  it("GET / does not contain authentication forms", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).not.toMatch(/login|signin|password|كلمة المرور/i);
  });

  it("GET / links the app shell stylesheet instead of inline style blocks", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain('href="/assets/app-shell.css"');
    expect(html).not.toContain("<style>");
  });

  it("GET /assets/app-shell.css returns Estate Studio Light CSS variables", async () => {
    const res = await app.request("/assets/app-shell.css");
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("text/css");
    const css = await res.text();
    expect(css).toContain("--le-color-selection");
    expect(css).toContain("--le-grid-size");
    expect(css).toContain('grid-template-areas:');
    expect(css).toContain(".selected-section");
  });
});
