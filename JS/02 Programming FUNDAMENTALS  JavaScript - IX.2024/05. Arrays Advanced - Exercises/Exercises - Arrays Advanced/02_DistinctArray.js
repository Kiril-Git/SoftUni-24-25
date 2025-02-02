function repElsRemover (inputArr) {

    let distinctArr = []

    for (let el of inputArr) {

    let temp = el
    
    if ( !distinctArr.includes(el)) {
        distinctArr.push(el)
    }
    }

    console.log(distinctArr.join(' '))
}

repElsRemover([7, 8, 9, 7, 2, 3, 4, 1, 2])


//   print:      7 8 9 2 3 4 1
