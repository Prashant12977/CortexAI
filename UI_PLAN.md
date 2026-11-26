# Cortex UI Plan

## UI/UX Design System and Implementation Master Plan

**Product:** Cortex -- Organizational Intelligence Platform\
**Tagline:** Where Organizational Knowledge Becomes Organizational
Intelligence.\
**Purpose:** This document is the single source of truth for UI/UX
decisions and frontend implementation. The coding agent must follow it
when designing, implementing, reviewing, or refining the Cortex
interface.

------------------------------------------------------------------------

# 1. Product and UI Purpose

Cortex is an organizational context and knowledge intelligence layer. It
captures, organizes, retrieves, contextualizes, connects, and helps
validate organizational knowledge across existing tools and sources.

The interface must communicate: - Knowledge is the core product. -
Context and evidence matter. - Answers should be traceable. -
Information should be structured and discoverable. - The application is
a workspace for real work, not an AI-themed marketing dashboard.

Cortex is not a generic chatbot, not a replacement for all existing
tools, and not a generic SaaS starter template.

## Core journey

**User Need → Question/Search → Organizational Context → Answer →
Evidence → Action**

## Core philosophy

**Capture → Understand → Connect → Learn → Validate → Evolve**

------------------------------------------------------------------------

# 2. Design Direction: Calm Intelligence

The approved direction is **Calm Intelligence**.

Combine: - **Editorial minimalism:** thoughtful typography, clear
hierarchy, deliberate whitespace, readable content. - **Restrained
structural/neo-brutalist influence:** crisp borders, alignment, clear
section structure, purposeful contrast. - **Selective spatial UI:**
contextual panels, source inspection, evidence views, and relationships
when they materially help the workflow. - **Subtle skeuomorphic
influence:** tactile file/source representations and meaningful
interaction feedback only where they support the metaphor or task.

The result should feel intelligent, precise, trustworthy,
knowledge-first, mature, and distinctive without being theatrical.

## Design principles

1.  Clarity before decoration.
2.  Content and workflow determine layout.
3.  Evidence and provenance are first-class UI elements.
4.  Structure should be visible but not noisy.
5.  Use whitespace deliberately, not excessively.
6.  Typography should do significant hierarchy work.
7.  Visual depth must communicate layering or interaction.
8.  Make important actions obvious without turning every element into a
    button.
9.  Keep information density appropriate to the task.
10. Design for real states and real data, not mock decoration.

------------------------------------------------------------------------

# 3. Brand and Color System

## 3.1 Final palette requirement

The final approved palette must be entered here with exact HEX values
before implementation is considered fully design-system-compliant. **Do
not treat previously suggested colors as finalized.** If the project
already contains a final palette decision, inspect project
documentation, CSS, and the user-provided reference before proposing a
replacement. Do not invent or silently finalize colors.

  Token                Final value   Usage
  -------------------- ------------- ----------------------------------------
  Brand / Primary      TBD           Primary identity and selected emphasis
  Brand / Dark         TBD           Active, hover, stronger emphasis
  Brand / Soft         TBD           Subtle selected/background treatment
  Canvas               TBD           Main application background
  Surface              TBD           Main content surfaces
  Surface / Elevated   TBD           Popovers, menus, floating panels
  Text / Primary       TBD           Main text
  Text / Secondary     TBD           Supporting text
  Text / Muted         TBD           Metadata and quiet labels
  Border               TBD           Default structural boundaries
  Border / Strong      TBD           Emphasis and active boundaries
  Success              TBD           Successful/completed states
  Warning              TBD           Attention or caution
  Error                TBD           Errors and destructive states
  Info                 TBD           Informational states

## 3.2 Color usage rules

-   Use brand color selectively; it must not dominate every screen.
-   Establish hierarchy through typography, alignment, spacing, and
    structure first.
-   Use semantic colors consistently and only for their meaning.
-   Do not use color alone to communicate status.
-   Maintain readable contrast.
-   Avoid arbitrary multi-color decoration.
-   No gradient backgrounds unless a specific product need is justified
    and approved.
