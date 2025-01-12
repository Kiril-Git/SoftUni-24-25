function numsRangeAdder (start, end) {

    let sum = 0
    let numsRange = ''

    for (let i = start; i <= end; i++) {

        sum += i
        numsRange += i + ' '
    }


    console.log(numsRange)
    console.log('Sum: ' + sum)
}


numsRangeAdder (5, 10)