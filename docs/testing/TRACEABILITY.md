# Traceability Matrix

**Team number:** [05]
**Filled in by (captain):** [Asher]

Fill this in **after** everyone's work is merged. One row per requirement.

## Requirements to Tests

| Requirement ID | From Part 5 | Owner | Test case IDs | Result | GitHub Issue # |
|---|---|---|---|---|---|
| REQ-MG-01 *(example)* | CR-3 | Maria | MG-01, MG-02 | 1 Pass, 1 Fail | #12 |
| REQ-AP-01 | CR-1 | Asher | AP-01 | Fail | [AP-01] |
| REQ-AP-02 | CR-5 | Asher | AP-02 | Pass | N/A |
| REQ-AP-03 | CR-4 | Asher | AP-03 | Pass | N/A |
| NFR-AP-01 | No | Asher | AP-04 | Pass | N/A |
| REQ-GP-01 | No | Grant | GP-01| Pass | N/A |
| REQ-GP-02 | No | Grant | GP-02 | Fail | [GP-02] |
| REQ-GP-03 | No | Grant | GP-03 | Fail | [GP-03] |
| NFR-GP-01 | No | Grant | GP-03 | Fail | [GP-03] |
| G-GP-01 | No | Grant | GP-04 | Fail | [GP-04] |
|Req Mc-01| No | Moises |Mc-01|Fail|[Mc-01]|
|Req Mc-02|No |Moises|Mc-02 |Fail|[Mc-02]|
|Req Mc-03|no|Moises|Mc-03 |Fail |[[Mc-03]|
|Nfr Mc-01|no|Moises|Mc-01|pass|[Mc-01]|
|G-DV-01| new | Debora | DV-04 | fail | #103 |
| REQ-DV-01 | new | Debora | DV-02, DV-03 | pass | N/A |
| REQ-DV-02|  CR-2 | Debora | DV-01 | fail | #100 |
| REQ-DV-03 | new | Debora | DV-05 | fail | #104 |
| NFR-DV-01 | new | Debora | DV-01 | fail | #100 |

## Gaps

List any requirement with no test, any test with no requirement, and any Part 5 requirement or Part 6 test that nobody brought over. Write "None" if there are none.

-

## Test Type Coverage

Put a Test ID next to each type. Team minimum: all 7.

| Test type | Test ID |
|---|---|
| Unit | AP-01, DV-02 |
| Integration | DV-01, DV-03 |
| System (E2E) | AP-02 |
| Acceptance | GP-04, DV-04 |
| Boundary Value | GP-03 |
| Negative | DV-05 |
| Security | TBD |

## Validation Findings

A Validation finding means the system does what the requirement says, but the requirement does not serve the Stakeholder Goal. Remember the alphabetical leaderboard.

| Requirement ID | Goal it fails | Why | Issue # |
|---|---|---|---|
REQ-GP-01 | G-GP-01 | the requirements only requires different sign IDs. It allows duplicate sign words, so a quiz may show the same sign more than once even though the requirment passes. | TBD|

the sustem currently has one validation finding. GP-01 passes because the quiz uses five different IDs, but IDs i and 3 both represent "Hello" therefore the requirement does not fully support the learner's goal of practicing different signs 
| | | | |

**If you found none,** explain in 2 to 3 sentences why every requirement truly serves its Goal:

>

## Summary

| | Count |
|---|---|
| Part 5 requirements carried over | 4 |
| New requirements added | 14 |
| Part 6 tests upgraded (out of 3) | 2 |
| Total requirements | 18 |
| Total test cases | 17 |
| Passed | 6 |
| Failed | 11 |
| Issues opened | 3 confirmed; remaning issue numbers are TBD |
| Critical issues | 0 |

**In one sentence, would you ship this system today? Why or why not?**

> no, i would not ship this system today becasue several major requirements fail, quiz history display correctly, answer options are incomplete, and the team still needs a security test.
