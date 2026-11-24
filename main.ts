// Make the AI Judge Laugh: Office Jokes — one line about office life,
// under 200 characters, aimed at the calendar we all live in.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'My calendar just reminded me to prepare for the meeting about having fewer meetings.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
