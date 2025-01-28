function calculateFruitPrice(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    // Prices for weekdays (Monday to Friday)
    const weekdayPrices = {
        "banana": 2.50,
        "apple": 1.20,
        "orange": 0.85,
        "grapefruit": 1.45,
        "kiwi": 2.70,
        "pineapple": 5.50,
        "grapes": 3.85
    };

    // Prices for weekends (Saturday and Sunday)
    const weekendPrices = {
        "banana": 2.70,
        "apple": 1.25,
        "orange": 0.90,
        "grapefruit": 1.60,
        "kiwi": 3.00,
        "pineapple": 5.60,
        "grapes": 4.20
    };

    let price = 0;

    // Determine if it's a weekday or weekend
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        price = weekdayPrices[fruit];
    } else if (day === "Saturday" || day === "Sunday") {
        price = weekendPrices[fruit];
    } else {
        console.log("error");
        return;
    }

    // Check if the fruit is valid
    if (price !== undefined) {
        let total = price * quantity;
        console.log(total.toFixed(2));
    } else {
        console.log("error");
    }
}

// Example usage:
calculateFruitPrice(["apple", "Tuesday", "2"]);          // Output: 2.40
calculateFruitPrice(["orange", "Sunday", "3"]);          // Output: 2.70
calculateFruitPrice(["kiwi", "Monday", "2.5"]);          // Output: 6.75
calculateFruitPrice(["grapes", "Saturday", "0.5"]);      // Output: 2.10
calculateFruitPrice(["tomato", "Monday", "0.5"]);        // Output: error
