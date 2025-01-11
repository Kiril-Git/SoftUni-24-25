function calculateMovieBudget(movieBudget, destination, season, days) {

    let total = 0

    switch (destination) {

        case "Dubai":
            if (season === "Winter") {
                total = 45000 * days * 0.7
            }
            else if (season === "Summer") {
                total = 40000 * days * 0.7
            }
        break

        case "Sofia":
            if (season === "Winter") {
                total = 17000 * days * 1.25
            }
            else if (season === "Summer") {
                total = 12500 * days * 1.25
            }
        break

        case "London":
            if (season === "Winter") {
                total = 24000 * days 
            }
            else if (season === "Summer") {
                total = 20250 * days 
            }
        break
    }
    if (movieBudget >= total) {
        console.log(`The budget for the movie is enough! We have ${(movieBudget - total).toFixed(2)} leva left!`)
    }
    else {
        console.log(`The director needs ${(total - movieBudget).toFixed(2)} leva more!`)
    }
}

calculateMovieBudget(1000000, "Dubai", "Summer", 5 )
