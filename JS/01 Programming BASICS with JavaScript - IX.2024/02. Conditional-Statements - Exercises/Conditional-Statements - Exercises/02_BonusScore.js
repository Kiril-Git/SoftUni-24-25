function calculateBonusPoints(input) {

    let initialPoints = Number(input[0])
    let total
    let bonus

    if(initialPoints <= 100){
        total = initialPoints + 5
        bonus = 5
    }
    else if(initialPoints <= 1000) {
        bonus = initialPoints * 0.2
        total = initialPoints + bonus
    }
    else if(initialPoints > 1000) {
        bonus = initialPoints * 0.1
        total = initialPoints + bonus    }

    if(initialPoints % 2 === 0){
        total++
        bonus++
    }
    else if(initialPoints % 10 === 5){
        total += 2
        bonus += 2
    }

    console.log(bonus)
    console.log(total)
}

calculateBonusPoints(["5"])