function calculateMovieBudget(movieBudget, destination, season, days) {

    let dayPrice = 0
    let discountFactor = 0
    let total = 0

    switch (destination) {

        case "Dubai":
            if (season === "Winter") {
                dayPrice = 45000
                discountFactor = 0.7            //      Destination Dubai - discout 30%
           }
            else if (season === "Summer") {
                dayPrice = 40000
                discountFactor = 0.7
            }
        break

        case "Sofia":
            if (season === "Winter") {
                dayPrice = 17000
                discountFactor = 1.25
            }
            else if (season === "Summer") {
                dayPrice = 12500
                discountFactor = 1.25
            }
        break

        case "London":
            if (season === "Winter") {
                dayPrice = 24000
                discountFactor = 1               // No discount
            }
            else if (season === "Summer") {
                dayPrice = 20250
                discountFactor = 1
            }
        break
    }
    total = days * dayPrice *  discountFactor

    if (movieBudget >= total) {
        console.log(`The budget for the movie is enough! We have ${(movieBudget - total).toFixed(2)} leva left!`)
    }
    else {
        console.log(`The director needs ${(total - movieBudget).toFixed(2)} leva more!`)
    }
}

calculateMovieBudget(1000000, "Dubai", "Summer", 5 )
