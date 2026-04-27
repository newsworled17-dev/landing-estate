# Landing EState Speckit Roadmap Prompts

This file turns `docs/blueprint.md` into an ordered Speckit roadmap. Use each
phase by copying the `/speckit.specify` prompt first, then run clarification if
the generated spec has open questions, then copy the `/speckit.plan` prompt.

The governing sources for every phase are:

- `docs/blueprint.md`
- `.specify/memory/constitution.md`
- The accepted spec and plan from earlier phases

Global exclusions for all phases:

- Do not use Cloudflare Pages.
- Do not add billing or plan enforcement.
- Do not add AI features.
- Do not add real-time collaboration.
- Do not add external block marketplaces.
- Do not introduce a free-canvas builder.
- Do not scaffold product code directly from the blueprint without the Speckit
  spec and plan flow.

Only Phase 1 may create broad project scaffolding. Every later phase must stay
feature-scoped and build on the contracts, paths, and decisions established by
earlier phases.

## Phase 1 - Platform Foundation

Goal: establish the TypeScript strict monorepo, Cloudflare Workers app shells,
shared package structure, baseline tooling, and test harness.

Expected outputs:

- `pnpm` workspace layout with `apps/app-worker`, `apps/render-worker`, and
  baseline `packages/*` directories.
- TypeScript strict configuration for apps and packages.
- Cloudflare Workers configuration for app and render workers.
- Vite, React, Hono, Tailwind CSS, Wrangler, Vitest, and Playwright baseline.
- Initial CI-style local commands for typecheck, test, build, and lint.
- No real product workflows beyond minimal health checks and shell screens.

In scope:

- Monorepo scaffolding.
- App worker shell for dashboard/static assets.
- Render worker shell for public rendering health check.
- Shared package placeholders with strict ownership comments.
- Baseline tests proving both workers and tooling run.

Out of scope:

- Authentication.
- Database schema.
- Builder workflows.
- Publishing.
- Domains.
- Leads.
- Tracking.
- Any user-facing complete product flow.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 1: Platform Foundation for Landing EState.

Landing EState is an Arabic-first RTL SaaS landing page builder for real estate marketers. This phase must establish the technical foundation only. Use docs/blueprint.md and .specify/memory/constitution.md as governing context.

The feature must define a TypeScript strict pnpm monorepo with apps/app-worker, apps/render-worker, and packages/auth, packages/block-sdk, packages/blocks, packages/db, packages/schema, packages/tracking, packages/ui, and packages/shared. The app-worker owns the dashboard shell, authenticated API shell, and static app assets through Cloudflare Workers Static Assets. The render-worker owns public rendering shell behavior. Both runtimes must target Cloudflare Workers.

Include baseline tooling for Node.js 24 LTS, pnpm 10.33.2, TypeScript 6.0.3, Vite 8.0.10, React 19.2.5, Hono 4.12.15, Tailwind CSS 4.2.4, Zod 4.3.6, Wrangler 4.85.0, @cloudflare/vite-plugin 1.33.2, @cloudflare/workers-types 4.20260426.1, Drizzle ORM 0.45.2, Better Auth 1.6.9, TanStack Router, TanStack Query, Zustand, dnd-kit, Motion, Lucide React, Vitest, and Playwright, with stable versions re-checked during planning.

User-facing scope is minimal: an Arabic RTL dashboard shell placeholder and a public render-worker health page. The specification must include independent testable stories for creating the workspace structure, running strict TypeScript checks, serving each Worker locally, and validating the baseline test harness.

Explicitly exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas builder behavior, authentication flows, database schema, publishing, domains, tracking, leads, and complete builder workflows.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 1: Platform Foundation.

Read docs/blueprint.md and .specify/memory/constitution.md before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence. This phase is the only phase allowed to create broad scaffolding.

The plan must specify the pnpm workspace layout, strict TypeScript setup, Cloudflare Workers app boundaries, package ownership boundaries, baseline dependency versions after re-checking stable releases, local development commands, and test strategy. The plan must preserve the app-worker versus render-worker split and must not use Cloudflare Pages.

Testing must include at minimum typecheck, unit test harness proof, Worker integration health checks for app-worker and render-worker, and Playwright or screenshot validation that the Arabic RTL shell renders without layout breakage. Mark non-applicable gates as N/A with reasons.

