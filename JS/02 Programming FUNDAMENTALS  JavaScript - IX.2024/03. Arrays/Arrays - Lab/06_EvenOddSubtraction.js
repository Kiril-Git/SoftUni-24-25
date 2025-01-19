function sumEvenNumbers (inputArr) {


    let evenSum = 0
    let oddSum = 0

    for (let el of inputArr) {

        let temp = +el

        if (temp % 2 === 0) {
            evenSum += temp
        }
        else {
            oddSum += temp
        }
    }

    console.log(evenSum - oddSum)
}

sumEvenNumbers([3,5,7,9])
