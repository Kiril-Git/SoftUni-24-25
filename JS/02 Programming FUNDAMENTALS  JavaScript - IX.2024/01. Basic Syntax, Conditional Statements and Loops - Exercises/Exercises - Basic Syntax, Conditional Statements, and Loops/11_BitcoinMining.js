function bitcoinCalculator(input) {


    const BITCOIN_TO_LV = 11949.16;             // Value of 1 Bitcoin in Bulgarian Leva
    const GOLD_TO_LV = 67.51;                   // Value of 1 gram of gold in Bulgarian Leva

    let daysCounter = 0
    let dayFirstBitcoinPurchase  = 0
    let sumBGN = 0
    let bitcoinSum = 0

    for (let i = 0; i < input.length; i++) {

        let todaysGold = input[i]
        daysCounter++

        if (daysCounter % 3 === 0) {
            todaysGold *= 0.7
        }
        let temp = todaysGold * GOLD_TO_LV
        sumBGN += temp

        let tempAmount = Math.floor(sumBGN / BITCOIN_TO_LV)

        if (tempAmount >= 1 ) {
            
            bitcoinSum += tempAmount
            sumBGN -= tempAmount * BITCOIN_TO_LV 

            if (dayFirstBitcoinPurchase === 0){
                dayFirstBitcoinPurchase = daysCounter
            }
        }




    }

console.log('Bought bitcoins: ' + bitcoinSum)

if (dayFirstBitcoinPurchase > 0) {
console.log('Day of the first purchased bitcoin: ' + dayFirstBitcoinPurchase)
}

console.log(`Left money: ${sumBGN.toFixed(2)} lv.`)
}

bitcoinCalculator([3124.15, 504.212, 2511.124])