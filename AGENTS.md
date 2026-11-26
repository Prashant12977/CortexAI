# Cortex AI — Agent Engineering Rules

These rules apply to coding agents working on Cortex. They are project constraints, not suggestions.

## 1. Source-of-truth order

When documents conflict, use this order:
1. Explicit latest user decision in the current project conversation.
2. `DECISIONS.md` (current decisions; superseded entries are historical only).
3. `PROJECT_BRIEF.md`.
4. `SYSTEM_DESIGN.md`.
5. `IMPLEMENTATION_PLAN.md` for phase/scope.
6. `UI_PLAN.md` for frontend and UX.
7. `PROJECT_MEMORY_REFERENCE.md` and `MARKET_ANALYSIS_REFERENCE.md` as historical/background context.

If a conflict materially affects implementation and cannot be resolved from this hierarchy, stop and report the conflict. Do not silently invent a decision.

## 2. Product boundaries

- Cortex is an Organizational Intelligence Platform centered on organizational knowledge capture, transformation, memory and contextual intelligence.
- Current implementation is a **single organization/workspace**. Do not implement multi-tenant SaaS tenancy or tenant billing unless explicitly approved.
- The product is a responsive web application, supported by a planned local agent.
- The local agent must only collect configured, authorized sources and transparent inventory information.
- Capture Center is the universal manual ingestion route. Future integrations feed the same processing pipeline.
- Teams direct integration is deferred. For the current scope, users can upload recordings/transcripts.
- Do not imply universal automatic access to AI chats, email, meetings, browsers or local files. Use supported, authorized mechanisms.
- Knowledge artifacts must preserve provenance and link back to source/capture when possible.
- Do not describe basic RAG as a fully autonomous agent.

## 3. Privacy and security

- Enforce authorization server-side. UI visibility is not a security boundary.
- Check permissions before protected content is included in retrieval or sent to an LLM.
- Never collect keystrokes, passwords, indiscriminate screenshots, private personal files or unapproved browsing/activity data.
- Local Agent source collection must be transparent, configured and revocable.
- Never expose secrets, API keys, tokens or credentials in logs, UI, commits or generated files.
- Validate uploads and inputs; enforce size/type limits; handle unsafe files defensively.
- Use least privilege for integrations and agent scopes.
- Keep audit/activity logging proportionate and focused on system actions, not employee surveillance.

## 4. Engineering workflow

Before changing code:
1. Inspect the repository, branch, existing architecture and relevant files.
2. Identify the exact requested phase and scope.
3. Record baseline checks (lint, type check, tests, build) where available.
4. Preserve existing working behavior and API contracts unless change is explicitly part of scope.
5. Make a safe Git checkpoint/branch when practical.

During work:
- Execute the requested scope; do not return plan-only when asked to implement.
- Do not refactor unrelated areas.
- Prefer modular architecture over premature microservices.
- Avoid overengineering, unnecessary abstractions and speculative dependencies.
- Do not add fake data to production flows.
- Do not implement unsupported UI controls or workflows.
- Keep error handling, loading, empty, success and retry states honest.
- Write code that can be understood and defended by a B.Tech project team.
- Update documentation when a decision or interface changes.

After work:
- Run appropriate tests, lint, type checking and build.
- Inspect actual rendered UI for frontend tasks and test responsive behavior.
- Review the Git diff for accidental changes, secrets or unrelated modifications.
- Report files changed, what works, checks run and results, limitations and next steps. Do not claim checks that were not run.

## 5. UI rules

Follow `UI_PLAN.md` as the frontend source of truth.
- Design direction: Calm Intelligence.
- Avoid generic AI/SaaS template patterns, decorative gradients/glows, filler illustrations, fake metrics and unnecessary card grids.
- Knowledge, evidence, provenance and real states are first-class.
- Do not invent or silently finalize colors while the palette is marked TBD.
- Use semantic tokens, meaningful responsive behavior and accessibility considerations.
- Distinct pages may have distinct layouts; do not force every page into one template.
- Controls must be functional or clearly non-interactive.

## 6. Architecture rules

- Keep frontend and backend responsibilities clearly separated.
- Use the API layer for application access; do not bypass server authorization from the client.
- Keep source files, derived text, knowledge artifacts, metadata and embeddings conceptually distinct.
- Raw source is retained as provenance according to storage policy; generated knowledge is a separate artifact.
- One capture/source can produce multiple knowledge artifacts.
- Use the standard Cortex Open Knowledge Format (Markdown plus metadata) as the intended artifact format, but validate the schema and file organization before committing a final implementation.
- Keep the LLM provider behind a provider abstraction where practical.
- Avoid locking core application logic to one model provider.
- Use background processing for long-running ingestion/transcription where appropriate; provide real processing states.
- Do not add a graph database or microservices unless approved and justified by a concrete need.

## 7. Scope discipline

Build in the order defined by `IMPLEMENTATION_PLAN.md`. Do not jump to advanced integrations, autonomous agents, multi-tenant SaaS, knowledge graph infrastructure or proactive intelligence while the core ingestion-to-grounded-answer workflow is incomplete.

## 8. Decision handling

For any meaningful architectural change, record:
- decision and date;
- problem/context;
- alternatives considered;
- reason;
- impact/dependencies;
- status;
- what it supersedes.

Do not erase historical decisions. Mark them superseded and record the replacement.
