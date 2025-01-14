function resourceMiningCalculator (daylyAmount) {

    let yield = daylyAmount
    let sum = 0
    let daysCounter = 0

    while (yield >= 100) {

        daysCounter++
        sum += yield
        yield -= 10

        sum -= 26

    }

    if (sum >= 26) {
        sum -= 26
    }
    else {
        sum = 0
    }

    console.log(daysCounter)
    console.log(sum)
}

resourceMiningCalculator(50)
