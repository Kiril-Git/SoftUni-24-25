function zooShop(input) {
const A_BOX_DOG_FOOD = 2.5
const A_BOX_CAT_FOOD = 4

let boxesDogFoodCount = Number (input[0])
let boxesCatFoodCount = Number (input[1])

let totalPrice = A_BOX_DOG_FOOD * boxesDogFoodCount + A_BOX_CAT_FOOD * boxesCatFoodCount

console.log(`${totalPrice} lv.`)
}

zooShop(["5 ", "4 "])