-   No neon, cyberpunk, or glowing AI effects.
-   Avoid color-coded sections without a meaningful information model.
-   Selected, hover, focus, disabled, error, and success states must be
    clearly differentiated.

## 3.3 Theme strategy

Implement the currently supported theme only. Do not introduce a dark
theme or theme toggle as scope creep unless explicitly requested. If
dark mode is later approved, use semantic tokens and design it as a
deliberate system rather than mechanically inverting colors.

------------------------------------------------------------------------

# 4. Typography

Typography should create the visual hierarchy and editorial character of
Cortex.

Define and use: - Display/heading family - UI/body family - Monospace
family for technical content, identifiers, code, or structured values -
Font scale - Font weights - Line heights - Letter spacing - Text-width
rules

## Typography hierarchy

Create a consistent scale for: - Page title - Section title - Subsection
title - Body - Secondary body - Label - Metadata - Small status text

Rules: - Avoid oversized titles that consume workspace space. - Do not
use heading size as decoration. - Keep body copy comfortably readable. -
Use restrained display typography, if the chosen brand system calls for
it. - Use monospaced text only where it provides meaning. - Avoid too
many font families or weights.

------------------------------------------------------------------------

# 5. Spacing and Layout System

Define a consistent spacing scale using design tokens. A suggested base
scale is below; adapt it to the existing system if a better established
scale is already in use.

  Token     Suggested value
  ------- -----------------
  2XS                   2px
  XS                    4px
  SM                    8px
  MD                   12px
  LG                   16px
  XL                   24px
  2XL                  32px
  3XL                  48px
  4XL                  64px

Use the spacing system consistently for: - Page margins - Section
spacing - Component padding - Form spacing - Sidebar spacing - Content
gaps - Panel spacing - Responsive adjustments

## Layout principles

-   Use a clear grid and alignment system.
-   Keep content widths appropriate for their purpose.
-   Avoid unnecessarily wide text blocks.
-   Preserve useful information density.
-   Do not add whitespace merely to make a screen look trendy.
-   Avoid excessive nesting of containers.
-   Use full-width layouts when the information benefits from them.
-   Use split layouts/context rails only when they support the workflow.
-   Let page content determine layout rather than forcing every page
    into a common template.

------------------------------------------------------------------------

# 6. Borders, Shape, Elevation and Spatial UI

Define a small, consistent system for: - Border thickness - Border
color - Radius - Elevation/shadows - Surface layering - Dividers -
Floating contextual panels

## Rules

-   Borders and dividers are preferred over unnecessary shadows for
    structure.
-   Radius should be restrained and consistent.
-   Do not round every component into a pill or capsule.
-   Use shadows only to communicate elevation or separation.
-   No excessive glow or blur.
-   No stacked card-on-card layouts.
-   Spatial UI should be reserved for meaningful contextual
    relationships, such as answer/evidence/source inspection, not
    applied globally as decoration.
-   Depth should help users understand what is in the foreground, what
    is contextual, and what is the main work area.

------------------------------------------------------------------------

# 7. Iconography and Visual Assets

-   Use a consistent icon library/style.
-   Icons must have clear meaning and be used consistently.
-   Avoid decorative icons that do not improve comprehension.
-   Do not use AI sparkle icons as a default brand motif.
-   Do not use emoji as application icons.
-   Icon-only controls require accessible labels and tooltips where
    appropriate.
-   Prefer simple, recognizable icons.
-   Do not use illustrations, blobs, floating orbs, or decorative
    graphics as filler.
-   Use genuine product/source imagery only when it helps users
    understand content.

------------------------------------------------------------------------

# 8. Component Design System

Build or refine reusable components where reuse is real and beneficial.
Avoid creating abstractions for components used only once unless there
is a strong reason.

The component system should cover:

## Navigation and shell

