/**
 * Arabic RTL dashboard shell markup for Phase 1.1.
 * No authentication, database, builder, publishing, tracking, or leads.
 */

type IconName =
  | "activity"
  | "barChart"
  | "building"
  | "check"
  | "fileText"
  | "health"
  | "home"
  | "plus"
  | "settings"
  | "users";

const iconPaths: Record<IconName, string> = {
  activity:
    '<path d="M22 12h-4l-3 8-6-16-3 8H2"/><path d="M18 12h4"/>',
  barChart:
    '<path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>',
  building:
    '<path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16"/><path d="M9 21v-5h3v5"/><path d="M8 7h1"/><path d="M12 7h1"/><path d="M8 11h1"/><path d="M12 11h1"/><path d="M17 9h1a2 2 0 0 1 2 2v10"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  fileText:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/>',
  health:
    '<path d="M20 13c0 5-3.5 7.5-7.5 8.8a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.4a1.3 1.3 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12l2 2 4-5"/>',
  home:
    '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  settings:
    '<path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 1 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.7V21a2.1 2.1 0 1 1-4.2 0v-.2a1.8 1.8 0 0 0-1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 1 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1H2a2.1 2.1 0 1 1 0-4.2h.2a1.8 1.8 0 0 0 1.7-1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 1 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.7V2a2.1 2.1 0 1 1 4.2 0v.2a1.8 1.8 0 0 0 1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 1 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1h.2a2.1 2.1 0 1 1 0 4.2h-.2a1.8 1.8 0 0 0-1.7 1z"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
};

function icon(name: IconName): string {
  return `<svg class="le-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`;
}

const navItems = [
  { label: "الرئيسية", icon: "home", active: true },
  { label: "صفحاتي", icon: "fileText", active: false },
  { label: "الإحصائيات", icon: "barChart", active: false },
  { label: "الإعدادات", icon: "settings", active: false },
] satisfies Array<{ label: string; icon: IconName; active: boolean }>;

const metrics = [
  { label: "صفحات جاهزة للنشر", value: "٠", icon: "fileText" },
  { label: "مشاهدات هذا الشهر", value: "٠", icon: "barChart" },
  { label: "عملاء محتملون", value: "٠", icon: "users" },
] satisfies Array<{ label: string; value: string; icon: IconName }>;

const navHtml = navItems
  .map(
    (item) => `<a class="nav-item le-focusable${item.active ? " is-active" : ""}" href="/" ${
      item.active ? 'aria-current="page"' : 'aria-disabled="true"'
    }>
      ${icon(item.icon)}
      <span>${item.label}</span>
    </a>`
  )
  .join("");

const metricsHtml = metrics
  .map(
    (metric) => `<article class="metric-tile" aria-label="${metric.label}">
      <div class="metric-icon">${icon(metric.icon)}</div>
      <div class="metric-content">
        <span class="metric-label">${metric.label}</span>
        <strong class="metric-value">${metric.value}</strong>
      </div>
    </article>`
  )
  .join("");

export const shellHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing EState</title>
    <link rel="stylesheet" href="/assets/app-shell.css" />
  </head>
  <body>
    <div class="app-shell">
      <header class="mobile-header" data-testid="mobile-header">
        <div class="brand-mark" aria-hidden="true">LE</div>
        <div class="mobile-brand">
          <span class="brand-title">Landing EState</span>
          <span class="brand-subtitle">لوحة عقارية عربية</span>
        </div>
        <button class="icon-button mobile-action le-focusable" type="button" disabled aria-label="القائمة غير مفعلة في المرحلة الأولى">
          ${icon("settings")}
        </button>
      </header>

      <aside class="sidebar" data-testid="app-sidebar" role="navigation" aria-label="القائمة الرئيسية">
        <a class="brand le-focusable" href="/" aria-label="Landing EState">
          <span class="brand-mark" aria-hidden="true">LE</span>
          <span class="brand-copy">
            <span class="brand-title">Landing EState</span>
            <span class="brand-subtitle">لوحة التسويق العقاري</span>
          </span>
        </a>

        <nav class="nav-list" aria-label="تنقل لوحة التحكم">
          ${navHtml}
        </nav>

        <div class="sidebar-note" role="note">
          <span class="note-kicker">Phase 1.1</span>
          <strong>أساس تصميم RTL</strong>
          <span>الهوية جاهزة للمراحل القادمة بدون تفعيل سير عمل المنتج.</span>
        </div>
      </aside>

      <main class="main" id="main-content">
        <section class="hero-panel" aria-labelledby="dashboard-title">
          <div class="hero-copy">
            <span class="eyebrow">Premium Calm Foundation</span>
            <h1 id="dashboard-title">لوحة بناء الصفحات العقارية</h1>
            <p>
              مساحة هادئة ومنظمة لمسوق عقاري عربي يبدأ من قالب واضح، يراجع أقسامه بترتيب آمن،
              ثم ينشر صفحة سريعة عندما تكتمل مراحل المنتج.
            </p>
          </div>

          <div class="hero-actions" aria-label="إجراءات المرحلة الأولى">
            <button class="primary-action le-focusable" type="button" disabled title="قريباً في مرحلة القوالب">
              ${icon("plus")}
              <span>إنشاء صفحة</span>
            </button>
            <a class="secondary-action le-focusable" href="/api/health">
              ${icon("health")}
              <span>فحص النظام</span>
            </a>
          </div>
        </section>

        <section class="metrics-grid" aria-label="مؤشرات أولية">
          ${metricsHtml}
        </section>

        <section class="workspace-panel" aria-labelledby="workspace-title">
          <div class="panel-header">
            <div>
              <span class="eyebrow">Workspace Status</span>
              <h2 id="workspace-title">جاهز للتأسيس قبل المصادقة</h2>
            </div>
            <span class="status-pill">${icon("check")} يعمل على Cloudflare Workers</span>
          </div>

          <div class="foundation-list" role="list" aria-label="حدود المرحلة الحالية">
            <div class="foundation-item" role="listitem">
              <span class="foundation-index">١</span>
              <div>
                <strong>واجهة عربية RTL</strong>
                <span>تخطيط ثابت يبدأ من اليمين ويعمل على الهاتف بدون انزلاق أفقي.</span>
              </div>
            </div>
            <div class="foundation-item" role="listitem">
              <span class="foundation-index">٢</span>
              <div>
                <strong>هوية Premium Calm</strong>
                <span>ألوان عقارية هادئة وتوكنز قابلة لإعادة الاستخدام داخل التطبيق.</span>
              </div>
            </div>
            <div class="foundation-item" role="listitem">
              <span class="foundation-index">٣</span>
              <div>
                <strong>لا توجد بيانات منتج</strong>
                <span>لا مصادقة، لا قاعدة بيانات، لا نشر، ولا تتبع في هذه المرحلة.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </body>
</html>`;
