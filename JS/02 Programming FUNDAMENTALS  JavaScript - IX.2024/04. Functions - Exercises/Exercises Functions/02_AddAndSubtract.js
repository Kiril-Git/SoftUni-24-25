function calculator(n1, n2, n3) {

const operations = {

    sum: (a, b) => a + b,
    subtract: (sumResult, c) => sumResult - c
    
}

const sumResult = operations.sum(n1, n2)
const finalResult = operations.subtract(sumResult, n3)

return finalResult
}

console.log(calculator(23, 6, 10 ))