Do not plan authentication, real database implementation, builder features, publishing, domains, tracking, leads, billing, AI, collaboration, marketplaces, or free-canvas behavior in this phase.
```

## Phase 2 - Auth And Workspace Core

Goal: add email magic-link authentication, user/workspace membership foundations,
and the authenticated dashboard shell.

Expected outputs:

- Better Auth magic-link flow planned for Cloudflare Workers.
- D1-backed users, workspaces, and workspace memberships.
- Simple workspace-per-user behavior with room for teams/agencies later.
- Authenticated dashboard routes and session-safe API boundaries.
- RTL Arabic dashboard shell with beginner-friendly navigation.

In scope:

- Email magic-link auth.
- Users and workspace membership model.
- Authenticated app-worker API routes.
- Session handling and protected dashboard shell.
- Unit and Worker integration tests for auth/session/workspace access.

Out of scope:

- Billing and plan enforcement.
- Team management UI beyond the minimum membership model.
- Builder editing.
- Publishing.
- Leads and tracking.
- Public renderer changes beyond public-safe dependency checks.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 2: Auth And Workspace Core for Landing EState.

This phase depends on Phase 1 Platform Foundation being complete. Use docs/blueprint.md, .specify/memory/constitution.md, and the Phase 1 spec and plan as governing context.

The feature must define email magic-link authentication using Better Auth on Cloudflare Workers, backed by D1 data for users, workspaces, and workspace memberships. The account model must create or attach a simple workspace for each user now while leaving room for future teams and agencies. The authenticated dashboard shell must be Arabic-first, RTL, calm, low-clutter, beginner-friendly, and mobile-friendly.

The app-worker owns authenticated UI, session-safe APIs, static app assets, and dashboard routing. The render-worker must not import app UI or authenticated modules. All API inputs and outputs must be validated with Zod. D1 schema changes must use Drizzle migrations.

Specify independently testable journeys for requesting a magic link, completing sign-in, landing in the default workspace dashboard, rejecting unauthenticated access, and preserving RTL dashboard layout on mobile.

Explicitly exclude Cloudflare Pages, billing, plan enforcement, AI, real-time collaboration, external block marketplaces, builder editing, publishing, domains, tracking, leads, and free-canvas behavior.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 2: Auth And Workspace Core.

Read docs/blueprint.md, .specify/memory/constitution.md, and the Phase 1 outputs before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence.

The plan must define app-worker owned auth routes, Better Auth integration, D1 entities for users, workspaces, and workspace memberships, Drizzle migrations, Zod API contracts, session handling, protected dashboard routing, and the Arabic RTL dashboard shell. Keep the public renderer isolated from app UI and authenticated code.

Testing must include unit tests for schemas and access rules, Worker integration tests for magic-link/session/workspace routes, Playwright E2E for sign-in and protected dashboard access, and screenshot checks for Arabic RTL/mobile dashboard behavior. Include security checks for session cookies and cache safety.

Do not plan billing, plan enforcement, builder editing, publishing, domains, tracking, leads, AI, collaboration, marketplaces, Cloudflare Pages, or free-canvas behavior in this phase.
```

## Phase 3 - Data And Contracts Foundation

Goal: establish the core D1 data model areas, Drizzle migration discipline, Zod
contracts, and versioned page document baseline.

Expected outputs:

- D1 schema plan for product data areas from the blueprint.
- Drizzle migration conventions and test fixtures.
- Zod contracts for page documents, actions, tracking settings, consent
  settings, domains, assets, and integrations.
- Explicit draft versus published data separation.
- Page document versioning baseline before block and builder work expands.

In scope:

- D1 schema areas and relationships.
- Shared Zod schemas in `packages/schema`.
- DB access boundaries in `packages/db`.
- Versioned page document contract.
- Migration and schema tests.

Out of scope:

- Full UI for managing every entity.
- Public rendering implementation.
- Concrete block library.
- Lead capture implementation.
- Webhook delivery.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 3: Data And Contracts Foundation for Landing EState.

This phase depends on Phase 1 Platform Foundation and Phase 2 Auth And Workspace Core being complete. Use docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs as governing context.

The feature must define the D1 relational data model foundations for users, workspaces, workspace memberships, projects, pages, draft page documents, published immutable snapshots, domains and hostname mappings, assets, leads, integrations, webhook endpoints and delivery attempts, tracking settings, and consent settings. It must also define Drizzle migration discipline, package boundaries for packages/db and packages/schema, and Zod contracts for API, page document, action, tracking, consent, domain, asset, and integration boundaries.

