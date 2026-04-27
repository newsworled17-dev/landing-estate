import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "../..");

describe("Typecheck Script Smoke Test", () => {
  it("root package.json defines a typecheck script", () => {
    const pkgJson = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")) as {
      scripts: Record<string, string>;
    };
    expect(pkgJson.scripts["typecheck"]).toBeDefined();
    expect(pkgJson.scripts["typecheck"]).toContain("typecheck");
  });

  it("tsconfig.base.json has strict mode enabled", () => {
    const tsconfig = JSON.parse(
      readFileSync(join(ROOT, "tsconfig.base.json"), "utf8")
    ) as { compilerOptions: Record<string, unknown> };
    expect(tsconfig.compilerOptions["strict"]).toBe(true);
  });
});
