# Landing EState Blueprint

## Summary

Landing EState is an Arabic-first RTL SaaS landing page builder for real estate marketers. The primary journey is simple: choose a real estate template, customize smart sections, configure actions and tracking, then publish a fast landing page.

V1 focuses on the app experience only. It does not include billing, AI, real-time collaboration, external block marketplaces, or detailed frontend block/template designs. Product code should not be scaffolded from this blueprint until the Speckit constitution/spec flow is ready.

Cloudflare Pages must not be used. The platform should be built on Cloudflare Workers and related Cloudflare services.

## Product Direction

- Target user: Arabic real estate marketer, not developer-first.
- Builder model: smart sections, not free canvas.
- MVP journey: template to publish.
- UI direction: practical, calm, low-clutter, beginner-friendly, mobile-friendly.
- Mobile builder: preview-first with contextual bottom sheets.
- Customization: safe presets for colors, typography, section variants, ordering, and content.
- Published pages: professional real estate landing pages for projects and units, with template and block variety added later.

## Architecture

Use a TypeScript strict monorepo managed by `pnpm`.

Recommended workspace layout:

```text
apps/
  app-worker/
  render-worker/
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
```

`apps/app-worker` owns the dashboard, builder, authenticated API, and static app assets through Cloudflare Workers Static Assets.

`apps/render-worker` owns published page rendering, custom domain routing, lead capture, public tracking endpoints, cache behavior, and public asset delivery.

`packages/block-sdk` defines the stable contract between core builder code and block packages. Blocks must not reach into app internals.

`packages/blocks` contains internal block packages only for V1. External plugins and marketplaces are out of scope.

## Cloudflare Platform

- Workers: all application runtime and public rendering.
- D1: source of truth for relational product data.
- R2: original and generated assets, especially uploaded real estate images.
- KV: fast hostname-to-page/snapshot lookup, backed by D1 as source of truth.
- Queues: webhook delivery, retries, and background jobs.
- Analytics Engine: lightweight high-volume public analytics events.
- Turnstile: anti-spam protection for lead forms.
- Cloudflare for SaaS Custom Hostnames: customer custom domains and vanity domains.
- Cache API: public page response caching.
- Image Transformations via Workers: responsive image delivery from R2.

Cloudflare Pages is explicitly out of scope.

## Stack Baseline

Pin current stable versions during initial scaffolding and re-check before implementation:

- Node.js 24 LTS
- pnpm 10.33.2
- TypeScript 6.0.3
- Vite 8.0.10
- React 19.2.5
- Hono 4.12.15
- Tailwind CSS 4.2.4
- Zod 4.3.6
- Wrangler 4.85.0
- `@cloudflare/vite-plugin` 1.33.2
- `@cloudflare/workers-types` 4.20260426.1
- Drizzle ORM 0.45.2
- Better Auth 1.6.9
- TanStack Router and TanStack Query
- Zustand
- dnd-kit
- Motion
- Lucide React
- Vitest and Playwright

## Data Model Areas

D1 should model these areas from the start:

- Users
- Workspaces
- Workspace membership
- Projects
- Pages
- Draft page documents
- Published immutable snapshots
- Domains and hostname mappings
- Assets
- Leads
- Integrations
- Webhook endpoints and delivery attempts
- Tracking settings
- Consent settings

Draft data and published data must be separated. The public renderer must read only published snapshots, not mutable drafts.

## Builder Model

The builder uses smart sections with live preview.

Desktop layout:

- Primary workspace with live preview.
- Contextual inspector for the selected section/action/page settings.
- Section ordering controls and drag/drop.

Mobile layout:

- Preview-first experience.
- Section selection from the preview.
- Bottom sheet for contextual edits.
- Stable tap targets and RTL-friendly controls.

The interface should reveal controls only when needed. Avoid crowded sidebars and large always-visible forms.

## Block System

Blocks should follow a Gutenberg-like separation model.

Each block or section package should expose:

- `id`
- `version`
- manifest metadata
- Zod schema
- default data
- migrations
- editor UI adapter
- preview renderer
- public renderer
- supported actions/events