Draft page documents and published immutable snapshots must be separate. The public renderer must read only published snapshots later, not mutable drafts. Page documents must be versioned so old pages can continue rendering after block updates. All boundaries must be validated with Zod.

Specify independently testable journeys for creating core data records through service-level contracts, validating page documents, rejecting invalid actions/tracking settings, and proving draft and published records cannot be confused.

Explicitly exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas builder behavior, complete builder UI, public rendering, lead capture implementation, webhook execution, and custom domain activation.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 3: Data And Contracts Foundation.

Read docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence.

The plan must define D1 schema areas, Drizzle migrations, package boundaries for packages/db and packages/schema, Zod schemas for API and document boundaries, versioned page document contracts, draft versus published separation, and service/module ownership. The plan must identify which contracts are consumed later by blocks, builder, publishing, tracking, domains, and leads.

Testing must include unit tests for schemas, migration tests or migration validation, action and tracking payload validation tests, draft/published separation tests, and Worker integration tests where D1 access is exposed through app-worker APIs. Mark public rendering and UI gates as N/A where they do not apply yet.

Do not plan product UI beyond minimal validation surfaces, public rendering, lead capture, webhook delivery, custom domain activation, billing, AI, collaboration, marketplaces, Cloudflare Pages, or free-canvas behavior in this phase.
```

## Phase 4 - Block SDK And Internal Blocks

Goal: create the stable block/section contract and the first internal V1 block
packages without coupling blocks to app internals.

Expected outputs:

- `packages/block-sdk` contract for block metadata, schemas, defaults,
  migrations, editor adapter, preview renderer, public renderer, and actions.
- `packages/blocks` internal block registration foundation.
- A small starter set of real-estate-friendly smart sections.
- Tests for block schemas, migrations, preview rendering, and public rendering.

In scope:

- Block SDK interfaces and registration.
- Internal V1 block packages only.
- Zod block schemas and migration tests.
- Editor adapter contracts, not full builder UI.
- Public-safe renderers usable by render-worker later.

Out of scope:

- External plugin marketplace.
- Free-canvas behavior.
- Full template selection and builder editing workflow.
- Publishing flow.
- Custom domains.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 4: Block SDK And Internal Blocks for Landing EState.

This phase depends on Phase 1 Platform Foundation, Phase 2 Auth And Workspace Core, and Phase 3 Data And Contracts Foundation being complete. Use docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs as governing context.

The feature must define a Gutenberg-like smart section model through packages/block-sdk and internal blocks in packages/blocks. Each block or section package must expose id, version, manifest metadata, Zod schema, default data, migrations, editor UI adapter contract, preview renderer, public renderer, and supported actions/events. Blocks must not reach into app internals. Adding a new block must usually require adding or registering a package, not changing core builder logic.

Include a starter internal set of real-estate-friendly smart sections sufficient for later template-to-draft builder work, such as hero/project summary, unit highlights, location/area, gallery, lead form CTA placeholder, and contact CTA placeholder. The specification must define contracts and behavior, not final detailed visual designs.

Specify independently testable journeys for registering blocks, validating default data, migrating old block data, rendering preview output, rendering public-safe output, and rejecting invalid action/event contracts.

Explicitly exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas builder behavior, full builder UI, publishing, custom domains, tracking script execution, and lead capture storage.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 4: Block SDK And Internal Blocks.

Read docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence.

The plan must define the block-sdk package contract, internal block registration, block Zod schemas, default data, migration strategy, editor adapter contract, preview renderer contract, public renderer contract, supported actions/events contract, and the public-safe dependency boundary. Blocks must not import app UI or authenticated modules.

Testing must include unit tests for block schemas, default data, migrations, registration, supported actions/events, preview rendering contracts, and public renderer contracts. Include dependency boundary checks or equivalent tests that prevent packages/blocks public renderers from importing app-worker or packages/ui internals.

Do not plan full builder screens, publishing, domains, lead storage, webhook delivery, billing, AI, collaboration, external marketplaces, Cloudflare Pages, or free-canvas behavior in this phase.
```

## Phase 5 - Template-To-Draft Builder MVP

Goal: create the core marketer journey from choosing a real estate template to
editing a draft with smart sections.

Expected outputs:

