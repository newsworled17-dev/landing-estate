/**
 * apps/render-worker — Phase 1.1 public health surface.
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
    <title>Landing EState — Render Worker</title>
    <style>
      :root {
        --canvas: #f6f1e8;
        --surface: #fffdf8;
        --ink: #16231d;
        --muted: #69756e;
        --estate: #174535;
        --estate-deep: #0e2d24;
        --gold: #b88939;
        --sage: #d8e2d6;
        --border: #d9cdbc;
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
          linear-gradient(90deg, rgb(22 35 29 / 0.035) 1px, transparent 1px),
          linear-gradient(180deg, rgb(22 35 29 / 0.035) 1px, transparent 1px),
          var(--canvas);
        background-size: 44px 44px, 44px 44px, auto;
        color: var(--ink);
        direction: rtl;
        text-align: start;
      }

      main {
        inline-size: min(100%, 32rem);
        border: 1px solid rgb(22 35 29 / 0.10);
        border-radius: var(--radius);
        background: var(--surface);
        box-shadow: 0 24px 70px rgb(14 45 36 / 0.12);
        padding: clamp(1.25rem, 4vw, 2.25rem);
      }

      .mark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        inline-size: 2.75rem;
        block-size: 2.75rem;
        border-radius: var(--radius);
        background: linear-gradient(135deg, var(--gold), #d8b66f);
        color: var(--estate-deep);
        font-size: 0.8rem;
        font-weight: 900;
        margin-block-end: 1rem;
      }

      h1 {
        margin: 0;
        color: var(--estate-deep);
        font-size: clamp(1.6rem, 5vw, 2.4rem);
        line-height: 1.15;
        letter-spacing: 0;
      }

      p {
        margin-block: 0.75rem 0;
        color: var(--muted);
        line-height: 1.8;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        min-block-size: 2.35rem;
        margin-block-start: 1.25rem;
        border-radius: var(--radius);
        background: var(--sage);
        color: var(--estate-deep);
        font-size: 0.86rem;
        font-weight: 800;
        padding-block: 0.55rem;
        padding-inline: 0.85rem;
      }

      .badge svg {
        inline-size: 1rem;
        block-size: 1rem;
        flex: 0 0 auto;
      }
    </style>
  </head>
  <body>
    <main role="main" aria-label="حالة render-worker">
      <span class="mark" aria-hidden="true">LE</span>
      <h1>سطح العرض العام جاهز</h1>
      <p>هذه صفحة فحص فقط للـ render-worker. لا تعتمد على واجهة التطبيق، ولا تحتوي على بيانات منتج أو تتبع.</p>
      <div class="badge">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="m5 12 4 4L19 6"></path>
        </svg>
        يعمل على Cloudflare Workers
      </div>
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
