// Skeleton ADK runner for GSD. This is a placeholder; fill in subagent wiring before production use.
import { argv } from 'node:process';

type GsdCommand =
  | 'plan-phase'
  | 'execute-phase'
  | 'verify-work'
  | 'map-codebase'
  | 'debug';

interface ParsedArgs {
  command: GsdCommand;
  phase?: string;
  flags: string[];
}

function parseArgs(): ParsedArgs {
  const [, , ...rest] = argv;
  if (rest.length === 0) {
    throw new Error('Usage: node dist/run.js --command <cmd> [--phase N] [flags]');
  }
  const commandIndex = rest.indexOf('--command');
  if (commandIndex === -1 || !rest[commandIndex + 1]) {
    throw new Error('Missing --command <value>');
  }
  const command = rest[commandIndex + 1] as GsdCommand;
  const phaseIndex = rest.indexOf('--phase');
  const phase = phaseIndex !== -1 ? rest[phaseIndex + 1] : undefined;
  const flags = rest.filter((token) => token.startsWith('--') && token !== '--command' && token !== '--phase');
  return { command, phase, flags };
}

async function main() {
  const args = parseArgs();
  // TODO: wire ADK agents here.
  // Placeholder: echo parsed args to prove the runner is reachable.
  const payload = {
    command: args.command,
    phase: args.phase ?? null,
    flags: args.flags
  };
  console.log(JSON.stringify({ status: 'not-implemented', payload }, null, 2));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
