# Test Cases: Asher Plotsky

**Area:** Quiz taking and scoring: answer buttons, score counter, `finalGrade()`, Finish Quiz in `HTML/quiz.html`
**ID Prefix:** AP

**How to run:**

| Test ID | Type | Traces to | Status |
| :--- | :--- | :--- | :--- |
| AP-01 | Unit | REQ-AP-01 | Fail |
| AP-02 | System | REQ-AP-02 | Pass |
| AP-03 | Unit | REQ-AP-03 | Pass |
| AP-04 | Acceptance | NFR-AP-01 | Pass |

---

> **Test ID:** AP-01
> **Written by:** Asher Plotsky
> **From Part 6:** TC-02
> **Title:** The system shall display four options when the user takes a quiz
> **Traces to:** REQ-AP-01
> **Test type:** Unit
> **Preconditions:** Live server on, website open
> **Test data:** N/A
>
> **Steps:**
> 1. Click Start quiz
> 2. Run through multiple questions, check if there are multiple answers available per question.
>
> **Expected result:** There is one correct answer and three incorrect answers shown per question.
> **Actual result:** There is not one correct answer and three incorrect answers shown per question.
> **Status:** Fail
> **Severity:** Majoy
> **V or V:** Verification

---

> **Test ID:** AP-02
> **Written by:** Asher Plotsky
> **From Part 6:** TC-03
> **Title:** The system shall randomize the order of questions
> **Traces to:** REQ-AP-02
> **Test type:** System
> **Preconditions:** Live server on, website open
> **Test data:** N/A
>
> **Steps:**
> 1. Click Start quiz
> 2. Answer all questions
> 3. Repeat a few times.
>
> **Expected result:** Quiz order and questions are different each time.
> **Actual result:** Quiz order and questions are different each time.
> **Status:** Pass
> **Severity:** N/A
> **V or V:** N/A

---

> **Test ID:** AP-03
> **Written by:** Asher Plotsky
> **From Part 6:** New
> **Title:** The system shall display a video with each question
> **Traces to:** REQ-AP-03
> **Test type:** Unit
> **Preconditions:** Live server on, website open
> **Test data:** N/A
>
> **Steps:**
> 1. Click Start quiz
> 2. Look if there is a video there.
>
> **Expected result:** There is a video there
> **Actual result:** There is a video there
> **Status:** Pass
> **Severity:** N/A
> **V or V:** N/A

---

> **Test ID:** AP-04
> **Written by:** Asher Plotsky
> **From Part 6:** New
> **Title:** The video shall match the correct answer of the quiz
> **Traces to:** NFR-AP-01
> **Test type:** Acceptance
> **Preconditions:** Live server on, website open
> **Test data:** N/A
>
> **Steps:**
> 1. Click "Start Quiz"
> 2. Check if the title of the video matches the correct answer.
>
> **Expected result:** The title of the video matches the correct answer
> **Actual result:** The title of the video matches the correct answer
> **Status:** Pass
> **Severity:** N/A
> **V or V:** N/A