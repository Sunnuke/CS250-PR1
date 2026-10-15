// User
class User {
    // Date fields are private (plz ask me if you don't understand the "#" but it is supposed to make data fields private?)
    #name;
    #bestGrade;
    #gradeHistory;
    #GPA;

    // Basic constructor for the user
    constructor (name) {
        this.#name = name;
        this.#bestGrade = 0;
        this.#gradeHistory = [];
        this.#GPA = 0.0;
    }

    // Good old GETs & SETs nothing else!
    // Getters
    get getName() {
        return this.#name;
    }
    get getBestGrade() {
        return this.#bestGrade;
    }
    get getGradeHistory() {
        return this.#gradeHistory;
    }
    get getGPA() {
        return this.#GPA;
    }
    // Setters
    set setName(newName) {
        this.#name = newName;
    }
    set setBestGrade(grade) {
        this.#bestGrade = grade;
    }
    set setGradeHistory(newGrades) {
        this.#gradeHistory.push(newGrades);
    }
    set setGPA(percent) {
        this.#GPA = percent;
    }

    // Methods
    // Calculate the user's overall Grade
    calculateOverallPercentage() {
        
        var sum = 0;
        var numbersThereAre = this.getGradeHistory.length;
        const allGrades = this.getGradeHistory;
        if (!(numbersThereAre == 0)) {
            for (var i = 0; i < numbersThereAre; i++) {
                sum += allGrades[i];
            }
            this.setGPA = sum / numbersThereAre;
        }
    }

}

export {User};
