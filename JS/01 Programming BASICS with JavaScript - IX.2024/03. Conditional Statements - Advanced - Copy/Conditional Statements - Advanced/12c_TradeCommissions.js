function calculateCommission(input) {
    let city = input[0];
    let sales = Number(input[1]);

    if (sales < 0) {
        console.log("error");
        return;
    }

    // Define commission rates for each city
    const commissionRates = {
        "Sofia": [0.05, 0.07, 0.08, 0.12],
        "Varna": [0.045, 0.075, 0.1, 0.13],
        "Plovdiv": [0.055, 0.08, 0.12, 0.145]
    };

    // Get the rates for the provided city
    let rates = commissionRates[city];

    // If the city is invalid, handle the error
    if (!rates) {
        console.log("error");
        return;
    }

    let commission;
    // Calculate commission based on sales range
    if (sales <= 500) {
        commission = sales * rates[0];
    } else if (sales <= 1000) {
        commission = sales * rates[1];
    } else if (sales <= 10000) {
        commission = sales * rates[2];
    } else {
        commission = sales * rates[3];
    }

    // Output the formatted result
    console.log(commission.toFixed(2));
}

// Example Usage
calculateCommission(["Plovdiv", "499.99"]);
