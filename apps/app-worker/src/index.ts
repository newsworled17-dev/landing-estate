/**
 * apps/app-worker — Phase 1 placeholder entrypoint
 *
 * Scope: Arabic RTL dashboard shell + API health endpoint.
 * No authentication, database, builder, publishing, or tracking in Phase 1.
 */
import { Hono } from "hono";
import { shellHtml } from "./shell.js";

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

app.get("/*", (c) => {
  return c.html(shellHtml);
});

export default app;