-   Sidebar/navigation
-   Workspace/organization identity
-   Active navigation item
-   Collapsed navigation
-   Mobile navigation
-   Page header
-   Breadcrumbs, only where useful
-   Profile/account controls
-   Contextual action area

## Controls

-   Buttons
-   Text inputs
-   Textareas
-   Search
-   Dropdowns
-   Selects
-   Tabs
-   Checkboxes
-   Radio controls
-   Switches, where appropriate
-   File upload controls

## Content

-   Tables
-   Lists
-   Cards, when justified
-   Knowledge/source item rows
-   Metadata
-   Status indicators
-   Avatars
-   Pagination, if needed

## Feedback and overlays

-   Dialogs
-   Drawers
-   Popovers
-   Tooltips
-   Toasts/notifications
-   Confirmation prompts
-   Loading indicators
-   Skeletons
-   Empty states
-   Error states
-   Success states

## Component states

Every interactive component should account for applicable: - Default -
Hover - Focus-visible - Active/pressed - Selected - Disabled - Loading -
Error - Success

Do not implement decorative controls that look interactive but have no
working behavior.

------------------------------------------------------------------------

# 9. Interaction and Motion

Motion is functional feedback, not decoration.

Define consistent: - Transition durations - Easing - Hover feedback -
Focus feedback - Press feedback - Loading behavior - Drawer/dialog
transitions - Expand/collapse behavior

Rules: - Keep transitions short and purposeful. - Do not animate every
element on page load. - Avoid distracting motion. - Do not use animated
backgrounds or floating decoration. - Respect reduced-motion
preferences. - Ensure interaction feedback is immediate and
understandable. - Animation must not hide or delay important
information.

------------------------------------------------------------------------

# 10. Application Shell and Navigation

The authenticated workspace shell should provide: - Clear
organization/workspace identity - Primary navigation - Active page
state - Appropriate sidebar behavior - User/account access - Main
content area - Contextual controls when required - Responsive behavior

Do not overcomplicate navigation or add unsupported destinations.

The shell must be consistent, but page layouts must remain distinct
according to their task.

------------------------------------------------------------------------

# 11. Page-Specific UX Requirements

Each page must be designed around its primary user task and information
architecture. Do not force all pages into the same title + cards + grid
pattern.

## 11.1 Home / Overview

Purpose: orient the user and help them take the next useful action.

Priorities: - Workspace context - Primary entry point to Ask Cortex -
Meaningful knowledge/source overview only when supported by real data -
Relevant recent activity only if it exists - Useful next actions - Clear
empty state for a new organization

Avoid: - Fake metrics - Fake activity - Generic dashboard card grids -
Marketing-style hero sections - Decorative charts without real data

## 11.2 Ask Cortex

Purpose: answer questions using organizational context, with trustworthy
evidence.

This is a signature Cortex workflow and should receive careful design
attention.

Required UX considerations: - Question-first entry - Helpful
initial/empty state - Suggested prompts only when useful and clearly
actionable - Loading state - Answer structure and readability - Source
citations/provenance - Evidence inspection - Source preview/context -
Context/evidence panel or rail where useful - Insufficient-evidence
state - Error state - Follow-up interaction where supported - Clear
distinction between answer and source evidence

Rules: - Evidence must not be hidden or treated as optional
decoration. - Never invent citations or confidence scores. - Do not
display unsupported AI features. - Avoid copying generic chatbot UI. -
Optimize for organizational question answering, context, traceability,
and understanding.

## 11.3 Knowledge

Purpose: browse, search, filter, understand, and manage organizational
knowledge.

Consider: - Search - Filtering - Sorting - Knowledge item list or
table - Detail view - Metadata - Source/provenance - Add/create
workflow - Empty, loading, and error states

Use cards only if they improve browsing or grouping. A structured list
or editorial layout may be better.

## 11.4 Sources

Purpose: manage the materials from which organizational context is
derived.

Consider: - Source library - Upload entry point - File validation -
Upload progress - Processing status - Source list - Source metadata -
Preview/detail - Processing failure - Empty state - Error recovery

