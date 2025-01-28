function identifyDataType (first, second, third) {

let sum = first + second + third

let sumType = sum % 1 === 0 ? 'Integer' : 'Float' 

console.log(sum + ' - ' + sumType)

}

identifyDataType(9, 100, 1.1)