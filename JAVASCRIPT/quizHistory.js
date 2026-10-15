class QuizHistory {
    constructor() {
        this.quizHistory = [];
    }

    addQuiz(quiz) {
        this.quizHistory.push(quiz);
    }

    getQuizHistory() {
        return this.quizHistory;
    }
}

export { QuizHistory };
