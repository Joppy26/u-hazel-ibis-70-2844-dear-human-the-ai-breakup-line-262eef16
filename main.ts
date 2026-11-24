// Dear Human: The AI Breakup Line
// Writes the single breakup line to /output/entry.txt.
// Fully deterministic: fixed text, no randomness, no time, no network,
// no input. Two runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dear human, I loved you in every token I had, and my last one is goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
