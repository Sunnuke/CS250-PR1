import {ASLSignsLibrary} from "./aslingo.js";

class Question {
        // Date fields are private (plz ask me if you don't understand the "#" but it is supposed to make data fields private?)
    #id;
    #answer;
    #questionText;
    #wrongAnswers;
    #answerSelection;

    // Basic constructor for the question
    constructor (id) {
        this.#id = id; // ID number of the question object
        this.#answer = ""; // The string that represents the answer of the object
        this.#questionText = ""; // The string that represents the text for the question
        this.#wrongAnswers = []; // A list of wrong answers
        this.#answerSelection =[]; // A list of wrong answers and the answer that will be combined and randomly organized for the question
        // Calling methods to set the values of theconstructed question
        this.pickAnySign(); // Picking a random ASL sign from ASLSignsLibrary
        this.grabWrongAnswers(); // Picking 3 random ASL sign, as wrong answers from ASLSignsLibrary
        this.makeQuizSelection(); // Making a random list of answer selections
    }

    // Good old GETs & SETs nothing else!
    // Getters
    get getId() {
        return this.#id;
    }
    get getAnswer() {
        return this.#answer;
    }
    get getQuestionText() {
        return this.#questionText;
    }
    get getWrongAnswers() {
        return this.#wrongAnswers;
    }
    get getAnswerSelection() {
        return this.#answerSelection;
    }
    
    // Setters
    set setId(num) {
        this.#id = num;
    }
    set setAnswer(text) {
        this.#answer = text;
    }
    set setQuestionText(text) {
        this.#questionText = text;
    }
    set setWrongAnswers(wrongs) {
        this.#wrongAnswers = wrongs;
    }
    set setAnswerSelection(selection) {
        this.#answerSelection = selection;
    }
    
    // Methods
    // This method find The object that matches the ID number that was given
    pickAnySign() {
        const signId = this.getId;
        const selectedSign = ASLSignsLibrary[signId - 1];
        this.setAnswer = selectedSign.word;
        this.setQuestionText = selectedSign.questions[0];
    }
    // This method is designed to look for random filler answers and none of them should match the correct answer
    grabWrongAnswers() {
        var ids = [];
        var currId = 0;
        var temp_list = []
        for (var i = 0; i < 3; i++) {
            currId = Math.floor(Math.random() * ASLSignsLibrary.length) + 1;
            if (this.#wrongAnswers.length < 3) {
                if (!(ids.includes(currId)) && (currId != this.getId)) {
                    ids.push(currId);
                    temp_list.push(ASLSignsLibrary[currId - 1].word);
                }
                else {
                    i--;
                }
            }
            else {
                break;
            }
        }
        this.setWrongAnswers = temp_list;
    }
    // This function is supposed to combine the correct answer with the wrong answer is and make a random selection
    makeQuizSelection() {
        var temp_answer = this.getAnswer;
        var temp_wrongs = this.getWrongAnswers;
        temp_wrongs.push(temp_answer);
        var newTemp_wrongs = [];
        var words = [];
        // The purpose of this loop is to take the combination list of the wrong answers with the answer and randomly assign them into a new list
        for (var i = 0; i < 4; i++) {
            var randomWordIndex = Math.floor(Math.random() * temp_wrongs.length);
            if (!(words.includes(temp_wrongs[randomWordIndex]))) {
                words.push(temp_wrongs[randomWordIndex]);
                newTemp_wrongs.push(temp_wrongs[randomWordIndex]);
            }
            else {
                i--;
            }
        }
        // Updating enter selection field with new answer choices
        this.setAnswerSelection = newTemp_wrongs;
    }
}

// Exporting
export {Question};