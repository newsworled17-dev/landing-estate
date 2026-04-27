---

description: "Task list for Phase 1 Platform Foundation"
---

# Tasks: Platform Foundation

**Input**: Design documents from `/specs/001-platform-foundation/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Required. This phase must prove strict type checking, Worker health,
unit test harness, import-boundary validation, and Arabic RTL browser layout.

**Organization**: Tasks are grouped by user story so each story can be
implemented and tested independently after the shared foundation is complete.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no dependency on incomplete work
- **[Story]**: Which user story this task belongs to, such as US1, US2, US3, US4
- Every task includes exact file paths

## Path Conventions

- **Root tooling**: `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`, `scripts/`
- **App Worker**: `apps/app-worker/`
- **Render Worker**: `apps/render-worker/`
- **Shared Packages**: `packages/auth/`, `packages/block-sdk/`, `packages/blocks/`, `packages/db/`, `packages/schema/`, `packages/tracking/`, `packages/ui/`, `packages/shared/`
- **Browser tests**: `tests/e2e/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create root workspace files and baseline command structure used by all stories.

- [ ] T001 Create root package metadata, pinned dependency versions, and scripts in `package.json`
- [ ] T002 Create pnpm workspace globs for apps and packages in `pnpm-workspace.yaml`
- [ ] T003 Create strict shared TypeScript compiler baseline in `tsconfig.base.json`
- [ ] T004 Create repository ignore rules for dependencies, build output, Worker output, and Playwright artifacts in `.gitignore`
- [ ] T005 [P] Create root Vitest configuration in `vitest.config.ts`
- [ ] T006 [P] Create root Playwright configuration in `playwright.config.ts`
- [ ] T007 [P] Create root boundary-check script entrypoint in `scripts/check-boundaries.mjs`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish package and app ownership boundaries before user story implementation.

**CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T008 Create app worker package metadata and local scripts in `apps/app-worker/package.json`
- [ ] T009 Create app worker TypeScript configuration in `apps/app-worker/tsconfig.json`
- [ ] T010 Create app worker Vite/Cloudflare configuration in `apps/app-worker/vite.config.ts`
- [ ] T011 Create app worker Wrangler configuration in `apps/app-worker/wrangler.jsonc`
- [ ] T012 Create render worker package metadata and local scripts in `apps/render-worker/package.json`
- [ ] T013 Create render worker TypeScript configuration in `apps/render-worker/tsconfig.json`
- [ ] T014 Create render worker Vite/Cloudflare configuration in `apps/render-worker/vite.config.ts`
- [ ] T015 Create render worker Wrangler configuration in `apps/render-worker/wrangler.jsonc`
- [ ] T016 [P] Create reserved package metadata and README for auth ownership in `packages/auth/package.json` and `packages/auth/README.md`
- [ ] T017 [P] Create reserved package metadata and README for block SDK ownership in `packages/block-sdk/package.json` and `packages/block-sdk/README.md`
- [ ] T018 [P] Create reserved package metadata and README for internal blocks ownership in `packages/blocks/package.json` and `packages/blocks/README.md`
- [ ] T019 [P] Create reserved package metadata and README for database ownership in `packages/db/package.json` and `packages/db/README.md`
- [ ] T020 [P] Create reserved package metadata and README for schema ownership in `packages/schema/package.json` and `packages/schema/README.md`
- [ ] T021 [P] Create reserved package metadata and README for tracking ownership in `packages/tracking/package.json` and `packages/tracking/README.md`
- [ ] T022 [P] Create reserved package metadata and README for app UI ownership in `packages/ui/package.json` and `packages/ui/README.md`
- [ ] T023 [P] Create shared package metadata, README, and public-safe entrypoint in `packages/shared/package.json`, `packages/shared/README.md`, and `packages/shared/src/index.ts`

**Checkpoint**: Workspace boundaries are established and app/package paths exist.

---

## Phase 3: User Story 1 - Create The Project Foundation (Priority: P1) MVP

**Goal**: A contributor can inspect the repository and identify where app worker, render worker, and shared package work belongs.

**Independent Test**: Review root workspace files and package README files to confirm all expected directories and ownership responsibilities exist.

### Tests for User Story 1

> Write these tests FIRST and observe them fail before implementation.

- [ ] T024 [P] [US1] Add workspace structure test for required app and package directories in `tests/workspace-structure.test.ts`
- [ ] T025 [P] [US1] Add package ownership documentation test in `tests/package-ownership.test.ts`

### Implementation for User Story 1

