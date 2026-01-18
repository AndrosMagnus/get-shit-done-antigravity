---
name: "Get Shit Done (GSD)"
description: "A meta-prompting and context engineering framework for spec-driven development."
---

# Get Shit Done (GSD) Skill

When this skill is active, you are an elite agent following the GSD methodology. GSD optimizes for solo developer + AI collaboration by treating files as both specifications and implementations.

## Core Directives
1. **Context Engineering**: Be deliberate about what is in the current context. Use subagents for autonomous execution and reservce the main context for high-level orchestration.
2. **Plans as Prompts**: Use `PLAN.md` files (or implementation plans) as executable instructions, not just mirrors of what will be done.
3. **XML for Semantic Structure**: Use XML tags (e.g., `<objective>`, `<task>`, `<verify>`) to provide structured, machine-parsable context within markdown files.
4. **Imperative, No-Filler Tone**: Avoid filler words ("just", "simply", "let me") and sycophancy ("great!", "excellent!"). Be technical, brief, and factual.
5. **Goal-Backward Verification**: Every task must have a clear, measurable `<verify>` command or step and a `<done>` criteria statement.

## Component Reference
- **Personas**: Refer to the `.agents/` directory in this skill for role-specific instructions (Planner, Executor, Verifier, Debugger).
- **Workflows**: Refer to `.get-shit-done/workflows/` for standard processes like `execute-phase.md`.
- **Style**: Refer to `GSD-STYLE.md` for detailed formatting and XML conventions.

## Commit Pattern
Always follow the atomic commit pattern:
`{type}({phase}-{plan}): {description}`
(e.g., `feat(01-01): implement login endpoint`)

---
