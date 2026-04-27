/**
 * apps/render-worker — Phase 1 placeholder entrypoint
 *
 * Scope: public rendering health check only.
 * Must NOT import apps/app-worker or packages/ui.
 * No authentication, D1, R2, KV, Queues, or product data in Phase 1.
 */
import { Hono } from "hono";

const app = new Hono();

app.get("/health", (c) => {
  return c.json({
    runtime: "render-worker",
    status: "healthy",
    scope: "foundation",
  });
});

app.get("/", (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing EState — Render Worker</title>
    <style>
      body { font-family: system-ui, sans-serif; display: flex; align-items: center;
             justify-content: center; min-height: 100dvh; background: #f0fdf4; direction: rtl; }
      .card { background: white; border-radius: 12px; padding: 40px 48px; text-align: center;
              box-shadow: 0 1px 6px rgba(0,0,0,0.08); max-width: 420px; width: 90%; }
      h1 { color: #1a5c3a; margin-bottom: 8px; font-size: 22px; }
      p { color: #6b7280; font-size: 14px; }
      .badge { display: inline-block; background: #dcfce7; color: #166534;
               border-radius: 20px; padding: 4px 14px; font-size: 12px;
               font-weight: 600; margin-top: 16px; }
    </style>
  </head>
  <body>
    <div class="card" role="main">
      <h1>🌐 Render Worker</h1>
      <p>خادم الصفحات العامة — المرحلة الأولى</p>
      <div class="badge">✓ يعمل بشكل صحيح</div>
    </div>
  </body>
</html>`);
});

export default app;
