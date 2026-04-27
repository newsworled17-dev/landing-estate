# packages/db

**Owner**: Phase 3 – Data And Contracts Foundation  
**Status**: Reserved placeholder. No implementation in Phase 1.

## Responsibility

This package will own Drizzle ORM configuration, D1 database client,
migration management, and database access patterns for all product data areas.

## Boundaries

- May be imported by `apps/app-worker` for authenticated API and dashboard services.
- The public renderer (`apps/render-worker`) may access published snapshots only, not mutable drafts.
- Must NOT be imported by `packages/ui` or `packages/block-sdk` public renderers.

## Phase 1 Note

Only the package skeleton exists. No D1 schema or Drizzle setup is implemented.