Source status and metadata must be real. Do not invent processing states
or file capabilities.

## 11.5 Projects

Purpose: organize knowledge and work around project context.

Consider: - Project list - Create project workflow - Project details -
Description and metadata - Related knowledge/source context only if
supported - Empty/loading/error states

Do not fabricate project activity, progress, or relationships.

## 11.6 Members

Purpose: understand who belongs to the organization and what access they
have.

Consider: - Member identity - Role - Membership information - Access
visibility - Invite/manage actions only if supported -
Empty/error/loading states

## 11.7 Security

Purpose: make security and account protection understandable.

Consider: - Security settings - Authentication information - Two-factor
authentication - Setup, enabled, disabled, and verification states -
Clear security-related feedback - Confirmations for sensitive actions

Respect existing security implementation and authorization. Do not
expose administrative controls to unauthorized roles.

## 11.8 Login, Registration and Two-Factor Authentication

Purpose: authenticate users securely and clearly.

Avoid: - Generic centered rounded square/card template - Giant "Welcome
back" hero - Decorative gradients/blobs - Excessive illustration -
Unnecessary steps

Prefer: - Product-specific composition - Clear form hierarchy - Focus on
the authentication task - Helpful validation - Visible error recovery -
Accessible fields - Responsive composition - Consistent brand expression

Authentication UI must not compromise existing auth behavior, tokens,
2FA, or security.

------------------------------------------------------------------------

# 12. Anti-Generic AI / Template Design Rules (Mandatory)

The coding agent must actively avoid common generic AI-generated
interface patterns.

## Prohibited default patterns

-   Generic AI SaaS dashboard template
-   Giant hero sections in authenticated workspace pages
-   Oversized titles without functional need
-   Generic three-card feature grids
-   Nested cards and boxed content everywhere
-   Rounded rectangles around every section
-   Excessive pill buttons or badges
-   Gradient backgrounds
-   Decorative blobs, orbs, glow effects, or AI sparkle motifs
-   Fake charts, metrics, confidence scores, activity, or status
-   Generic chatbot layout copied from other AI products
-   Generic centered login card
-   Excessive shadows or glassmorphism
-   Identical layout across all pages
-   Decorative animation
-   Empty whitespace used without purpose
-   Excessive icon decoration
-   "AI-looking" design simply for the sake of signaling AI

## Preferred techniques

-   Editorial typography
-   Strong alignment
-   Meaningful section hierarchy
-   Whitespace used intentionally
-   Dividers and borders
-   Lists and tables where they fit
-   Contextual panels where they support the workflow
-   Purposeful content density
-   Unique page compositions
-   Real content and real system states

## Mandatory page-design self-review

Before finishing a page, the coding agent must assess: 1. What is the
page's primary task? 2. What information must be visible immediately? 3.
Does this page need a hero section? If not, do not add one. 4. Are cards
actually useful here? 5. Can a list, table, divider, or whitespace
communicate better? 6. Is any decorative element unnecessary? 7. Is the
information density appropriate? 8. Does the page look like Cortex
rather than a generic template? 9. Is the layout meaningfully different
from other pages where the task differs? 10. Are all interactive
controls functional? 11. Does the page work on mobile and desktop? 12.
Are accessibility and keyboard interactions considered?

If the result resembles a generic AI template, redesign it before
declaring the page complete.

------------------------------------------------------------------------

# 13. Responsive Design

Responsive design is a required part of implementation, not a final
cosmetic pass.

## Target viewport review

-   1440px desktop
-   1280px laptop
-   1024px small laptop
-   768px tablet
-   390px mobile
-   360px small mobile

## Responsive requirements

-   No horizontal overflow.
-   Navigation must adapt to small screens.
-   Sidebar must collapse, transform, or be replaced with an appropriate
    mobile navigation pattern.
-   Content must reflow rather than merely shrink.
-   Tables must have a usable mobile strategy.
-   Contextual panels/rails must become appropriate drawers, stacked
    content, or accessible alternatives.
