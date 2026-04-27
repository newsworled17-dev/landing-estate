import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "../..");

describe("Aggregate Check Script Smoke Test", () => {
  it("root package.json defines a check script that aggregates sub-commands", () => {
    const pkgJson = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")) as {
      scripts: Record<string, string>;
    };
    const checkScript = pkgJson.scripts["check"];
    expect(checkScript).toBeDefined();
    expect(checkScript).toContain("typecheck");
    expect(checkScript).toContain("lint");
    expect(checkScript).toContain("test");
    expect(checkScript).toContain("build");
  });

  it("root package.json defines individual scripts: lint, test, test:workers, test:e2e, build", () => {
    const pkgJson = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")) as {
      scripts: Record<string, string>;
    };
    const required = ["lint", "test", "test:workers", "test:e2e", "build"];
    for (const script of required) {
      expect(pkgJson.scripts[script], `missing script: ${script}`).toBeDefined();
    }
  });

  it("check-boundaries.mjs script exists", () => {
    expect(existsSync(join(ROOT, "scripts/check-boundaries.mjs"))).toBe(true);
  });
});
