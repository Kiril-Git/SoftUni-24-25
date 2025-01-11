function calculateSalesCommission(city, sales) {
    let commission = 0;

    if (sales < 0) {
        console.log("error");
        return;
    }

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.05; // 5%
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.07; // 7%
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.08; // 8%
            } else if (sales > 10000) {
                commission = sales * 0.12; // 12%
            }
            break;

        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.045; // 4.5%
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.075; // 7.5%
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.10; // 10%
            } else if (sales > 10000) {
                commission = sales * 0.13; // 13%
            }
            break;

        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.055; // 5.5%
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.08; // 8%
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.12; // 12%
            } else if (sales > 10000) {
                commission = sales * 0.145; // 14.5%
            }
            break;

        default:
            console.log("error");
            return;
    }

    console.log(commission.toFixed(2));
}

// Example inputs:
calculateSalesCommission("Sofia", 1500);        // Output: 120.00
calculateSalesCommission("Plovdiv", 499.99);    // Output: 27.50
calculateSalesCommission("Varna", 3874.50);     // Output: 387.45
calculateSalesCommission("Kaspichan", -50);     // Output: error
