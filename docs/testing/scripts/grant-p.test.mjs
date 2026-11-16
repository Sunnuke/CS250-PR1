// Grant Phillips' tests (docs/testing/test-cases/grant-p.md): GP-01, GP-02, GP-03, GP-04
// Run from the repo root: node docs/testing/scripts/grant-p.test.mjs

import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const jsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../JAVASCRIPT");
const url = (f) => pathToFileURL(path.join(jsDir, f)).href;
const { Quiz } = await import(url("quiz.js"));
const { ASLSignsLibrary } = await import(url("aslingo.js"));
const LIB = ASLSignsLibrary.length;

let failed = 0;
function report(id, pass, actual) {
    if (!pass) failed++;
    console.log(`${pass ? "PASS" : "FAIL"}  ${id}: ${actual}`);
}

// GP-01 (Unit): Quiz(1, 5) has 5 questions with 5 different IDs in 1..LIB
let ok = 0;
for (let r = 0; r < 1000; r++) {
    const ids = new Quiz(1, 5).getQuizQuestions.map((q) => q.getId);
    if (ids.length === 5 && new Set(ids).size === 5 && ids.every((i) => i >= 1 && i <= LIB)) ok++;
}
report("GP-01", ok === 1000, `${ok}/1000 quizzes had 5 distinct IDs between 1 and ${LIB}`);

// GP-02 (Unit): every sign word in the library is unique
const words = ASLSignsLibrary.map((s) => s.word);
const dupes = words.filter((w, i) => words.indexOf(w) !== i);
report("GP-02", dupes.length === 0, `${LIB} entries, ${new Set(words).size} unique words` +
    (dupes.length ? `; duplicated: ${dupes.join(", ")}` : ""));

// GP-03 (Boundary): sizes 8 and 9 work in < 1 s; size 10 throws RangeError in < 1 s
// Each size runs in its own process with a 5 s kill timer, so an infinite loop can't hang this script.
const lines = [];
let pass = true;
for (const n of [8, 9, 10]) {
    const code = `const { Quiz } = await import(${JSON.stringify(url("quiz.js"))});
        try { console.log("returned " + new Quiz(1, ${n}).getQuizQuestions.length + " questions"); }
        catch (e) { console.log("threw " + e.name); }`;
    const t0 = Date.now();
    const r = spawnSync(process.execPath, ["--input-type=module", "-e", code], { timeout: 5000, encoding: "utf8" });
    const ms = Date.now() - t0;
    const out = r.error ? "never returned (killed after 5 s)" : r.stdout.trim();
    const expected = n <= LIB ? `returned ${n} questions` : "threw RangeError";
    if (out !== expected || ms >= 1000) pass = false;
    lines.push(`n=${n}: ${out}${r.error ? "" : ` in ${ms} ms`}`);
}
report("GP-03", pass, lines.join("; "));

// GP-04 (Acceptance): a 5-question quiz never asks the same word twice
let repeats = 0;
for (let r = 0; r < 10000; r++) {
    const answers = new Quiz(1, 5).getQuizQuestions.map((q) => q.getAnswer);
    if (new Set(answers).size < 5) repeats++;
}
report("GP-04", repeats === 0, `${repeats}/10000 quizzes (${(repeats / 100).toFixed(1)}%) repeated a word`);

console.log(`\n${4 - failed} passed, ${failed} failed`);
