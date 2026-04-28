# packages/ui

**Owner**: App Worker – authenticated dashboard and builder UI  
**Status**: Phase 1.1 design token foundation.

## Responsibility

This package owns app-worker-only design tokens, CSS variables, focus styles,
and RTL-aware layout utilities for the authenticated dashboard and builder
interfaces. React UI components can be added in later feature-scoped phases.

## Boundaries

- STRICTLY for use by `apps/app-worker` only.
- Must NEVER be imported by `apps/render-worker` or public-safe packages.
- Import-boundary validation in Phase 1 enforces this rule via `scripts/check-boundaries.mjs`.

## Phase 1.1 Note

The Estate Studio Light token layer is implemented. It is inspired by modern
builder/editor products: white panels, a precise canvas grid, blue selection
states, restrained shadows, and RTL-first spacing. No authentication flows,
product workflows, builder components, database access, publishing, tracking,
or leads are implemented.
