# packages/block-sdk

**Owner**: Phase 4 – Block SDK And Internal Blocks  
**Status**: Reserved placeholder. No implementation in Phase 1.

## Responsibility

This package will own block/section contracts: metadata, Zod schemas, default
data, migrations, editor adapter, preview renderer, public renderer, and
supported actions/events.

## Boundaries

- Public renderer exported from this package must be importable by `apps/render-worker`.
- Editor adapter and UI components must only be used by `apps/app-worker`.
- Must NOT directly import `packages/ui` in the public-safe renderer path.

## Phase 1 Note

Only the package skeleton exists. No block contracts are implemented.
