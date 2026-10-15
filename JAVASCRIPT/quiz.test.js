import { Quiz } from "./quiz.js";
import { Question } from "./question.js";

function assert(condition, message) {
    if (!condition) {
        throw new Error("FAILED: " + message);
    }
}

// Test 1: Quiz generates the requested number of questions
const quiz = new Quiz(1, 5);

assert(
    quiz.getQuizQuestions.length === 5,
    "Quiz should generate 5 questions"
);

// Test 2: Quiz questions have unique IDs
const questionIds = quiz.getQuizQuestions.map(question => question.getId);

assert(
    new Set(questionIds).size === questionIds.length,
    "Quiz questions should have unique IDs"
);

// Test 3: A question generates four answer choices
const question = quiz.getQuizQuestions[0];

assert(
    question.getAnswerSelection.length === 4,
    "Question should generate 4 answer choices"
);

// Test 4: Answer choices contain no duplicates
assert(
    new Set(question.getAnswerSelection).size === 4,
    "Question answer choices should be unique"
);

// Test 5: Correct answer is included in the answer choices
assert(
    question.getAnswerSelection.includes(question.getAnswer),
    "Answer choices should contain the correct answer"
);

// Test 6: Score can increment correctly
quiz.setCorrect = quiz.getCorrect + 1;

assert(
    quiz.getCorrect === 1,
    "Correct answer should increment score"
);

// Test 7: Final grade calculates correctly
quiz.setCorrect = 3;
quiz.finalGrade();

assert(
    quiz.getResult === 60,
    "3 correct answers out of 5 should produce a 60% grade"
);

// Test 8: Zero correct answers produces 0%
quiz.setCorrect = 0;
quiz.finalGrade();

assert(
    quiz.getResult === 0,
    "0 correct answers out of 5 should produce a 0% grade"
);

// Test 9: All correct answers produces 100%
quiz.setCorrect = 5;
quiz.finalGrade();

assert(
    quiz.getResult === 100,
    "5 correct answers out of 5 should produce a 100% grade"
);

console.log("All 9 ASLingo quiz tests passed.");
