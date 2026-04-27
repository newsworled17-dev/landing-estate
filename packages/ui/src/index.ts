/**
 * @landing-estate/ui — app-worker design system foundation.
 *
 * This package is for authenticated app surfaces only.
 * apps/render-worker must not import it.
 */

export const premiumCalmTokens = {
  color: {
    canvas: "#f6f1e8",
    canvasElevated: "#fbf8f1",
    surface: "#fffdf8",
    surfaceMuted: "#efe6d9",
    ink: "#16231d",
    inkSoft: "#31433a",
    muted: "#69756e",
    border: "#d9cdbc",
    estate: "#174535",
    estateDeep: "#0e2d24",
    sage: "#d8e2d6",
    sageStrong: "#9fb7a7",
    gold: "#b88939",
    goldSoft: "#efe0be",
    clay: "#b96d55",
    claySoft: "#f0d8ce",
    focus: "#c3913a",
    white: "#ffffff",
  },
  radius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
  },
  space: {
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
  },
  shadow: {
    hairline: "0 0 0 1px rgb(22 35 29 / 0.06)",
    soft: "0 18px 45px rgb(22 35 29 / 0.10)",
    raised: "0 24px 70px rgb(14 45 36 / 0.14)",
  },
  typography: {
    arabic:
      '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif',
    brand:
      '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif',
  },
} as const;

export const premiumCalmThemeCss = `
:root {
  --le-color-canvas: ${premiumCalmTokens.color.canvas};
  --le-color-canvas-elevated: ${premiumCalmTokens.color.canvasElevated};
  --le-color-surface: ${premiumCalmTokens.color.surface};
  --le-color-surface-muted: ${premiumCalmTokens.color.surfaceMuted};
  --le-color-ink: ${premiumCalmTokens.color.ink};
  --le-color-ink-soft: ${premiumCalmTokens.color.inkSoft};
  --le-color-muted: ${premiumCalmTokens.color.muted};
  --le-color-border: ${premiumCalmTokens.color.border};
  --le-color-estate: ${premiumCalmTokens.color.estate};
  --le-color-estate-deep: ${premiumCalmTokens.color.estateDeep};
  --le-color-sage: ${premiumCalmTokens.color.sage};
  --le-color-sage-strong: ${premiumCalmTokens.color.sageStrong};
  --le-color-gold: ${premiumCalmTokens.color.gold};
  --le-color-gold-soft: ${premiumCalmTokens.color.goldSoft};
  --le-color-clay: ${premiumCalmTokens.color.clay};
  --le-color-clay-soft: ${premiumCalmTokens.color.claySoft};
  --le-color-focus: ${premiumCalmTokens.color.focus};
  --le-color-white: ${premiumCalmTokens.color.white};
  --le-radius-xs: ${premiumCalmTokens.radius.xs};
  --le-radius-sm: ${premiumCalmTokens.radius.sm};
  --le-radius-md: ${premiumCalmTokens.radius.md};
  --le-shadow-hairline: ${premiumCalmTokens.shadow.hairline};
  --le-shadow-soft: ${premiumCalmTokens.shadow.soft};
  --le-shadow-raised: ${premiumCalmTokens.shadow.raised};
  --le-font-arabic: ${premiumCalmTokens.typography.arabic};
  --le-font-brand: ${premiumCalmTokens.typography.brand};
}
`.trim();

export const rtlLogicalUtilitiesCss = `
.le-focusable:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--le-color-focus), transparent 20%);
  outline-offset: 3px;
}

.le-truncate {
  min-inline-size: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.le-rtl-flow {
  direction: rtl;
  text-align: start;
}

.le-safe-label {
  overflow-wrap: anywhere;
  line-height: 1.55;
}
`.trim();

export const designSystemMeta = {
  name: "Landing EState Premium Calm",
  direction: "rtl",
  radiusPolicy: "interactive radii stay at 8px or below",
  runtime: "app-worker-only",
} as const;
