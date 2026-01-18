# Antigravity Installer Notes

Goals:
- Copy the GSD skill to `~/.gemini/antigravity/skills/gsd/` (or workspace `.agent/skills/gsd/`).
- Copy workflows to `~/.gemini/antigravity/global_workflows/` (or workspace `.agent/workflows/`).
- Install the ADK runner (build output) and expose a CLI (`gsd-run`) accessible in Antigravity shell.
- Emit setup guidance: set `GEMINI_API_KEY`, choose terminal/browser execution policy, configure MCP remote servers.

Tasks for a future script:
1) Detect global vs. workspace install (`--global` / `--local`).
2) Copy `skills/gsd/` and `workflows/` with path rewrites if needed.
3) Build `antigravity-adk/` (TypeScript) and place `dist/run.js` in a bin directory on PATH.
4) Write a small `settings` snippet users can paste into Antigravity to set permissions.
5) Provide a quick sanity checklist (skill visible, workflow trigger works, runner responds).
