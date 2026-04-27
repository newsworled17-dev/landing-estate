# packages/ui

**Owner**: App Worker – authenticated dashboard and builder UI  
**Status**: Reserved placeholder. No implementation in Phase 1.

## Responsibility

This package will own shared React UI components, design tokens, Tailwind CSS
utilities, and RTL-aware layout primitives for the authenticated dashboard
and builder interfaces.

## Boundaries

- STRICTLY for use by `apps/app-worker` only.
- Must NEVER be imported by `apps/render-worker` or public-safe packages.
- Import-boundary validation in Phase 1 enforces this rule via `scripts/check-boundaries.mjs`.

## Phase 1 Note

Only the package skeleton exists. No UI components are implemented.
