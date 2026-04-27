# Feature Specification: [FEATURE NAME]

**Feature Branch**: `[###-feature-name]`  
**Created**: [DATE]  
**Status**: Draft  
**Input**: User description: "$ARGUMENTS"

## User Scenarios & Testing *(mandatory)*

<!--
  User stories must be prioritized as Arabic real estate marketer journeys.
  Each journey must be independently testable and deliver value on its own.
  Use P1, P2, P3, etc. where P1 is the MVP slice.
-->

### User Story 1 - [Brief Title] (Priority: P1)

[Describe this journey in plain language from the marketer's point of view]

**Why this priority**: [Explain the value and why it has this priority level]

**Independent Test**: [Describe how this can be tested independently and what user value it proves]

**Acceptance Scenarios**:

1. **Given** [initial state], **When** [action], **Then** [expected outcome]
2. **Given** [initial state], **When** [action], **Then** [expected outcome]

---

### User Story 2 - [Brief Title] (Priority: P2)

[Describe this journey in plain language]

**Why this priority**: [Explain the value and why it has this priority level]

**Independent Test**: [Describe how this can be tested independently]

**Acceptance Scenarios**:

1. **Given** [initial state], **When** [action], **Then** [expected outcome]

---

### User Story 3 - [Brief Title] (Priority: P3)

[Describe this journey in plain language]

**Why this priority**: [Explain the value and why it has this priority level]

**Independent Test**: [Describe how this can be tested independently]

**Acceptance Scenarios**:

1. **Given** [initial state], **When** [action], **Then** [expected outcome]

---

[Add more user stories as needed, each with an assigned priority]

### Edge Cases

- What happens when [boundary condition]?
- How does the system handle [error scenario]?
- If UI is affected, what happens with long Arabic labels, RTL controls, and mobile viewport constraints?
- If publishing is affected, what happens when publish fails after snapshot creation starts?
- If tracking or leads are affected, what happens without consent, with Turnstile failure, or during webhook retry exhaustion?

## Constitution Alignment *(mandatory)*

### Scope Boundaries

- **In Scope**: [Capabilities included in this feature]
- **Out of Scope**: [Explicit exclusions; confirm V1 exclusions are still excluded unless authorized]
- **Worker Ownership**: [app-worker, render-worker, packages, or N/A]

### Arabic-First And RTL Experience

- **Primary Arabic Journey**: [How an Arabic real estate marketer completes the task]
- **RTL/UI Requirements**: [Layout, controls, labels, mobile bottom sheets, preview behavior, accessibility]
- **Published Page Impact**: [If applicable, how public pages remain professional and RTL-safe]

### Data, Privacy, And Contracts

- **Validated Inputs/Outputs**: [API, block, action, page document, tracking payload schemas]
- **Data Entities**: [D1 entities, R2 assets, KV lookup, Queue jobs, or N/A]
- **Consent/Security**: [Consent, custom scripts, Turnstile, CSP, PII export, webhook secrets, or N/A]

### Publishing, Domains, Caching, And Tracking

- **Draft/Published Behavior**: [Snapshot, rollback, failed publish behavior, or N/A]
- **Domain/Cache Behavior**: [Custom hostname, KV/D1 lookup, invalidation, no-cache rules, or N/A]
- **Tracking Behavior**: [Event names, payload contracts, GTM/Pixel/custom scripts, or N/A]

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST [specific capability]
- **FR-002**: System MUST [specific capability]
- **FR-003**: Users MUST be able to [key interaction]
- **FR-004**: System MUST [data requirement]
- **FR-005**: System MUST [behavior]

*Example of marking unclear requirements:*

- **FR-006**: System MUST authenticate users via [NEEDS CLARIFICATION: auth method not specified]
- **FR-007**: System MUST retain user data for [NEEDS CLARIFICATION: retention period not specified]

### Key Entities *(include if feature involves data)*

- **[Entity 1]**: [What it represents, key attributes without implementation]
- **[Entity 2]**: [What it represents, relationships to other entities]

## Success Criteria *(mandatory)*

<!--
  Define measurable, technology-agnostic outcomes. Include user-task success,
  performance, quality, and safety outcomes where relevant.
-->

### Measurable Outcomes

- **SC-001**: [Measurable metric, e.g., "Arabic marketers can publish a landing page from a template in under 10 minutes"]
- **SC-002**: [Performance or reliability metric]
- **SC-003**: [User success metric]
- **SC-004**: [Business or operational metric]

## Assumptions

- [Assumption about target users]
- [Assumption about scope boundaries]
- [Assumption about data/environment]
- [Dependency on existing system/service]
