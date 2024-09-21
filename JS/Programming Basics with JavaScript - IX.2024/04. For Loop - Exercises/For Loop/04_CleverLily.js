function calculateLilySavings(input) {

    const BROTHER_TAKE = 1.00;                      // Amount Lily's brother takes on each even birthday

    let age = Number(input[0]);                     // Lily's age
    let washingMachinePrice = Number(input[1]);     // Price of the washing machine
    let toyPrice = Number(input[2]);                // Price of each toy

    let totalMoney = 0;                             // Total saved money
    let totalToys = 0;                              // Total number of toys received
    let moneyGift = 0;                              // Money gift received on each even birthday

    let temp = 0

    for(i = 1; i <= age; i++) {

        if (i % 2 === 0){

            temp += 10
            moneyGift += temp 
            moneyGift -= BROTHER_TAKE
        }
        else {
            totalToys += toyPrice
        }
    }
    totalMoney = totalToys + moneyGift

    if (totalMoney >= washingMachinePrice){
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`)
    }
    else{
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`)
    }

}

calculateLilySavings(["21", "1570.98", "3"])