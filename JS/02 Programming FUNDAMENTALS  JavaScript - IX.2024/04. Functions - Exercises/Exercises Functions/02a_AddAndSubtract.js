function calculator(n1, n2, n3) {



    const sum = (a, b) => a + b
    const subtract = (sumResult, c) => sumResult - c
    


return subtract(sum(n1, n2), n3)
}

console.log(calculator(23, 6, 10 ))

