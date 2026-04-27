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
| `GET /assets/app-shell.css` | Premium Calm RTL shell stylesheet |
| `GET /api/health` | `{ runtime, status, scope }` JSON |
| `GET /api/*` | JSON 404 for unknown API routes |

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

## Phase 1.1 Design System Stabilization

The pre-Phase 2 stabilization pass introduces the Premium Calm visual
foundation for authenticated app surfaces:

- `packages/ui` owns app-worker-only design tokens, CSS variables, RTL
  utilities, focus styles, and radius policy.
- `apps/app-worker` may import `packages/ui` to render dashboard shell styling.
- `apps/render-worker` keeps a visually compatible but isolated public health
  page and must not import app UI tokens or components.
- Browser checks verify that the desktop sidebar is physically on the right,
  mobile tap targets remain stable, and the shell can be captured in a
  screenshot without layout breakage.

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
