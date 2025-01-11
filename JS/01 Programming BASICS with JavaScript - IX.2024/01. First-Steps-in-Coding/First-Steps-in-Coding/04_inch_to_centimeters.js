function inchesToCentimeters(input) {
const CONVERSION_FACTOR = 2.54;

let valueInInches = Number(input[0])
let newValueInCM = valueInInches * CONVERSION_FACTOR

console.log(newValueInCM)
}

inchesToCentimeters(["1000"])