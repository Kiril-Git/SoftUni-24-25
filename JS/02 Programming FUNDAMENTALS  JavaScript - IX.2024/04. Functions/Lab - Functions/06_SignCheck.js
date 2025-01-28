function signCheck(num1, num2, num3) {

const negatives = [num1, num2, num3].filter(el => el < 0).length

return negatives % 2 === 0 ? 'Positive' : 'Negative'

}

console.log(signCheck( 5, -12, -15 ))