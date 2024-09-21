function calculateMovieBudget(budget, numExtras, clothingCostPerExtra) {
    // Calculate the set cost, which is 10% of the budget
    let setCost = budget * 0.10;

    // Calculate the total clothing cost
    let totalClothingCost = numExtras * clothingCostPerExtra;

    // Apply a discount if there are more than 150 extras
    if (numExtras > 150) {
        totalClothingCost *= 0.90;
    }

    // Calculate the total cost for the movie
    let totalCost = setCost + totalClothingCost;

    // Determine if the budget is sufficient and print the appropriate message
    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
}

// Example usage
calculateMovieBudget(20000, 120, 55.5);         // Outputs: "Action! Wingard starts filming with 11340.00 leva left."
calculateMovieBudget(9587.88, 222, 55.68);     // Example usage
