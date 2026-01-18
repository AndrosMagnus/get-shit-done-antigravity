# Runtime: ADK Runner

Preferred execution path inside Antigravity:
- CLI: `node antigravity-adk/dist/run.js --command <cmd> [flags]`
- Commands map to GSD flows: `map-codebase`, `plan-phase`, `execute-phase`, `verify-work`, `debug`.
- The runner loads context files (STATE, ROADMAP, REQUIREMENTS, phase dirs) and spawns subagents (planner/checker/researcher/executor/verifier).
- Tooling:
  - Terminal + FS via ADK tool policies.
  - Browser actions only if permissions allow.
  - MCP remote servers supported; configure in Antigravity settings.
- If tool access is denied, degrade to analysis-only mode and return actionable instructions.