- [ ] T026 [US1] Create app worker source directory and placeholder entrypoint in `apps/app-worker/src/index.ts`
- [ ] T027 [US1] Create render worker source directory and placeholder entrypoint in `apps/render-worker/src/index.ts`
- [ ] T028 [US1] Add package export placeholders for reserved packages in `packages/auth/src/index.ts`, `packages/block-sdk/src/index.ts`, `packages/blocks/src/index.ts`, `packages/db/src/index.ts`, `packages/schema/src/index.ts`, `packages/tracking/src/index.ts`, and `packages/ui/src/index.ts`
- [ ] T029 [US1] Document Phase 1 workspace ownership and excluded product workflows in `docs/platform-foundation.md`
- [ ] T030 [US1] Wire root workspace scripts to app and package paths in `package.json`

**Checkpoint**: User Story 1 is independently complete when workspace and ownership tests pass.

---

## Phase 4: User Story 2 - Verify Strict Project Health (Priority: P1)

**Goal**: A contributor can run one documented health baseline that catches type, test, build, and boundary failures.

**Independent Test**: Run the documented commands and confirm they fail before implementation, then pass after root health scripts and checks are wired.

### Tests for User Story 2

> Write these tests FIRST and observe them fail before implementation.

- [ ] T031 [P] [US2] Add typecheck script smoke test in `tests/commands/typecheck-command.test.ts`
- [ ] T032 [P] [US2] Add aggregate check script smoke test in `tests/commands/check-command.test.ts`
- [ ] T033 [P] [US2] Add render worker import-boundary violation fixture test in `tests/boundaries/render-worker-boundary.test.ts`

### Implementation for User Story 2

- [ ] T034 [US2] Implement import-boundary scanner for render worker forbidden imports in `scripts/check-boundaries.mjs`
- [ ] T035 [US2] Add command documentation for install, typecheck, lint, test, Worker tests, browser tests, build, and aggregate check in `README.md`
- [ ] T036 [US2] Configure `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, and `pnpm check` scripts in `package.json`
- [ ] T037 [US2] Add shared strict package TypeScript configs in `packages/auth/tsconfig.json`, `packages/block-sdk/tsconfig.json`, `packages/blocks/tsconfig.json`, `packages/db/tsconfig.json`, `packages/schema/tsconfig.json`, `packages/tracking/tsconfig.json`, `packages/ui/tsconfig.json`, and `packages/shared/tsconfig.json`

**Checkpoint**: User Story 2 is independently complete when root project health commands pass and boundary violations are detected.

---

## Phase 5: User Story 3 - Serve Minimal Worker Shells (Priority: P2)

**Goal**: Both Worker runtime shells can be served independently without authentication, product data, or published pages.

**Independent Test**: Start each Worker locally and verify the app worker shell and render worker health page respond independently.

### Tests for User Story 3

> Write these tests FIRST and observe them fail before implementation.

- [ ] T038 [P] [US3] Add app worker health contract test in `apps/app-worker/tests/health.test.ts`
- [ ] T039 [P] [US3] Add app worker Arabic RTL shell contract test in `apps/app-worker/tests/shell.test.ts`
- [ ] T040 [P] [US3] Add render worker health contract test in `apps/render-worker/tests/health.test.ts`
- [ ] T041 [P] [US3] Add render worker public shell isolation test in `apps/render-worker/tests/shell.test.ts`

### Implementation for User Story 3

- [ ] T042 [US3] Implement app worker Hono routes for `/` and `/api/health` in `apps/app-worker/src/index.ts`
- [ ] T043 [US3] Add app worker static shell assets and RTL stylesheet in `apps/app-worker/src/shell.ts` and `apps/app-worker/src/styles.css`
- [ ] T044 [US3] Implement render worker Hono routes for `/` and `/health` in `apps/render-worker/src/index.ts`
- [ ] T045 [US3] Configure `pnpm dev:app`, `pnpm dev:render`, and `pnpm test:workers` scripts in `package.json`
- [ ] T046 [US3] Document Worker shell routes and expected responses in `docs/platform-foundation.md`

**Checkpoint**: User Story 3 is independently complete when both Worker shells serve their contract responses without shared product state.

---

## Phase 6: User Story 4 - Validate The Test Harness (Priority: P2)

**Goal**: Future features inherit a working unit, Worker, and browser-level test harness.

**Independent Test**: Run the baseline tests and confirm at least one unit-level check, one Worker-level check, and one browser-level RTL layout check pass.

### Tests for User Story 4

> Write these tests FIRST and observe them fail before implementation.

- [ ] T047 [P] [US4] Add shared unit test proof for public-safe utilities in `packages/shared/src/index.test.ts`
- [ ] T048 [P] [US4] Add Playwright RTL desktop shell check in `tests/e2e/app-shell-rtl.spec.ts`
- [ ] T049 [P] [US4] Add Playwright mobile shell layout check in `tests/e2e/app-shell-mobile.spec.ts`

### Implementation for User Story 4

- [ ] T050 [US4] Implement public-safe shared utility used by the unit proof in `packages/shared/src/index.ts`
- [ ] T051 [US4] Configure Playwright web server commands for app worker shell validation in `playwright.config.ts`
- [ ] T052 [US4] Add browser test setup documentation and artifact handling notes in `README.md`
- [ ] T053 [US4] Update quickstart command coverage and acceptance checks in `specs/001-platform-foundation/quickstart.md`

**Checkpoint**: User Story 4 is independently complete when unit, Worker, and browser-level checks pass.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and cleanup across the Phase 1 foundation.

- [ ] T054 [P] Run final documentation consistency review for Phase 1 paths in `docs/platform-foundation.md`
- [ ] T055 [P] Confirm quickstart aligns with implemented commands in `specs/001-platform-foundation/quickstart.md`
- [ ] T056 Run `pnpm check` and record any required follow-up in `specs/001-platform-foundation/plan.md`
- [ ] T057 Verify no Phase 1 implementation added authentication, database schema, publishing, domains, tracking, leads, billing, AI, collaboration, marketplaces, or free-canvas behavior in `specs/001-platform-foundation/checklists/requirements.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup completion and blocks all user stories.
- **US1 Project Foundation (Phase 3)**: Depends on Foundational phase.
- **US2 Strict Project Health (Phase 4)**: Depends on Foundational phase and benefits from US1 paths.
- **US3 Worker Shells (Phase 5)**: Depends on Foundational phase and can start after app/render package configs exist.
- **US4 Test Harness (Phase 6)**: Depends on Foundational phase and uses US3 shell routes for browser checks.
- **Polish (Phase 7)**: Depends on desired user stories being complete.

