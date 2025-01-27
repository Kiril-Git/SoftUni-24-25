function oddEvensCalculator (num) {

let numStr = num.toString()
let oddSum = 0
let evenSum = 0

for (let i = 0; i < numStr.length; i++) {

    let temp = +numStr[i]

    temp % 2 === 0 ? evenSum += temp : oddSum += temp

}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

oddEvensCalculator(1000435)