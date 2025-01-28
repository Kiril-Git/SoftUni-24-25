function arraysManipulator (input) {

    let originalArrSum = 0
    let modifiedArrSum = 0

    for (let i = 0; i < input.length; i++) {

        let temp = +input[i]
        originalArrSum += temp

        if (temp % 2 === 0) {

            temp += i
        }
        else {
            temp -= i
        }

        input[i] = temp
        modifiedArrSum += temp
    }

    console.log('[ ' + input.join(', ') + ' ]')
    console.log(originalArrSum)
    console.log(modifiedArrSum)
}

arraysManipulator([5, 15, 23, 56, 35])
