function arrManipulator(inputArr) {

    let midArr = Math.floor(inputArr.length / 2)

    for (let i = 0; i < midArr; i++){

        let indexR = inputArr.length -1 -i
        let temp = inputArr[i]

        inputArr[i] = inputArr[indexR]
        inputArr[indexR] = temp
    }

    console.log(inputArr.join(" "))
}

arrManipulator(['a', 'b', 'c', 'd', 'e'])
