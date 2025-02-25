function schoolRegister (inputArr) {


    class Grade {

        constructor(grade) {
            this.grade = grade
            this.students = []
            this.totalScore = 0
        }


        addStudent(name, score) {
            this.students.push(name)
            this.totalScore += score
        }

        getAverageScore() {
            return (this.totalScore / this.students.length).toFixed(2)
        }

        print() {
            console.log(`${this.grade} Grade`)
            console.log(`List of students: ${this.students.join(', ')}`)
            console.log(`Average annual score from last year: ${this.getAverageScore()}`)
            console.log('')
        }


    }



    let register = {}

    for (let el of inputArr) {

        let [, name, grade, score] = el.match(/Student name: (.*), Grade: (\d+), Graduated with an average score: ([\d.]+)/)
        grade = +grade
        score = +score

        if (score >= 3) {
            let nextGrade = grade +1

            if (!register[nextGrade]) {
                register[nextGrade] = new Grade(nextGrade)
            }

            register[nextGrade].addStudent(name, score)
        }
    }


    let sortedGrades = Object.keys(register).map(Number).sort((a, b) => a - b)

    for (let el of sortedGrades) {

        register[el].print()
    }
}


schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    )




    // Print: 
    //                             9 Grade
    //                             List of students: Mark, Daryl
    //                             Average annual score from last year: 5.35
                                
    //                             10 Grade
    //                             List of students: Ethan, Joey, Bill
    //                             Average annual score from last year: 5.52
                                
    //                             11 Grade
    //                             List of students: Steven, Philip, Gavin
    //                             Average annual score from last year: 4.42
                                
    //                             12 Grade
    //                             List of students: Bob, Peter
    //                             Average annual score from last year: 5.02

    //