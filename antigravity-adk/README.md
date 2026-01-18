# GSD Antigravity ADK Runner (Skeleton)

Purpose: provide an ADK-backed orchestrator for GSD flows (plan, execute, verify, map, debug) inside Antigravity.

Status: scaffold only. The runner currently just parses args and echoes them. Fill in ADK agents and tool wiring next.

## Plan
1) Model ADK agents mirroring existing prompts:
   - Planner, Plan Checker, Phase Researcher, Executor, Verifier, Debugger, Roadmapper, Codebase Mapper.
   - Keep their instructions in `skills/gsd/references/agents/`.
2) Orchestrator flow:
   - Parse CLI args (`--command`, `--phase`, flags).
   - Load context files (STATE/ROADMAP/REQUIREMENTS/phase artifacts).
   - Spawn subagents with ADK, pass context, manage iterations (planner ↔ checker loop).
   - Write outputs back to `.planning/` (PLAN/RESEARCH/VERIFICATION/UAT).
3) Permissions:
   - Respect Antigravity terminal/browser policies; degrade to read-only if blocked.
   - MCP: support remote servers per Interactions API constraints.
4) Packaging:
   - `npm install`, `npm run build`, ship `dist/run.js`.
   - Installer should place `dist/run.js` on PATH (or reference absolute path in workflows).

## Usage (current placeholder)
```
node dist/run.js --command plan-phase --phase 01 --research
```
Outputs parsed args only until agent wiring is implemented.
