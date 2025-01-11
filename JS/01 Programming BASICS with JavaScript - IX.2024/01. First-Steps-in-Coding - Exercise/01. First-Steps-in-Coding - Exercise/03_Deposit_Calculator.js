function depositCalculator(input) {

let depositSum = Number(input[0])
let depositTerm = Number(input[1])
let annualInterestRate = Number(input[2])

let interestRateFactor = annualInterestRate / 100

let annualInterestSum = depositSum * interestRateFactor
let oneMonthInterest = annualInterestSum / 12
let depositInterestTotal = depositTerm * oneMonthInterest
let total = depositSum + depositInterestTotal

console.log(total)
}

depositCalculator(["2350", "6", "7"])

