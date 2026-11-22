# Test Cases: Debora V

**Team number:** 05  
**My area:** Quiz history and user progress: `HTML/history.html`, `JAVASCRIPT/quizHistory.js`, `JAVASCRIPT/user.js`, and `localStorage`

---

**Test ID:** DV-01  
**From Part 6:** TC-1  
**Written by:** Debora Velazquez  
**Title:** Quiz history displays the score after finishing a quiz  
**Traces to:** REQ-DV-02, NFR-DV-01  
**Test type:** Integration  
**Preconditions:** The ASLingo website is running through Live Server. The `quizHistory` localStorage item is empty.  
**Test data:** Complete one quiz with any score.

**Steps:**

1. Open the ASLingo quiz page.
2. Complete the quiz.
3. Click the `Finish Quiz` button.
4. Open the quiz history page.
5. Check whether the completed quiz score appears.
6. Check whether the page is readable without horizontal scrolling.

**Expected result:** The quiz history page displays the completed quiz score as readable text without horizontal scrolling.  
**Actual result:** The quiz did not display the completed quiz or score on the quiz history page.  
**Status:** Fail  
**Severity:** Major  
**V or V:** Verification  
**GitHub Issue:** #100

---

**Test ID:** DV-02  
**From Part 6:** New  
**Written by:** Debora Velazquez  
**Title:** QuizHistory stores and returns a quiz record  
**Traces to:** REQ-DV-01  
**Test type:** Unit  
**Preconditions:** Node.js is installed and `JAVASCRIPT/quizHistory.js` is available.  
**Test data:** A quiz record with a score of 80.

**Steps:**

1. Create a new `QuizHistory` object.
2. Add the quiz record using `addQuiz()`.
3. Call `getQuizHistory()`.
4. Check whether the added quiz record is returned.

**Expected result:** The returned quiz history contains the quiz record that was added.  
**Actual result:** `QuizHistory` successfully stored and returned the quiz data.  
**Status:** Pass  
**Severity:** N/A  
**V or V:** N/A  
**GitHub Issue:** N/A

---

**Test ID:** DV-03  
**From Part 6:** New  
**Written by:** Debora Velazquez  
**Title:** Finishing a quiz saves the score in localStorage  
**Traces to:** REQ-DV-01  
**Test type:** Integration  
**Preconditions:** The ASLingo website is running through Live Server. Existing `quizHistory` data has been cleared.  
**Test data:** Complete a quiz with a score of 3 out of 5.

**Steps:**

1. Open the quiz page.
2. Complete the quiz.
3. Click the `Finish Quiz` button.
4. Open the browser Developer Tools.
5. Open the Application or Storage tab.
6. Select Local Storage for the website.
7. Locate the `quizHistory` key.

**Expected result:** The `quizHistory` key exists and contains the completed quiz score.  
**Actual result:** The score-saving logic successfully stored the quiz score in localStorage.  
**Status:** Pass  
**Severity:** N/A  
**V or V:** N/A  
**GitHub Issue:** N/A

---

**Test ID:** DV-04  
**From Part 6:** New  
**Written by:** Debora Velazquez  
**Title:** Learner can review previous quiz progress  
**Traces to:** G-DV-01  
**Test type:** Acceptance  
**Preconditions:** The ASLingo website is running and the browser allows localStorage.  
**Test data:** Complete two quizzes with different scores, such as 60 percent and 80 percent.

**Steps:**

1. Open the quiz page.
2. Complete the first quiz.
3. Click the `Finish Quiz` button.
4. Open the quiz page again.
5. Complete the second quiz.
6. Click the `Finish Quiz` button.
7. Open `View Quiz History`.
8. Review the displayed quiz history.

**Expected result:** The learner can see both previous quiz scores and understand their progress over time.  
**Actual result:** No progress or score review was displayed on `history.html`.  
**Status:** Fail  
**Severity:** Major  
**V or V:** Verification  
**GitHub Issue:** #103

---

**Test ID:** DV-05  
**From Part 6:** New  
**Written by:** Debora Velazquez  
**Title:** Empty quiz history displays an appropriate message  
**Traces to:** REQ-DV-03  
**Test type:** Negative  
**Preconditions:** The website is running and the `quizHistory` item has been removed from localStorage.  
**Test data:** No saved quiz scores.

**Steps:**

1. Clear the `quizHistory` item from localStorage.
2. Open the quiz history page.
3. Inspect the page content.

**Expected result:** The page displays a message stating that no quiz history is available.  
**Actual result:** No message appeared when quiz history was empty.  
**Status:** Fail  
**Severity:** Minor  
**V or V:** Verification  
**GitHub Issue:** #104

---