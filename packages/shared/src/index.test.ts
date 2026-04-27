import { describe, it, expect } from "vitest";
import { toSlug, isValidRuntime, SHARED_PACKAGE } from "../src/index.js";

describe("Shared Package — Public-Safe Utilities", () => {
  describe("toSlug", () => {
    it("converts Latin title to slug", () => {
      expect(toSlug("Hello World")).toBe("hello-world");
    });

    it("converts Arabic title to slug (preserves Arabic chars)", () => {
      const result = toSlug("صفحة عقارية");
      expect(result).toMatch(/صفحة-عقارية/);
    });

    it("trims leading and trailing whitespace", () => {
      expect(toSlug("  test  ")).toBe("test");
    });

    it("collapses multiple spaces to single dash", () => {
      expect(toSlug("hello   world")).toBe("hello-world");
    });
  });

  describe("isValidRuntime", () => {
    it("accepts app-worker", () => {
      expect(isValidRuntime("app-worker")).toBe(true);
    });

    it("accepts render-worker", () => {
      expect(isValidRuntime("render-worker")).toBe(true);
    });

    it("rejects unknown string", () => {
      expect(isValidRuntime("cloudflare-pages")).toBe(false);
    });

    it("rejects null", () => {
      expect(isValidRuntime(null)).toBe(false);
    });
  });

  describe("SHARED_PACKAGE", () => {
    it("has correct package name", () => {
      expect(SHARED_PACKAGE.name).toBe("@landing-estate/shared");
    });

    it("scope is public-safe", () => {
      expect(SHARED_PACKAGE.scope).toBe("public-safe");
    });
  });
});
