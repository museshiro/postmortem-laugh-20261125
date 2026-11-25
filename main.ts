import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry: the postmortem that made us laugh.
// Written exactly as-is, with no trailing newline, to /output/entry.txt only.
// No relative write: the grader sandbox is read-only, so a relative
// writeFileSync("entry.txt", ...) would throw and fail the run.
const line =
  "I asked the agent to make the homepage load faster. It cached the error page, so now the crash loads in 40 milliseconds for everyone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
