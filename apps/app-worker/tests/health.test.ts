import { describe, it, expect } from "vitest";
import app from "../src/index.js";

describe("App Worker Health Contract", () => {
  it("GET /api/health returns healthy JSON with app-worker runtime", async () => {
    const res = await app.request("/api/health");
    expect(res.status).toBe(200);
    const body = await res.json() as Record<string, unknown>;
    expect(body["runtime"]).toBe("app-worker");
    expect(body["status"]).toBe("healthy");
    expect(body["scope"]).toBe("foundation");
  });

  it("GET /api/health returns Content-Type application/json", async () => {
    const res = await app.request("/api/health");
    expect(res.headers.get("content-type")).toContain("application/json");
  });
});
