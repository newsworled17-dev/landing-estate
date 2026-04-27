# packages/shared

**Owner**: Both workers – public-safe utilities  
**Status**: Active. Contains public-safe runtime utilities usable by both workers.

## Responsibility

This package owns public-safe utility functions usable by both
`apps/app-worker` and `apps/render-worker`. It must remain free of browser
APIs, authentication logic, UI components, and Cloudflare-specific primitives.

## Boundaries

- May be imported by BOTH workers and any other package.
- Must NOT import `packages/ui`, `packages/auth`, `packages/db`, or any app-worker internals.
- Must NOT contain browser-only or Worker-only APIs.
- All exports must be safe for public rendering contexts.