- Template selection for an initial real-estate template.
- Draft page document creation from a template.
- Smart section ordering and section selection.
- Desktop live preview plus contextual inspector.
- Mobile preview-first builder with contextual bottom sheets.
- RTL-first accessible controls and safe presets for content, colors,
  typography, variants, and ordering.

In scope:

- App-worker dashboard and builder UI.
- Draft page documents only.
- Smart section editing with block SDK contracts.
- Section ordering and drag/drop.
- Builder preview placeholders for scripts/actions.

Out of scope:

- Publishing immutable snapshots.
- Public render-worker serving real pages.
- Custom domains.
- Real lead capture.
- Executing custom scripts in the builder.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 5: Template-To-Draft Builder MVP for Landing EState.

This phase depends on Phase 1 Platform Foundation, Phase 2 Auth And Workspace Core, Phase 3 Data And Contracts Foundation, and Phase 4 Block SDK And Internal Blocks being complete. Use docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs as governing context.

The feature must define the Arabic real estate marketer journey for choosing an initial real estate landing page template, creating a draft page document, customizing smart sections, reordering sections, editing section content, and previewing changes. The builder model must be smart sections, not free canvas. Users may customize safe presets for colors, typography, section variants, ordering, and content.

Desktop layout must center on live preview with a contextual inspector for selected section, action, and page settings. Mobile layout must be preview-first with section selection from the preview and contextual bottom sheets. Controls must be RTL-friendly, accessible, stable on mobile, and low-clutter.

The app-worker owns the dashboard, builder UI, authenticated APIs, and draft editing. The public renderer must not be required for this phase. Custom scripts must not execute inside the authenticated builder; preview must show placeholders or simulated script state where relevant.

Specify independently testable journeys for choosing a template, creating a draft, editing a smart section, reordering sections, using desktop inspector controls, using mobile bottom-sheet editing, saving draft changes, and rejecting invalid draft page documents.

Explicitly exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas behavior, publishing, immutable snapshots activation, custom domains, public lead capture, webhook delivery, and real tracking script execution.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 5: Template-To-Draft Builder MVP.

Read docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence.

The plan must define template-to-draft creation, draft document APIs, builder state flow, smart section editing, block SDK usage, section ordering, desktop live preview and contextual inspector, mobile preview-first bottom sheets, safe customization presets, RTL/accessibility requirements, and validation through existing Zod page document contracts.

Testing must include unit tests for draft document validation and builder services, Worker integration tests for draft APIs, Playwright E2E for template creation, section editing, section ordering, desktop inspector, mobile bottom sheet editing, and screenshot checks for Arabic RTL desktop and mobile layouts.

Do not plan publishing, render-worker public serving, custom domains, public lead capture, webhook delivery, billing, AI, collaboration, external marketplaces, Cloudflare Pages, free-canvas behavior, or execution of custom scripts inside the builder in this phase.
```

## Phase 6 - Actions, Forms, Tracking, Consent

Goal: add extensible landing-page actions, real-estate-friendly form
configuration, tracking contracts, and consent-aware script behavior.

Expected outputs:

- Action system for Form, WhatsApp, Phone call, Popup trigger, and External
  link.
- Real-estate-friendly form field presets: Name, Phone, Budget, Area or
  location, and Message.
- Tracking event names and payload contracts for every action.
- GTM and Meta Pixel preset configuration.
- Custom script advanced option with warnings and validation.
- Consent layer contract before optional analytics and marketing scripts run.
- Builder preview placeholders or simulated script state.

In scope:

- Action configuration and validation.
- Form configuration in draft documents.
- Tracking settings and payload schemas.
- Consent settings.
- Builder UI for action/tracking setup.

Out of scope:

- Persisting submitted leads.
- Webhook delivery.
- Public final rendering and cache.
- Custom domain routing.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 6: Actions, Forms, Tracking, Consent for Landing EState.

This phase depends on Phase 1 through Phase 5 being complete. Use docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs as governing context.

The feature must define an extensible actions system for landing pages instead of one fixed CTA. Initial actions are Form, WhatsApp, Phone call, Popup trigger, and External link. Initial real-estate-friendly form fields are Name, Phone, Budget, Area or location, and Message. Each action must have a tracking event name and payload contract. Action configuration must be validated before publishing in a later phase and validated while editing drafts now.

Tracking must support simple presets for Google Tag Manager and Meta Pixel plus an advanced custom scripts option with warnings and validation. Custom scripts must not execute inside the authenticated builder; builder preview must show placeholders or simulated script state. Pages must include a consent layer before optional analytics and marketing scripts run, with consent configuration belonging to page or workspace settings.

Specify independently testable journeys for configuring each action type, validating form field presets, assigning tracking event names and payloads, configuring GTM and Meta Pixel presets, adding a custom script with warnings, previewing script placeholders in the builder, and configuring consent settings.

Explicitly exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas behavior, lead storage, webhook delivery, public final rendering, custom domain routing, and cache invalidation.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 6: Actions, Forms, Tracking, Consent.

Read docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence.

The plan must define the action contract, form field presets, Zod action validation, tracking event names and payload contracts, GTM and Meta Pixel preset settings, custom script validation and warnings, consent configuration, builder UI for action/tracking setup, and preview placeholder behavior for scripts. Keep all script execution out of the authenticated builder.

Testing must include unit tests for action schemas, form validation, tracking payload validation, consent settings, custom script validation, and invalid publish-precondition checks. Include Worker integration tests for action/tracking settings APIs and Playwright tests for configuring actions and consent in the RTL builder UI.

Do not plan lead storage, webhook delivery, public final rendering, custom domain routing, cache invalidation, billing, AI, collaboration, marketplaces, Cloudflare Pages, or free-canvas behavior in this phase.
```

