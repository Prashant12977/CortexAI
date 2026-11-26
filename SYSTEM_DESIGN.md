# Cortex AI — System Design

## 1. Architecture approach

Use a **modular application architecture** for the initial build. Avoid premature microservices. The web frontend, backend API, knowledge processing, memory/storage and intelligence responsibilities should be clearly separated, but can initially deploy as a small number of applications/processes.

Current form: **single organization/workspace**, not multi-tenant SaaS. Organization/member/project/role concepts remain useful for internal organization and authorization.

## 2. High-level component flow

```text
Authorized Organizational Sources
  ├─ Manual documents and notes
  ├─ Meeting recording/transcript uploads
  ├─ AI conversation exports
  ├─ Email exports/attachments (where supported)
  ├─ Selected local files (future Local Agent)
  └─ Approved integrations (future)
          │
          ▼
Capture Layer
  ├─ Capture Center / Capture Sessions
  ├─ Source/File records
  └─ Future Agent Sync / Integrations
          │
          ▼
Knowledge Processing Pipeline
  ├─ Validation and source detection
  ├─ Extraction / OCR / transcription
  ├─ Cleaning and normalization
  ├─ Classification and analysis
  ├─ Knowledge extraction
  ├─ Artifact generation (COKF)
  └─ Provenance and metadata linking
          │
          ▼
Organizational Memory
  ├─ Raw source storage
  ├─ Derived knowledge artifacts
  ├─ Metadata and lifecycle
  ├─ Relationships
  ├─ Versions/reviews
  └─ Search index/embeddings
          │
          ▼
Context Engine
  ├─ Query understanding
  ├─ Permission-aware retrieval
  ├─ Keyword + semantic/hybrid search
  ├─ Relevance selection
  ├─ Context assembly
  └─ LLM orchestration
          │
          ▼
Cortex AI Assistant
  ├─ Grounded answer
  ├─ Citations/provenance
  ├─ Follow-up context
  └─ Honest insufficient-evidence/error states
```

## 3. Application modules

### 3.1 Authentication & Access Control
- Login/logout and session handling.
- Authentication provider integration.
- Roles and permission checks.
- Member status.
- Secure administrative actions.
- Super Admin initialization for the first organization owner.

### 3.2 Organization & Workspace
- Organization profile and settings.
- Members and role assignment.
- Organization activity.
- Organization-level knowledge scope.

### 3.3 Projects
- Create, edit, archive/manage project status as supported.
- Project description/context.
- Project members.
- Capture and knowledge association.
- Project-scoped retrieval/context.

### 3.4 Capture Center
- Create capture session.
- Multi-file upload and manual text capture.
- Source type and optional project/context metadata.
- File validation and upload progress.
- Capture timeline/history.
- Session details and processing status.
- Retry/recovery for supported failures.
- Original source access based on permissions.

### 3.5 Local Agent (planned/phased)
- Agent registration and secure identity.
- Transparent configured source scope.
- Local folder/file capture where authorized.
- Device inventory collection limited to approved fields.
- Queue, retry and synchronization.
- Heartbeat/status/version.
- Offline handling.
- Source revocation/agent disablement.

The Local Agent is not a universal cloud-app connector. Cloud integrations use authorized APIs/OAuth or explicit capture mechanisms.

### 3.6 Knowledge Processing & Transformation
- Validate file/source.
- Extract content using supported parsers.
- OCR/transcription only when implemented and configured.
- Clean/normalize extracted content.
- Analyze source and classify knowledge.
- Extract multiple focused artifacts where appropriate.
- Generate metadata and standardized Markdown.
- Preserve source links, provenance, timestamps and project/member context.
- Create embeddings/indexes.
- Report real processing states and errors.

Suggested lifecycle:
`Captured → Validated → Processing → Analyzing → Knowledge Generated → Indexed → Completed`

Additional states may include `Failed`, `Partially Completed`, `Awaiting Review`, `Requires Attention`, and `Cancelled`.

### 3.7 Cortex Open Knowledge Format (COKF)

Working design: Markdown with YAML frontmatter and type-specific structured sections. The exact schema should be validated before implementation and versioned.

Common metadata may include:
- unique knowledge ID;
- title;
- knowledge type;
- source type;
- created/updated timestamps;
- contributor/system origin;
- project association;
- review/status;
- confidence only when meaningful and defined;
- tags;
- source capture/file references;
- version;
- access scope/permission metadata.

Knowledge types may include decision, requirement, procedure, problem/solution, fact, technical knowledge, meeting summary, action item, project update, lesson learned, risk and commitment.

Do not force every type into identical content sections. Do not use confidence scores unless a method and user-facing interpretation are defined.

### 3.8 Organizational Memory / Knowledge Repository
- Raw sources and derived artifacts remain separate.
- Knowledge list/detail.
- Metadata, project, type, tags and source links.
- Search and filtering.
- Editing and versioning.
- Review/approval and rejection.
- Archive/supersede lifecycle.
- Related knowledge.

