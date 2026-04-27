import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "../..");

describe("Render Worker Import Boundary", () => {
  it("render-worker src/index.ts does not import from app-worker", () => {
    const src = readFileSync(
      join(ROOT, "apps/render-worker/src/index.ts"),
      "utf8"
    );
    expect(src).not.toMatch(/from\s+['"]@landing-estate\/app-worker/m);
    expect(src).not.toMatch(/from\s+['"].*apps\/app-worker['"]/m);
  });

  it("render-worker src/index.ts does not import from packages/ui", () => {
    const src = readFileSync(
      join(ROOT, "apps/render-worker/src/index.ts"),
      "utf8"
    );
    expect(src).not.toMatch(/from\s+['"]@landing-estate\/ui/m);
    expect(src).not.toMatch(/from\s+['"].*packages\/ui['"]/m);
  });

  it("check-boundaries.mjs exists and defines forbidden patterns for render-worker", () => {
    const script = readFileSync(
      join(ROOT, "scripts/check-boundaries.mjs"),
      "utf8"
    );
    expect(script).toMatch(/app-worker/);
    expect(script).toMatch(/@landing-estate/);
    expect(script).toMatch(/landing-estate.*ui|ui.*landing-estate/i);
  });
});
