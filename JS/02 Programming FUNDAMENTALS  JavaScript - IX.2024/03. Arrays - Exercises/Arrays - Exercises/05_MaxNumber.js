function identifyTopIntegers (inputArr) {

    let topsArr = []

    for (let i = 0; i < inputArr.length; i++) {
        let top = true
        let num = inputArr[i]

        for (let j = i +1; j < inputArr.length; j++) {
        let temp = inputArr[j]

        if (temp >= num) {
            top = false
            break
        }
        }
        if ( top ) {
            topsArr.push(num)
        }
    }

    
    console.log(topsArr.join(" "))
}

identifyTopIntegers([14, 24, 3, 19, 15, 17])
