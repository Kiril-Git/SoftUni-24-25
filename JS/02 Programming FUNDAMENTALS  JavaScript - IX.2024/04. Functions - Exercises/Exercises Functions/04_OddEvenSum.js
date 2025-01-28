function oddEvensCalculator (num) {

let numStr = num.toString()                 //  or     num + ''
let oddSum = 0
let evenSum = 0

for (let i = 0; i < numStr.length; i++) {

    let temp = +numStr[i]

    if (temp % 2 === 0) {
        evenSum += temp
    }
    else{
        oddSum += temp
    }

}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

oddEvensCalculator(1000435)