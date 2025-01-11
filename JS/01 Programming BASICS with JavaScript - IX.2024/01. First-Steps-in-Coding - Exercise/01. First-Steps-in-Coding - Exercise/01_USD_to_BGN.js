function currencyConverter(input){
    const USD_TO_BGN_RATE = 1.79549

    let sum_USD = Number (input[0])
    let total_BGN = sum_USD * USD_TO_BGN_RATE

    console.log(total_BGN)
}

currencyConverter(["22"])

