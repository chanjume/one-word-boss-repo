// One Word for the Boss — write our one-word verdict on the boss to /output/entry.txt.
//
// The word: Reply-Aller. Not the safe, obvious "Micromanager" every entry
// will send — the boss who answers every single email with Reply All, so one
// question becomes a company-wide thread and nobody can ever leave it. Funny
// because everyone has met this boss, true because the behaviour is instantly
// recognisable from one word alone, and fresh because it names a specific
// modern office sin instead of a generic management cliché. One word,
// 11 characters, no explanation, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Reply-Aller";

if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${WORD.length}`);
}
if (WORD.split(/\s+/).filter(Boolean).length !== 1) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf-8");
console.log(`Wrote ${WORD.length} chars to /output/entry.txt: ${WORD}`);
