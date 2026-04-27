# Research: Platform Foundation

## Decision: Use Node.js 24 LTS, Not Current Node 25

**Rationale**: The blueprint requires Node.js 24 LTS. The release index shows
Node.js 24.15.0 as the current v24 LTS line with codename Krypton, while the
latest current line is v25 and not LTS. Phase 1 should prefer the active LTS
line for stability.

**Alternatives considered**: Node.js 25 current was rejected because the
blueprint and constitution favor stable LTS tooling for the foundation.

## Decision: Pin Baseline Package Versions From Registry Recheck

**Rationale**: `npm view` confirmed the requested baseline package versions are
current and available for planning on 2026-04-28:

- `pnpm@10.33.2`
- `typescript@6.0.3`
- `vite@8.0.10`
- `react@19.2.5`
- `hono@4.12.15`
- `tailwindcss@4.2.4`
- `zod@4.3.6`
- `wrangler@4.85.0`
- `@cloudflare/vite-plugin@1.33.2`
- `@cloudflare/workers-types@4.20260426.1`
- `drizzle-orm@0.45.2`
- `better-auth@1.6.9`
- `@tanstack/react-router@1.168.25`
- `@tanstack/react-query@5.100.5`
- `zustand@5.0.12`
- `@dnd-kit/core@6.3.1`
- `motion@12.38.0`
- `lucide-react@1.11.0`
- `vitest@4.1.5`
- `@playwright/test@1.59.1`

**Alternatives considered**: Floating latest ranges were rejected because the
constitution requires pinned, re-checked baseline versions during scaffolding.

## Decision: Use Cloudflare Workers With Vite Plugin For Both Apps

**Rationale**: The blueprint prohibits Cloudflare Pages and requires Workers.
Using the Cloudflare Vite plugin keeps local development/build behavior aligned
for the dashboard/static app shell and public render-worker shell.

**Alternatives considered**: Cloudflare Pages was rejected by constitution.
Separate non-Workers local servers were rejected because they would hide runtime
boundary issues until later phases.

## Decision: Keep Phase 1 Storage-Free

**Rationale**: The specification excludes database schema, authentication,
publishing, domains, tracking, leads, and complete builder workflows. Creating
D1/R2/KV/Queue resources now would add product assumptions before their specs.

**Alternatives considered**: Creating empty D1 migrations now was rejected
because Phase 3 owns the data and contracts foundation.

## Decision: Define Minimal Route Contracts Only

**Rationale**: Phase 1 needs verifiable runtime shells but not product APIs.
Minimal health and shell route contracts provide test targets without leaking
future auth, builder, publishing, or tracking decisions into the foundation.

**Alternatives considered**: Defining full API contracts was rejected because
later phases own auth, data contracts, actions, publishing, leads, and tracking.

## Decision: Include Import-Boundary Validation Early

**Rationale**: The render worker must not depend on app UI or authenticated
modules. A small lint rule or test in Phase 1 prevents boundary drift before
public rendering exists.

**Alternatives considered**: Relying only on code review was rejected because
the constitution treats renderer dependency safety as a standing gate.
