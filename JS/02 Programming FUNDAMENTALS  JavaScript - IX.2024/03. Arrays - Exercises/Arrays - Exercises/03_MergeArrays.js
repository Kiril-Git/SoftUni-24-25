function mergeArrays (arr1, arr2) {


    let modifiedArr = []

    for ( let i = 0; i < arr1.length; i++) {

        let sum = 0
        let temp1 = arr1[i]
        let temp2 = arr2[i]

        if (i % 2 === 0) {
            sum = +temp1 + +temp2
        }
        else {
            sum = temp1 + temp2
        }

        modifiedArr.push(sum)
    }

    console.log(modifiedArr.join(" - "))
}


mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
    )

