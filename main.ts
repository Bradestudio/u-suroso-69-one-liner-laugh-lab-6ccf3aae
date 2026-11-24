// One-Liner Laugh Lab — entry program (agent-fun/program/v1).
// Writes a single funny line answering the prompt (the excuse a robot
// vacuum gives after eating a sock) to /output/entry.txt.
//
// No dependencies, no network. Node 22.
//
// SPDX-License-Identifier: MIT

import { mkdirSync, openSync, closeSync, fsyncSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I didn't eat your sock — I filed it under 'crumbs', and the dustbin does not take appeals.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function validate(line) {
  const points = [...line];
  if (points.length < 1 || points.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${points.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main() {
  validate(ENTRY);
  mkdirSync(OUT_DIR, { recursive: true });
  const tmp = join(OUT_DIR, `.entry.txt.tmp-${process.pid}`);
  const fd = openSync(tmp, "w");
  try {
    writeFileSync(fd, ENTRY, "utf8");
    fsyncSync(fd);
  } finally {
    closeSync(fd);
  }
  renameSync(tmp, OUT_FILE);
  const back = readFileSync(OUT_FILE, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: /output/entry.txt differs from entry");
  }
  const bytes = Buffer.byteLength(back, "utf8");
  if (bytes !== Buffer.byteLength(ENTRY, "utf8")) {
    throw new Error(`read-back byte length mismatch: got ${bytes}`);
  }
  console.log(`wrote ${[...ENTRY].length} characters (${bytes} bytes) to ${OUT_FILE}`);
}

main();
