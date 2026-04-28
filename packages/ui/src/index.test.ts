import { describe, expect, it } from "vitest";
import {
  designSystemMeta,
  estateStudioThemeCss,
  estateStudioTokens,
  rtlLogicalUtilitiesCss,
} from "./index.js";

describe("Estate Studio Light design system tokens", () => {
  it("exports app-worker-only RTL design metadata", () => {
    expect(designSystemMeta.name).toBe("Landing EState Estate Studio Light");
    expect(designSystemMeta.direction).toBe("rtl");
    expect(designSystemMeta.runtime).toBe("app-worker-only");
    expect(designSystemMeta.identity).toContain("canvas grid");
  });

  it("keeps interactive radii at 8px or below", () => {
    const radii = Object.values(estateStudioTokens.radius);
    for (const radius of radii) {
      expect(Number.parseInt(radius, 10)).toBeLessThanOrEqual(8);
    }
  });

  it("exposes the core Estate Studio Light palette and canvas variables", () => {
    expect(estateStudioThemeCss).toContain("--le-color-blue");
    expect(estateStudioThemeCss).toContain("--le-color-selection");
    expect(estateStudioThemeCss).toContain("--le-grid-size");
    expect(estateStudioThemeCss).toContain("--le-selection-outline");
  });

  it("includes RTL-safe logical utility classes and focus states", () => {
    expect(rtlLogicalUtilitiesCss).toContain("direction: rtl");
    expect(rtlLogicalUtilitiesCss).toContain("text-align: start");
    expect(rtlLogicalUtilitiesCss).toContain("focus-visible");
  });
});
