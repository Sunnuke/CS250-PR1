// Importing
import {Question} from "./question.js";
import {ASLSignsLibrary} from "./aslingo.js";

class Quiz {
    // Date fields are private (plz ask me if you don't understand the "#" but it is supposed to make data fields private?)
    #ID;
    #numQuestions;
    #quizQuestions;
    #correct;
    #result;

    // Basic constructor for the quiz
    // Input should come from front end, From the quiz options!
    constructor (id, numQuestions) {
        this.#ID = id; // Alphabetical character has the ID for the quiz 
        this.#numQuestions = numQuestions; // Number that dictates the generation of questions for the quiz
        this.#quizQuestions = []; // A list Of question objects
        this.#correct = 0; // Correct number counter, to be increment for when a question is answered correctly
        this.#result = 0.0; // Result percentage from the quiz

        this.makeQuestions(numQuestions); // Start generating the projected number of question objects
    }

    // Good old GETs & SETs nothing else!
    // Getters
    get getID() {
        return this.#ID;
    }
    get getNumQuestions() {
        return this.#numQuestions;
    }
    get getQuizQuestions() {
        return this.#quizQuestions;
    }
    get getCorrect() {
        return this.#correct;
    }
    get getResult() {
        return this.#result;
    }
    
    // Setters
    set setID(letter) {
        this.#ID = letter;
    }
    set setNumQuestions(numQuestions) {
        this.#numQuestions = numQuestions;
    }
    set setQuizQuestions(listOfQuestions) {
        this.#quizQuestions = listOfQuestions;
    }
    set setCorrect(num) {
        this.#correct = num;
    }
    set setResult(num) {
        this.#result = num;
    }
    
    // Methods
    // Generate unique Question objects
    makeQuestions(num) {
        var numOfQuestions = num;
        var ids = [];
        var currId = 0;
        
        // This for loop is pretty much like the one in question.js but it is not nested!
        for (var i = 0; i < numOfQuestions; i++) {
            currId = Math.floor(Math.random() * ASLSignsLibrary.length) + 1;
            if (!(ids.includes(currId))) {
                ids.push(currId);
                this.#quizQuestions.push(new Question(currId));
            }
            else {
                --i;
            }
        }
    }
    // Compute the grade of the current quiz 
    finalGrade() {
        var correctAnswers = this.getCorrect;
        var numberOfQuestionsAnswered = this.getNumQuestions;
        var gradePercentage = correctAnswers / numberOfQuestionsAnswered;
        this.setResult = gradePercentage * 100;
    };
}

export {Quiz};