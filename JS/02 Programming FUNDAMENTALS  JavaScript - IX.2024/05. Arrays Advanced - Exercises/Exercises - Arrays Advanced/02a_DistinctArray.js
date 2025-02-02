function repElsRemover (inputArr) {

    let distinctArr = [...new Set(inputArr)]



    console.log(distinctArr.join(' '))
}

repElsRemover([7, 8, 9, 7, 2, 3, 4, 1, 2])



//   print:      7 8 9 2 3 4 1
