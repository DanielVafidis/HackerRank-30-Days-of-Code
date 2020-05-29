class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */

    // Write your constructor here
    constructor(firstName, lastName, id, testScores) {
        super(firstName, lastName, id, testScores);
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = +id;
        this.testScores = testScores;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */

    // Write your method here
    calculate(testScores) {
        let res;
        let score = this.testScores.reduce((a, b) => a + b) / this.testScores.length;
        if (score < 40) {
            res = "T";
        }
        else if (score < 55) {
            res = "D";
        }
        else if (score < 70) {
            res = "P";
        }
        else if (score < 80) {
            res = "A";
        }
        else if (score < 90) {
            res = "E";
        }
        else {
            res = "O";
        }
        return res;
    }

}