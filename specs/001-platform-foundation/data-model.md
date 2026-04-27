# Data Model: Platform Foundation

Phase 1 does not create persistent product data. D1, R2, KV, Queues, Analytics
Engine, Turnstile, custom hostnames, draft documents, published snapshots,
leads, tracking settings, and consent settings are reserved for later phases.

## Conceptual Entities

### Workspace Boundary

- **Purpose**: Defines which directories belong to app runtime, public runtime,
  shared packages, and documentation.
- **Fields**:
  - `path`: project-relative directory path.
  - `owner`: app-worker, render-worker, package, or docs.
  - `allowedConsumers`: which apps/packages may import from this boundary.
  - `phaseIntroduced`: Phase 1.
- **Validation Rules**:
  - App UI components belong in `packages/ui` or `apps/app-worker`.
  - `apps/render-worker` cannot import `apps/app-worker` or `packages/ui`.
  - Public-safe utilities belong in `packages/shared`.

### Worker Shell

- **Purpose**: Represents a minimal runtime surface used to verify each Worker
  can run independently.
- **Fields**:
  - `name`: app-worker or render-worker.
  - `surface`: Arabic RTL dashboard shell or public renderer health page.
  - `requiresSession`: always false in Phase 1.
  - `usesProductData`: always false in Phase 1.
- **Validation Rules**:
  - Shells must not require authentication.
  - Shells must not depend on database records.
  - Render shell must not import app UI.

### Health Check Contract

- **Purpose**: Provides a stable, minimal check for runtime availability.
- **Fields**:
  - `runtime`: app-worker or render-worker.
  - `status`: healthy.
  - `scope`: foundation-only.
  - `timestampPolicy`: optional or omitted; tests must not depend on unstable
    timestamps.
- **Validation Rules**:
  - Response must be deterministic enough for automated tests.
  - Response must not expose secrets, user data, workspace data, or environment
    internals.

### Project Command

- **Purpose**: Documents a contributor-facing command used to validate the
  foundation.
- **Fields**:
  - `name`: command name.
  - `purpose`: install, dev, typecheck, lint, test, Worker test, browser test,
    build, or aggregate check.
  - `expectedOutcome`: pass, actionable failure, or local URL.
- **Validation Rules**:
  - Every command must be documented in `quickstart.md`.
  - Aggregate checks must include strict project health validation.

## State Transitions

No persisted state transitions exist in Phase 1.

## Future Data Ownership

- `packages/db` is reserved for Phase 3 D1 schema and Drizzle migrations.
- `packages/schema` is reserved for Phase 3 Zod contracts.
- `packages/auth` is reserved for Phase 2 authentication and workspace access.
- `packages/tracking` is reserved for Phase 6 tracking and consent contracts.
