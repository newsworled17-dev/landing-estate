/**
 * @landing-estate/shared — public-safe utilities
 *
 * Safe to import from BOTH apps/app-worker and apps/render-worker.
 * Must NOT import browser-only or Worker-specific APIs.
 * Must NOT import packages/ui, packages/auth, or packages/db.
 */

/**
 * Returns a URL-safe slug from an Arabic or Latin title.
 * Phase 1 proof: used by workspace structure tests and both workers.
 */
export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\u0600-\u06FFa-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "");
}

/**
 * Checks that a runtime name matches an expected platform boundary.
 * Used by health endpoint contract validation.
 */
export type WorkerRuntime = "app-worker" | "render-worker";

export function isValidRuntime(value: unknown): value is WorkerRuntime {
  return value === "app-worker" || value === "render-worker";
}

/**
 * Package metadata — used by ownership tests to confirm public-safe export.
 */
export const SHARED_PACKAGE = {
  name: "@landing-estate/shared",
  scope: "public-safe",
} as const;
