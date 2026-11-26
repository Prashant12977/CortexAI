# Cortex AI — Coding Agent Handoff

This folder is the authoritative handoff package for implementing Cortex AI. The agent should read the core files before making changes.

## Read order
1. `AGENTS.md` — non-negotiable working rules and source-of-truth hierarchy.
2. `PROJECT_BRIEF.md` — product definition, goals, boundaries and MVP.
3. `SYSTEM_DESIGN.md` — modules, architecture, data model, processing and security.
4. `IMPLEMENTATION_PLAN.md` — staged build order, tasks and acceptance criteria.
5. `UI_PLAN.md` — approved UI/UX direction and frontend execution requirements.
6. `DECISIONS.md` — adopted decisions, superseded historical decisions and open choices.

The two reference files are background material. They are not permission to reintroduce decisions explicitly superseded in the current documents.

## First instruction to the coding agent

Do not begin coding immediately. First inspect the existing repository and report:
- repository structure and current branch;
- framework, dependencies and existing app state;
- existing backend/frontend/API/authentication/database implementation;
- current test, lint, type-check and build status;
- conflicts between the repository and this handoff package;
- what is already implemented and what should be preserved.

Then propose a short, repository-aware execution plan for the **first implementation phase only**. Wait for approval if the user has not already explicitly asked the agent to execute that phase. Do not rewrite or scaffold the entire application blindly.

## Core files
- `AGENTS.md`: rules for all implementation work.
- `PROJECT_BRIEF.md`: what Cortex is and what it is not.
- `SYSTEM_DESIGN.md`: architecture and module responsibilities.
- `IMPLEMENTATION_PLAN.md`: build phases and scope.
- `UI_PLAN.md`: UI/UX source of truth.
- `DECISIONS.md`: decision register and unresolved decisions.

## Suggested repository placement
Copy these files into the project repository root. Keep the reference files in a `/docs/reference` directory if desired. `AGENTS.md` should live at the repository root so coding agents can discover it.
