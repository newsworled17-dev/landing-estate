# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement, user journey, and technical approach]

## Technical Context

<!--
  ACTION REQUIRED: Replace or refine every field for this feature.
  Defaults below come from docs/blueprint.md and the constitution.
-->

**Language/Version**: TypeScript strict on Node.js 24 LTS, pnpm 10.33.2, TypeScript 6.0.3 or re-checked stable equivalents  
**Primary Dependencies**: React 19.2.5, Vite 8.0.10, Hono 4.12.15, Tailwind CSS 4.2.4, Zod 4.3.6, Wrangler 4.85.0, `@cloudflare/vite-plugin` 1.33.2, `@cloudflare/workers-types` 4.20260426.1, Drizzle ORM 0.45.2, Better Auth 1.6.9, TanStack Router, TanStack Query, Zustand, dnd-kit, Motion, Lucide React  
**Storage**: Cloudflare D1 for relational data, R2 for assets, KV for hostname/page lookup backed by D1, Queues for background jobs and webhook retries, Analytics Engine for public analytics  
**Testing**: Vitest, Worker integration tests, and Playwright E2E/screenshot checks  
**Target Platform**: Cloudflare Workers for app and renderer runtime; Cloudflare Pages is prohibited  
**Project Type**: TypeScript monorepo with `apps/app-worker`, `apps/render-worker`, and shared `packages/*`  
**Performance Goals**: Fast public landing-page rendering with safe Cache API usage, responsive R2 image delivery, and no caching of personalized, analytics, or lead-capture responses  
**Constraints**: Arabic-first RTL UX, mobile-friendly builder, strict app-worker/render-worker boundary, draft/published data separation, Zod validation at boundaries, Drizzle migrations for D1 changes, consent before optional scripts  
**Scale/Scope**: V1 template-to-publish SaaS builder for Arabic real estate marketers; billing, AI, real-time collaboration, external block marketplaces, and detailed block/template design systems remain out of scope unless explicitly amended

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Answer every gate with PASS, FAIL, or N/A plus evidence. Any FAIL blocks
implementation unless the violation is documented in Complexity Tracking.

1. **Arabic-first RTL journey**: Does the feature define Arabic marketer-facing
   behavior, RTL layout impact, accessibility expectations, and mobile behavior
   for affected surfaces?
2. **Smart section model**: Does the feature preserve the smart-section builder
   model, safe customization presets, contextual controls, and preview-first
   mobile editing instead of introducing free-canvas behavior?
3. **Cloudflare Workers boundary**: Does the design target Workers and related
   Cloudflare services only, keep Cloudflare Pages out of scope, and preserve
   the `app-worker` versus `render-worker` ownership split?
4. **Renderer dependency safety**: Does public rendering depend only on block
   SDK, schemas, shared utilities, tracking, and public-safe renderers, with no
   imports from app UI or authenticated dashboard modules?
5. **Validated contracts**: Are API payloads, block data, actions, page
   documents, tracking payloads, and publish inputs validated with Zod or an
   equivalent existing schema boundary?
6. **Draft/publish safety**: If publishing or page rendering is touched, does
   the design keep mutable drafts separate from immutable published snapshots,
   support rollback, and prevent failed publishes from affecting active pages?
7. **Data and migrations**: Are D1 schema changes represented with Drizzle
   migrations, and are R2, KV, Queues, Analytics Engine, Turnstile, and custom
   hostname responsibilities clearly assigned when used?
8. **Cache, consent, and tracking**: Does the design prevent caching of
   personalized, analytics, and lead-capture responses, and gate optional
   analytics or marketing scripts behind consent?
9. **Test coverage**: Does the plan include required unit, Worker integration,
   E2E, public-rendering, screenshot, and security checks for the affected
   behavior?
10. **Scope discipline**: Does the plan avoid V1 exclusions such as billing,
    AI, real-time collaboration, external marketplaces, and detailed design
    systems unless an amendment or explicit feature scope authorizes them?

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
  plan.md              # This file (/speckit.plan command output)
  research.md          # Phase 0 output (/speckit.plan command)
  data-model.md        # Phase 1 output (/speckit.plan command)
  quickstart.md        # Phase 1 output (/speckit.plan command)
  contracts/           # Phase 1 output (/speckit.plan command)
  tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
apps/
  app-worker/          # Dashboard, builder, authenticated API, static app assets
  render-worker/       # Published rendering, domains, leads, public tracking, cache, public assets
packages/
  auth/                # Authentication and workspace access support
  block-sdk/           # Stable block/section contract
  blocks/              # Internal V1 block packages only
  db/                  # Drizzle schema, migrations, D1 access
  schema/              # Shared Zod schemas and page/action contracts
  tracking/            # Tracking payload contracts and consent-aware helpers
  ui/                  # App UI components only; never import into render-worker
  shared/              # Public-safe shared utilities
docs/
  blueprint.md
```

**Structure Decision**: [Document which app/package paths this feature touches and why the boundary is valid]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., temporary renderer dependency on shared package] | [current need] | [why a safer package boundary is not enough] |
