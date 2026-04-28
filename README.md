# Landing EState

Arabic-first RTL SaaS landing page builder for real estate marketers.

## Prerequisites

- Node.js 24 LTS (v24.15.0+)
- pnpm 10.33.2 (via Corepack)

```powershell
corepack enable
corepack prepare pnpm@10.33.2 --activate
```

## Install

```powershell
pnpm install
```

## Development

```powershell
# Start app-worker shell (Arabic RTL Estate Studio)
pnpm dev:app

# Start render-worker shell (public rendering health)
pnpm dev:render
```

## Phase 1.1 Design System

The app shell now uses the Estate Studio Light RTL foundation:

- `packages/ui` exports app-worker-only design tokens and RTL utilities.
- `apps/app-worker` serves shell CSS from `/assets/app-shell.css`.
- `apps/render-worker` keeps an isolated public health page and does not
  import `packages/ui`.

## Project Health Commands

| Command | Description |
|---------|-------------|
| `pnpm typecheck` | TypeScript strict check across all workspaces |
| `pnpm lint` | Lint check across all workspaces |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm test:workers` | Worker integration tests (Vitest per app) |
| `pnpm test:e2e` | Browser tests (Playwright) — requires `dev:app` running |
| `pnpm build` | Build all workspaces |
| `pnpm check` | Full aggregate: typecheck + lint + test + e2e + build |
| `pnpm check:boundaries` | Import-boundary check for render-worker isolation |

## Workspace Structure

```text
apps/
  app-worker/       — Dashboard shell + API (app-worker runtime)
  render-worker/    — Public rendering shell (render-worker runtime)

packages/
  auth/             — Reserved: Phase 2 auth
  block-sdk/        — Reserved: Phase 4 block contracts
  blocks/           — Reserved: Phase 4 internal blocks
  db/               — Reserved: Phase 3 Drizzle/D1
  schema/           — Reserved: Phase 3 Zod contracts
  tracking/         — Reserved: Phase 6 tracking/consent
  ui/               — App UI (app-worker only)
  shared/           — Public-safe utilities (both workers)

docs/
  blueprint.md                — Product source of truth
  platform-foundation.md      — Phase 1 ownership and boundaries
  speckit-roadmap.md          — Phased implementation roadmap
```

## Import Boundaries

`apps/render-worker` must NOT import from `apps/app-worker` or `packages/ui`.
Run `pnpm check:boundaries` to verify.

## Phase 1 Scope

This repository currently contains the Phase 1 Platform Foundation only.
No authentication, database schema, builder, publishing, tracking, leads, or
billing are implemented. See `docs/speckit-roadmap.md` for the full roadmap.
