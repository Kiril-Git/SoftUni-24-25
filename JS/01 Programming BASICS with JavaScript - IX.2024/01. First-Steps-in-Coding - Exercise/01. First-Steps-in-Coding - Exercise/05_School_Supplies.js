function budgetCalculator(input) {

    const PEN_PRICE = 5.8
    const PENCIL_PRICE = 7.2
    const DETERGENT_PRICE = 1.2


    let penPacksCount = Number(input[0])
    let pencilPakcsCount = Number(input[1])
    let detergentInLiters = Number(input[2])
    let discount = Number(input[3])

    let discountFactor = discount / 100

    let penSum = penPacksCount * PEN_PRICE
    let pencilSum = pencilPakcsCount * PENCIL_PRICE
    let detergentSum = detergentInLiters * DETERGENT_PRICE

    let sum = penSum + pencilSum + detergentSum
    let discountSum = sum * discountFactor
    let total = sum - discountSum

    console.log(total)
}

budgetCalculator(["2", "3", "4", "25"])         //     use alt + j to join lines

budgetCalculator(["4 ", "2 ", "5 ", "13 "] )         //     use alt + j to join lines