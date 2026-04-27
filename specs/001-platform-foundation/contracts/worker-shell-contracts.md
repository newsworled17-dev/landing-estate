# Contracts: Worker Shells

These contracts define the minimal externally observable behavior for Phase 1.
They are intentionally small and must not imply authentication, product data,
publishing, tracking, leads, domains, or billing.

## App Worker Shell

### `GET /`

- **Audience**: Contributor opening the authenticated application shell during
  foundation validation.
- **Behavior**: Returns a minimal Arabic-first RTL dashboard placeholder.
- **Requirements**:
  - Document direction is `rtl`.
  - Primary language is Arabic.
  - Page is usable on desktop and mobile viewport widths.
  - Does not require authentication in Phase 1.
  - Does not read or write product data.
  - Does not execute tracking or marketing scripts.

### `GET /api/health`

- **Audience**: Automated Worker health checks.
- **Behavior**: Returns a simple healthy status for the app-worker runtime.
- **Example Response**:

```json
{
  "runtime": "app-worker",
  "status": "healthy",
  "scope": "foundation"
}
```

- **Requirements**:
  - Does not require authentication in Phase 1.
  - Does not expose secrets or environment internals.
  - Must be deterministic enough for automated tests.

## Render Worker Shell

### `GET /`

- **Audience**: Contributor opening the public render-worker shell during
  foundation validation.
- **Behavior**: Returns a minimal public rendering health page or response.
- **Requirements**:
  - Does not import app-worker modules.
  - Does not import `packages/ui`.
  - Does not require authentication.
  - Does not read drafts, snapshots, domains, leads, tracking settings, or
    consent settings.

### `GET /health`

- **Audience**: Automated public Worker health checks.
- **Behavior**: Returns a simple healthy status for the render-worker runtime.
- **Example Response**:

```json
{
  "runtime": "render-worker",
  "status": "healthy",
  "scope": "foundation"
}
```

- **Requirements**:
  - Public-safe and deterministic.
  - Does not depend on D1, R2, KV, Queues, Analytics Engine, Turnstile, or
    custom hostnames.
  - Must not set personalized or session-specific response behavior.

## Import Boundary Contract

- `apps/render-worker` may import from `packages/shared`.
- `apps/render-worker` must not import from `apps/app-worker`.
- `apps/render-worker` must not import from `packages/ui`.
- Phase 1 checks must fail if this boundary is violated.
