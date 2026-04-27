import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");

describe("Workspace Structure", () => {
  const requiredDirs = [
    "apps/app-worker",
    "apps/render-worker",
    "packages/auth",
    "packages/block-sdk",
    "packages/blocks",
    "packages/db",
    "packages/schema",
    "packages/tracking",
    "packages/ui",
    "packages/shared",
    "docs",
  ];

  for (const dir of requiredDirs) {
    it(`directory exists: ${dir}`, () => {
      expect(existsSync(join(ROOT, dir))).toBe(true);
    });
  }

  it("pnpm-workspace.yaml exists", () => {
    expect(existsSync(join(ROOT, "pnpm-workspace.yaml"))).toBe(true);
  });

  it("tsconfig.base.json exists", () => {
    expect(existsSync(join(ROOT, "tsconfig.base.json"))).toBe(true);
  });

  it("apps/app-worker/src/index.ts exists", () => {
    expect(existsSync(join(ROOT, "apps/app-worker/src/index.ts"))).toBe(true);
  });

  it("apps/render-worker/src/index.ts exists", () => {
    expect(existsSync(join(ROOT, "apps/render-worker/src/index.ts"))).toBe(true);
  });

  it("packages/shared/src/index.ts exists", () => {
    expect(existsSync(join(ROOT, "packages/shared/src/index.ts"))).toBe(true);
  });
});