## Phase 7 - Publishing, Rendering, Domains, Cache

Goal: turn validated drafts into immutable published snapshots and serve them
through the public render-worker with safe domain and cache behavior.

Expected outputs:

- Draft + Publish flow with immutable snapshots.
- Active snapshot selection and rollback by activating older snapshots.
- Render-worker public page rendering from published snapshots only.
- Default subdomain for every page.
- Custom hostname support through Cloudflare for SaaS Custom Hostnames and
  dispatch routing.
- KV hostname lookup backed by D1 fallback.
- Cache API strategy, fallback TTLs, and publish invalidation.
- Consent-aware injection of configured analytics/scripts.

In scope:

- Publishing service and app-worker publish API.
- Render-worker public serving.
- Snapshot activation and rollback.
- Domain lookup and custom hostname planning.
- Cache rules and invalidation strategy.
- Public rendering tests.

Out of scope:

- Lead persistence.
- Webhook delivery.
- CRM integrations.
- Billing or plan enforcement for custom domains.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 7: Publishing, Rendering, Domains, Cache for Landing EState.

This phase depends on Phase 1 through Phase 6 being complete. Use docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs as governing context.

The feature must define a Draft + Publish model where users edit draft documents and publishing creates immutable snapshots. The renderer serves the latest active snapshot only. Rollback must be supported by activating an older snapshot later. A failed publish must not affect the currently published snapshot. Publishing must invalidate cache for the affected page and domains.

Every page gets a default subdomain under the platform domain. Custom domains must be supported through Cloudflare for SaaS Custom Hostnames and dispatch routing, not only Worker Custom Domains. The render-worker resolves incoming hostnames through KV first and falls back to D1 when needed, with D1 as the source of truth.

Public pages must use Cache API for safe public GET response caching with fallback TTLs and cache invalidation. Responses with session cookies or personalized dashboard data must never be cached. Public analytics and lead capture endpoints must not be cached. Consent-aware configured GTM, Meta Pixel, and custom scripts may run only after consent.

Specify independently testable journeys for publishing a valid draft, preserving an active snapshot after failed publish, rendering a public page from the active snapshot, rolling back to an older snapshot, resolving a default subdomain, resolving a custom hostname through KV with D1 fallback, invalidating cache on publish, and gating optional scripts behind consent.

Explicitly exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas behavior, lead persistence, webhook delivery, CRM integrations, and executing authenticated app UI in the public renderer.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 7: Publishing, Rendering, Domains, Cache.

Read docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence.

The plan must define the publish service, immutable snapshot creation, active snapshot selection, rollback, app-worker publish APIs, render-worker public rendering, public-safe renderer dependencies, default subdomains, Cloudflare for SaaS Custom Hostnames flow, dispatch routing assumptions, KV hostname lookup with D1 fallback, Cache API strategy, fallback TTLs, cache invalidation on publish, and consent-aware script injection.

