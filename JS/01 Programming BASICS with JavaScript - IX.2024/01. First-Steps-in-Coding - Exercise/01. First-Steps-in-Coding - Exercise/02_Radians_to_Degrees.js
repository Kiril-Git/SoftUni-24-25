function radiansToDegreesConvertor(input) {
const RAD_TO_DEG_FACTOR = 180 / Math.PI;

let radians = Number (input[0])
let degrees = radians * RAD_TO_DEG_FACTOR

console.log(degrees)
}

radiansToDegreesConvertor(["3.1416"])

