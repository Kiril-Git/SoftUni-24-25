function sumUntilThreshold (input) {

    let targetSum = Number(input[0]);       // The first number that represents the sum threshold

    let index = 1
    let sum = 0

    while (sum < targetSum){

        let num = Number(input[index])

        sum += num
        index ++
    }

    console.log(sum)
}

sumUntilThreshold(["100", "10", "20", "30", "40"])