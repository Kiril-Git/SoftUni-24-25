function identifyTopIntegers (inputArr) {


    let result = 'no'

    for (let i = 0; i < inputArr.length; i++) {

        let sumL = 0
        let sumR = 0

        for (let j = i +1; j < inputArr.length; j++) {

        let temp = inputArr[j]
        sumR += temp
        }

        for (let k = i -1; k >= 0; k--) {

            let temp = inputArr[k]
            sumL += temp
            }

            if (sumL === sumR) {
                result = i
                break
            }
    }

    
    console.log(result)
}

identifyTopIntegers([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
