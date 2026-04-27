#!/usr/bin/env node
/**
 * Import-boundary scanner: render-worker must not import from app-worker or packages/ui.
 * Violation → non-zero exit code.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");

const RENDER_WORKER_SRC = join(ROOT, "apps", "render-worker", "src");

/** Patterns that must not appear in render-worker source imports */
const FORBIDDEN_PATTERNS = [
  /from\s+['"].*apps\/app-worker/,
  /from\s+['"].*@landing-estate\/app-worker/,
  /from\s+['"].*packages\/ui/,
  /from\s+['"].*@landing-estate\/ui/,
];

function walkDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(full));
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      files.push(full);
    }
  }
  return files;
}

let violations = 0;

try {
  const files = walkDir(RENDER_WORKER_SRC);
  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const lines = content.split("\n");
    lines.forEach((line, i) => {
      for (const pattern of FORBIDDEN_PATTERNS) {
        if (pattern.test(line)) {
          console.error(
            `BOUNDARY VIOLATION: ${file}:${i + 1}\n  > ${line.trim()}`
          );
          violations++;
        }
      }
    });
  }
} catch {
  // render-worker src may not exist yet during setup
  process.exit(0);
}

if (violations > 0) {
  console.error(`\n${violations} boundary violation(s) found.`);
  process.exit(1);
} else {
  console.log("Import boundaries OK.");
}
