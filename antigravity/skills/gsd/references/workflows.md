# Workflow Notes

Each Antigravity workflow should:
- Be short, defer heavy instructions to references.
- Invoke the ADK runner CLI with the appropriate command/flags.
- Attach relevant context files (STATE/ROADMAP/REQUIREMENTS/phase artifacts) when available.
- Respect user-provided flags (e.g., `--research`, `--skip-research`, `--gaps`, `--skip-verify`).

Example mapping:
- `/gsd:new-project` → `workflow gsd-new-project`: gather requirements, research, roadmap, state.
- `/gsd:map-codebase` → `workflow gsd-map-codebase`: run codebase mapper subagent, write templates.
- `/gsd:plan-phase N` → `workflow gsd-plan-phase`: optionally research, plan, verify via plan checker.
- `/gsd:execute-phase N` → `workflow gsd-execute-phase`: execute plans wave-by-wave.
- `/gsd:verify-work N` → `workflow gsd-verify-work`: run verifier + optional debug loop.