Testing must include unit tests for snapshot creation, rollback, domain resolution, cache decision logic, consent-gated script injection, and tracking payload usage. Include Worker integration tests for app-worker publish APIs, render-worker public page serving, D1 access, KV hostname lookup, and cache behavior. Include Playwright or public rendering tests for desktop/mobile published pages and custom hostname routing behavior where feasible.

Do not plan lead persistence, webhook delivery, CRM integrations, billing, AI, collaboration, external marketplaces, Cloudflare Pages, free-canvas behavior, or importing app UI into the render-worker in this phase.
```

## Phase 8 - Leads, Webhooks, Security, Launch Gates

Goal: complete V1 operational readiness with lead capture, webhook-first
integrations, CSV export, security hardening, and launch-quality checks.

Expected outputs:

- Public form submission protected by Turnstile.
- D1 lead storage until workspace-owner deletion.
- Queue-backed webhook delivery and retry attempts.
- Webhook endpoint and delivery attempt records.
- CSV export for leads.
- Security hardening for CSP, custom scripts, Turnstile, PII export, and
  webhook secrets.
- E2E, public rendering, Lighthouse, and screenshot launch gates.

In scope:

- Lead capture endpoint in render-worker.
- D1 lead records and deletion/export behavior.
- Queue workflows for webhook delivery and retry.
- Webhook secret handling and delivery logs.
- Security and launch validation.

Out of scope:

- Built-in CRM integrations beyond webhook foundation.
- Billing or plan limits.
- AI, collaboration, marketplaces, and free-canvas behavior.

### `/speckit.specify` Prompt

```text
Create a feature specification for Phase 8: Leads, Webhooks, Security, Launch Gates for Landing EState.

This phase depends on Phase 1 through Phase 7 being complete. Use docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs as governing context.

The feature must define public lead capture for published landing pages, protected by Turnstile. Leads are stored in D1 until deleted by the workspace owner. V1 integration strategy is webhook-first: store the lead in D1, enqueue webhook deliveries through Queues, retry failures, record delivery attempts, and support CSV export. Built-in CRM integrations can be added later on top of the webhook foundation and are not part of this phase.

The feature must harden security for CSP, custom scripts, Turnstile, PII export, and webhook secrets. Public analytics and lead capture endpoints must not be cached. The feature must define launch gates covering E2E tests for login, template creation, section ordering, mobile bottom sheet editing, publish, lead submission, and webhook enqueueing; public rendering tests for cache hit and miss, consent gating, GTM and Meta Pixel injection, custom script placement, and custom hostname routing; Lighthouse and Playwright screenshot checks for published pages on desktop and mobile.

Specify independently testable journeys for submitting a valid lead, rejecting spam or invalid Turnstile submissions, storing a lead, exporting leads to CSV, deleting a lead as workspace owner, enqueueing webhook delivery, retrying failed delivery, recording attempts, preventing caching of lead endpoints, and validating security gates.

Explicitly exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas behavior, and built-in CRM integrations beyond webhook delivery.
```

### `/speckit.plan` Prompt

```text
Create the implementation plan for Phase 8: Leads, Webhooks, Security, Launch Gates.

Read docs/blueprint.md, .specify/memory/constitution.md, and earlier phase outputs before planning. Fill every Constitution Check gate with PASS, FAIL, or N/A plus evidence.

The plan must define render-worker lead capture endpoints, Turnstile validation, D1 lead storage, workspace-owner deletion, CSV export, webhook endpoint configuration, Queue-backed delivery, retry behavior, delivery attempt records, webhook secret handling, no-cache rules for lead endpoints, CSP and custom script hardening, PII export protections, and final launch gates.

Testing must include unit tests for lead schemas, Turnstile validation boundaries, webhook payloads, retry decisions, CSV export, no-cache decisions, and security rules. Include Worker integration tests for D1 lead storage, R2 asset interaction if used by exported files, Queue workflows, webhook attempts, and render-worker lead capture. Include E2E tests for login, template creation, section ordering, mobile bottom sheet editing, publish, lead submission, and webhook enqueueing. Include public rendering tests for cache hit and miss, consent gating, GTM and Meta Pixel injection, custom script placement, and custom hostname routing. Include Lighthouse and Playwright screenshot checks for published pages on desktop and mobile.

Do not plan built-in CRM integrations, billing, AI, collaboration, external marketplaces, Cloudflare Pages, or free-canvas behavior in this phase.
```