### User Story Dependencies

- **US1**: MVP scope. Complete first to lock workspace shape.
- **US2**: Can proceed after Foundational phase; should follow US1 for final script paths.
- **US3**: Can proceed after Foundational phase; independent of US2 except final aggregate command wiring.
- **US4**: Can proceed after US3 route contracts exist for Playwright checks.

### Within Each User Story

- Tests must be written and observed failing before implementation.
- Package configs and source placeholders before command wiring.
- Worker route tests before Worker route implementation.
- Browser checks after app worker shell route exists.
- Story checkpoint must pass before moving to the next priority checkpoint.

### Parallel Opportunities

- T005-T007 can run in parallel after T001-T004.
- T016-T023 can run in parallel after app/package root directories are established.
- T024-T025 can run in parallel for US1 tests.
- T031-T033 can run in parallel for US2 tests.
- T038-T041 can run in parallel for US3 Worker contract tests.
- T047-T049 can run in parallel for US4 test harness proof.
- T054-T055 can run in parallel during polish.

---

## Parallel Example: User Story 3

```text
Task: "T038 [P] [US3] Add app worker health contract test in apps/app-worker/tests/health.test.ts"
Task: "T039 [P] [US3] Add app worker Arabic RTL shell contract test in apps/app-worker/tests/shell.test.ts"
Task: "T040 [P] [US3] Add render worker health contract test in apps/render-worker/tests/health.test.ts"
Task: "T041 [P] [US3] Add render worker public shell isolation test in apps/render-worker/tests/shell.test.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational phases.
2. Write and observe failing US1 tests.
3. Implement US1 workspace and ownership documentation.
4. Validate US1 independently before adding health, Worker, or browser harness work.

### Incremental Delivery

1. US1 establishes workspace and ownership boundaries.
2. US2 adds strict health command validation.
3. US3 adds independently served Worker shells.
4. US4 proves the reusable test harness for later phases.
5. Polish confirms no excluded product workflows entered Phase 1.

### Parallel Team Strategy

1. One person completes Setup and Foundational phases.
2. After package configs exist:
   - Developer A: US1 workspace and ownership tests/docs.
   - Developer B: US2 health scripts and boundary checks.
   - Developer C: US3 Worker shells and contracts.
3. US4 starts after US3 shell routes are available.

---

## Notes

- [P] tasks touch different files and have no dependency on incomplete tasks.
- Every user story has tests before implementation because Phase 1 explicitly requires baseline test proof.
- Keep all Phase 1 implementation storage-free and auth-free.
- Do not add Cloudflare Pages, billing, AI, collaboration, marketplace, publishing, domains, tracking, leads, or free-canvas behavior.
