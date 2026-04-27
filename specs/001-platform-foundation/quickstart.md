# Quickstart: Platform Foundation

This quickstart describes the expected contributor workflow after Phase 1 is
implemented.

## Prerequisites

- Node.js 24 LTS, expected line: 24.15.0 or later compatible v24 LTS.
- Corepack enabled.
- `pnpm` 10.33.2.
- A local environment that can run Cloudflare Workers development servers.

## Install

```powershell
corepack enable
corepack prepare pnpm@10.33.2 --activate
pnpm install
```

## Run Local Shells

```powershell
pnpm dev:app
```

Expected result: the app-worker shell starts and exposes a minimal Arabic RTL
dashboard placeholder.

```powershell
pnpm dev:render
```

Expected result: the render-worker shell starts and exposes a public rendering
health page.

## Validate Project Health

```powershell
pnpm typecheck
pnpm lint
pnpm test
pnpm test:workers
pnpm test:e2e
pnpm build
pnpm check
```

Expected result: all commands complete successfully on a prepared development
machine. Failures should explain whether the issue is type safety, linting,
unit tests, Worker health, browser layout, build output, or a boundary
violation.

## Acceptance Checks

- `apps/app-worker` and `apps/render-worker` exist and can run independently.
- The app shell renders right-to-left Arabic placeholder content.
- The render shell does not import app UI or authenticated modules.
- At least one unit-level check passes.
- App-worker and render-worker health checks pass.
- A browser-level check confirms the Arabic RTL shell does not break on mobile.
- No authentication, database schema, publishing, domains, tracking, leads,
  billing, AI, collaboration, marketplace, or free-canvas behavior exists.
