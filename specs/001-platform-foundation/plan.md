# Implementation Plan: Platform Foundation

**Branch**: `001-platform-foundation` | **Date**: 2026-04-28 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-platform-foundation/spec.md`

## Summary

Create the Phase 1 technical foundation for Landing EState: a strict
TypeScript `pnpm` monorepo with separate Cloudflare Workers app and render
runtime shells, clear package ownership boundaries, baseline commands, and a
test harness proving typecheck, Worker health, and Arabic RTL browser layout.
This phase creates broad scaffolding only and must not implement product data,
authentication, builder, publishing, tracking, leads, domains, or billing.

## Technical Context

**Language/Version**: Node.js 24.15.0 LTS (Krypton), TypeScript 6.0.3, `pnpm` 10.33.2  
**Primary Dependencies**: Vite 8.0.10, React 19.2.5, Hono 4.12.15, Tailwind CSS 4.2.4, Zod 4.3.6, Wrangler 4.85.0, `@cloudflare/vite-plugin` 1.33.2, `@cloudflare/workers-types` 4.20260426.1, Drizzle ORM 0.45.2, Better Auth 1.6.9, TanStack Router 1.168.25, TanStack Query 5.100.5, Zustand 5.0.12, dnd-kit core 6.3.1, Motion 12.38.0, Lucide React 1.11.0, Vitest 4.1.5, Playwright 1.59.1  
**Storage**: No persistent storage in Phase 1; D1, R2, KV, Queues, Analytics Engine, Turnstile, and custom hostnames are reserved for later phases  
**Testing**: Vitest unit tests, Worker integration health checks, Playwright RTL/screenshot validation, strict typecheck, lint, and build validation  
**Target Platform**: Cloudflare Workers for `apps/app-worker` and `apps/render-worker`; Cloudflare Pages is prohibited  
**Project Type**: TypeScript strict monorepo with Workers apps and shared packages  
**Performance Goals**: Local shell pages open in under 2 seconds on a prepared development machine; project health checks complete in under 15 minutes  
**Constraints**: Arabic-first RTL shell, no product workflows, strict app-worker/render-worker split, no app UI imports in render-worker, no Cloudflare Pages, no database schema, no authentication  
**Scale/Scope**: Phase 1 foundation only for the V1 template-to-publish roadmap; later phases add auth, contracts, blocks, builder, publishing, domains, tracking, and leads

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

1. **Arabic-first RTL journey**: PASS. Spec requires a minimal Arabic RTL app
   shell and Playwright/browser validation for desktop/mobile layout stability.
2. **Smart section model**: N/A. Builder and smart sections are explicitly out
   of scope; the phase does not introduce free-canvas behavior.
3. **Cloudflare Workers boundary**: PASS. Both runtime shells target
   Cloudflare Workers, and Cloudflare Pages is prohibited.
4. **Renderer dependency safety**: PASS. The render worker is limited to a
   public health page and must not import `packages/ui` or authenticated app
   modules.
5. **Validated contracts**: PASS. Phase 1 defines simple health/shell route
   contracts; product API, block, action, page document, tracking, and publish
   contracts are deferred.
6. **Draft/publish safety**: N/A. Draft documents, snapshots, publish, and
   rollback are out of scope.
7. **Data and migrations**: N/A. No D1 schema or migrations are created in
   Phase 1; package placeholders only reserve later ownership.
8. **Cache, consent, and tracking**: N/A. No personalized data, lead capture,
   analytics endpoints, consent, GTM, Pixel, or custom scripts are introduced.
9. **Test coverage**: PASS. Plan requires typecheck, lint/build validation,
   Vitest unit proof, Worker health checks, and Playwright RTL/screenshot
   validation.
10. **Scope discipline**: PASS. Billing, AI, collaboration, marketplaces,
    detailed builder behavior, authentication, database schema, publishing,
    domains, tracking, and leads remain excluded.

**Post-Design Recheck**: PASS. `research.md`, `data-model.md`, `contracts/`,
and `quickstart.md` preserve the same boundaries and add no unjustified
violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-platform-foundation/
  plan.md
  research.md
  data-model.md
  quickstart.md
  contracts/
    worker-shell-contracts.md
  checklists/
    requirements.md
```

### Source Code (repository root)

```text
apps/
  app-worker/
    src/
    tests/
    wrangler.jsonc
    vite.config.ts
  render-worker/
    src/
    tests/
    wrangler.jsonc
    vite.config.ts
packages/
  auth/
  block-sdk/
  blocks/
  db/
  schema/
  tracking/
  ui/
  shared/
docs/
  blueprint.md
  speckit-roadmap.md
```

**Structure Decision**: Phase 1 touches root workspace/tooling files, both app
shells, and all package directories only enough to establish ownership. It does
not implement real auth, database access, block behavior, builder workflows,
publishing, tracking, domains, or leads.

## Implementation Design

### Workspace And Tooling

- Use one root `package.json` with `packageManager: pnpm@10.33.2`, strict
  script orchestration, and private workspace metadata.
- Use `pnpm-workspace.yaml` with `apps/*` and `packages/*`.
- Use a shared strict TypeScript base config and per-app/per-package configs.
- Keep root commands decision-complete:
  - `pnpm dev:app`
  - `pnpm dev:render`
  - `pnpm typecheck`
  - `pnpm lint`
  - `pnpm test`
  - `pnpm test:workers`
  - `pnpm test:e2e`
  - `pnpm build`
  - `pnpm check`
- `pnpm check` must run typecheck, lint, tests, Worker health checks, browser
  checks, and build validation.

### Worker Shells

- `apps/app-worker` owns the minimal Arabic RTL dashboard shell, static app
  assets through Workers Static Assets, and an authenticated API placeholder
  namespace with health only.
- `apps/render-worker` owns a public render-worker health surface and must not
  import app UI or authenticated modules.
- Use Hono for Worker request handling in both apps.
- Use Vite with `@cloudflare/vite-plugin` for Worker development/build
  integration.
- App shell copy is placeholder Arabic content only, such as "لوحة Landing
  EState" and "جاهز لبناء صفحات عقارية سريعة".

### Package Ownership Boundaries

- `packages/auth`: reserved for Phase 2 authentication support; no real auth.
- `packages/block-sdk`: reserved for Phase 4 block contracts; no block logic.
- `packages/blocks`: reserved for Phase 4 internal blocks; no block packages.
- `packages/db`: reserved for Phase 3 Drizzle/D1 ownership; no D1 schema.
- `packages/schema`: reserved for Phase 3 shared Zod contracts; only may hold
  shell-safe shared primitives if needed.
- `packages/tracking`: reserved for Phase 6 tracking contracts; no tracking.
- `packages/ui`: app UI components only; forbidden from render-worker imports.
- `packages/shared`: public-safe utilities usable by both workers.

### Validation And Guardrails

- Add boundary documentation in package READMEs or package metadata so future
  phases know ownership.
- Add an import-boundary check through lint configuration or a small test that
  fails if `apps/render-worker` imports `apps/app-worker` or `packages/ui`.
- Keep all Phase 1 outputs free of product data, persistence, auth flows,
  templates, builder state, publishing, domains, leads, analytics, or billing.

## Complexity Tracking

No constitution violations require justification.
