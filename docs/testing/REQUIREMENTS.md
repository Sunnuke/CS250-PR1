# Testable Requirements: ASLingo

**Team number:** 5
**Inherited from:** Group 4 (ASLingo: Javier Rivera, Trystan McCutcheon, Utsav Ray, Amber Rama)

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| Quiz generation and sign library: `JAVASCRIPT/quiz.js` (`makeQuestions`), `JAVASCRIPT/question.js`, `JAVASCRIPT/aslingo.js` | Grant Phillips | GP |
| Quiz taking and scoring: answer buttons, score counter, `finalGrade()`, Finish Quiz in `HTML/quiz.html` | Asher Plotsky | AP |
| Quiz history and user progress: `HTML/history.html`, `JAVASCRIPT/quizHistory.js`, `JAVASCRIPT/user.js`, `localStorage` | Debora Velazquez | DV |
| Pages, navigation and styling: `index.html`, `HTML/index.html`, links, `CSS/style.css`, logo and stylesheet paths | [Moises Cortes] | [MC] |

**Part 5 and Part 6 hand-out:**

| Item from SYSTEM_MAP.md | Goes to |
|---|---|
| CR-1 (quiz of 5 different questions) | Grant Phillips (GP) |
| Part 6 tests | None found. `SYSTEM_MAP.md` has no Part 6 section yet. |

<!--
RULES
- Only edit YOUR OWN section below. This keeps merge conflicts away.
- Categories: G = Stakeholder Goal, REQ = Functional, NFR = Non-Functional.
- "From Part 5": write the original CR ID and its text from SYSTEM_MAP.md. Write "New" if you added it this sprint.
- Status: Confirmed or Suspected bug. No Unconfirmed allowed. Every Suspected bug needs a GitHub Issue.
- The test: could a stranger write a Pass or Fail test without asking you a question?
-->

---

## Section: Quiz Generation and Sign Library (Grant Phillips)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-GP-01 | ASL learner taking a quiz | Each question in a quiz tests a different sign, so my score reflects how many different signs I know. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-GP-01 | When `HTML/quiz.html` loads, the system shall create a quiz of exactly 5 questions whose 5 sign IDs are all different and each between 1 and the library size (currently 9). | Confirmed | CR-1 (Confirmed): The system shall create a quiz of 5 different questions when a user starts a quiz. |
| REQ-GP-02 | No two entries in `ASLSignsLibrary` shall have the same `word`. | Suspected bug | New |
| REQ-GP-03 | `new Quiz(id, n)` shall throw a `RangeError` when `n` is greater than the library size. | Suspected bug | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-GP-01 | Creating a quiz of any requested size shall finish (return or throw) within 1 second. | Suspected bug | New |

**Rewrite note:** CR-1 said "5 different questions" without saying different how. REQ-GP-01 makes it checkable: 5 distinct IDs in the library's range. It passes, but IDs 1 and 3 are both "Hello", so different IDs are not always different signs (Validation finding, GP-04).

---

## Section: Quiz Taking and Scoring (Asher Plotsky)

### Stakeholder Goals


| ID | Stakeholder | Goal |
|---|---|---|
| G-AP-01 | User | The user needs to be able to practice sign language through taking quizzes |


### Functional Requirements


| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-AP-01 | The system shall display four options when the user takes a quiz | Suspected bug | CR-1 |
| REQ-AP-02 | The system shall ask the user 5 questions during the quiz |confirmed | CR-03 |
| REQ-AP-03 | The system shall randomize the order of questions | confirmed | CR-05 |
| REQ-AP-04 | The system shall display a video with each question | confirmed | CR-04 |


### Non-Functional Requirements


| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-AP-01 | The video shall match the correct answer of the quiz | Confirmed | No |


---

## Section: Quiz History and User Progress (Debora Velazquez)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |

---

## Section: Pages, Navigation and Styling (Moises Cortes)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |