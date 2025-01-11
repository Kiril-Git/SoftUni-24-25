function calculateFinalAssessment(input) {

    let index = 0
    let currentInput = input[index]

    let juryMembers = Number(input[index++])
    let presentationCounter = 0
    let finalAverageScore = 0

    while (currentInput !== "Finish") {

        let presentationName = input[index]

        let sumGrades = 0
        let averagePresentationScore = 0

        for (let i = 0; i < juryMembers; i++) {

            index++
            let grade = Number(input[index])
            sumGrades += grade
        }
        averagePresentationScore = sumGrades / juryMembers
        finalAverageScore += averagePresentationScore
        console.log(`${presentationName} - ${(averagePresentationScore).toFixed(2)}.`)
        presentationCounter++ 
        index++
        currentInput = input[index]
    }
    console.log(`Student's final assessment is ${(finalAverageScore / presentationCounter).toFixed(2)}.`)
}

calculateFinalAssessment(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"])