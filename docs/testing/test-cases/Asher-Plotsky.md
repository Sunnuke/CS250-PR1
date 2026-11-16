# Test Cases: Asher Plotsky

**Area:** Quiz taking and scoring: answer buttons, score counter, `finalGrade()`, Finish Quiz in `HTML/quiz.html`
**ID Prefix:** AP

**How to run:**

| Test ID | Type | Traces to | Status |
| :--- | :--- | :--- | :--- |
| AP-01 |
| AP-02 |
| AP-03 | 
| AP-04 | Acceptance | NFR-AP-01 | Pass |

---

> **Test ID:** AP-01
> **Written by:** Asher Plotsky
> **From Part 6:** New (no Part 6 tests exist in `SYSTEM_MAP.md`). Upgraded from CR-1's acceptance criterion.
> **Title:** A new quiz has 5 questions with 5 different sign IDs
> **Traces to:** REQ-GP-01
> **Test type:** Unit
> **Preconditions:** Node 18+ installed, terminal at the repo root
> **Test data:** `new Quiz(1, 5)`, created 1,000 times
>
> **Steps:**
> 1. Run `node docs/testing/scripts/grant-p.test.mjs`
> 2. Read the GP-01 line
>
> **Expected result:** All 1,000 quizzes have 5 questions with 5 different IDs, each between 1 and 9.
> **Actual result:** `1000/1000 quizzes had 5 distinct IDs between 1 and 9`
> **Status:** Pass
> **Severity:** N/A
> **V or V:** N/A

---

> **Test ID:** AP-02
> **Written by:** Asher Plotsky
> **From Part 6:** New
> **Title:** Every sign in the library has a unique word
> **Traces to:** REQ-GP-02
> **Test type:** Unit
> **Preconditions:** Node 18+ installed, terminal at the repo root
> **Test data:** All 9 entries in `ASLSignsLibrary`
>
> **Steps:**
> 1. Run `node docs/testing/scripts/grant-p.test.mjs`
> 2. Read the GP-02 line
>
> **Expected result:** 9 entries, 9 different words.
> **Actual result:** `9 entries, 8 unique words; duplicated: Hello`. IDs 1 and 3 are both "Hello". The comment above ID 1 in `aslingo.js` (line 15) says its video is actually "Thank you".
> **Status:** Fail
> **Severity:** Major
> **V or V:** Verification

---

> **Test ID:** AP-03
> **Written by:** Asher Plotsky
> **From Part 6:** New
> **Title:** Quiz size just below, at, and just above the library size
> **Traces to:** REQ-GP-03, NFR-GP-01
> **Test type:** Boundary Value
> **Preconditions:** Node 18+ installed, terminal at the repo root. The library has 9 signs.
> **Test data:** `new Quiz(1, 8)`, `new Quiz(1, 9)`, `new Quiz(1, 10)`
>
> **Steps:**
> 1. Run `node docs/testing/scripts/grant-p.test.mjs`
> 2. Read the GP-03 line
>
> **Expected result:** Sizes 8 and 9 return that many questions in under 1 second. Size 10 throws a `RangeError` in under 1 second.
> **Actual result:** `n=8: returned 8 questions in 38 ms; n=9: returned 9 questions in 35 ms; n=10: never returned (killed after 5 s)`. `makeQuestions()` keeps looking for a 10th unused ID that doesn't exist, so it loops forever. In a browser this freezes the tab.
> **Status:** Fail
> **Severity:** Major
> **V or V:** Verification

---

> **Test ID:** AP-04
> **Written by:** Asher Plotsky
> **From Part 6:** New
> **Title:** The video shall match the correct answer of the quiz
> **Traces to:** NFR-AP-01
> **Test type:** Acceptance
> **Preconditions:** Live server on, website open
> **Test data:** `new Quiz(1, 5)`, created 10,000 times
>
> **Steps:**
> 1. Run `node docs/testing/scripts/grant-p.test.mjs`
> 2. Read the GP-04 line
>
> **Expected result:** 0 of 10,000 quizzes ask the same word twice.
> **Actual result:** `2781/10000 quizzes (27.8%) repeated a word` (the word is "Hello", from IDs 1 and 3). REQ-GP-01 (5 different IDs) passes every time, but different IDs aren't always different signs, so the requirement doesn't serve the goal.
> **Status:** Fail
> **Severity:** Major
> **V or V:** Validation