Adding a new block should usually require adding/registering a package, not changing core builder logic.

Page documents must be versioned so old pages continue rendering after block updates. Migrations should be explicit and testable.

## Actions System

Landing pages should use an extensible actions system instead of one fixed CTA.

Initial actions:

- Form
- WhatsApp
- Phone call
- Popup trigger
- External link

Initial form fields should be real-estate-friendly presets:

- Name
- Phone
- Budget
- Area or location
- Message

Each action must have a tracking event name and payload contract. Action configuration should be validated before publishing.

## Publishing

Publishing uses a Draft + Publish model.

- Users edit draft documents.
- Publish creates an immutable snapshot.
- The renderer serves the latest active snapshot.
- Rollback should be supported by activating an older snapshot later.
- Publishing should invalidate cache for the affected page and domains.
- A failed publish must not affect the currently published snapshot.

## Domains

Every page gets a default subdomain under the platform domain.

Custom domains should be supported through Cloudflare for SaaS Custom Hostnames and dispatch routing, not only Worker Custom Domains.

The render worker should resolve incoming hostnames through KV first and fall back to D1 when needed. D1 remains the source of truth.

## Caching

Public pages should be cached aggressively but safely.

- Use Cache API for public GET responses.
- Include cache tags or URL-based invalidation strategy during publish.
- Add fallback TTLs.
- Never cache responses with session cookies or personalized dashboard data.
- Public analytics and lead capture endpoints must not be cached.

## Tracking And Consent

Tracking should support both simple presets and advanced custom scripts.

Initial presets:

- Google Tag Manager
- Meta Pixel

Advanced option:

- Custom scripts with warnings and validation.

Custom scripts must not execute inside the authenticated builder. Builder preview should display placeholders or simulated script state instead.

Pages should include a consent layer before optional analytics and marketing scripts run. Consent configuration belongs to the page or workspace settings.

## Leads And Integrations

Leads are stored in D1 until deleted by the workspace owner.

V1 integration strategy is webhook-first:

- Store lead in D1.
- Enqueue webhook deliveries through Queues.
- Retry failures and record attempts.
- Support CSV export.

Built-in CRM integrations can be added later on top of the webhook foundation.

Turnstile should protect public form submissions.

## Authentication And Workspaces

V1 authentication should use email magic links.

The account model should support a simple workspace per user now, while leaving room for teams and agencies later.

Billing and plan enforcement are out of V1, but the data model may reserve simple plan fields for later use.

## Code Rules

- TypeScript strict everywhere.
- Zod at all API, block, action, and page document boundaries.
- Drizzle migrations only for D1 schema changes.
- Business logic belongs in services/modules, not React components.
- App UI must not be imported into the public renderer.
- Public renderer must depend only on block SDK, schemas, shared utilities, and public-safe block renderers.
- Keep modules small and beginner-friendly.
- Avoid broad abstractions unless they protect a real extension boundary.
- Use accessible, RTL-first UI patterns.
- Use icons where they improve scanning, especially in builder controls.

## Quality Gates

Required checks when implementation begins:

- Unit tests for schemas, block migrations, action validation, domain resolution, and tracking payloads.
- Worker integration tests for Hono routes, D1 access, R2 asset handling, KV hostname lookup, and Queue workflows.
- E2E tests for login, template creation, section ordering, mobile bottom sheet editing, publish, lead submission, and webhook enqueueing.
- Public rendering tests for cache hit/miss, consent gating, GTM/Pixel injection, custom script placement, and custom hostname routing.
- Lighthouse and Playwright screenshot checks for published pages on desktop and mobile.
- Security checks for CSP, custom scripts, Turnstile, PII export, and webhook secrets.

## References

- Cloudflare Workers Vite Plugin: https://developers.cloudflare.com/workers/vite-plugin/
- Cloudflare D1: https://developers.cloudflare.com/d1/get-started/
- Cloudflare R2: https://developers.cloudflare.com/r2/
- Cloudflare for SaaS Custom Hostnames: https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/
- Node.js releases: https://github.com/nodejs/Release
