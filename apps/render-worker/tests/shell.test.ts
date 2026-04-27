import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import app from "../src/index.js";

const ROOT = resolve(process.cwd(), "../..");

describe("Render Worker Public Shell Isolation", () => {
  it("GET / returns 200", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
  });

  it("GET / returns HTML content", async () => {
    const res = await app.request("/");
    const html = await res.text();
    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain("Render Worker");
    expect(html).toContain("سطح العرض العام جاهز");
    expect(html).toContain("--estate-deep");
  });

  it("render-worker source does not import from packages/ui", () => {
    const src = readFileSync(join(ROOT, "apps/render-worker/src/index.ts"), "utf8");
    expect(src).not.toMatch(/^import\s.*@landing-estate\/ui/m);
    expect(src).not.toMatch(/from\s+['"]@landing-estate\/ui/m);
    expect(src).not.toMatch(/from\s+['"].*packages\/ui['"]/m);
  });

  it("render-worker source does not import from app-worker", () => {
    const src = readFileSync(join(ROOT, "apps/render-worker/src/index.ts"), "utf8");
    expect(src).not.toMatch(/from\s+['"]@landing-estate\/app-worker/m);
    expect(src).not.toMatch(/from\s+['"].*apps\/app-worker['"]/m);
  });
});
