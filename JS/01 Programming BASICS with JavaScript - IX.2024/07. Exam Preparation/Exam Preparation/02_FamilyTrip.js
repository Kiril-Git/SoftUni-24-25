function  familyVacation(budget, nights, pricePerNight, extraCostsPercent) {

    if (nights > 7) {
        pricePerNight *= 0.95
    }

    let extraCosts = (budget * extraCostsPercent) / 100

    let total = nights * pricePerNight + extraCosts

    
    if (budget >= total) {
    console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`)
    }
    else{
        console.log(`${(total - budget).toFixed(2)} leva needed.`)
    }
}

familyVacation(500, 7, 66, 15 )

