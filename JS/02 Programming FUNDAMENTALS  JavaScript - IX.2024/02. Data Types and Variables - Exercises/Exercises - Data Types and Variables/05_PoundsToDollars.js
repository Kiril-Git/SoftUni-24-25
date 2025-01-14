function currencyCalculator(poundsAmount) {

    const BRITISH_POUND_TO_DOLLAR = 1.31;

    let sum = poundsAmount * BRITISH_POUND_TO_DOLLAR


    console.log(sum.toFixed(3))
}

currencyCalculator(80)