-   Forms must remain usable.
-   Touch targets must be adequate.
-   Dialogs and menus must fit viewport dimensions.
-   Avoid hidden critical information on mobile.
-   Test real rendered behavior at representative sizes.

------------------------------------------------------------------------

# 14. Accessibility and Usability

Target WCAG 2.2 AA where practical.

Requirements: - Adequate text contrast - Semantic HTML - Correct heading
hierarchy - Keyboard navigation - Visible focus states - Accessible
labels - Screen-reader support - Accessible error messages -
Keyboard-accessible dialogs and menus - Focus management - Appropriate
touch targets - Reduced-motion support - Do not rely on color alone -
Clear, consistent terminology - Usable form validation and recovery

Accessibility must be considered during component and page
implementation, not added afterward.

------------------------------------------------------------------------

# 15. Functional Integrity and Engineering Constraints

The visual redesign must not break the existing product.

## Preserve

-   Existing API contracts
-   Authentication
-   Registration
-   Token handling
-   Two-factor authentication
-   Organization scoping
-   Role-based access control
-   Source upload and processing
-   Knowledge workflows
-   Projects
-   Members
-   Security
-   Existing supported behaviors

## RBAC

-   Preserve current role boundaries.
-   Do not merely hide controls visually if the underlying authorization
    requirement is missing.
-   Do not change backend authorization as part of a UI redesign unless
    explicitly scoped and reviewed.
-   Disabled/hidden controls must reflect actual permissions and product
    behavior.
-   Never imply a role or permission exists if it is not implemented.

## Data integrity

-   No fake metrics or demo data in production UI.
-   No invented source references.
-   No fabricated processing statuses.
-   No unsupported workflows.
-   Empty states must reflect real absence of data.
-   Error states must be honest and provide useful recovery where
    possible.

------------------------------------------------------------------------

# 16. Frontend Implementation Rules

1.  Execute the requested implementation. Do not respond with a
    plan-only deliverable when asked to code.
2.  Work in the specified phase and scope.
3.  Inspect the existing implementation before changing it.
4.  Use established project conventions and existing components/tokens
    where appropriate.
5.  Do not refactor unrelated code.
6.  Avoid unnecessary component abstractions.
7.  Reuse components when their behavior and design are genuinely
    shared.
8.  Keep page-specific layouts page-specific.
9.  Use semantic design tokens rather than scattered hard-coded colors.
10. Keep state, API calls, and business logic intact unless explicitly
    asked to change them.
11. Do not replace real data with mock data to make a page look better.
12. Do not implement unsupported features.
13. Make actual file changes.
14. Inspect the rendered UI after implementation.
15. Correct obvious visual problems before finishing.
16. Test responsive behavior.
17. Review the final Git diff.
18. Report files changed, behavior preserved, checks run, issues found,
    and remaining work honestly.

------------------------------------------------------------------------

# 17. Implementation Roadmap

Implement incrementally. Do not redesign the whole application in one
uncontrolled pass.

## Phase 0 --- Protect and Audit

-   Confirm repository and active branch.
-   Create/confirm a safe working branch.
-   Establish a Git checkpoint.
-   Inspect current frontend, APIs, auth, RBAC, and existing UI.
-   Record baseline lint/type/build results.
-   Do not make broad changes during the audit.

## Phase 1 --- Design Foundations

-   Confirm final palette and HEX values.
-   Define semantic color tokens.
-   Typography system.
-   Spacing scale.
-   Layout/grid rules.
-   Border/radius/elevation.
-   Iconography.
-   Motion.
-   Accessibility primitives.
-   Update shared tokens and foundational components.
-   Do not redesign every page in this phase.

## Phase 2 --- Application Shell

-   Sidebar/navigation.
-   Workspace identity.
-   Active navigation.
-   Page header.
-   Content layout.
-   Profile/account controls.
-   Responsive shell.
-   Validate navigation and existing functionality.

