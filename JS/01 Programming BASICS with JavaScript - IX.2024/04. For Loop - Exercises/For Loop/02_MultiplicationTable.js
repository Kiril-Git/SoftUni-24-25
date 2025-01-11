function printMultiplicationTable(input) {

    let givenNum = Number(input[0])
    let result = 0

    for(let i = 1; i <= 10; i++){

        result = i * givenNum

        console.log(i, "*", givenNum, "=", result)
    }
}

printMultiplicationTable(["5"])