function calculator(number, operator, anotherNumber) {

    let sum = 0

    switch (operator) {

        case '+':
        sum = number + anotherNumber
        break

        case '-':
            sum = number - anotherNumber
        break

        case '/':
            sum = number / anotherNumber
        break
                        //      Select, then Shift to move inward. Shift + Tab to move outward. 
        case '*':
            sum = number * anotherNumber
        break

    }

    console.log(sum.toFixed(2))
}

calculator(25.5, '-', 3 )
