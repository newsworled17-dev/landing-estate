import {
  premiumCalmThemeCss,
  rtlLogicalUtilitiesCss,
} from "@landing-estate/ui";

export const appShellCss = `
${premiumCalmThemeCss}

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
    linear-gradient(90deg, rgb(22 35 29 / 0.035) 1px, transparent 1px),
    linear-gradient(180deg, rgb(22 35 29 / 0.035) 1px, transparent 1px),
    var(--le-color-canvas);
  background-size: 44px 44px, 44px 44px, auto;
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

button:disabled,
a[aria-disabled="true"] {
  cursor: not-allowed;
}

.app-shell {
  direction: ltr;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 18rem;
  grid-template-areas: "main sidebar";
  min-block-size: 100dvh;
}

.sidebar,
.main,
.mobile-header {
  direction: rtl;
  text-align: start;
}

.mobile-header {
  display: none;
}

.sidebar {
  grid-area: sidebar;
  position: sticky;
  inset-block-start: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-block-size: 100dvh;
  padding-block: 1.25rem;
  padding-inline: 1rem;
  background: var(--le-color-estate-deep);
  color: var(--le-color-white);
  border-inline-start: 1px solid rgb(255 255 255 / 0.12);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-block-size: 3rem;
  padding: 0.5rem;
  border-radius: var(--le-radius-md);
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2.5rem;
  block-size: 2.5rem;
  flex: 0 0 auto;
  border: 1px solid rgb(255 255 255 / 0.18);
  border-radius: var(--le-radius-md);
  background: linear-gradient(135deg, var(--le-color-gold), #d8b66f);
  color: var(--le-color-estate-deep);
  font-family: var(--le-font-brand);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
}

.brand-copy,
.mobile-brand {
  display: grid;
  gap: 0.1rem;
  min-inline-size: 0;
}

.brand-title {
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1.25;
}

.brand-subtitle {
  color: rgb(255 255 255 / 0.68);
  font-size: 0.76rem;
  line-height: 1.45;
}

.nav-list {
  display: grid;
  gap: 0.35rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-block-size: 2.75rem;
  padding-block: 0.65rem;
  padding-inline: 0.75rem;
  border: 1px solid transparent;
  border-radius: var(--le-radius-md);
  color: rgb(255 255 255 / 0.72);
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
}

.nav-item:hover,
.nav-item.is-active {
  background: rgb(255 255 255 / 0.09);
  border-color: rgb(255 255 255 / 0.13);
  color: var(--le-color-white);
}

.nav-item.is-active {
  box-shadow: inset -3px 0 0 var(--le-color-gold);
}

.le-icon {
  inline-size: 1.1rem;
  block-size: 1.1rem;
  flex: 0 0 auto;
}

.sidebar-note {
  display: grid;
  gap: 0.4rem;
  margin-block-start: auto;
  padding: 0.9rem;
  border: 1px solid rgb(255 255 255 / 0.14);
  border-radius: var(--le-radius-md);
  background: rgb(255 255 255 / 0.08);
  color: rgb(255 255 255 / 0.74);
  font-size: 0.82rem;
  line-height: 1.65;
}

.sidebar-note strong {
  color: var(--le-color-white);
  font-size: 0.95rem;
}

.note-kicker,
.eyebrow {
  color: var(--le-color-gold);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.main {
  grid-area: main;
  min-inline-size: 0;
  padding-block: clamp(1.5rem, 3vw, 3rem);
  padding-inline: clamp(1rem, 4vw, 3.5rem);
}

.hero-panel,
.workspace-panel,
.metric-tile {
  border: 1px solid rgb(22 35 29 / 0.10);
  border-radius: var(--le-radius-md);
  background: color-mix(in srgb, var(--le-color-surface), transparent 3%);
  box-shadow: var(--le-shadow-soft);
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.25rem;
  align-items: end;
  overflow: hidden;
  padding: clamp(1.25rem, 3vw, 2.25rem);
  position: relative;
}

.hero-panel::before {
  content: "";
  position: absolute;
  inset-block: 0;
  inset-inline-end: 0;
  inline-size: min(16rem, 38%);
  background:
    linear-gradient(135deg, rgb(184 137 57 / 0.18), transparent 62%),
    repeating-linear-gradient(135deg, rgb(23 69 53 / 0.08) 0 1px, transparent 1px 12px);
  pointer-events: none;
}

.hero-copy,
.hero-actions {
  position: relative;
  z-index: 1;
}

.hero-copy {
  display: grid;
  gap: 0.75rem;
  max-inline-size: 48rem;
}

.hero-copy h1,
.panel-header h2 {
  margin: 0;
  color: var(--le-color-ink);
  font-family: var(--le-font-brand);
  letter-spacing: 0;
}

.hero-copy h1 {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.08;
}

.hero-copy p {
  margin: 0;
  max-inline-size: 42rem;
  color: var(--le-color-ink-soft);
  font-size: clamp(1rem, 1.5vw, 1.14rem);
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-start;
}

.primary-action,
.secondary-action,
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-block-size: 2.75rem;
  border-radius: var(--le-radius-md);
  border: 1px solid transparent;
  padding-block: 0.7rem;
  padding-inline: 1rem;
  font-weight: 800;
}

.primary-action {
  background: var(--le-color-estate);
  color: var(--le-color-white);
  opacity: 0.72;
}

.secondary-action {
  border-color: rgb(23 69 53 / 0.18);
  background: var(--le-color-sage);
  color: var(--le-color-estate-deep);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-block-start: 1rem;
}

.metric-tile {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-inline-size: 0;
  padding: 1rem;
}

.metric-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2.55rem;
  block-size: 2.55rem;
  flex: 0 0 auto;
  border-radius: var(--le-radius-md);
  background: var(--le-color-gold-soft);
  color: var(--le-color-estate-deep);
}

.metric-content {
  display: grid;
  min-inline-size: 0;
  gap: 0.2rem;
}

.metric-label {
  color: var(--le-color-muted);
  font-size: 0.88rem;
  line-height: 1.5;
}

.metric-value {
  color: var(--le-color-ink);
  font-size: 1.75rem;
  line-height: 1;
}

.workspace-panel {
  margin-block-start: 1rem;
  padding: clamp(1rem, 2.4vw, 1.6rem);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-block-end: 1px solid rgb(22 35 29 / 0.10);
  padding-block-end: 1rem;
}

.panel-header h2 {
  margin-block-start: 0.25rem;
  font-size: clamp(1.3rem, 2vw, 1.8rem);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-block-size: 2.35rem;
  border-radius: var(--le-radius-md);
  background: var(--le-color-sage);
  color: var(--le-color-estate-deep);
  font-size: 0.84rem;
  font-weight: 800;
  padding-block: 0.55rem;
  padding-inline: 0.8rem;
  white-space: nowrap;
}

.foundation-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-block-start: 1rem;
}

.foundation-item {
  display: flex;
  gap: 0.75rem;
  min-inline-size: 0;
  padding: 0.85rem;
  border: 1px solid rgb(22 35 29 / 0.08);
  border-radius: var(--le-radius-md);
  background: rgb(255 255 255 / 0.46);
}

.foundation-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 1.85rem;
  block-size: 1.85rem;
  flex: 0 0 auto;
  border-radius: var(--le-radius-sm);
  background: var(--le-color-estate-deep);
  color: var(--le-color-gold-soft);
  font-weight: 900;
}

.foundation-item div {
  display: grid;
  gap: 0.2rem;
  min-inline-size: 0;
}

.foundation-item strong {
  color: var(--le-color-ink);
  line-height: 1.4;
}

.foundation-item span:last-child {
  color: var(--le-color-muted);
  font-size: 0.88rem;
  line-height: 1.7;
}

${rtlLogicalUtilitiesCss}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
    grid-template-areas:
      "mobile"
      "main";
  }

  .sidebar {
    display: none;
  }

  .mobile-header {
    grid-area: mobile;
    position: sticky;
    inset-block-start: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-block-size: 4.25rem;
    padding-block: 0.7rem;
    padding-inline: 1rem;
    border-block-end: 1px solid rgb(22 35 29 / 0.10);
    background: color-mix(in srgb, var(--le-color-surface), transparent 8%);
    backdrop-filter: blur(18px);
  }

  .mobile-header .brand-mark {
    border-color: rgb(22 35 29 / 0.08);
  }

  .mobile-header .brand-subtitle {
    color: var(--le-color-muted);
  }

  .mobile-action {
    inline-size: 2.75rem;
    padding: 0;
    margin-inline-start: auto;
    border-color: rgb(22 35 29 / 0.10);
    background: var(--le-color-surface-muted);
    color: var(--le-color-ink);
    opacity: 0.72;
  }

  .main {
    padding-block: 1rem 1.5rem;
    padding-inline: 1rem;
  }

  .hero-panel {
    grid-template-columns: 1fr;
  }

  .hero-panel::before {
    inline-size: 100%;
    opacity: 0.5;
  }

  .hero-actions {
    justify-content: stretch;
  }

  .primary-action,
  .secondary-action {
    flex: 1 1 12rem;
  }

  .metrics-grid,
  .foundation-list {
    grid-template-columns: 1fr;
  }

  .panel-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .status-pill {
    white-space: normal;
  }
}

@media (max-width: 420px) {
  .hero-copy h1 {
    font-size: 2rem;
  }

  .metric-tile,
  .foundation-item {
    align-items: flex-start;
  }
}
`.trim();
