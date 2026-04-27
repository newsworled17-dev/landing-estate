# packages/blocks

**Owner**: Phase 4 – Block SDK And Internal Blocks  
**Status**: Reserved placeholder. No implementation in Phase 1.

## Responsibility

This package will own internal V1 block registrations for real-estate-friendly
smart sections (hero, unit highlights, location, gallery, lead form CTA, contact CTA).

## Boundaries

- Depends on `packages/block-sdk`.
- Public renderers in block packages must be importable by `apps/render-worker`.
- Editor adapters must only be used by `apps/app-worker`.
- Must NOT reach into app internals.

## Phase 1 Note

Only the package skeleton exists. No blocks are implemented.