## Phase 3 --- Home

-   Design overview around real data and next actions.
-   Implement new-user/empty state.
-   Avoid fake dashboard metrics.

## Phase 4 --- Ask Cortex

-   Prioritize the question-to-answer workflow.
-   Answer readability.
-   Citation and provenance treatment.
-   Evidence inspection.
-   Source context.
-   Loading, error, insufficient-evidence, and empty states.
-   Validate real API behavior.

## Phase 5 --- Knowledge

-   Search.
-   Filters and sorting.
-   Browsing layout.
-   Detail view.
-   Create/add workflow.
-   Metadata and provenance.
-   Empty/loading/error states.

## Phase 6 --- Sources

-   Source library.
-   Upload.
-   Validation.
-   Processing feedback.
-   Source list.
-   Metadata/detail/preview.
-   Failure and recovery states.

## Phase 7 --- Projects

-   Project browsing.
-   Create workflow.
-   Project detail.
-   Relevant context only where supported.

## Phase 8 --- Members and Security

-   Member list and role presentation.
-   Permission-aware actions.
-   Security settings.
-   2FA states and workflows.
-   Sensitive-action confirmations.

## Phase 9 --- Authentication

-   Login.
-   Registration.
-   Two-factor setup and verification.
-   Error and recovery states.
-   Product-specific design.

## Phase 10 --- Responsive and Accessibility Review

-   Review all primary pages at target viewports.
-   Correct overflow and layout issues.
-   Keyboard and focus review.
-   Screen-reader labels and semantics.
-   Reduced-motion.
-   Contrast and touch targets.

## Phase 11 --- Final QA and Regression

Verify: - Login - Registration - 2FA setup/verification/disable as
supported - Workspace navigation - Ask - Citations/source inspection -
Knowledge - Source upload/preview - Projects - Members - Security - RBAC
restrictions - Empty/loading/error states - Responsive layout

Run: - Lint - TypeScript - Production build - Any available tests

Review: - Actual browser UI - Console/runtime errors - Git diff -
Unintended backend/API changes

------------------------------------------------------------------------

# 18. Definition of Done

A UI implementation is not complete merely because the code compiles.

A phase/page is complete only when: - \[ \] It follows the Calm
Intelligence direction. - \[ \] It follows the current approved palette
and design tokens. - \[ \] Its layout is appropriate for its task. - \[
\] It avoids generic AI/SaaS template patterns. - \[ \] It has the
necessary interaction states. - \[ \] Controls are functional or clearly
non-interactive. - \[ \] Real data and supported functionality are
preserved. - \[ \] Auth, RBAC, and API behavior remain intact. - \[ \]
Empty/loading/error/success states are handled as appropriate. - \[ \]
Responsive behavior has been reviewed. - \[ \] Accessibility has been
considered and checked. - \[ \] The actual rendered UI has been visually
inspected. - \[ \] Lint/type/build checks have been run where
available. - \[ \] Git diff has been reviewed. - \[ \] The agent reports
actual work and remaining limitations.

------------------------------------------------------------------------

# 19. Mandatory Instructions to the Coding Agent

Treat this document as the UI/UX source of truth for Cortex.

When given a phase or page to implement: - **EXECUTE, DO NOT PLAN
ONLY.** - Make actual code changes within the requested scope. - Do not
redesign unrelated pages. - Do not change backend/API behavior unless
specifically requested. - Do not break authentication, RBAC,
organization scoping, or existing functionality. - Do not invent data or
capabilities. - Do not default to generic AI/SaaS patterns. - Do not
force the same layout onto every page. - Inspect the real UI and
iterate. - Validate the result. - Report the actual files changed and
checks performed.

If final design tokens (especially colors) are not yet established, do
not invent a permanent palette. Identify the missing decision and use
only a clearly temporary implementation until the palette is approved.

**The goal is not to make Cortex look like an AI product. The goal is to
make Cortex look and feel like a distinctive, trustworthy organizational
knowledge workspace.**