### 3.9 Knowledge Relationships
Start with relational records/foreign keys in PostgreSQL. Relationships can include source-of, related-to, belongs-to-project, derived-from, supersedes, resolves, implements or other justified types. Do not introduce Neo4j in the MVP without a concrete approved need.

### 3.10 Context Engine
- Query understanding (keep initially simple).
- Project/topic context where selected.
- Permission-aware retrieval.
- Keyword retrieval and semantic retrieval; hybrid retrieval can be phased.
- Candidate selection and context assembly.
- LLM call through provider abstraction.
- Citation mapping.
- Insufficient evidence handling.

**Security invariant:** permission filtering must happen before protected content is included in the prompt/context sent to the LLM.

### 3.11 Cortex AI Assistant
- Organizational Q&A.
- Project-aware Q&A.
- Follow-up questions.
- Conversation history.
- Citations and source inspection.
- Honest limitations and insufficient-knowledge responses.
- Save answer as knowledge only through a supported explicit workflow.

### 3.12 Device & Asset Management
- Registered device records.
- Device-to-member association.
- Approved inventory fields.
- Agent status/last-seen.
- Agent version and registration/revocation.
- No surveillance features.

### 3.13 Activity & Audit
- Capture actions.
- Knowledge lifecycle actions.
- Project/member administrative actions.
- Agent/device registration and status events.
- Security-relevant administrative events.
- Filtering and detail.

### 3.14 Dashboard
- Real data only.
- Knowledge overview and review queue.
- Capture and processing overview.
- Project overview.
- Member/device/agent status where implemented.
- Recent meaningful activity.
- Empty states for a new organization.

### 3.15 Future Integrations
Potential future adapters: AI assistants, Gmail/Outlook, Teams, Zoom, browser extension, GitHub and other tools. Each integration must have an approved collection method, permission scope, failure handling and source provenance. Future integrations feed the same Capture/Processing pipeline.

## 4. Knowledge flow details

### Capture flow
1. User starts or selects a capture session.
2. User uploads files or enters text.
3. Backend validates source and metadata.
4. Original source is stored securely.
5. A processing job is created.
6. Extraction/processing runs asynchronously where appropriate.
7. AI analysis extracts useful knowledge.
8. One or more knowledge artifacts are generated.
9. Artifacts are stored and indexed.
10. Review state is assigned according to governance policy.
11. Capture/session is marked completed or partially completed with honest status.

### Query flow
1. Authenticate user.
2. Resolve organization/member and applicable permissions.
3. Parse the question and optional project context.
4. Retrieve only authorized knowledge candidates.
5. Select relevant evidence and assemble context.
6. Call configured LLM through provider interface.
7. Map citations to actual source/knowledge records.
8. Return answer and source references.
9. Persist conversation according to supported retention behavior.

## 5. Data model — initial entities

- Organization
- Member/User
- Role
- Permission (if permission granularity requires a separate model)
- Project
- ProjectMember
- CaptureSession
- CaptureRecord
- SourceFile
- ProcessingJob
- KnowledgeArtifact
- KnowledgeVersion
- KnowledgeRelationship
- ReviewRecord
- Conversation
- Message
- Citation
- Device
- Agent
- AgentHeartbeat/status record
- ActivityLog/AuditLog

Use foreign keys and explicit ownership/scope. Avoid storing the same data in multiple places without a reason.

## 6. Storage responsibilities

- **PostgreSQL:** core entities, metadata, statuses, access rules, relationships, conversations and records.
- **Object/file storage:** uploaded raw source files and other binary assets.
- **Markdown artifact storage:** generated knowledge files, whether filesystem/object storage or database-backed, to be decided during repository inspection and implementation design.
- **Vector/embedding index:** semantic retrieval. Current baseline is ChromaDB; pgvector is an alternative that must be chosen explicitly before implementation. Do not run both by default.

## 7. Security and privacy invariants

- Single-organization scope is the current product boundary.
- Role and permission checks are server-side.
- Protected content is filtered before LLM context construction.
- Raw sources and derived artifacts have access controls.
- Agent collection is transparent, configured and revocable.
- No password/keystroke/screenshot/personal-browsing surveillance.
- Upload validation, limits, error handling and safe storage.
- Secret handling via environment/secret configuration; never commit secrets.
- Log only operational and relevant audit events.

## 8. Deployment direction

Initial deployment can use separate frontend/backend processes with PostgreSQL and file storage. Docker is useful for reproducibility. Exact deployment provider choices are not locked by this handoff; inspect current project setup and choose the simplest reliable deployment path.

## 9. Architectural non-goals for MVP

- Microservices architecture.
- Full graph database.
- Multi-tenant SaaS and billing.
- Universal cloud application scraping.
- Autonomous agent with unrestricted actions.
- Automatic access to all employee content.
- Enterprise endpoint management replacement.
- Advanced proactive analytics.
