function calculateFishingTripCost(input) {

    const SPRING_PRICE = 3000;
    const SUMMER_PRICE = 4200;
    const AUTUMN_PRICE = 4200;
    const WINTER_PRICE = 2600;

    let budget = Number(input[0]);          // Budget of the group
    let season = input[1];                  // Season ("Spring", "Summer", "Autumn", "Winter")
    let fishermen = Number(input[2]);       // Number of fishermen

    let total

    switch (season) {

        case "Spring":
        total = SPRING_PRICE

        if(fishermen > 0 && fishermen <= 6) {
            total *= 0.9
        }
        else if (fishermen <= 11) {
            total *= 0.85
        }
        else{
            total *= 0.75
        }
        break

        case "Summer":
        total = SUMMER_PRICE

        if(fishermen > 0 && fishermen <= 6) {
            total *= 0.9
        }
        else if (fishermen <= 11) {
            total *= 0.85
        }
        else{
            total *= 0.75
        }
        break

        case "Autumn":
        total = AUTUMN_PRICE

        if(fishermen > 0 && fishermen <= 6) {
            total *= 0.9
        }
        else if (fishermen <= 11) {
            total *= 0.85
        }
        else{
            total *= 0.75
        }
        break
        
        case "Winter":
        total = WINTER_PRICE

        if(fishermen > 0 && fishermen <= 6) {
            total *= 0.9
        }
        else if (fishermen <= 11) {
            total *= 0.85
        }
        else{
            total *= 0.75
        }
        break
    }

    if(season !== "Autumn" && fishermen % 2 === 0){
        total *= 0.95
    }

    if (budget >= total) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`)
    }
}

calculateFishingTripCost(["2000", "Winter", "13"])
    