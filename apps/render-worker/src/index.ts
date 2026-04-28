/**
 * apps/render-worker - Phase 1.1 public health surface.
 *
 * Scope: public rendering health check only.
 * Must NOT import apps/app-worker or packages/ui.
 * No authentication, D1, R2, KV, Queues, or product data in Phase 1.
 */
import { Hono } from "hono";

const app = new Hono();

const renderHealthHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing EState - Render Worker</title>
    <style>
      :root {
        --app: #eef2f7;
        --panel: #ffffff;
        --canvas: #f8fafc;
        --grid: rgb(219 227 238 / 0.72);
        --dot: rgb(201 212 226 / 0.7);
        --ink: #111827;
        --muted: #6b7280;
        --blue: #1e88ff;
        --blue-strong: #0f6fe8;
        --blue-soft: #e8f2ff;
        --success: #1dbf73;
        --success-soft: #eafaf2;
        --border: #dce3ed;
        --radius: 8px;
        color-scheme: light;
        font-family: "IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        min-block-size: 100dvh;
        display: grid;
        place-items: center;
        padding: 1rem;
        background:
          radial-gradient(circle at 1px 1px, var(--dot) 1px, transparent 0),
          linear-gradient(90deg, var(--grid) 1px, transparent 1px),
          linear-gradient(180deg, var(--grid) 1px, transparent 1px),
          var(--app);
        background-size: 16px 16px, 32px 32px, 32px 32px, auto;
        color: var(--ink);
        direction: rtl;
        text-align: start;
      }

      main {
        inline-size: min(100%, 38rem);
        overflow: hidden;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: var(--panel);
        box-shadow: 0 24px 80px rgb(15 23 42 / 0.14);
      }

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-block-size: 4rem;
        border-block-end: 1px solid var(--border);
        padding-inline: 1rem;
      }

      .mark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        inline-size: 2.5rem;
        block-size: 2.5rem;
        border-radius: var(--radius);
        background: linear-gradient(135deg, var(--blue), #5ea8ff);
        color: white;
        font-size: 0.8rem;
        font-weight: 900;
        box-shadow: 0 16px 34px rgb(30 136 255 / 0.25);
      }

      .status {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        min-block-size: 2rem;
        border: 1px solid rgb(29 191 115 / 0.42);
        border-radius: var(--radius);
        background: var(--success-soft);
        color: #107346;
        font-size: 0.76rem;
        font-weight: 800;
        padding-inline: 0.7rem;
      }

      .hero {
        display: grid;
        gap: 1rem;
        padding: clamp(1.35rem, 5vw, 2.4rem);
        background:
          linear-gradient(135deg, rgb(30 136 255 / 0.08), transparent 48%),
          var(--canvas);
      }

      h1 {
        margin: 0;
        max-inline-size: 28rem;
        font-size: clamp(1.8rem, 5vw, 3rem);
        line-height: 1.14;
        letter-spacing: 0;
      }

      p {
        margin: 0;
        max-inline-size: 31rem;
        color: var(--muted);
        line-height: 1.85;
      }

      .route-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
        margin-block-start: 0.25rem;
      }

      .route-pill {
        display: inline-flex;
        align-items: center;
        min-block-size: 2.25rem;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: var(--panel);
        color: var(--blue-strong);
        font-size: 0.82rem;
        font-weight: 900;
        padding-inline: 0.75rem;
      }

      svg {
        inline-size: 1rem;
        block-size: 1rem;
        flex: 0 0 auto;
      }
    </style>
  </head>
  <body>
    <main role="main" aria-label="حالة render-worker">
      <div class="topbar">
        <span class="mark" aria-hidden="true">LE</span>
        <span class="status">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="m5 12 4 4L19 6"></path>
          </svg>
          يعمل على Cloudflare Workers
        </span>
      </div>
      <section class="hero">
        <h1>سطح العرض العام جاهز</h1>
        <p>هذه صفحة فحص فقط للـ render-worker. الهوية قريبة من Estate Studio Light، لكنها مستقلة بالكامل ولا تستورد واجهة التطبيق أو حزمة UI.</p>
        <div class="route-row" aria-label="مسارات الفحص">
          <span class="route-pill">GET /</span>
          <span class="route-pill">GET /health</span>
        </div>
      </section>
    </main>
  </body>
</html>`;

app.get("/health", (c) => {
  return c.json({
    runtime: "render-worker",
    status: "healthy",
    scope: "foundation",
  });
});

app.get("/", (c) => {
  return c.html(renderHealthHtml);
});

export default app;
