function calculations (inpurArr) {

    let daysCount = +inpurArr[0]
    let dailyProfit = +inpurArr[1]
    let expectedProfit = +inpurArr[2]


    let sum = 0

    for (let i = 1; i <= daysCount; i++) {

        sum += (i % 3 === 0) ? dailyProfit * 1.5 : dailyProfit;

        if (i % 5 === 0) 
            sum *= 0.7

    }




    console.log(sum < expectedProfit ? 
                `Collected only ${((sum / expectedProfit) * 100).toFixed(2)}% of the plunder.` 
                : `Ahoy! ${sum.toFixed(2)} plunder gained.`
            )
}

calculations (["10", "20", "380"])




// print:      Collected only 36.29% of the plunder.
    