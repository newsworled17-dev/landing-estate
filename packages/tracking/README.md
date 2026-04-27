# packages/tracking

**Owner**: Phase 6 – Actions, Forms, Tracking, Consent  
**Status**: Reserved placeholder. No implementation in Phase 1.

## Responsibility

This package will own tracking event names, payload contracts, GTM/Pixel
preset configuration, custom script validation, and consent-layer behavior.

## Boundaries

- Tracking event contracts may be used by both app-worker and render-worker.
- Custom scripts must NOT execute inside the authenticated builder.
- Builder preview must use placeholders for script state.
- Must NOT import `packages/ui` or app-worker internals.

## Phase 1 Note

Only the package skeleton exists. No tracking contracts are implemented.
