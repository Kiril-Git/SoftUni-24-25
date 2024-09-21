function findMaxNumber (input) {

    let index = 0
    let currentNum = input[index]
    let maxNum = Number(currentNum)

    while (currentNum !== "Stop"){

        let temp = Number(currentNum)

        if (temp > maxNum){
            maxNum = temp
        }

        index++
        currentNum = input[index]
    }

    console.log(maxNum)
}

findMaxNumber(["-1", "-2", "Stop"])