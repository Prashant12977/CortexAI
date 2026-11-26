# Cortex AI — Decision Register

This register reflects current project direction. Historical reference documents may contain older decisions; when superseded below, the newer decision governs implementation.

## Adopted/current

| ID | Decision | Status | Notes |
|---|---|---|---|
| C-001 | Product name: Cortex — Organizational Intelligence Platform | Adopted | Do not use “Operating System” as formal product terminology. |
| C-002 | Tagline: Where Organizational Knowledge Becomes Organizational Intelligence. | Adopted | |
| C-003 | Product core is organizational knowledge capture, transformation, memory and contextual intelligence. | Adopted | RAG is an enabling capability, not the whole product. |
| C-004 | Current deployment/product scope is one organization/workspace. | Adopted; supersedes multi-tenant SaaS for current implementation | SaaS/multi-tenant is future scope. |
| C-005 | Responsive web application is the primary interface. | Adopted | |
| C-006 | Capture Center is the universal manual intake. | Adopted | Future integrations feed the same processing pipeline. |
| C-007 | Meeting platform integrations are deferred; manual recordings/transcripts upload through Capture Center. | Adopted for current scope | Do not build Teams integration now. |
| C-008 | Knowledge transformation produces standardized Markdown-based artifacts with metadata. | Adopted direction | Exact schema and versioning to be finalized before implementation. |
| C-009 | Original sources and derived knowledge are separate and traceable. | Adopted | Preserve provenance. |
| C-010 | One source may produce multiple focused knowledge artifacts. | Adopted | Avoid one oversized summary artifact. |
| C-011 | Human review/approval is part of knowledge governance. | Adopted direction | Exact automatic/manual review policy remains open. |
| C-012 | Local Agent is planned for authorized capture, synchronization and approved device inventory. | Adopted direction; implementation phased | Not universal cloud-app access; not surveillance. |
| C-013 | Cloud integrations use valid authorized APIs/OAuth or explicit capture mechanisms. | Adopted principle | Avoid brittle scraping as default. |
| C-014 | RBAC and permission filtering are enforced server-side. | Adopted | Filter before protected context reaches the LLM. |
| C-015 | Modular architecture, not premature microservices. | Adopted | Keep modules clear and testable. |
| C-016 | Provider-agnostic LLM abstraction is desired. | Adopted direction | Provider/model choice may remain an implementation decision. |
| C-017 | Current frontend direction: Next.js/React, TypeScript and Tailwind. | Current baseline | Inspect existing repository before changing stack. |
| C-018 | Backend direction: Python/FastAPI. | Current baseline | Inspect repository before scaffolding. |
| C-019 | PostgreSQL/Supabase is the relational data direction. | Current baseline | Exact deployment and schema decisions may be open. |
| C-020 | ChromaDB or pgvector may be used, but choose one explicitly for MVP. | Open implementation choice | Project memory previously favored ChromaDB; later material considered pgvector. Do not install/use both by default. |
| C-021 | LlamaIndex is a candidate/adopted orchestration direction, subject to repository audit. | Current baseline | Keep processing logic modular. |
| C-022 | Neo4j/full graph DB is deferred. | Deferred | Start relationships in PostgreSQL. |
| C-023 | UI design direction: Calm Intelligence. | Adopted | UI_PLAN.md is the frontend source of truth. |
| C-024 | Final color palette remains TBD unless a current explicit decision/reference is found. | Open | Coding agent must not invent final palette. |
| C-025 | Multi-tenant SaaS, billing and tenant separation are not current MVP scope. | Deferred | Future scope only. |
| C-026 | Do not build autonomous agent/workflow execution in the initial implementation. | Deferred | Capture/transform/retrieve first. |
| C-027 | Use Supabase Auth for application authentication. | Adopted | User decision, 2026-11-26. Chosen over Entra ID or self-managed auth to align with the current Supabase direction; this does not by itself decide where relational data is hosted. |
| C-028 | Bootstrap the first organization owner once, then allow membership by invitation only. | Adopted | User decision, 2026-11-26. Avoids ongoing public registration; bootstrap must be protected and safe against concurrent first-user creation. |
| C-029 | Super Admin owns organization-level control; Admin can manage members, projects, captures and knowledge review, but cannot transfer ownership or grant Super Admin; Members can submit captures and use authorized knowledge. | Adopted | User decision, 2026-11-26. Server-side enforcement is mandatory. |

## Explicitly superseded historical decisions

| Historical decision | Current replacement |
|---|---|
| Multi-tenant SaaS as current architecture (Project Memory D-11) | Single organization/workspace for current build; multi-tenancy future scope |
| Original manual-upload-only knowledge intake | Capture Center plus future authorized integrations and Local Agent, all sharing the processing pipeline |
| Teams direct integration as immediate feature | Deferred; manual recordings/transcripts upload now |
| Generic basic RAG as the product identity | Organizational knowledge capture/transformation/memory/contextual intelligence; RAG is a core mechanism |

## Open decisions to resolve through repository audit/design

1. Exact COKF schema, artifact directory/storage strategy and schema versioning.
2. Vector backend: ChromaDB vs pgvector. Select one after examining existing code and operational constraints.
3. Exact LLM provider/model and transcription method; avoid hardcoding provider into core logic.
4. Background job/queue technology for processing.
5. Which source formats are actually supported in the first release.
6. Which knowledge types require mandatory human approval vs can be auto-accepted.
7. Local Agent packaging, platform support and source-permission UI.
8. Storage retention/deletion policy for raw sources and generated artifacts.
9. Deployment provider and environment strategy.
10. Final approved brand palette and typography decisions.

## Change protocol

When a new major decision is made, add a new ID and record date, context, alternatives, reason, impact and superseded decision. Do not rewrite historical records as if the old decision never existed.
