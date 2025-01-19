function identifyEqualArrs (arr1, arr2) {

    let iters = 0
    let sum = 0

    if (arr1.length < arr2.legth) {
        iters = arr1.length
    }
    else {
        iters = arr2.length
    }


    for (let i = 0; i < iters; i++) {

        let firstEl = +arr1[i]
        let secondEl = +arr2[i]

        if (firstEl !== secondEl) {
            console.log('Arrays are not identical. Found difference at ' + i + ' index')
            return
        }

        sum += firstEl
    }

    if ( arr1.length === arr2.length) {
    console.log('Arrays are identical. Sum: ' + sum)
    }
    else {
        console.log('Arrays are not identical. Found difference at ' + iters + ' index')
    }
}

identifyEqualArrs (['1','2','3','4','5'], ['1','2','3','4'])

