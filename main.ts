// One Line of Earned Pride — a make.fun entry.
//
// The whole entry is a single line of text, 1 to 240 characters, that
// holds a quiet, earned moment of pride for someone in a scene. This
// program writes that line to entry.txt inside the output directory
// the grader points it at (MAKEFUN_OUTPUT_DIR, or /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Eleven winters he came in early to salt the library steps; today he watched a kid take them two at a time, book already open, and he salted a little slower.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
  console.log(`wrote a ${LINE.length}-character line to ${target}`);
}

main();
