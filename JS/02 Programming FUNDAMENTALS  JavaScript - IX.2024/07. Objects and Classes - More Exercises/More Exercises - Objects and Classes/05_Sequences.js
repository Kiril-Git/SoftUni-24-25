function arrayManipulator (inputArr) {


    let uniqueArrs = new Set()

    for (let el of inputArr) {

        let sortedArr = JSON.parse(el).sort((a, b) => b - a)
        let arrayAsStr = JSON.stringify(sortedArr)

        uniqueArrs.add(arrayAsStr)
    }

    let sortedUniqueArrs = [...uniqueArrs].map(el => JSON.parse(el)).sort((a, b) => a.length - b.length)


    for(let el of sortedUniqueArrs) {
    console.log(`[${el.join(', ')}]`)
    }

}

arrayManipulator(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
    )


    // Print:              [13, 10, 2, 1, 0, -17]
    //                     [4, 3, 2, 1, 0, -1, -2, -3]

    //