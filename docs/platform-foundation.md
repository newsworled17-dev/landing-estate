# Platform Foundation — Phase 1

This document describes the Phase 1 workspace structure, ownership boundaries,
and excluded product workflows for Landing EState.

## Workspace Layout

```text
apps/
  app-worker/       — Dashboard shell, static assets, authenticated API placeholder
  render-worker/    — Public rendering shell, health endpoint only

packages/
  auth/             — Reserved: Phase 2 – Better Auth magic-link (app-worker only)
  block-sdk/        — Reserved: Phase 4 – Block/section contracts
  blocks/           — Reserved: Phase 4 – Internal V1 block packages
  db/               — Reserved: Phase 3 – Drizzle ORM / D1 schema
  schema/           — Reserved: Phase 3 – Shared Zod contracts
  tracking/         — Reserved: Phase 6 – Tracking events and consent
  ui/               — App Worker UI only; forbidden from render-worker
  shared/           — Public-safe utilities for both workers

docs/
  blueprint.md      — Product source of truth
  platform-foundation.md — This file
```

## Worker Shell Routes (Phase 1)

### `apps/app-worker`

| Route | Response |
|-------|----------|
| `GET /` | Arabic RTL dashboard shell HTML |
| `GET /api/health` | `{ runtime, status, scope }` JSON |

### `apps/render-worker`

| Route | Response |
|-------|----------|
| `GET /` | Public render health HTML |
| `GET /health` | `{ runtime, status, scope }` JSON |

## Import Boundary Rules

- `apps/render-worker` MUST NOT import from `apps/app-worker`
- `apps/render-worker` MUST NOT import from `packages/ui`
- `packages/shared` MAY be imported by both workers
- Enforced by: `scripts/check-boundaries.mjs`

## Excluded Product Workflows (Phase 1)

The following are explicitly NOT implemented in this phase:

- Authentication or session management
- Database schema or Drizzle migrations
- Builder UI or smart section editing
- Template selection or draft page creation
- Publishing or immutable snapshots
- Custom domain routing
- Lead capture or storage
- Tracking scripts or consent layer
- Billing, AI, collaboration, marketplaces

These are deferred to their respective phases as defined in
`docs/speckit-roadmap.md`.
