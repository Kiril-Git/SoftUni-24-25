function executeMathOperation (input) {

    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let operator = input[2]

    let result
    let check_even_odd

    switch (operator){
        case "+":
            result = num1 + num2

            if(result % 2 === 0) {
                check_even_odd = "even"
            }
            else{
                check_even_odd = "odd"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${check_even_odd}`)
            break
        
        case "-":
            result = num1 - num2
    
            if(result % 2 === 0) {
                    check_even_odd = "even"
            }
            else{
                check_even_odd = "odd"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${check_even_odd}`)
            break

        case "*":
            result = num1 * num2
    
            if(result % 2 === 0) {
                    check_even_odd = "even"
            }
            else{
                check_even_odd = "odd"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${check_even_odd}`)
            break

        case "/":
            result = num1 / num2
    
            if(num2 === 0) {
                    console.log(`Cannot divide ${num1} by zero`)
                    return
            }
            else{
            
            console.log(`${num1} ${operator} ${num2} = ${(result.toFixed(2))}`)
            }
            break

        case "%":
            result = num1 % num2
    
            if(num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`)
                return
        }
        else{
        
        console.log(`${num1} ${operator} ${num2} = ${result}`)
        }
            break
    }
}

executeMathOperation(["10", "3", "%"])
    