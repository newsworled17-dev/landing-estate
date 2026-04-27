# Feature Specification: Platform Foundation

**Feature Branch**: `001-platform-foundation`  
**Created**: 2026-04-27  
**Status**: Draft  
**Input**: User description: "Create a feature specification for Phase 1: Platform Foundation for Landing EState. Establish the technical foundation only: TypeScript strict pnpm monorepo, app-worker, render-worker, shared packages, Cloudflare Workers runtime, baseline tooling, Arabic RTL dashboard shell placeholder, public render-worker health page, strict checks, local serving, and baseline test harness. Exclude Cloudflare Pages, billing, AI, real-time collaboration, external block marketplaces, free-canvas behavior, authentication flows, database schema, publishing, domains, tracking, leads, and complete builder workflows."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Create The Project Foundation (Priority: P1)

As a product engineer starting Landing EState, I need the repository foundation
to clearly separate the authenticated application, public renderer, and shared
packages so future phases can build without reworking the project shape.

**Why this priority**: Every later phase depends on a predictable workspace,
runtime boundary, and package ownership model.

**Independent Test**: A contributor can inspect the repository and identify the
app worker, render worker, and shared package locations with their ownership
responsibilities.

**Acceptance Scenarios**:

1. **Given** a fresh checkout, **When** the contributor reviews the project
   structure, **Then** the expected app and package directories exist with clear
   ownership boundaries.
2. **Given** a future feature author, **When** they need to place code for
   authenticated UI, public rendering, or shared contracts, **Then** the
   foundation makes the correct location unambiguous.

---

### User Story 2 - Verify Strict Project Health (Priority: P1)

As a contributor, I need a single reliable baseline for project health so I can
confirm the foundation is ready before adding product features.

**Why this priority**: The constitution requires strict validation and tests
before implementation work proceeds.

**Independent Test**: A contributor can run the documented health checks and
see the foundation pass without adding product data or workflows.

**Acceptance Scenarios**:

1. **Given** the foundation is installed, **When** the contributor runs the
   documented project health checks, **Then** strict type checking, baseline
   tests, and build validation all complete successfully.
2. **Given** an accidental boundary violation is introduced, **When** the
   project health checks run, **Then** the violation is reported clearly enough
   for the contributor to correct it.

---

### User Story 3 - Serve Minimal Worker Shells (Priority: P2)

As a contributor, I need both runtime shells to be locally visible so the team
can confirm the authenticated app surface and public renderer surface are
separate before product workflows are added.

**Why this priority**: The app-worker and render-worker split is a core
constitutional boundary.

**Independent Test**: The app shell and public renderer health page can be
served independently and verified without authentication, database records, or
published pages.

**Acceptance Scenarios**:

1. **Given** the app worker shell is running, **When** a contributor opens it,
   **Then** they see a minimal Arabic-first RTL dashboard placeholder.
2. **Given** the render worker shell is running, **When** a contributor opens
   the public health page, **Then** they see a minimal public rendering health
   response that does not depend on authenticated app UI.

---

### User Story 4 - Validate The Test Harness (Priority: P2)

As a future feature author, I need working baseline tests for units, Worker
behavior, and browser-level layout checks so later phases can add required
quality gates without reinventing test setup.

**Why this priority**: Later specs require schema, Worker, public rendering,
E2E, and screenshot checks.

**Independent Test**: The baseline test harness proves at least one unit-level
check, one Worker-level check, and one browser-level Arabic RTL layout check
can run successfully.

**Acceptance Scenarios**:

1. **Given** the test harness is configured, **When** a contributor runs the
   baseline tests, **Then** the unit, Worker, and browser-level checks execute
   successfully.
2. **Given** the Arabic RTL shell is rendered, **When** the browser-level check
   captures it, **Then** the page direction and basic layout are verified.

---

### Edge Cases

- If required local tooling is missing, the contributor receives actionable
  setup guidance instead of silent failure.
- If a runtime shell imports from the wrong ownership boundary, health checks
  identify the boundary problem.
- If the Arabic RTL dashboard placeholder contains long Arabic labels later,
  the shell layout remains stable and readable on mobile-sized screens.
- If the public render-worker health page is requested, it must not require a
  session, workspace, draft, published snapshot, lead, tracking, or domain
  record.
- If a future feature attempts to add product workflow behavior in this phase,
  it is treated as out of scope.

## Constitution Alignment *(mandatory)*

### Scope Boundaries

- **In Scope**: Repository foundation, app-worker shell, render-worker shell,
  shared package directories, strict project health checks, baseline local
  development commands, and baseline test harness.
