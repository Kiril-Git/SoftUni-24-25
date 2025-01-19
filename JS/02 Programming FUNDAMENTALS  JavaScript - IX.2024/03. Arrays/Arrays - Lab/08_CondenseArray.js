function condenseArray (inputArr) {



    while (inputArr.length > 1) {

    for (let i = 0; i < inputArr.length -1; i ++) {

        let sum = 0

        let firstNum = inputArr[i]
        let secondNum = inputArr[i +1]

        sum = firstNum + secondNum

        inputArr[i] = sum
    }

    inputArr.pop()

}

    console.log(inputArr.toString())

}

condenseArray([2])
