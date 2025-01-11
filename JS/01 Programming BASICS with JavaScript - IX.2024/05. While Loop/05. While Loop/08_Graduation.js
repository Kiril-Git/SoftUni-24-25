function calculateGraduation (input) {

    let index = 1
    let currentGrade = Number(input[index])

    let name = input[0]
    let averageGrade = 0
    let gradeSum = 0

    let grade = 0
    let failedYears = 0

    while (grade < 12){

        if (currentGrade >= 4) {
            gradeSum += currentGrade
            grade++
        }
        else{
            failedYears++
            if (failedYears === 2){
                grade++
                console.log(`${name} has been excluded at ${grade} grade`)
                return
            }
        }
        index++
        currentGrade = Number(input[index])
    }

    averageGrade = gradeSum / grade

    console.log(`${name} graduated. Average grade: ${(averageGrade).toFixed(2)}`)
}

calculateGraduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])