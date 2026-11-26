# Cortex Project To-Do List

Follow `AGENTS.md`, `DECISIONS.md`, and `IMPLEMENTATION_PLAN.md`. Build
incrementally toward the capture-to-grounded-answer MVP. Keep deferred
features out of scope and resolve open decisions before they block a phase.

## Project setup

- [x] Initialize Git on `main` and connect it to the public GitHub repository.
- [x] Add the supplied product, design, architecture, implementation, and agent
  handoff documents to the repository.
- [x] Create the initial Git checkpoint.

## Phase 0 — Repository audit and safe baseline

- [x] Confirm repository, branch, status, history, and tracked files.
- [x] Confirm the starting point contains handoff documents only, with no
  existing application code or prior baseline checks.
- [x] Run initial lint, build, and backend test checks after scaffolding.
- [x] Confirm no existing authentication, authorization, APIs, persistence,
  processing, UI, or tests needed preservation.
- [x] Identify the documented frontend/backend direction and preserve open
  decisions.

## Phase 1 — Architecture and foundation

- [x] Scaffold a Next.js/React/TypeScript frontend and FastAPI backend.
- [x] Establish clear frontend/backend boundaries and local run instructions.
- [x] Add a minimal API liveness endpoint and focused test.
- [x] Keep the initial UI simple and avoid finalizing the TBD palette.
- [ ] Document environment/secrets, API/error, database migration, logging,
  and job-processing conventions without choosing unresolved infrastructure.
- [x] Run the frontend lint/build and backend tests; verify both apps run locally.

## Phase 2 — Authentication, organization, and RBAC

- [x] Record Supabase Auth, one-time owner bootstrap followed by invitation-only
  enrollment, and the approved role boundaries in `DECISIONS.md`.
- [ ] Implement authentication and single-organization setup.
- [x] Define the Super Admin, Admin, and Member permission matrix.
- [ ] Enforce permissions server-side for routes and actions.
- [ ] Test role restrictions at the API level.

## Phase 3 — Projects and workspace

- [ ] Implement authorized project create/list/detail/edit workflows.
- [ ] Add project metadata/context and membership only as required.
- [ ] Implement responsive workspace navigation and shell.

## Phase 4 — Capture Center and source storage

- [ ] Implement capture sessions, text capture, and supported multi-file upload.
- [ ] Enforce file type/size validation and secure raw-source storage.
- [ ] Add capture history/details with truthful progress, status, and errors.
- [ ] Verify users can retrieve capture details and invalid files fail safely.

## Phase 5 — Knowledge processing

- [ ] Select supported source formats and processing/job approach.
- [ ] Implement extraction, normalization, classification, and knowledge
  generation for supported sources.
- [ ] Link each generated artifact to its source and capture.
- [ ] Handle retries, partial failures, and processing errors honestly.
- [ ] Demonstrate one supported source end-to-end.

## Phase 6 — COKF and knowledge repository

- [ ] Finalize and validate the versioned COKF metadata/schema and storage
  strategy.
- [ ] Generate and store Markdown knowledge artifacts separately from raw
  sources.
- [ ] Implement browse, detail, search/filter, provenance, and correction.
- [ ] Add relationships and version history where defined.

## Phase 7 — Review and governance

- [ ] Define review requirements and lifecycle transitions.
- [ ] Implement permission-aware approval, rejection, correction, and
  archive/supersede actions.
- [ ] Record review actor, time, and reason where appropriate.

## Phase 8 — Context engine and search

- [ ] Choose one vector backend (ChromaDB or pgvector) based on repository and
  operational constraints.
- [ ] Implement indexing and keyword/semantic retrieval; add hybrid retrieval
  if practical.
- [ ] Filter by authorization before protected content enters LLM context.
- [ ] Test retrieval relevance and unauthorized-content exclusion.

## Phase 9 — Cortex assistant

- [ ] Select/configure an LLM provider behind a provider abstraction.
- [ ] Implement grounded Q&A, real citation mapping, and source inspection.
- [ ] Add supported conversation/follow-up behavior and honest loading, error,
  and insufficient-evidence states.
- [ ] Test citations and permission filtering.

## Phase 10 — Dashboard, activity, and organization awareness

- [ ] Build an overview from real system data, with useful empty/loading/error
  states.
- [ ] Show actual capture/processing, knowledge/review, project, and activity
  information where implemented.
- [ ] Add proportionate activity/audit logging; do not fabricate metrics.

## Phase 11 — Local Agent (after API contracts)

- [ ] Define agent identity, device fields, approved source scope, and revocation.
- [ ] Implement only transparent, configured, authorized collection.
- [ ] Add sync queue/retries/offline handling and agent/device status.
- [ ] Verify registration, approved-source sync, status, and revocation.

## Phase 12 — Quality and regression

- [ ] Review the complete core workflow and permission/error paths.
- [ ] Check responsive layouts at the UI plan's target viewports.
- [ ] Review keyboard access, focus, semantics, contrast, and reduced motion.
- [ ] Run applicable lint, type-check, tests, and production build.
- [ ] Inspect rendered UI and review the final diff and documentation.
- [ ] Document remaining limitations; confirm no fake data, secrets, or
  unrelated changes.

## Decisions to resolve when relevant

- [ ] Finalize COKF schema/versioning and artifact storage.
- [ ] Choose ChromaDB or pgvector; do not use both by default.
- [ ] Choose LLM provider/model, transcription method, and processing queue.
- [ ] Define supported input formats and review/auto-accept policy.
- [ ] Define exact RBAC matrix and raw-source retention/deletion policy.
- [ ] Decide Local Agent packaging/platform support and approved inventory.
- [ ] Choose deployment/environment strategy.
- [ ] Approve the final brand palette and typography before treating design
  tokens as final.

## Deferred — not MVP

- [ ] Approved third-party integrations and automatic source collection.
- [ ] Multi-tenant SaaS, billing, and tenant separation.
- [ ] Graph database, advanced graph RAG, and proactive insights.
- [ ] Autonomous agent/workflow execution.