- **Out of Scope**: Cloudflare Pages, billing, plan enforcement, AI,
  real-time collaboration, external block marketplaces, free-canvas behavior,
  authentication flows, database schema, publishing, domains, tracking, leads,
  and complete builder workflows.
- **Worker Ownership**: `apps/app-worker` owns the Arabic RTL dashboard shell,
  authenticated API shell, and static app assets. `apps/render-worker` owns the
  public rendering health page. Shared packages are placeholders for future
  phases and must not create product workflows in this phase.

### Arabic-First And RTL Experience

- **Primary Arabic Journey**: A contributor opening the app shell sees a
  minimal Arabic-first RTL dashboard placeholder that confirms the product is
  oriented toward Arabic real estate marketers.
- **RTL/UI Requirements**: The shell uses right-to-left document direction,
  readable Arabic placeholder copy, stable mobile layout, and accessible
  landmarks or labels for the minimal navigation surface.
- **Published Page Impact**: No published page behavior is created. The public
  render-worker health page only proves the future public rendering surface is
  isolated and reachable.

### Data, Privacy, And Contracts

- **Validated Inputs/Outputs**: Runtime health responses and shell routes have
  simple, documented outputs. No product API payloads are introduced.
- **Data Entities**: No persistent product entities are created in this phase.
  Entity modeling begins in a later data foundation phase.
- **Consent/Security**: No analytics, marketing scripts, personal data, leads,
  or consent flows are introduced. Baseline security expectations are limited
  to safe shell behavior and no accidental caching of authenticated content.

### Publishing, Domains, Caching, And Tracking

- **Draft/Published Behavior**: No draft documents or published snapshots are
  introduced.
- **Domain/Cache Behavior**: No custom domains or product cache strategy are
  introduced. The public health page may be treated as a simple non-product
  diagnostic surface.
- **Tracking Behavior**: No tracking events, GTM, Meta Pixel, or custom scripts
  are introduced.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The foundation MUST provide a single workspace structure that
  separates the authenticated application worker, public rendering worker, and
  shared package areas defined by the blueprint.
- **FR-002**: The foundation MUST document ownership boundaries so contributors
  know where authenticated UI, public rendering, shared schemas, tracking,
  block contracts, database support, UI components, and shared utilities belong.
- **FR-003**: The app worker shell MUST present a minimal Arabic-first RTL
  dashboard placeholder without requiring authentication or product data.
- **FR-004**: The render worker shell MUST present a minimal public health page
  without importing authenticated app UI or depending on dashboard modules.
- **FR-005**: The foundation MUST provide documented commands for install,
  local development, strict health checks, testing, and build validation.
- **FR-006**: The foundation MUST allow contributors to run strict project
  checks that detect type, package-boundary, test, and build failures before
  later phases add product workflows.
- **FR-007**: The baseline test harness MUST include at least one unit-level
  check, one Worker-level check, and one browser-level check for the Arabic RTL
  shell.
- **FR-008**: The foundation MUST keep Cloudflare Pages, authentication flows,
  database schema, publishing, domains, tracking, leads, billing, AI,
  real-time collaboration, external marketplaces, and free-canvas behavior out
  of scope.
- **FR-009**: The foundation MUST record baseline platform version expectations
  from the blueprint so the planning phase can re-check stable versions before
  implementation.
- **FR-010**: The foundation MUST leave future phases able to add D1, R2, KV,
  Queues, Analytics Engine, Turnstile, custom hostnames, block contracts,
  builder workflows, publishing, tracking, and leads without changing the
  top-level ownership model.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new contributor can identify the correct location for app
  worker, render worker, and shared package work in under 5 minutes using the
  repository and docs.
- **SC-002**: A contributor can run the documented setup and health checks on a
  prepared development machine in under 15 minutes and receive a clear pass or
  actionable failure.
- **SC-003**: Both minimal runtime shells can be opened locally and verified
  independently without authentication, product data, or published pages.
- **SC-004**: The baseline test harness completes at least one unit-level,
  one Worker-level, and one browser-level RTL layout check successfully.
- **SC-005**: Reviewers can confirm from the foundation that no out-of-scope V1
  product workflows were added during this phase.

## Assumptions

- The existing blueprint and constitution remain the governing sources for this
  phase.
- The platform version list from the blueprint is treated as the planning
  baseline and will be re-checked during `/speckit.plan`.
- This phase is allowed to create broad scaffolding; later phases must stay
  feature-scoped.
- The Arabic RTL app shell is a placeholder only and does not imply completed
  authentication, dashboard workflows, templates, or builder functionality.
- No product data is persisted in this phase.
