# packages/schema

**Owner**: Phase 3 – Data And Contracts Foundation  
**Status**: Reserved placeholder. No implementation in Phase 1.

## Responsibility

This package will own shared Zod contracts for API, page document, action,
tracking, consent, domain, asset, and integration boundaries.

## Boundaries

- May be imported by both workers and shared packages.
- Must NOT import `packages/ui`, `packages/db`, or any app-worker internals.
- All exported types must be Zod-validated at runtime boundaries.

## Phase 1 Note

Only the package skeleton exists. No Zod schemas are implemented.
