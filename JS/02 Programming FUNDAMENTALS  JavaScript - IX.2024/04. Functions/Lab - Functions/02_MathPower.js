function powerCalculator (base, exponent) {

    let result = 1

    for (let i = 0; i < exponent; i++) {

        result *= base

    }

    console.log(result)
}

powerCalculator(1,8)


//      x^-5 = 1/x^5