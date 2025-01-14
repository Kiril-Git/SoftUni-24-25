function gladiatorExpensesCalculator(lostFightsNum, helmetPrice, swordPrice, shieldPrice, armorPrice) {

let sum = 0

let helmetsQuantity = Math.floor(lostFightsNum / 2)
let swordsQuantity = Math.floor(lostFightsNum / 3)
let shieldsQuantity = Math.floor(lostFightsNum / 6)
let armorsQuantity = Math.floor(lostFightsNum / 12)

let helmetSum = helmetsQuantity * helmetPrice
let swordSum = swordsQuantity * swordPrice
let shieldSum = shieldsQuantity * shieldPrice
let armorSum = armorsQuantity * armorPrice

sum = helmetSum + swordSum + shieldSum + armorSum

console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}

gladiatorExpensesCalculator (23, 12.50, 21.50, 40, 200 )
 