/**
 * @landing-estate/ui - app-worker design system foundation.
 *
 * Estate Studio Light is the authenticated builder identity:
 * white panels, precise canvas grid, blue selection affordances, and RTL-first
 * layout utilities. apps/render-worker must not import this package.
 */

export const estateStudioTokens = {
  color: {
    app: "#eef2f7",
    shell: "#ffffff",
    canvas: "#f8fafc",
    canvasGrid: "#dbe3ee",
    canvasDot: "#c9d4e2",
    panel: "#ffffff",
    panelMuted: "#f5f7fb",
    panelRaised: "#ffffff",
    ink: "#111827",
    inkSoft: "#374151",
    muted: "#6b7280",
    mutedStrong: "#4b5563",
    border: "#dce3ed",
    borderStrong: "#c7d2e0",
    blue: "#1e88ff",
    blueStrong: "#0f6fe8",
    blueSoft: "#e8f2ff",
    selection: "#1683f8",
    success: "#1dbf73",
    successSoft: "#eafaf2",
    warning: "#b7791f",
    warningSoft: "#fff7e6",
    danger: "#d14343",
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
  grid: {
    size: "32px",
    minorLine: "rgb(219 227 238 / 0.72)",
    dot: "rgb(201 212 226 / 0.7)",
  },
  shadow: {
    hairline: "0 0 0 1px rgb(17 24 39 / 0.06)",
    panel: "0 18px 55px rgb(15 23 42 / 0.08)",
    floating: "0 24px 80px rgb(15 23 42 / 0.14)",
    selection: "0 0 0 2px #1683f8, 0 10px 30px rgb(30 136 255 / 0.18)",
  },
  typography: {
    arabic:
      '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif',
    brand:
      '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif',
  },
} as const;

export const estateStudioThemeCss = `
:root {
  --le-color-app: ${estateStudioTokens.color.app};
  --le-color-shell: ${estateStudioTokens.color.shell};
  --le-color-canvas: ${estateStudioTokens.color.canvas};
  --le-color-canvas-grid: ${estateStudioTokens.color.canvasGrid};
  --le-color-canvas-dot: ${estateStudioTokens.color.canvasDot};
  --le-color-panel: ${estateStudioTokens.color.panel};
  --le-color-panel-muted: ${estateStudioTokens.color.panelMuted};
  --le-color-panel-raised: ${estateStudioTokens.color.panelRaised};
  --le-color-ink: ${estateStudioTokens.color.ink};
  --le-color-ink-soft: ${estateStudioTokens.color.inkSoft};
  --le-color-muted: ${estateStudioTokens.color.muted};
  --le-color-muted-strong: ${estateStudioTokens.color.mutedStrong};
  --le-color-border: ${estateStudioTokens.color.border};
  --le-color-border-strong: ${estateStudioTokens.color.borderStrong};
  --le-color-blue: ${estateStudioTokens.color.blue};
  --le-color-blue-strong: ${estateStudioTokens.color.blueStrong};
  --le-color-blue-soft: ${estateStudioTokens.color.blueSoft};
  --le-color-selection: ${estateStudioTokens.color.selection};
  --le-color-success: ${estateStudioTokens.color.success};
  --le-color-success-soft: ${estateStudioTokens.color.successSoft};
  --le-color-warning: ${estateStudioTokens.color.warning};
  --le-color-warning-soft: ${estateStudioTokens.color.warningSoft};
  --le-color-danger: ${estateStudioTokens.color.danger};
  --le-color-white: ${estateStudioTokens.color.white};
  --le-radius-xs: ${estateStudioTokens.radius.xs};
  --le-radius-sm: ${estateStudioTokens.radius.sm};
  --le-radius-md: ${estateStudioTokens.radius.md};
  --le-grid-size: ${estateStudioTokens.grid.size};
  --le-grid-line: ${estateStudioTokens.grid.minorLine};
  --le-grid-dot: ${estateStudioTokens.grid.dot};
  --le-selection-outline: ${estateStudioTokens.shadow.selection};
  --le-shadow-hairline: ${estateStudioTokens.shadow.hairline};
  --le-shadow-panel: ${estateStudioTokens.shadow.panel};
  --le-shadow-floating: ${estateStudioTokens.shadow.floating};
  --le-font-arabic: ${estateStudioTokens.typography.arabic};
  --le-font-brand: ${estateStudioTokens.typography.brand};
}
`.trim();

export const rtlLogicalUtilitiesCss = `
.le-focusable:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--le-color-blue), transparent 16%);
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
  name: "Landing EState Estate Studio Light",
  direction: "rtl",
  radiusPolicy: "interactive radii stay at 8px or below",
  runtime: "app-worker-only",
  identity:
    "light builder studio with precise canvas grid, white panels, and blue selection affordances",
} as const;
