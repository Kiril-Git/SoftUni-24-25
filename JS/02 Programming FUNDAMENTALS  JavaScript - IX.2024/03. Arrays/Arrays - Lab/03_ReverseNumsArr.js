function arrManipulator(num, inputArr) {

    let revArr = []                              //    .reverse()

    for (let i = num -1; i >= 0; i--){

        let temp = inputArr[i]
        revArr.push(temp)
    }

    console.log(revArr.join(" "))
}

arrManipulator(3, [10, 20, 30, 40, 50])
