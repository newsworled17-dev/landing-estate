/**
 * apps/app-worker — Phase 1 placeholder entrypoint
 *
 * Scope: Arabic RTL dashboard shell + API health endpoint.
 * No authentication, database, builder, publishing, or tracking in Phase 1.
 */
import { Hono } from "hono";
import { shellHtml } from "./shell.js";
import { appShellCss } from "./styles.js";

type Env = {
  ASSETS: Fetcher;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/api/health", (c) => {
  return c.json({
    runtime: "app-worker",
    status: "healthy",
    scope: "foundation",
  });
});

app.get("/assets/app-shell.css", (c) => {
  return c.text(appShellCss, 200, {
    "Content-Type": "text/css; charset=utf-8",
  });
});

app.get("/*", (c) => {
  if (c.req.path.startsWith("/api/")) {
    return c.json(
      {
        error: "not_found",
        runtime: "app-worker",
        scope: "foundation",
      },
      404
    );
  }

  return c.html(shellHtml);
});

export default app;
