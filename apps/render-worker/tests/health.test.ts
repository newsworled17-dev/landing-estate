import { describe, it, expect } from "vitest";
import app from "../src/index.js";

describe("Render Worker Health Contract", () => {
  it("GET /health returns healthy JSON with render-worker runtime", async () => {
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    const body = await res.json() as Record<string, unknown>;
    expect(body["runtime"]).toBe("render-worker");
    expect(body["status"]).toBe("healthy");
    expect(body["scope"]).toBe("foundation");
  });

  it("GET /health returns Content-Type application/json", async () => {
    const res = await app.request("/health");
    expect(res.headers.get("content-type")).toContain("application/json");
  });
});
