import {
  estateStudioThemeCss,
  rtlLogicalUtilitiesCss,
} from "@landing-estate/ui";

export const appShellCss = `
${estateStudioThemeCss}
${rtlLogicalUtilitiesCss}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color-scheme: light;
  text-size-adjust: 100%;
}

body {
  margin: 0;
  min-block-size: 100dvh;
  background:
    linear-gradient(90deg, rgb(15 23 42 / 0.055) 1px, transparent 1px),
    linear-gradient(180deg, rgb(15 23 42 / 0.055) 1px, transparent 1px),
    var(--le-color-app);
  background-size: 64px 64px, 64px 64px, auto;
  color: var(--le-color-ink);
  font-family: var(--le-font-arabic);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  border: 0;
}

button:disabled,
a[aria-disabled="true"] {
  cursor: not-allowed;
}

.studio-shell {
  direction: ltr;
  display: grid;
  grid-template-columns: 20rem minmax(0, 1fr) 17.5rem 4.5rem;
  grid-template-rows: 4.5rem minmax(0, 1fr);
  grid-template-areas:
    "inspector command command rail"
    "inspector canvas library rail";
  block-size: 100dvh;
  overflow: hidden;
  background: color-mix(in srgb, var(--le-color-shell), transparent 18%);
}

.studio-command,
.studio-rail,
.section-library,
.canvas-workspace,
.inspector-panel,
.mobile-header,
.mobile-bottom-sheet {
  direction: rtl;
  text-align: start;
}

.mobile-header,
.mobile-bottom-sheet {
  display: none;
}

.studio-command {
  grid-area: command;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 1rem;
  min-inline-size: 0;
  padding-block: 0.75rem;
  padding-inline: 1rem;
  border-block-end: 1px solid var(--le-color-border);
  background: color-mix(in srgb, var(--le-color-shell), transparent 5%);
  box-shadow: 0 1px 0 rgb(15 23 42 / 0.03);
}

.project-title {
  display: grid;
  gap: 0.15rem;
  min-inline-size: 0;
}

.project-title strong {
  color: var(--le-color-ink);
  font-size: 1rem;
  line-height: 1.35;
}

.project-title span {
  color: var(--le-color-muted);
  font-size: 0.78rem;
}

.save-pill,
.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-block-size: 2rem;
  inline-size: fit-content;
  border: 1px solid color-mix(in srgb, var(--le-color-success), transparent 45%);
  border-radius: var(--le-radius-md);
  background: var(--le-color-success-soft);
  color: #107346;
  font-size: 0.72rem;
  font-weight: 800;
  padding-block: 0.35rem;
  padding-inline: 0.65rem;
}

.device-switcher,
.command-actions,
.tool-cluster,
.tab-row,
.inline-control,
.align-grid,
.floating-tools {
  display: flex;
  align-items: center;
}

.device-switcher {
  gap: 0.35rem;
  padding-inline: 0.35rem;
  border-inline: 1px solid var(--le-color-border);
}

.command-actions {
  gap: 0.5rem;
}

.zoom-indicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-block-size: 2.25rem;
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel-muted);
  color: var(--le-color-ink-soft);
  font-size: 0.82rem;
  font-weight: 700;
  padding-inline: 0.7rem;
  white-space: nowrap;
}

.icon-button,
.rail-button,
.tool-button,
.device-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  inline-size: 2.25rem;
  block-size: 2.25rem;
  border-radius: var(--le-radius-sm);
  background: transparent;
  color: var(--le-color-muted-strong);
  transition:
    background-color 150ms ease,
    color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
}

.icon-button:hover,
.rail-button:hover,
.tool-button:hover,
.device-button:hover,
.icon-button.is-active,
.rail-button.is-active,
.device-button.is-active {
  background: var(--le-color-blue-soft);
  color: var(--le-color-blue-strong);
  box-shadow: var(--le-shadow-hairline);
}

.icon-button:active,
.rail-button:active,
.tool-button:active,
.device-button:active {
  transform: translateY(1px);
}

.primary-command,
.ghost-command {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-block-size: 2.4rem;
  border-radius: var(--le-radius-md);
  font-weight: 800;
  padding-inline: 0.9rem;
  white-space: nowrap;
}

.primary-command {
  background: var(--le-color-blue);
  color: var(--le-color-white);
  box-shadow: 0 12px 24px rgb(30 136 255 / 0.22);
}

.ghost-command {
  border: 1px solid var(--le-color-border);
  background: var(--le-color-panel);
  color: var(--le-color-ink-soft);
}

.studio-rail {
  grid-area: rail;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-block: 1rem;
  padding-inline: 0.65rem;
  border-inline-start: 1px solid var(--le-color-border);
  background: var(--le-color-panel);
  box-shadow: -1px 0 0 rgb(15 23 42 / 0.02);
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2.55rem;
  block-size: 2.55rem;
  border-radius: var(--le-radius-md);
  background: linear-gradient(135deg, var(--le-color-blue), #5ea8ff);
  color: var(--le-color-white);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0;
  box-shadow: 0 16px 34px rgb(30 136 255 / 0.25);
}

.rail-separator {
  inline-size: 100%;
  block-size: 1px;
  background: var(--le-color-border);
  margin-block: 0.25rem;
}

.rail-spacer {
  flex: 1;
}

.section-library {
  grid-area: library;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
  gap: 1rem;
  min-inline-size: 0;
  overflow: hidden;
  padding: 1rem;
  border-inline-start: 1px solid var(--le-color-border);
  background: color-mix(in srgb, var(--le-color-panel), transparent 1%);
}

.panel-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
  padding: 0.25rem;
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel-muted);
}

.panel-tab {
  min-block-size: 2.35rem;
  border-radius: var(--le-radius-sm);
  color: var(--le-color-muted);
  background: transparent;
  font-weight: 800;
}

.panel-tab.is-active {
  background: var(--le-color-panel);
  color: var(--le-color-ink);
  box-shadow: 0 2px 8px rgb(15 23 42 / 0.08);
}

.panel-tab:disabled,
.tool-button:disabled,
.device-button:disabled,
.primary-command:disabled,
.ghost-command:disabled {
  opacity: 0.52;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-block-size: 2.75rem;
  border: 1px solid var(--le-color-border);
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel);
  color: var(--le-color-muted);
  padding-inline: 0.75rem;
}

.search-box span {
  color: var(--le-color-muted);
  font-size: 0.86rem;
}

.section-groups {
  display: grid;
  align-content: start;
  gap: 1.15rem;
  min-block-size: 0;
  overflow: auto;
  padding-block-end: 1rem;
  scrollbar-width: thin;
}

.section-group {
  display: grid;
  gap: 0.7rem;
}

.group-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  color: var(--le-color-ink-soft);
  font-size: 0.78rem;
  font-weight: 900;
}

.group-heading span {
  color: var(--le-color-muted);
  font-size: 0.72rem;
  font-weight: 700;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
}

.section-card {
  display: grid;
  gap: 0.55rem;
  min-block-size: 6.1rem;
  border: 1px solid var(--le-color-border);
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel-muted);
  color: var(--le-color-muted-strong);
  padding: 0.7rem;
}

.section-card.is-selected {
  border-color: color-mix(in srgb, var(--le-color-blue), transparent 24%);
  background: var(--le-color-blue-soft);
  color: var(--le-color-blue-strong);
}

.section-thumb {
  display: grid;
  place-items: center;
  min-block-size: 3.15rem;
  border-radius: var(--le-radius-sm);
  background:
    linear-gradient(90deg, rgb(30 136 255 / 0.12), transparent 62%),
    var(--le-color-white);
  box-shadow: inset 0 0 0 1px rgb(30 136 255 / 0.08);
}

.section-thumb svg {
  inline-size: 2.8rem;
  block-size: 2.1rem;
}

.section-card strong {
  overflow-wrap: anywhere;
  font-size: 0.74rem;
  line-height: 1.35;
}

.canvas-workspace {
  grid-area: canvas;
  position: relative;
  min-inline-size: 0;
  overflow: auto;
  padding: 2rem;
  background:
    radial-gradient(circle at 1px 1px, var(--le-grid-dot) 1px, transparent 0),
    linear-gradient(90deg, var(--le-grid-line) 1px, transparent 1px),
    linear-gradient(180deg, var(--le-grid-line) 1px, transparent 1px),
    var(--le-color-canvas);
  background-size:
    16px 16px,
    var(--le-grid-size) var(--le-grid-size),
    var(--le-grid-size) var(--le-grid-size),
    auto;
}

.ruler-x,
.ruler-y {
  position: sticky;
  z-index: 3;
  color: color-mix(in srgb, var(--le-color-muted), transparent 35%);
  font-size: 0.68rem;
  pointer-events: none;
}

.ruler-x {
  inset-block-start: 0;
  display: flex;
  justify-content: space-around;
  block-size: 1rem;
  margin-block-start: -1.25rem;
  margin-block-end: 0.75rem;
}

.ruler-y {
  inset-inline-start: 0;
  writing-mode: vertical-rl;
  float: left;
  margin-inline-start: -1.25rem;
}

.preview-frame {
  position: relative;
  inline-size: min(100%, 52rem);
  min-inline-size: 36rem;
  margin-inline: auto;
}

.preview-page {
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 0.08);
  border-radius: var(--le-radius-sm);
  background: var(--le-color-white);
  box-shadow: 0 28px 90px rgb(15 23 42 / 0.13);
}

.preview-nav,
.hero-preview,
.logo-strip,
.feature-preview {
  padding-inline: clamp(1.2rem, 3vw, 2.3rem);
}

.preview-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-block-size: 4.2rem;
  border-block-end: 1px solid var(--le-color-border);
}

.preview-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 900;
}

.preview-brand-dot {
  inline-size: 0.9rem;
  block-size: 0.9rem;
  border-radius: 999px;
  background: var(--le-color-blue);
  box-shadow: 0 0 0 5px var(--le-color-blue-soft);
}

.preview-links {
  display: flex;
  gap: 1.1rem;
  color: var(--le-color-muted-strong);
  font-size: 0.78rem;
  font-weight: 700;
}

.hero-preview {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(13rem, 0.75fr);
  gap: 2rem;
  align-items: center;
  padding-block: 3rem;
  background:
    linear-gradient(135deg, rgb(30 136 255 / 0.08), transparent 42%),
    linear-gradient(90deg, transparent, rgb(29 191 115 / 0.08));
}

.hero-copy {
  display: grid;
  gap: 0.85rem;
}

.hero-kicker,
.mini-label {
  color: var(--le-color-blue-strong);
  font-size: 0.75rem;
  font-weight: 900;
}

.hero-copy h1 {
  margin: 0;
  max-inline-size: 30rem;
  color: var(--le-color-ink);
  font-family: var(--le-font-brand);
  font-size: clamp(2.3rem, 4.8vw, 4.4rem);
  line-height: 1.08;
  letter-spacing: 0;
}

.hero-copy p {
  margin: 0;
  max-inline-size: 31rem;
  color: var(--le-color-muted-strong);
  font-size: 0.98rem;
  line-height: 1.9;
}

.preview-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.preview-cta,
.preview-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-block-size: 2.5rem;
  border-radius: var(--le-radius-md);
  font-weight: 900;
  padding-inline: 1rem;
}

.preview-cta {
  background: var(--le-color-blue);
  color: var(--le-color-white);
}

.preview-secondary {
  border: 1px solid var(--le-color-border);
  color: var(--le-color-ink-soft);
}

.property-card {
  display: grid;
  gap: 0.7rem;
  border: 1px solid var(--le-color-border);
  border-radius: var(--le-radius-md);
  background: color-mix(in srgb, var(--le-color-white), transparent 4%);
  box-shadow: var(--le-shadow-panel);
  padding: 0.9rem;
}

.property-visual {
  block-size: 12rem;
  border-radius: var(--le-radius-sm);
  background:
    linear-gradient(135deg, rgb(30 136 255 / 0.85), rgb(29 191 115 / 0.25)),
    linear-gradient(45deg, transparent 0 48%, rgb(255 255 255 / 0.32) 48% 52%, transparent 52%);
}

.property-meta {
  display: grid;
  gap: 0.35rem;
}

.property-meta strong {
  font-size: 1rem;
}

.property-meta span {
  color: var(--le-color-muted);
  font-size: 0.82rem;
}

.selected-section {
  position: relative;
  box-shadow: var(--le-selection-outline);
}

.selected-section::before {
  content: "القسم المحدد";
  position: absolute;
  z-index: 4;
  inset-block-start: -1.85rem;
  inset-inline-start: 1rem;
  border-radius: var(--le-radius-sm) var(--le-radius-sm) 0 0;
  background: var(--le-color-selection);
  color: var(--le-color-white);
  font-size: 0.7rem;
  font-weight: 900;
  padding-block: 0.32rem;
  padding-inline: 0.55rem;
}

.floating-tools {
  position: absolute;
  z-index: 5;
  inset-block-end: -1.15rem;
  inset-inline: 50% auto;
  transform: translateX(50%);
  gap: 0.15rem;
  border-radius: var(--le-radius-md);
  background: var(--le-color-blue);
  color: var(--le-color-white);
  box-shadow: var(--le-shadow-floating);
  padding: 0.2rem;
}

.floating-tools .tool-button {
  color: var(--le-color-white);
  inline-size: 2rem;
  block-size: 2rem;
}

.logo-strip {
  display: grid;
  gap: 0.8rem;
  padding-block: 2rem;
  border-block: 1px solid var(--le-color-border);
  background: #fbfcfe;
  text-align: center;
}

.logo-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  color: var(--le-color-muted-strong);
  font-weight: 900;
}

.feature-preview {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  gap: 1.8rem;
  padding-block: 2.4rem;
}

.feature-preview h2 {
  margin: 0;
  max-inline-size: 24rem;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1.18;
}

.feature-preview p {
  margin: 0;
  color: var(--le-color-muted-strong);
  line-height: 1.8;
}

.inspector-panel {
  grid-area: inspector;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 1rem;
  min-inline-size: 0;
  overflow: hidden;
  padding: 1rem;
  border-inline-end: 1px solid var(--le-color-border);
  background: color-mix(in srgb, var(--le-color-panel), transparent 2%);
}

.inspector-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.inspector-heading h2 {
  margin: 0;
  font-size: 1rem;
}

.tab-row {
  gap: 0.25rem;
  padding: 0.25rem;
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel-muted);
}

.tab-row button {
  flex: 1;
  min-block-size: 2.35rem;
  border-radius: var(--le-radius-sm);
  background: transparent;
  color: var(--le-color-muted);
  font-weight: 800;
}

.tab-row button.is-active {
  background: var(--le-color-panel);
  color: var(--le-color-blue-strong);
  box-shadow: var(--le-shadow-hairline);
}

.inspector-scroll {
  display: grid;
  align-content: start;
  gap: 0.85rem;
  min-block-size: 0;
  overflow: auto;
  padding-block-end: 1rem;
}

.control-card {
  display: grid;
  gap: 0.75rem;
  border: 1px solid var(--le-color-border);
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel);
  padding: 0.85rem;
}

.control-card h3 {
  margin: 0;
  font-size: 0.88rem;
}

.align-grid {
  justify-content: space-between;
  gap: 0.3rem;
  padding: 0.35rem;
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel-muted);
}

.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
}

.inline-control {
  justify-content: space-between;
  gap: 0.75rem;
  min-block-size: 2.5rem;
  border-radius: var(--le-radius-md);
  background: var(--le-color-panel-muted);
  color: var(--le-color-ink-soft);
  font-size: 0.82rem;
  padding-inline: 0.7rem;
}

.spacing-map {
  display: grid;
  place-items: center;
  min-block-size: 8rem;
  border: 1px solid var(--le-color-border);
  border-radius: var(--le-radius-md);
  background:
    linear-gradient(135deg, transparent 49%, rgb(30 136 255 / 0.16) 49% 51%, transparent 51%),
    var(--le-color-panel-muted);
}

.padding-box {
  display: grid;
  place-items: center;
  inline-size: 7.5rem;
  block-size: 4.2rem;
  border: 2px solid var(--le-color-selection);
  border-radius: var(--le-radius-md);
  background: var(--le-color-white);
  color: var(--le-color-muted);
  font-size: 0.78rem;
  font-weight: 900;
}

.color-swatch {
  display: inline-flex;
  inline-size: 1rem;
  block-size: 1rem;
  border-radius: 4px;
  background: var(--le-color-selection);
  box-shadow: 0 0 0 1px rgb(15 23 42 / 0.08);
}

.le-icon {
  inline-size: 1.1rem;
  block-size: 1.1rem;
  flex: 0 0 auto;
}

@media (max-width: 1100px) {
  .studio-shell {
    grid-template-columns: minmax(0, 1fr) 17rem 4.5rem;
    grid-template-areas:
      "command command rail"
      "canvas library rail";
  }

  .inspector-panel {
    display: none;
  }
}

@media (max-width: 820px) {
  body {
    background: var(--le-color-app);
  }

  .studio-shell {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas:
      "mobile"
      "canvas"
      "sheet";
    block-size: auto;
    min-block-size: 100dvh;
    overflow: visible;
  }

  .studio-command,
  .studio-rail,
  .section-library,
  .inspector-panel {
    display: none;
  }

  .mobile-header {
    grid-area: mobile;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-block-size: 4.25rem;
    padding-inline: 0.85rem;
    border-block-end: 1px solid var(--le-color-border);
    background: var(--le-color-panel);
  }

  .mobile-brand {
    display: grid;
    gap: 0.1rem;
    min-inline-size: 0;
    flex: 1;
  }

  .mobile-brand strong {
    font-size: 0.95rem;
    line-height: 1.3;
  }

  .mobile-brand span {
    color: var(--le-color-muted);
    font-size: 0.72rem;
  }

  .mobile-action {
    min-inline-size: 2.75rem;
    min-block-size: 2.75rem;
  }

  .canvas-workspace {
    grid-area: canvas;
    min-block-size: 0;
    padding: 1rem;
    overflow-x: hidden;
  }

  .ruler-x,
  .ruler-y,
  .floating-tools {
    display: none;
  }

  .preview-frame {
    inline-size: 100%;
    min-inline-size: 0;
  }

  .preview-page {
    border-radius: var(--le-radius-md);
  }

  .preview-links {
    display: none;
  }

  .hero-preview,
  .feature-preview {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.25rem;
  }

  .hero-copy h1 {
    font-size: clamp(1.85rem, 11vw, 2.7rem);
  }

  .property-visual {
    block-size: 9rem;
  }

  .logo-row {
    gap: 0.75rem;
    font-size: 0.82rem;
  }

  .mobile-bottom-sheet {
    grid-area: sheet;
    position: sticky;
    inset-block-end: 0;
    display: grid;
    gap: 0.8rem;
    border-block-start: 1px solid var(--le-color-border);
    border-radius: var(--le-radius-md) var(--le-radius-md) 0 0;
    background: var(--le-color-panel);
    box-shadow: 0 -18px 45px rgb(15 23 42 / 0.12);
    padding: 0.9rem;
  }

  .mobile-sheet-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.35rem;
  }

  .mobile-sheet-tabs button {
    min-block-size: 2.75rem;
    border-radius: var(--le-radius-md);
    background: var(--le-color-panel-muted);
    color: var(--le-color-muted-strong);
    font-weight: 900;
  }

  .mobile-sheet-tabs button.is-active {
    background: var(--le-color-blue-soft);
    color: var(--le-color-blue-strong);
  }

  .mobile-sheet-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    color: var(--le-color-muted-strong);
    font-size: 0.82rem;
  }
}
`.trim();
