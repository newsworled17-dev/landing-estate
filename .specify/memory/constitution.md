<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- Template principle 1 -> I. Arabic-First Real Estate Builder
- Template principle 2 -> II. Smart Sections, Not Free Canvas
- Template principle 3 -> III. Cloudflare Workers Runtime Boundary
- Template principle 4 -> IV. Versioned Contracts And Publish Safety
- Template principle 5 -> V. Quality Gates Are Non-Negotiable
Added sections:
- Product And Platform Constraints
- Development Workflow And Quality Gates
Removed sections:
- Template placeholder guidance and example comments
Templates requiring updates:
- .specify/templates/plan-template.md: updated
- .specify/templates/spec-template.md: updated
- .specify/templates/tasks-template.md: updated
- .specify/templates/commands/*.md: not present
- AGENTS.md: updated
- .github/copilot-instructions.md: updated
Hook/runtime repairs:
- .specify/extensions/git/scripts/powershell/initialize-repo.ps1: updated
  to keep the mandatory pre-constitution hook executable on Windows
Follow-up TODOs:
- None
-->
# Landing EState Constitution

## Core Principles

### I. Arabic-First Real Estate Builder
Landing EState MUST serve Arabic real estate marketers before developer-first
or agency-power workflows. Product flows, app UI, builder controls, validation
messages, previews, and published-page defaults MUST support RTL layout,
Arabic content, accessible controls, mobile-friendly interaction, and clear
beginner-facing language. Features that add UI MUST define the Arabic-first
journey and mobile behavior before implementation.

Rationale: The product succeeds only if non-technical Arabic real estate
marketers can move from template selection to publishing without clutter or
developer concepts blocking the path.

### II. Smart Sections, Not Free Canvas
The builder MUST use smart, validated real estate sections rather than a free
canvas. Users MAY customize safe presets for colors, typography, section
variants, ordering, content, and actions, but implementation MUST keep layout
behavior predictable and resilient. Desktop editing MUST center on live preview
with contextual inspection; mobile editing MUST be preview-first with contextual
bottom sheets and stable tap targets.

Rationale: Real estate marketers need fast, professional pages. A constrained
section model protects quality while still allowing meaningful customization.

### III. Cloudflare Workers Runtime Boundary
All application runtime and public rendering MUST target Cloudflare Workers and
related Cloudflare services. Cloudflare Pages MUST NOT be used. The dashboard,
builder, authenticated API, and static app assets belong to `apps/app-worker`.
Published page rendering, custom domain routing, public asset delivery, public
tracking endpoints, lead capture, and cache behavior belong to
`apps/render-worker`. App UI MUST NOT be imported into the public renderer.

Rationale: A clear Workers-first boundary keeps the platform deployable,
cacheable, and safe for public traffic while avoiding accidental coupling
between authenticated app code and public rendering.

### IV. Versioned Contracts And Publish Safety
All API, block, action, and page-document boundaries MUST be validated with Zod
and represented by explicit contracts. Blocks MUST expose stable metadata,
schemas, defaults, migrations, editor adapters, preview renderers, public
renderers, and supported actions/events through `packages/block-sdk`.
Draft page documents and published immutable snapshots MUST stay separate. The
public renderer MUST read published snapshots only, and a failed publish MUST
NOT affect the currently active snapshot.

Rationale: Versioned contracts and immutable snapshots let old pages continue
rendering safely while blocks, actions, and templates evolve.

### V. Quality Gates Are Non-Negotiable
Every implementation that changes behavior MUST include the relevant tests
before completion. Required coverage includes unit tests for schemas,
migrations, action validation, domain resolution, and tracking payloads; Worker
integration tests for Hono routes, D1, R2, KV, and Queues; E2E tests for the
template-to-publish journey and lead submission; public rendering tests for
cache behavior, consent gating, tracking injection, custom scripts, and custom
hostnames; and security checks for CSP, Turnstile, PII export, custom scripts,
and webhook secrets. Plans MUST mark any non-applicable gate as N/A with a
reason.

Rationale: Landing pages handle public traffic, leads, tracking scripts, and
custom domains. Regressions in these areas are product and trust failures, not
only implementation defects.

## Product And Platform Constraints

V1 scope is the app experience for choosing a real estate template,
customizing smart sections, configuring actions and tracking, and publishing a
fast landing page. Billing, AI, real-time collaboration, external block
marketplaces, and detailed frontend block/template design systems are out of
scope unless a later constitutional amendment changes this.

The repository MUST use a strict TypeScript monorepo managed by `pnpm`.
Initial planning MUST pin and re-check current stable versions for Node.js,
pnpm, TypeScript, Vite, React, Hono, Tailwind CSS, Zod, Wrangler,
`@cloudflare/vite-plugin`, `@cloudflare/workers-types`, Drizzle ORM, Better
Auth, TanStack Router, TanStack Query, Zustand, dnd-kit, Motion, Lucide React,
Vitest, and Playwright before scaffolding or implementation.

The baseline workspace layout is:

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

D1 is the source of truth for relational product data. R2 stores original and
generated assets. KV provides fast hostname-to-page and hostname-to-snapshot
lookup backed by D1. Queues handle webhook delivery, retries, and background
jobs. Analytics Engine handles lightweight public analytics. Turnstile protects
public forms. Cloudflare for SaaS Custom Hostnames handles custom domains and
vanity domains. Cache API handles public page response caching. Worker-based
Image Transformations handle responsive image delivery from R2.

Public GET responses MAY be cached aggressively, but responses with session
cookies, personalized dashboard data, public analytics endpoints, and lead
capture endpoints MUST NOT be cached. Optional analytics and marketing scripts
MUST run only after consent. Custom scripts MUST NOT execute inside the
authenticated builder; previews MUST use placeholders or simulated script
state.

Business logic MUST live in services/modules rather than React components.
D1 schema changes MUST use Drizzle migrations. Broad abstractions are allowed
only when they protect a real extension boundary such as blocks, actions,
publishing, domains, tracking, or integrations.

## Development Workflow And Quality Gates

All product work MUST follow the Spec Kit flow: specification, clarification
when needed, implementation plan, tasks, then implementation. Product code MUST
NOT be scaffolded directly from the blueprint alone. When no feature plan
exists yet, `docs/blueprint.md` and this constitution are the governing
context.

Feature specifications MUST define independently testable user journeys,
explicit scope boundaries, Arabic-first and RTL implications, data/privacy
needs, action/tracking behavior, publishing behavior, and measurable success
criteria. Implementation plans MUST pass the Constitution Check before Phase 0
research and again after Phase 1 design.

Tasks MUST be grouped by independently testable user story and MUST include
the tests, migrations, schemas, validation, security, cache invalidation,
consent, and RTL/accessibility work needed by that story. Tests for a story
MUST be written and observed failing before the corresponding implementation
tasks are marked complete.

Reviews MUST verify Cloudflare Workers boundaries, draft/published separation,
public renderer dependencies, Zod validation, Drizzle migration usage,
cache-safety, consent behavior, Turnstile protection, webhook retry behavior,
and Arabic RTL usability for affected surfaces.

## Governance

This constitution supersedes conflicting local practices and Speckit template
defaults. `docs/blueprint.md` remains the product source for details, but this
constitution controls implementation rules, workflow gates, and architectural
constraints when the two differ.

Amendments require a documented rationale, a version bump, updates to affected
Speckit templates and runtime guidance, and a review of any active specs,
plans, or tasks that may be invalidated. Breaking governance or principle
changes require a MAJOR version bump. New principles, new required gates, or
materially expanded guidance require a MINOR version bump. Clarifications,
wording fixes, and non-semantic refinements require a PATCH version bump.

Each implementation plan MUST document Constitution Check results. Any
intentional violation MUST be recorded in Complexity Tracking with the reason,
the rejected simpler alternative, and the mitigation. Violations without that
record block implementation.

Compliance is reviewed at spec, plan, task generation, and pull request time.
The current plan for a feature governs day-to-day implementation after it
passes the Constitution Check; before a plan exists, the blueprint and this
constitution govern.

**Version**: 1.0.0 | **Ratified**: 2026-04-27 | **Last Amended**: 2026-04-27
