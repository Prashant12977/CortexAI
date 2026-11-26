# Cortex AI — Project Brief

## Identity

**Project:** Cortex — Organizational Intelligence Platform  
**Tagline:** Where Organizational Knowledge Becomes Organizational Intelligence.  
**Academic context:** B.Tech minor project; implementation should be ambitious but feasible, understandable and defensible.

## Definition

Cortex is a web-based Organizational Intelligence Platform that captures knowledge from authorized organizational work sources, transforms raw information into structured reusable knowledge, maintains an evolving organizational memory, and uses that memory to provide context-aware AI assistance grounded in organizational evidence.

The initial system is for **one organization/workspace**. Multi-tenant SaaS is future scope.

## Problem
Organizational knowledge is fragmented across documents, meetings, conversations, projects, employees and tools. Useful decisions, procedures, lessons, technical context and commitments may be difficult to find or disappear when people leave or work moves on. Cortex aims to preserve and make this knowledge reusable.

## Product positioning
Cortex is:
- an organizational knowledge capture and transformation platform;
- an organizational memory;
- a context layer for AI and users;
- a permission-aware knowledge retrieval and intelligence workspace.

Cortex is not:
- a generic chatbot;
- an ERP, CRM, HRMS or project-management replacement;
- a literal operating system;
- a surveillance/employee-monitoring product;
- an autonomous agent in the initial implementation.

## Core lifecycle

**Capture → Transform → Organize → Connect → Retrieve → Understand → Evolve**

- **Capture:** receive authorized sources via Capture Center and, later, approved integrations/Local Agent.
- **Transform:** extract and analyze content; create structured knowledge artifacts.
- **Organize:** maintain artifacts, metadata, source provenance, projects and lifecycle.
- **Connect:** relate knowledge to sources, projects, decisions and other artifacts.
- **Retrieve:** permission-aware keyword/semantic/hybrid retrieval.
- **Understand:** generate grounded answers and useful summaries from selected context.
- **Evolve:** review, edit, version, archive, supersede and improve knowledge.

## Core pillars
1. Knowledge Capture
2. Knowledge Transformation
3. Organizational Memory
4. Contextual Intelligence
5. Organizational Awareness

## Initial users and roles
- **Super Admin:** initial organization owner; full organization-level control.
- **Admin:** delegated administration based on implemented permissions.
- **Member:** capture knowledge, access permitted knowledge, use AI and manage permitted resources.

The exact permission matrix must be explicit in implementation. Do not assume all Admin permissions are identical to Super Admin.

## Initial scope
- Authentication and RBAC
- Single organization/workspace
- Members
- Projects
- Capture Center and capture sessions
- Manual uploads and text capture
- Source processing and knowledge extraction
- Standardized Markdown knowledge artifacts
- Knowledge repository and search
- Source provenance and related knowledge
- Review/approval governance
- Context Engine / permission-aware retrieval
- Cortex AI question answering and citations
- Conversation history
- Basic dashboard
- Activity/audit logs
- Local Agent foundation and approved device inventory, phased according to implementation plan

## Source collection direction
Manual Capture Center is the reliable universal intake. Candidate sources include documents, meeting recordings/transcripts, AI assistant exports, email exports and user-submitted notes. Automated collection must use valid mechanisms such as authorized APIs/OAuth, configured local filesystem access, user-initiated capture or approved extension workflows. Do not assume one Local Agent can automatically read every cloud app.

Teams direct integration is deferred. Users can upload meeting recordings or transcripts in the current plan.

## Knowledge artifact principle
A single source can produce multiple focused knowledge artifacts. Preserve the original source and keep derived knowledge separate. Artifacts should be traceable to capture/source and project/member context where applicable.

## Success criteria
The core product is useful when a user can:
1. securely access the organization workspace;
2. submit a source through Capture Center;
3. see real processing status;
4. receive useful, structured knowledge artifacts;
5. review/approve or correct generated knowledge;
6. find knowledge by keyword and meaning;
7. ask Cortex a question;
8. receive an answer grounded in permitted knowledge;
9. inspect the sources supporting the answer;
10. maintain the knowledge over time.
