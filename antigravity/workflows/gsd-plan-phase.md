---
name: gsd-plan-phase
description: Research + plan + verify a roadmap phase using the GSD methodology.
---

# GSD Plan Phase

Trigger when the user asks to plan a roadmap phase (e.g., "plan phase 1", "create execution plan").

## Inputs
- `phase`: number (e.g., `1`, `2.1`). If omitted, detect next unplanned phase.
- Flags (optional):
  - `--research` (force re-research)
  - `--skip-research`
  - `--gaps` (use VERIFICATION/UAT as gap closure context)
  - `--skip-verify`

## Action
Run the ADK runner CLI:
```
node antigravity-adk/dist/run.js --command plan-phase --phase <phase> [--research|--skip-research] [--gaps] [--skip-verify]
```

## Context to load (if present)
- `.planning/STATE.md`
- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`
- `.planning/phases/<phase>-*/<phase>-CONTEXT.md`
- `.planning/phases/<phase>-*/<phase>-RESEARCH.md`
- `.planning/phases/<phase>-*/<phase>-VERIFICATION.md`
- `.planning/phases/<phase>-*/<phase>-UAT.md`

## Expected outputs
- PLAN files in `.planning/phases/<phase>-*/` (one per wave/task group)
- Optional RESEARCH file if research was run
- Verification status from plan checker (unless skipped)

## Notes
- Keep prompts lean; heavy instructions live in `~/.gemini/antigravity/skills/gsd/references/`.
- Respect terminal/browser permissions; fall back to analysis-only mode if tool execution is blocked.
