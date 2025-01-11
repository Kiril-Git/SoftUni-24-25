function yardGardening (input) {
const SQUARE_METER_PRICE = 7.61
const DISCOUNT = 0.18 

let gardenPlotArea = Number (input[0])

let price = gardenPlotArea * SQUARE_METER_PRICE
let discountSum = price * DISCOUNT
let totalPrice = price - discountSum

console.log(`The final price is: ${totalPrice} lv.`)
console.log(`The discount is: ${discountSum} lv.`)


}

yardGardening(["550"])

