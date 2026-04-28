/**
 * Arabic RTL Estate Studio Light shell for Phase 1.1.
 * No authentication, database, builder logic, publishing, tracking, or leads.
 */

type IconName =
  | "activity"
  | "align"
  | "building"
  | "check"
  | "chevron"
  | "desktop"
  | "fileText"
  | "grid"
  | "image"
  | "layers"
  | "layout"
  | "link"
  | "menu"
  | "more"
  | "paint"
  | "phone"
  | "play"
  | "plus"
  | "redo"
  | "search"
  | "settings"
  | "share"
  | "sliders"
  | "tablet"
  | "trash"
  | "undo";

const iconPaths: Record<IconName, string> = {
  activity:
    '<path d="M22 12h-4l-3 8-6-16-3 8H2"/><path d="M18 12h4"/>',
  align:
    '<path d="M17 10H3"/><path d="M21 6H3"/><path d="M21 14H3"/><path d="M17 18H3"/>',
  building:
    '<path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16"/><path d="M9 21v-5h3v5"/><path d="M8 7h1"/><path d="M12 7h1"/><path d="M8 11h1"/><path d="M12 11h1"/><path d="M17 9h1a2 2 0 0 1 2 2v10"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  desktop:
    '<rect width="18" height="12" x="3" y="4" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/>',
  fileText:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/>',
  grid:
    '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  image:
    '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  layers:
    '<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  layout:
    '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  link:
    '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  paint:
    '<path d="M12 22a1 1 0 0 1-1-1v-3H7a4 4 0 0 1-4-4V7a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2a4 4 0 0 1-4 4h-1a2 2 0 0 0-2 2v6a1 1 0 0 1-1 1Z"/><circle cx="7.5" cy="7.5" r=".5"/><circle cx="12" cy="6.5" r=".5"/><circle cx="16.5" cy="7.5" r=".5"/>',
  phone:
    '<rect width="10" height="18" x="7" y="3" rx="2"/><path d="M11 18h2"/>',
  play: '<path d="m8 5 11 7-11 7Z"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9a5 5 0 0 0 0 10h1"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  settings:
    '<path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 1 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.7V21a2.1 2.1 0 1 1-4.2 0v-.2a1.8 1.8 0 0 0-1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 1 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1H2a2.1 2.1 0 1 1 0-4.2h.2a1.8 1.8 0 0 0 1.7-1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 1 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.7V2a2.1 2.1 0 1 1 4.2 0v.2a1.8 1.8 0 0 0 1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 1 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1h.2a2.1 2.1 0 1 1 0 4.2h-.2a1.8 1.8 0 0 0-1.7 1z"/>',
  share:
    '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/>',
  sliders:
    '<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/>',
  tablet:
    '<rect width="14" height="18" x="5" y="3" rx="2"/><path d="M12 18h.01"/>',
  trash:
    '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/>',
  undo: '<path d="m9 14-5-5 5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-1"/>',
};

function icon(name: IconName): string {
  return `<svg class="le-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`;
}

const railItems = [
  { label: "المكتبة", icon: "layout", active: true },
  { label: "الأقسام", icon: "layers", active: false },
  { label: "الوسائط", icon: "image", active: false },
  { label: "الإعدادات", icon: "settings", active: false },
] satisfies Array<{ label: string; icon: IconName; active: boolean }>;

const sectionGroups = [
  {
    title: "الهيكل",
    note: "أقسام ذكية",
    cards: [
      { title: "شريط علوي", icon: "layout", selected: false },
      { title: "الشعار الرئيسي", icon: "building", selected: true },
    ],
  },
  {
    title: "المحتوى",
    note: "عقاري",
    cards: [
      { title: "تفاصيل المشروع", icon: "fileText", selected: false },
      { title: "معرض الصور", icon: "image", selected: false },
      { title: "مميزات الوحدات", icon: "grid", selected: false },
      { title: "منطقة التواصل", icon: "link", selected: false },
    ],
  },
] satisfies Array<{
  title: string;
  note: string;
  cards: Array<{ title: string; icon: IconName; selected: boolean }>;
}>;

const railHtml = railItems
  .map(
    (item) => `<button class="rail-button le-focusable${item.active ? " is-active" : ""}" type="button" disabled aria-label="${item.label}">
      ${icon(item.icon)}
    </button>`
  )
  .join("");

