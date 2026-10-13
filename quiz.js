class Quiz {
    // Date fields are private (plz ask me if you don't understand the "#" but it is supposed to make data fields private?)
    #ID;
    #numQuestions;
    quizQuestions;
    #correct;
    #result;

    // Basic constructor for the quiz
    constructor (id, numQuestions, quizQuestions) {
        this.#ID = id;
        this.#numQuestions = numQuestions;
        this.quizQuestions = quizQuestions;
        this.#correct = 0;
        this.#result = 0.0;
    }

    // Good old GETs & SETs nothing else!
    // Getters
    get ID() {
        return this.#ID;
    }
    get numQuestions() {
        return this.#numQuestions;
    }
    get quizQuestions() {
        return this.quizQuestions;
    }
    get correct() {
        return this.#correct;
    }
    get result() {
        return this.#result;
    }
    
    // Setters
    set ID(letter) {
        this.#ID = letter;
    }
    set numQuestions(numQuestions) {
        this.#numQuestions = numQuestions;
    }
    set quizQuestions(listOfQuestions) {
        this.quizQuestions = listOfQuestions;
    }
    set correct(num) {
        this.#correct = num;
    }
    set result(num) {
        this.#result = num;
    }
    
    // Methods
    
}