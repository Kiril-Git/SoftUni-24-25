function calculateToyShopEarnings(tripCost, puzzles, talkingDolls, teddyBears, minions, trucks) {
    // Prices of each toy
    const PUZZLE_PRICE = 2.60;
    const TALKING_DOLL_PRICE = 3.00;
    const TEDDY_BEAR_PRICE = 4.10;
    const MINION_PRICE = 8.20;
    const TRUCK_PRICE = 2.00;

    // Calculate the total number of toys and total cost
    let totalToys = puzzles + talkingDolls + teddyBears + minions + trucks;
    let totalCost = (puzzles * PUZZLE_PRICE) + 
                    (talkingDolls * TALKING_DOLL_PRICE) + 
                    (teddyBears * TEDDY_BEAR_PRICE) + 
                    (minions * MINION_PRICE) + 
                    (trucks * TRUCK_PRICE);

    // Apply discount if there are 50 or more toys
    if (totalToys >= 50) {
        totalCost *= 0.75;
    }

    // Deduct 10% rent from the total cost
    let finalEarnings = totalCost * 0.9;

    // Determine if Petya can afford the trip
    if (finalEarnings >= tripCost) {
        console.log(`Yes! ${(finalEarnings - tripCost).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripCost - finalEarnings).toFixed(2)} lv needed.`);
    }

}

// Example usage
calculateToyShopEarnings(40.8, 20, 25, 30, 50, 10);     // Outputs: "Yes! 418.20 lv left."
calculateToyShopEarnings(320, 8, 2, 5, 5, 1);           // Outputs: "Not enough money! 238.73 lv needed."
