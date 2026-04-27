import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");

describe("Package Ownership Documentation", () => {
  const packagesWithREADME = [
    "packages/auth",
    "packages/block-sdk",
    "packages/blocks",
    "packages/db",
    "packages/schema",
    "packages/tracking",
    "packages/ui",
    "packages/shared",
  ];

  for (const pkg of packagesWithREADME) {
    it(`${pkg} has a README.md with ownership info`, () => {
      const readmePath = join(ROOT, pkg, "README.md");
      expect(existsSync(readmePath)).toBe(true);
      const content = readFileSync(readmePath, "utf8");
      expect(content).toMatch(/Owner|Responsibility/);
    });

    it(`${pkg} has a package.json with a scoped name`, () => {
      const pkgJsonPath = join(ROOT, pkg, "package.json");
      expect(existsSync(pkgJsonPath)).toBe(true);
      const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8")) as { name: string };
      expect(pkgJson.name).toMatch(/@landing-estate\//);
    });
  }

  it("packages/ui README documents render-worker boundary prohibition", () => {
    const content = readFileSync(join(ROOT, "packages/ui/README.md"), "utf8");
    expect(content).toMatch(/render-worker/);
  });

  it("packages/shared README documents that both workers may import it", () => {
    const content = readFileSync(join(ROOT, "packages/shared/README.md"), "utf8");
    expect(content).toMatch(/both/i);
  });
});
