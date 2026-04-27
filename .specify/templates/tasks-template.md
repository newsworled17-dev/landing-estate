---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are REQUIRED for implementation tasks that change behavior. Include only the test categories relevant to the feature, but record N/A with a reason in plan.md for skipped constitution gates.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no dependency on incomplete work
- **[Story]**: Which user story this task belongs to, such as US1, US2, US3
- Include exact file paths in descriptions

## Path Conventions

- **App Worker**: `apps/app-worker/` for dashboard, builder, authenticated API, and static app assets
- **Render Worker**: `apps/render-worker/` for published rendering, domains, public tracking, lead capture, cache, and public assets
- **Shared Packages**: `packages/auth/`, `packages/block-sdk/`, `packages/blocks/`, `packages/db/`, `packages/schema/`, `packages/tracking/`, `packages/ui/`, `packages/shared/`
- **Tests**: colocate unit tests with packages when that is the existing pattern; use Worker integration and Playwright paths defined in plan.md

<!--
  The /speckit.tasks command MUST replace the sample tasks below with actual tasks based on:
  - User stories from spec.md, prioritized P1, P2, P3...
  - Constitution Check results from plan.md
  - Technical context, data model, contracts, and quickstart
  - Required tests for affected schemas, workers, public rendering, security, and RTL UI

  Tasks MUST be organized by user story so each story can be implemented,
  tested, and demonstrated independently.
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and feature scaffolding

- [ ] T001 Confirm pnpm workspace and TypeScript strict configuration match plan.md
- [ ] T002 Confirm Cloudflare Workers configuration for affected app(s)
- [ ] T003 [P] Add or update feature folders in the app/package paths named in plan.md
- [ ] T004 [P] Configure feature-specific test fixtures and environment variables

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core contracts and infrastructure that MUST be complete before ANY user story can be implemented

**CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T005 Define or update Zod schemas for affected API, block, action, page document, and tracking payload boundaries
- [ ] T006 Add Drizzle migrations for D1 schema changes, if data model changes are required
- [ ] T007 Implement service/module boundaries for business logic outside React components
- [ ] T008 Configure Cloudflare service bindings for D1, R2, KV, Queues, Analytics Engine, Turnstile, or custom hostnames as needed
- [ ] T009 Establish draft/published snapshot handling, cache invalidation hooks, consent checks, and no-cache rules where relevant
- [ ] T010 Verify public renderer dependencies stay public-safe and do not import app UI or authenticated modules

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - [Title] (Priority: P1) MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1

> Write these tests FIRST and observe them fail before implementation.

- [ ] T011 [P] [US1] Unit test for schemas, migrations, actions, domain resolution, or tracking payloads in [exact test path]
- [ ] T012 [P] [US1] Worker integration test for Hono routes, D1, R2, KV, Queues, or Turnstile in [exact test path]
- [ ] T013 [P] [US1] Playwright E2E or screenshot test for Arabic RTL/mobile behavior in [exact test path]
- [ ] T014 [P] [US1] Public rendering, cache, consent, custom script, or custom hostname test in [exact test path]

### Implementation for User Story 1

- [ ] T015 [P] [US1] Implement data/schema changes in [exact package path]
- [ ] T016 [P] [US1] Implement service/module logic in [exact package path]
- [ ] T017 [US1] Implement app-worker API, dashboard, or builder UI changes in [exact app-worker path]
- [ ] T018 [US1] Implement render-worker publishing, public rendering, domain, tracking, lead, or cache changes in [exact render-worker path]
- [ ] T019 [US1] Add Arabic-first RTL UI states, accessible controls, icons, and mobile behavior in [exact UI path]
- [ ] T020 [US1] Add security, consent, Turnstile, CSP, PII export, webhook secret, or no-cache protections in [exact path]

**Checkpoint**: User Story 1 is fully functional and independently testable.

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2

- [ ] T021 [P] [US2] Unit/contract test in [exact test path]
- [ ] T022 [P] [US2] Worker integration or Playwright test in [exact test path]
- [ ] T023 [P] [US2] Public rendering, cache, consent, or security test in [exact test path]

### Implementation for User Story 2

- [ ] T024 [P] [US2] Implement schemas/data/service changes in [exact path]
- [ ] T025 [US2] Implement app-worker or render-worker behavior in [exact path]
- [ ] T026 [US2] Add RTL/mobile/accessibility states in [exact path]
- [ ] T027 [US2] Integrate with User Story 1 components while preserving independent testability

**Checkpoint**: User Stories 1 and 2 work independently.

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3

- [ ] T028 [P] [US3] Unit/contract test in [exact test path]
- [ ] T029 [P] [US3] Worker integration or Playwright test in [exact test path]

### Implementation for User Story 3

- [ ] T030 [P] [US3] Implement schemas/data/service changes in [exact path]
- [ ] T031 [US3] Implement app-worker or render-worker behavior in [exact path]
- [ ] T032 [US3] Add security, consent, cache, RTL, or accessibility coverage in [exact path]

**Checkpoint**: All planned user stories work independently.

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] Documentation updates in docs/
- [ ] TXXX Code cleanup and refactoring without broad abstractions unless they protect an extension boundary
- [ ] TXXX [P] Additional Vitest coverage for shared schemas and services
- [ ] TXXX [P] Additional Playwright desktop/mobile screenshots for affected app or published-page surfaces
- [ ] TXXX Security hardening for CSP, custom scripts, Turnstile, PII export, and webhook secrets
- [ ] TXXX Lighthouse or performance validation for affected public pages
- [ ] TXXX Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational phase - no dependency on later stories
- **User Story 2 (P2)**: Can start after Foundational phase - may integrate with US1 but remains independently testable
- **User Story 3 (P3)**: Can start after Foundational phase - may integrate with US1/US2 but remains independently testable

### Within Each User Story

- Tests MUST be written and observed failing before implementation
- Schemas and migrations before services
- Services/modules before app UI or renderer integration
- Core implementation before security/cache/consent verification
- Story complete before moving to the next priority checkpoint

### Parallel Opportunities

- Setup tasks marked [P] can run in parallel
- Foundational tasks marked [P] can run in parallel if they touch different files
- Tests for a user story marked [P] can run in parallel
- App-worker and render-worker tasks can run in parallel if their contracts are stable
- Different user stories can be worked on in parallel after Foundational phase, if dependencies allow

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Write and observe failing tests for User Story 1
4. Complete User Story 1 implementation
5. STOP and VALIDATE User Story 1 independently

### Incremental Delivery

1. Complete Setup and Foundational phase
2. Add User Story 1, test independently, then demo
3. Add User Story 2, test independently, then demo
4. Add User Story 3, test independently, then demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

1. Team completes Setup and Foundational phase together
2. Once Foundational phase is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories integrate through stable schemas and contracts

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to a specific user story for traceability
- Each user story must remain independently completable and testable
- Commit after each task or logical group when requested by the workflow
- Stop at any checkpoint to validate the story independently
- Avoid vague tasks, same-file conflicts, and cross-story dependencies that break independent delivery
