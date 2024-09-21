function findMinNumber (input) {

    let index = 0
    let currentNum = input[index]
    let minNum = Number(currentNum)

    while (currentNum !== "Stop"){

        let temp = Number(currentNum)

        if (temp < minNum){
            minNum = temp
        }

        index++
        currentNum = input[index]
    }

    console.log(minNum)
}

findMinNumber(["-1", "-2", "Stop"])