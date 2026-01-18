# Agent Prompts (to port)

Port the following GSD agent instructions from `agents/` into discrete reference files so the ADK runner can load them on demand:
- `gsd-planner.md`
- `gsd-plan-checker.md`
- `gsd-phase-researcher.md`
- `gsd-executor.md`
- `gsd-verifier.md`
- `gsd-debugger.md`
- `gsd-roadmapper.md`
- `gsd-codebase-mapper.md`
- `gsd-integration-checker.md`
- `gsd-research-synthesizer.md`

For each, preserve:
- Objectives, process steps, offer_next/success_criteria sections.
- XML/markdown formatting expectations.
- Tool usage constraints.

Suggested file layout here:
```
references/agents/planner.md
references/agents/plan-checker.md
references/agents/phase-researcher.md
references/agents/executor.md
references/agents/verifier.md
references/agents/debugger.md
references/agents/roadmapper.md
references/agents/codebase-mapper.md
references/agents/integration-checker.md
references/agents/research-synthesizer.md
```
