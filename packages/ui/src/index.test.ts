import { describe, expect, it } from "vitest";
import {
  designSystemMeta,
  premiumCalmThemeCss,
  premiumCalmTokens,
  rtlLogicalUtilitiesCss,
} from "./index.js";

describe("Premium Calm design system tokens", () => {
  it("exports app-worker-only RTL design metadata", () => {
    expect(designSystemMeta.name).toBe("Landing EState Premium Calm");
    expect(designSystemMeta.direction).toBe("rtl");
    expect(designSystemMeta.runtime).toBe("app-worker-only");
  });

  it("keeps interactive radii at 8px or below", () => {
    const radii = Object.values(premiumCalmTokens.radius);
    for (const radius of radii) {
      expect(Number.parseInt(radius, 10)).toBeLessThanOrEqual(8);
    }
  });

  it("exposes the core Premium Calm palette as CSS variables", () => {
    expect(premiumCalmThemeCss).toContain("--le-color-estate");
    expect(premiumCalmThemeCss).toContain("--le-color-gold");
    expect(premiumCalmThemeCss).toContain("--le-color-canvas");
  });

  it("includes RTL-safe logical utility classes", () => {
    expect(rtlLogicalUtilitiesCss).toContain("direction: rtl");
    expect(rtlLogicalUtilitiesCss).toContain("text-align: start");
    expect(rtlLogicalUtilitiesCss).toContain("focus-visible");
  });
});
