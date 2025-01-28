function formatGrade(inputNum) {

    let  grade = +inputNum
    let performace = ''
    let fail = false

    if (grade < 3) {
        performace = 'Fail'
        fail = true
    }
    else if (grade < 3.5) {
        performace = 'Poor'
    }
    else if (grade < 4.5) {
        performace = 'Good'
    }
    else if (grade < 5.5) {
        performace = 'Very good'
    }
    else if (grade >= 5.5) {
        performace = 'Excellent'
    }

    if (fail) {
        console.log(performace + ' (2)')
    }
    else{
    console.log(`${performace} (${grade.toFixed(2)})`)
    }
}

formatGrade(2.33)