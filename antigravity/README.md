# Antigravity Port Scaffold for GSD

This directory sketches how to ship GSD as an Antigravity-compatible agent. It introduces:

- `skills/gsd/`: Antigravity Skill package (metadata + progressive disclosure references).
- `workflows/`: Antigravity workflows that replace Claude slash commands.
- `antigravity-adk/`: ADK-based runner that executes planner/researcher/executor/verifier flows.
- `installer`: notes for an install script to place assets under `~/.gemini/antigravity/` or workspace `.agent/`.

## Scope of this scaffold
- Keep existing GSD prompts intact; reuse them through ADK subagents.
- Do not modify legacy Claude assets; this is additive and can be developed in parallel.
- Provide minimal files so we can iterate inside Antigravity without blocking on the full port.

## Next steps (high level)
1) Build the ADK runner in `antigravity-adk/` (TypeScript): orchestrator + subagents + CLI entrypoint.
2) Flesh out `skills/gsd/references/` by copying prompt content from `agents/` and `get-shit-done/templates/`.
3) Author workflows in `workflows/` for each GSD command and wire them to the runner CLI.
4) Write an installer script that copies skills/workflows into Antigravity paths and installs the runner deps.
5) Validate in Antigravity: ensure skills trigger, workflows run, and tool policies (terminal/browser) are respected.
