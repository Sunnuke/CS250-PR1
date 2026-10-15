// User
class User {
    // Date fields are private (plz ask me if you don't understand the "#" but it is supposed to make data fields private?)
    #name;
    #bestGrade;
    #gradeHistory;

    // Basic constructor for the user
    constructor (name) {
        this.#name = name;
        this.#bestGrade = 0;
        this.#gradeHistory = [];
    }

    // Good old GETs & SETs nothing else!
    // Getters
    get name() {
        return this.#name;
    }
    get bestGrade() {
        return this.#bestGrade;
    }
    get gradeHistory() {
        return this.#gradeHistory;
    }
    // Setters
    set name(newName) {
        this.#name = newName;
    }
    set bestGrade(grade) {
        this.#bestGrade = grade;
    }
    set gradeHistory(newGrades) {
        this.#gradeHistory += newGrades;
    }

    // Methods
    // TBD

}
