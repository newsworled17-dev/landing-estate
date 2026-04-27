# packages/auth

**Owner**: Phase 2 – Auth And Workspace Core  
**Status**: Reserved placeholder. No implementation in Phase 1.

## Responsibility

This package will own Better Auth integration, magic-link session handling,
and Cloudflare Workers-compatible auth utilities for `apps/app-worker`.

## Boundaries

- May be imported by `apps/app-worker` only.
- Must NOT be imported by `apps/render-worker` or any public-safe package.
- Must NOT contain UI components.

## Phase 1 Note

Only the package skeleton exists. No authentication code is implemented.