const sectionGroupsHtml = sectionGroups
  .map(
    (group) => `<section class="section-group" aria-label="${group.title}">
      <div class="group-heading">
        <strong>${group.title}</strong>
        <span>${group.note}</span>
      </div>
      <div class="section-grid">
        ${group.cards
          .map(
            (card) => `<article class="section-card${card.selected ? " is-selected" : ""}">
              <div class="section-thumb">${icon(card.icon)}</div>
              <strong>${card.title}</strong>
            </article>`
          )
          .join("")}
      </div>
    </section>`
  )
  .join("");

export const shellHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing EState - Estate Studio</title>
    <link rel="stylesheet" href="/assets/app-shell.css" />
  </head>
  <body>
    <div class="studio-shell">
      <header class="mobile-header" data-testid="mobile-header">
        <span class="brand-mark" aria-hidden="true">LE</span>
        <div class="mobile-brand">
          <strong>استوديو Landing EState</strong>
          <span>معاينة عربية RTL للأقسام الذكية</span>
        </div>
        <button class="icon-button mobile-action le-focusable" type="button" disabled aria-label="إعدادات مستقبلية">
          ${icon("settings")}
        </button>
      </header>

      <aside class="studio-rail" data-testid="studio-rail" aria-label="أدوات الاستوديو">
        <span class="brand-mark" aria-hidden="true">LE</span>
        <div class="rail-separator" aria-hidden="true"></div>
        ${railHtml}
        <div class="rail-spacer" aria-hidden="true"></div>
        <button class="rail-button le-focusable" type="button" disabled aria-label="المساعدة">
          ${icon("activity")}
        </button>
      </aside>

      <header class="studio-command" data-testid="studio-command">
        <div class="project-title">
          <strong>مشروع الساحل - صفحة هبوط</strong>
          <span>landingestate.local/sahel-residence</span>
        </div>

        <span class="save-pill">${icon("check")} تم الحفظ منذ ٥ ثوان</span>

        <div class="command-actions" aria-label="أدوات العرض">
          <div class="device-switcher" aria-label="أجهزة المعاينة">
            <button class="device-button is-active le-focusable" type="button" disabled aria-label="سطح المكتب">${icon("desktop")}</button>
            <button class="device-button le-focusable" type="button" disabled aria-label="تابلت">${icon("tablet")}</button>
            <button class="device-button le-focusable" type="button" disabled aria-label="هاتف">${icon("phone")}</button>
          </div>
          <span class="zoom-indicator">1440 PX / 60%</span>
          <button class="icon-button le-focusable" type="button" disabled aria-label="تراجع">${icon("undo")}</button>
          <button class="icon-button le-focusable" type="button" disabled aria-label="إعادة">${icon("redo")}</button>
          <button class="ghost-command le-focusable" type="button" disabled>${icon("play")} معاينة</button>
          <button class="primary-command le-focusable" type="button" disabled>${icon("share")} نشر لاحقا</button>
        </div>
      </header>

      <aside class="section-library" data-testid="section-library" aria-label="مكتبة الأقسام الذكية">
        <div class="panel-tabs" aria-label="نوع المكتبة">
          <button class="panel-tab is-active le-focusable" type="button" disabled>الأقسام</button>
          <button class="panel-tab le-focusable" type="button" disabled>العناصر</button>
        </div>

        <div class="search-box" aria-label="بحث غير مفعل">
          ${icon("search")}
          <span>ابحث عن قسم عقاري...</span>
        </div>

        <div class="section-groups">
          ${sectionGroupsHtml}
        </div>
      </aside>

      <main class="canvas-workspace" data-testid="canvas-workspace" id="main-content">
        <div class="ruler-x" aria-hidden="true">
          <span>-400</span><span>-200</span><span>0</span><span>200</span><span>400</span>
        </div>
        <div class="ruler-y" aria-hidden="true">-400 -200 0 200 400</div>

        <div class="preview-frame" data-testid="preview-frame">
          <article class="preview-page" aria-label="معاينة صفحة عقارية عربية">
            <nav class="preview-nav" aria-label="تنقل صفحة المعاينة">
              <span class="preview-brand"><span class="preview-brand-dot" aria-hidden="true"></span> مساكن الساحل</span>
              <div class="preview-links" aria-hidden="true">
                <span>المشروع</span>
                <span>الوحدات</span>
                <span>الموقع</span>
                <span>التواصل</span>
              </div>
            </nav>

            <section class="hero-preview selected-section" data-testid="selected-section" aria-label="القسم المحدد: الشعار الرئيسي">
              <div class="hero-copy">
                <span class="hero-kicker">إطلاق محدود في الساحل</span>
                <h1>صفحة عقارية جاهزة لحملة بيع واضحة</h1>
                <p>اعرض المشروع، أبرز المميزات، ثم وجّه العميل المحتمل إلى إجراء واحد مفهوم بدون ازدحام أو أدوات مطورين.</p>
                <div class="preview-actions">
                  <span class="preview-cta">احجز استشارة</span>
                  <span class="preview-secondary">شاهد الوحدات</span>
                </div>
              </div>

              <aside class="property-card" aria-label="بطاقة مشروع">
                <div class="property-visual" aria-hidden="true"></div>
                <div class="property-meta">
                  <strong>وحدات تبدأ من ٩٥ م²</strong>
                  <span>مقدم مرن، قرب الخدمات، وتسليم مرحلي.</span>
                </div>
              </aside>

              <div class="floating-tools" aria-hidden="true">
                <button class="tool-button" type="button">${icon("plus")}</button>
                <button class="tool-button" type="button">${icon("grid")}</button>
                <button class="tool-button" type="button">${icon("settings")}</button>
                <button class="tool-button" type="button">${icon("trash")}</button>
              </div>
            </section>

            <section class="logo-strip" aria-label="دلائل ثقة">
              <span class="mini-label">موثوق من فرق تسويق عقاري</span>
              <div class="logo-row" aria-hidden="true">
                <span>North Coast</span>
                <span>New Cairo</span>
                <span>Compound CRM</span>
                <span>Broker Team</span>
              </div>
            </section>

            <section class="feature-preview" aria-label="فوائد المنصة">
              <h2>أقسام ذكية تحافظ على شكل الصفحة</h2>
              <p>هذا مجرد هيكل بصري للمرحلة الحالية. التحرير الحقيقي، البيانات، والنشر سيأتون في المراحل التالية بعد المصادقة والعقود.</p>
            </section>
          </article>
        </div>
      </main>

      <aside class="inspector-panel" data-testid="inspector-panel" aria-label="لوحة خصائص القسم">
        <div class="inspector-heading">
          <h2>الشعار الرئيسي</h2>
          <button class="icon-button le-focusable" type="button" disabled aria-label="المزيد">${icon("more")}</button>
        </div>

        <div class="tab-row" aria-label="تبويبات الخصائص">
          <button class="is-active le-focusable" type="button" disabled>التصميم</button>
          <button class="le-focusable" type="button" disabled>المحتوى</button>
          <button class="le-focusable" type="button" disabled>الإجراءات</button>
        </div>

        <div class="inspector-scroll">
          <section class="control-card" aria-label="المحاذاة">
            <h3>المحاذاة</h3>
            <div class="align-grid" aria-hidden="true">
              <button class="tool-button" type="button" disabled>${icon("align")}</button>
              <button class="tool-button is-active" type="button" disabled>${icon("desktop")}</button>
              <button class="tool-button" type="button" disabled>${icon("sliders")}</button>
              <button class="tool-button" type="button" disabled>${icon("layout")}</button>
            </div>
            <div class="field-grid">
              <span class="inline-control">X <strong>120</strong> ${icon("chevron")}</span>
              <span class="inline-control">Y <strong>200</strong> ${icon("chevron")}</span>
            </div>
          </section>

          <section class="control-card" aria-label="المسافات">
            <h3>المسافات</h3>
            <div class="spacing-map">
              <span class="padding-box">Padding 0</span>
            </div>
          </section>

          <section class="control-card" aria-label="الكتابة واللون">
            <h3>الكتابة واللون</h3>
            <span class="inline-control">IBM Plex Sans Arabic ${icon("chevron")}</span>
            <div class="field-grid">
              <span class="inline-control">Medium ${icon("chevron")}</span>
              <span class="inline-control">72 ${icon("chevron")}</span>
            </div>
            <span class="inline-control"><i class="color-swatch" aria-hidden="true"></i> #1683F8</span>
          </section>
        </div>
      </aside>

      <section class="mobile-bottom-sheet" data-testid="mobile-bottom-sheet" aria-label="لوحة تحرير مختصرة">
        <div class="mobile-sheet-tabs">
          <button class="is-active le-focusable" type="button" disabled>المحتوى</button>
          <button class="le-focusable" type="button" disabled>التصميم</button>
          <button class="le-focusable" type="button" disabled>الإجراءات</button>
        </div>
        <div class="mobile-sheet-summary">
          <strong>الشعار الرئيسي</strong>
          <span>تحرير فعلي في مرحلة البناء</span>
        </div>
      </section>
    </div>
  </body>
</html>`;
