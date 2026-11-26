# Cortex AI — Implementation Plan

This is the proposed build sequence. The coding agent must first audit the actual repository and reconcile existing code before executing phases. Do not assume the repository is empty.


## Phase 0 — Repository Audit and Safe Baseline

**Goal:** Understand the existing code and avoid destructive scaffolding.

- Inspect repository structure, branch, commits and status.
- Identify frontend/backend, packages, framework versions and conventions.
- Inspect existing auth, database, APIs, UI, processing and tests.
- Run baseline lint/type/test/build commands where available.
- Report gaps, conflicts, current implementation and proposed first-phase scope.
- Create a safe branch/checkpoint if practical.

**Acceptance:** A factual repository audit exists; no unrelated changes.

## Phase 1 — Architecture/Foundation

**Goal:** establish the maintainable application foundation.

- Confirm app/module boundaries.
- Confirm environment configuration and secrets strategy.
- Confirm API conventions and error handling.
- Confirm database migration strategy.
- Confirm logging and job-processing strategy.
- Confirm frontend design tokens/component conventions per UI plan.
- Establish minimal health/status checks.

**Acceptance:** Application runs locally; documented configuration; baseline checks pass.

## Phase 2 — Authentication, Organization and RBAC

**Goal:** secure single-organization workspace.

- Authentication flows.
- Organization bootstrap/setup.
- First user becomes Super Admin.
- Member creation/invitation as supported.
- Admin/member role assignment.
- Server-side permission checks.
- Protected routes and actions.
- Member status management.

**Acceptance:** Role restrictions tested at API level, not only UI.

## Phase 3 — Projects and Core Workspace

**Goal:** establish organization/project context.

- Project create/list/detail/edit.
- Project membership if required.
- Project metadata and context.
- Workspace navigation and responsive shell.

**Acceptance:** Project operations work and permission rules are enforced.

## Phase 4 — Capture Center and Source Storage

**Goal:** reliable universal manual intake.

- Capture session creation.
- Upload multiple files.
- Manual text/paste capture.
- Source type selection.
- Optional project/context metadata.
- File validation and size/type limits.
- Secure raw-source storage.
- Capture history and session detail.
- Real upload/progress/status/error states.

**Acceptance:** User can submit supported files/text, retrieve capture details, and see truthful status. Invalid files are handled safely.

## Phase 5 — Knowledge Processing Pipeline

**Goal:** turn supported raw sources into usable extracted content and knowledge.

- Processing jobs/background execution as appropriate.
- Supported document extraction.
- Audio/video transcription only for supported formats and configured service/model.
- Cleaning and normalization.
- Classification.
- Knowledge extraction.
- Multiple artifacts per source where appropriate.
- Source/capture linking.
- Error/retry/partial-failure handling.

**Acceptance:** At least one supported source type goes end-to-end from upload to generated knowledge with provenance. No fake completion statuses.

## Phase 6 — COKF and Knowledge Repository

**Goal:** standardized reusable organizational memory.

- Validate COKF metadata/schema.
- Generate Markdown artifacts.
- Store artifacts and metadata.
- Browse/list/detail.
- Search/filter by type/project/source/date/status.
- Source provenance and original source access.
- Edit/correct artifacts.
- Related knowledge relationships.
- Version history where implemented.

**Acceptance:** Generated knowledge is viewable, searchable, traceable, editable and linked to its source.

## Phase 7 — Review and Governance

**Goal:** prevent AI-generated errors from becoming unquestioned organizational truth.

- Review states.
- Approve/reject workflow.
- Reviewer identity/time/reason as appropriate.
- Archive/supersede lifecycle.
- Permission-aware actions.

**Acceptance:** Review transitions are enforced and recorded. AI-generated content can be corrected.

## Phase 8 — Context Engine and Search

**Goal:** retrieve relevant authorized knowledge.

- Choose vector backend explicitly (ChromaDB or pgvector; not both without reason).
- Embedding/index pipeline.
- Semantic retrieval.
- Keyword retrieval.
- Hybrid retrieval if practical.
- Project context.
- Permission filtering before LLM context.
- Context assembly.
- Relevance and insufficient-evidence behavior.

**Acceptance:** Queries return relevant authorized evidence; unauthorized content cannot enter the LLM context.

## Phase 9 — Cortex AI Assistant

**Goal:** provide grounded organizational Q&A.

- Provider abstraction.
- Configured LLM.
- Question/answer workflow.
- Source citation mapping.
- Citation/source inspection.
- Conversation history.
- Follow-up context.
- Insufficient evidence, error and loading states.

**Acceptance:** Answers cite real retrieved sources; hallucinated/unsupported citations are not displayed; permissions tests pass.

## Phase 10 — Dashboard, Activity and Organization Awareness

**Goal:** provide real operational overview.

- Dashboard based on actual system data.
- Capture/processing status.
- Knowledge overview/review queue.
- Projects and recent activity.
- Activity/audit log.
- Basic device/agent overview only when implemented.

**Acceptance:** No fake metrics; empty state and loading/error states work.

## Phase 11 — Local Agent Foundation (separate workstream; start only after API contracts)

**Goal:** establish an authorized local client.

- Agent identity and registration.
- Secure communication.
- Configured source selection.
- Approved device inventory fields.
- File/folder capture for explicitly configured sources.
- Sync queue, retries and offline handling.
- Heartbeat/version/status.
- Member/device association.
- Revocation/disable flow.

**Acceptance:** Agent can register, sync an approved source and report device/agent status; scope is transparent and revocable. No surveillance behavior.

## Phase 12 — Quality, Responsive UI and Regression

- Review all implemented workflows.
- Responsive testing at desktop, laptop, tablet and mobile widths.
- Keyboard/focus/accessibility review.
- Lint/type/test/build.
- API/security tests for permissions.
- Processing failure/retry tests.
- UI regression review.
- Review Git diff and docs.

**Acceptance:** Core end-to-end workflow is stable and limitations are documented.

## Future phases (not MVP)

- Approved integrations: email, AI assistants, meeting platforms, browser extension, GitHub and others.
- Automatic source collection.
- Advanced knowledge relationship discovery.
- Conflict/outdated/duplicate detection.
- Knowledge gap analysis.
- Proactive insights.
- Multi-tenant SaaS.
- Graph database/advanced graph RAG.
- Autonomous agent/workflow execution.

## Core end-to-end MVP target

A user should be able to:
1. authenticate;
2. work in a single organization;
3. create or select a project;
4. upload a supported source through Capture Center;
5. see processing status;
6. receive structured knowledge artifacts;
7. review and approve/correct knowledge;
8. search the knowledge;
9. ask Cortex a question;
10. receive a grounded answer with real citations;
11. inspect the cited source;
12. see relevant capture/knowledge activity.

Build toward this vertical slice before expanding scope.
