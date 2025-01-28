function calculateMinCoins(input) {

    let amount = Number(input[0]);                  // Convert the input to a number
    let lv = Math.floor(amount);                    // Extract the leva part
    let st = Math.round((amount - lv) * 100);       // Extract the stotinki part and round

    let coinsCounter = 0;

    // Count coins for leva
    coinsCounter += Math.floor(lv / 2);             // Each 2 leva coin
    coinsCounter += lv % 2;                                    // Remaining 1 lev, if any


    // Count coins for stotinki
    while (st > 0) {
        if (st >= 50) {
            coinsCounter++;
            st -= 50;
        } else if (st >= 20) {
            coinsCounter++;
            st -= 20;
        } else if (st >= 10) {
            coinsCounter++;
            st -= 10;
        } else if (st >= 5) {
            coinsCounter++;
            st -= 5;
        } else if (st >= 2) {
            coinsCounter++;
            st -= 2;
        } else if (st >= 1) {
            coinsCounter++;
            st -= 1;
        }
    }

    console.log(coinsCounter);
}

calculateMinCoins(["12.56"]);  // Example test
