/**
 * Arabic RTL dashboard shell HTML for Phase 1.
 * Minimal placeholder — no product workflows, no auth, no tracking.
 */
export const shellHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing EState</title>
    <style>
      /* Base reset */
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      :root {
        --color-bg: #f8f7f4;
        --color-surface: #ffffff;
        --color-primary: #1a5c3a;
        --color-primary-light: #e8f4ee;
        --color-text: #1a1a1a;
        --color-muted: #6b7280;
        --color-border: #e5e7eb;
        --radius: 12px;
        --shadow: 0 1px 3px rgba(0,0,0,0.08);
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      }

      body {
        background: var(--color-bg);
        color: var(--color-text);
        min-height: 100dvh;
        direction: rtl;
        text-align: right;
      }

      /* Sidebar layout */
      .layout {
        display: flex;
        flex-direction: row-reverse;
        min-height: 100dvh;
      }

      .sidebar {
        width: 240px;
        background: var(--color-surface);
        border-left: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        padding: 24px 16px;
        gap: 8px;
        flex-shrink: 0;
      }

      .sidebar-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        margin-bottom: 16px;
      }

      .logo-icon {
        width: 36px;
        height: 36px;
        background: var(--color-primary);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
        font-weight: bold;
        flex-shrink: 0;
      }

      .logo-text {
        font-size: 15px;
        font-weight: 700;
        color: var(--color-text);
        line-height: 1.2;
      }

      .logo-sub {
        font-size: 11px;
        color: var(--color-muted);
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 8px;
        color: var(--color-muted);
        font-size: 14px;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
        text-decoration: none;
      }

      .nav-item:hover { background: var(--color-bg); color: var(--color-text); }
      .nav-item.active { background: var(--color-primary-light); color: var(--color-primary); font-weight: 600; }

      .nav-icon { font-size: 16px; flex-shrink: 0; }

      /* Main content */
      .main {
        flex: 1;
        padding: 32px;
        overflow-y: auto;
      }

      .page-header {
        margin-bottom: 32px;
      }

      .page-title {
        font-size: 24px;
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: 6px;
      }

      .page-subtitle {
        font-size: 14px;
        color: var(--color-muted);
      }

      /* Cards */
      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin-bottom: 32px;
      }

      .card {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 24px;
        box-shadow: var(--shadow);
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
      }

      .card-icon {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: var(--color-primary-light);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        flex-shrink: 0;
      }

      .card-label {
        font-size: 13px;
        color: var(--color-muted);
      }

      .card-value {
        font-size: 28px;
        font-weight: 700;
        color: var(--color-text);
      }

      .empty-state {
        background: var(--color-surface);
        border: 2px dashed var(--color-border);
        border-radius: var(--radius);
        padding: 48px 32px;
        text-align: center;
        margin-top: 8px;
      }

      .empty-icon {
        font-size: 48px;
        margin-bottom: 16px;
      }

      .empty-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: 8px;
      }

      .empty-body {
        font-size: 14px;
        color: var(--color-muted);
        max-width: 360px;
        margin: 0 auto 24px;
        line-height: 1.6;
      }

      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--color-primary);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.15s;
      }

      .btn-primary:hover { opacity: 0.9; }

      /* Mobile */
      .mobile-header {
        display: none;
        background: var(--color-surface);
        border-bottom: 1px solid var(--color-border);
        padding: 14px 16px;
        align-items: center;
        gap: 12px;
        position: sticky;
        top: 0;
        z-index: 10;
      }

      .mobile-logo { font-size: 15px; font-weight: 700; }

      @media (max-width: 768px) {
        .layout { flex-direction: column; }
        .sidebar { display: none; }
        .mobile-header { display: flex; }
        .main { padding: 20px 16px; }
        .card-grid { grid-template-columns: 1fr; gap: 12px; }
        .page-title { font-size: 20px; }
      }

      /* Status badge */
      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: #fef3c7;
        color: #92400e;
        border-radius: 6px;
        padding: 4px 10px;
        font-size: 12px;
        font-weight: 600;
        margin-top: 12px;
      }

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #f59e0b;
      }
    </style>
  </head>
  <body>
    <!-- Mobile header -->
    <header class="mobile-header">
      <div class="logo-icon">ع</div>
      <span class="mobile-logo">Landing EState</span>
    </header>

    <div class="layout">
      <!-- Sidebar -->
      <aside class="sidebar" role="navigation" aria-label="القائمة الرئيسية">
        <div class="sidebar-logo">
          <div class="logo-icon">ع</div>
          <div>
            <div class="logo-text">Landing EState</div>
            <div class="logo-sub">لوحة التحكم</div>
          </div>
        </div>

        <a class="nav-item active" href="/" aria-current="page">
          <span class="nav-icon">🏠</span>
          الرئيسية
        </a>
        <a class="nav-item" href="#">
          <span class="nav-icon">📄</span>
          صفحاتي
        </a>
        <a class="nav-item" href="#">
          <span class="nav-icon">📊</span>
          الإحصائيات
        </a>
        <a class="nav-item" href="#">
          <span class="nav-icon">⚙️</span>
          الإعدادات
        </a>
      </aside>

      <!-- Main content -->
      <main class="main" id="main-content">
        <div class="page-header">
          <h1 class="page-title">لوحة Landing EState</h1>
          <p class="page-subtitle">جاهز لبناء صفحات عقارية سريعة</p>
          <div class="status-badge">
            <span class="status-dot"></span>
            المرحلة الأولى — الأساس التقني
          </div>
        </div>

        <!-- Stats cards -->
        <div class="card-grid">
          <div class="card">
            <div class="card-header">
              <div class="card-icon">📄</div>
              <div>
                <div class="card-label">إجمالي الصفحات</div>
                <div class="card-value">٠</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="card-icon">👁️</div>
              <div>
                <div class="card-label">المشاهدات هذا الشهر</div>
                <div class="card-value">٠</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="card-icon">📬</div>
              <div>
                <div class="card-label">العملاء المحتملون</div>
                <div class="card-value">٠</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div class="empty-state" role="region" aria-label="ابدأ الآن">
          <div class="empty-icon">🏗️</div>
          <h2 class="empty-title">ابدأ بإنشاء صفحتك العقارية الأولى</h2>
          <p class="empty-body">
            اختر قالباً جاهزاً مُصمَّماً خصيصاً للتسويق العقاري العربي،
            وخصِّص المحتوى، وانشر صفحتك في دقائق.
          </p>
          <button class="btn-primary" type="button" disabled title="قريباً في المرحلة القادمة">
            <span>+</span>
            إنشاء صفحة جديدة
          </button>
        </div>
      </main>
    </div>
  </body>
</html>`;
