# Test Cases: [Moises Cortes]

**Area:** [pages, navigation and styling]
**ID prefix:** [MC]

Copy one block per test. Every field is required. Severity and V or V are filled in only when Status is Fail; write N/A otherwise.

---

> **Test ID:** MC-01
> **Written by:** [Moises Cortes]
> **From Part 6:** [Req-01]
> **Title:** [Quiz shows 4 randomly placed choices]
> **Traces to:** [REQ-01]
> **Test type:** [Acceptance]
> **Preconditions:** [Turn on live server within visual studio, run the software]
> **Test data:**
> - [User clicks on 4 individual options to answer.]
>
> **Steps:**
> 1. [Run live server]
> 2. [run software]
> 3. [Select start quiz]
> 4. [click any option]
> 5. [observe if options are different each time]
>
> **Expected result:** [Answer options are randomly placed each time]
> **Actual result:** [options remain static, answer is only in top left]
> **Status:** [ Fail]
> **Severity:** [ Major]
> **V or V:** [Verification]
> 
> > **Test ID:** MC-02
> **Written by:** [Moises Cortes]
> **From Part 6:** [Req-02]
> **Title:** [Quiz options are all unique]
> **Traces to:** [REQ-02]
> **Test type:** [Unit]
> **Preconditions:** [Turn on live server within visual studio, run the software]
> **Test data:**
> - [User clicks on 4 individual options to answer.]
>
> **Steps:**
> 1. [Run live server]
> 2. [run software]
> 3. [Select start quiz]
> 4. [click any option]
> 5. [observe if each answer choice is unique each question]
>
> **Expected result:** [Answer options are unique for each question no doubles]
> **Actual result:** [options are different but do not appear at all for the other 3]
> **Status:** [ Fail]
> **Severity:** [ Major]
> **V or V:** [Verification]
>
> **Test ID:** MC-03
> **Written by:** [Moises Cortes]
> **From Part 6:** [Req-03]
> **Title:** [Quiz must give a confirmation before quitting]
> **Traces to:** [REQ-03]
> **Test type:** [Negative]
> **Preconditions:** [Turn on live server within visual studio, run the software]
> **Test data:**
> - [User clicks on the end quiz button after starting the quiz]
>
> **Steps:**
> 1. [Run live server]
> 2. [run software]
> 3. [Select start quiz]
> 4. [click end quiz]
> 5. [confirm end quiz when prompted]
>
> **Expected result:** [Given prompt to end quiz and go back to start or stay]
> **Actual result:** [Quiz ends immediately after pressing end quiz and taken back to start quiz selection.]
> **Status:** [ Fail]
> **Severity:** [ Major]
> **V or V:** [Verification]
>
> > **Test ID:** MC-01
> **Written by:** [Moises Cortes]
> **From Part 6:** [NFR-01]
> **Title:** [Answers are placed cleanly in the center of option box]
> **Traces to:** [NFR 01]
> **Test type:** [Integration]
> **Preconditions:** [Turn on live server within visual studio, run the software]
> **Test data:**
> - [User clicks on 4 individual options to answer.]
>
> **Steps:**
> 1. [Run live server]
> 2. [run software]
> 3. [Select start quiz]
> 4. [observe if answers are displayed at the center of each option box each question]
>
> **Expected result:** [Each answer is placed on the center of the box]
> **Actual result:** [options remain static and non viable for any option other than the left top box]
> **Status:** [ Fail]
> **Severity:** [ minimal]
> **V or V:** [validation]



