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

  it("GET / contains Arabic placeholder content", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toMatch(/Landing EState|لوحة|عقارية/);
  });

  it("GET / does not contain authentication forms", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).not.toMatch(/login|signin|password|كلمة المرور/i);
  });
});
