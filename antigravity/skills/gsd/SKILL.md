---
name: gsd
description: Agent-first planning/execution framework; use when the user wants GSD-style roadmap, planning, execution, or verification flows.
---

# GSD Antigravity Skill

Use this skill when the request matches any of:
- plan or execute a phase/roadmap using GSD flows
- map a codebase before planning
- verify or debug work using GSD criteria

## How to load context (progressive disclosure)
- Always load the specific reference you need, not all at once.
- Primary references:
  - `references/agents/*.md` (planner, checker, researcher, executor, verifier)
  - `references/workflows/*.md` (phase orchestration outlines)
  - `references/templates/*` (PLAN/RESEARCH/STATE/ROADMAP/REQUIREMENTS/UAT)
  - `references/style.md` (formatting conventions)

## Runtime surfaces
- Preferred: call the ADK runner CLI (see `references/runtime.md`) so subagents run with tool access.
- Fallback (no runner): follow the reference prompts directly in a single context, but this loses tool orchestration.

## Ground rules
- Imperative tone; no filler.
- Keep plans executable and include `<verify>` + `<done>` sections.
- Respect Antigravity permissions (terminal/browser). If denied, degrade gracefully and ask for alternatives.
