function trackExamPreparation(input){

    const MAX_POOR_GRADES = Number(input[0]);  // The maximum number of poor grades Marin can receive before he needs a break
    const POOR_GRADE_THRESHOLD = 4;            // A poor grade is defined as any grade <= 4

    let index = 1
    let problemName = input[index]
    let problemGrade = input[index+1]

    let poorGradesCount = 0;          // To keep track of how many poor grades Marin has received
    let totalGradesCount = 0;         // To keep track of the total number of problems solved
    let sumGrades = 0;                // To accumulate the sum of all grades for average calculation
    let lastProblem = "";             // To store the name of the last problem Marin worked on

    

    while (problemName !== "Enough"){

        let currentGrade = Number(problemGrade)

        totalGradesCount++
        sumGrades += currentGrade
        lastProblem = problemName

         if (currentGrade <= POOR_GRADE_THRESHOLD) {
            poorGradesCount++
         }
         if ( poorGradesCount === MAX_POOR_GRADES) {

            console.log(`You need a break, ${poorGradesCount} poor grades.`)
            return
         }

        index+=2
        problemName = input[index]
        problemGrade = input[index+1]
    }
    console.log(`Average score: ${(sumGrades / totalGradesCount).toFixed(2)}`)
    console.log(`Number of problems: ${totalGradesCount}`)
    console.log(`Last problem: ${lastProblem}`)

}

trackExamPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])