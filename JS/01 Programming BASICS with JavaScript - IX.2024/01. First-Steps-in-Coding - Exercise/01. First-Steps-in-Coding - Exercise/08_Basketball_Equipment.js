function basketballEquipmentCalculator(input) {

let annualBasketballFee = Number(input[0]);                     // Таксата за една година тренировки по баскетбол

let basketballSneakersPrice = annualBasketballFee * 0.6         // Баскетболни кецове – цената им е 40% по-малка от таксата за една година
let basketballOutfitPrice = basketballSneakersPrice * 0.8       // Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
let basketballPrice = basketballOutfitPrice / 4                 // Баскетболна топка – цената ѝ е 1/4 от цената на баскетболния екип
let basketballAccessoriesPrice = basketballPrice / 5            // Баскетболни аксесоари – цената им е 1/5 от цената на баскетболната топка

let total = annualBasketballFee + basketballSneakersPrice + basketballOutfitPrice + basketballPrice + basketballAccessoriesPrice

console.log(total)
}

basketballEquipmentCalculator(["365 "])