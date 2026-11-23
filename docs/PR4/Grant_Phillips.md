# Grant Phillips

## Bug 1 — GP-03: Requesting 10 questions freezes the quiz

- Issue: [#90 — new Quiz(1, 10) never returns and freezes the page](https://github.com/Sunnuke/CS250-PR1/issues/90)
- Pull request: [PR for issue #90](https://github.com/Sunnuke/CS250-PR1/pull/110)
- Classification: This was a code bug because GP-03 showed that the quiz generated 8 and 9 questions but hung when asked for 10, even though the library had only 9 signs.

I added a check at the start of `makeQuestions()` that throws a `RangeError` if the request exceeds the sign library size. After the fix, the 10-question request threw the expected error and all four GP tests passed.

**Before:** GP-03 timed out waiting for the 10-question quiz.

![GP-03 failing before the fix](Screenshots/Grant_Phillips_%5BGP-03%5D_before.PNG)

**After:** GP-03 passed and the 10-question request threw a `RangeError`.

![GP-03 passing after the fix](Screenshots/Grant_Phillips_%5BGP-03%5D_after.PNG)

## Bug 2 — MC-03: Finish Quiz skips confirmation

- Issue: [#99 — Quiz ends immediately upon pressing the end quiz button](https://github.com/Sunnuke/CS250-PR1/issues/99)
- Pull request: [PR for issue #99](https://github.com/Sunnuke/CS250-PR1/pull/110)
- Classification: This was a code bug because the MC-03 browser test showed that clicking Finish Quiz immediately opened the history page without asking for confirmation.

I added a confirmation prompt before the quiz is graded or the score is saved. Cancel keeps the current quiz open. OK grades the quiz, saves the score, and opens the history page.

**Before:** Clicking Finish Quiz immediately opened the history page.

![Quiz history opened without confirmation](Screenshots/Grant_Phillips_%5BMC%2003%5D_before_fix.PNG)

**After:** Clicking Finish Quiz displays a prompt with OK and Cancel.

![Finish Quiz confirmation prompt](Screenshots/Grant_Phillips_%5BMC%2003%5D_after_fix.PNG)

## AI disclosure

I used ChaptGpt to help look over all changes made and help with grammar.