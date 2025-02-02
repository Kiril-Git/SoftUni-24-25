function arrayManipulations (numsArr, commandsArr) {

    let num = commandsArr[0];
    let power = commandsArr[1];


    while (numsArr.includes(num)) {

        let numIndex = numsArr.indexOf(num);
        let startIndex = numIndex - power;
        let endIndex = numIndex + power

    if (numIndex === -1 ) return

    if ( startIndex < 0) {
        startIndex = 0
    }
    if (endIndex > numsArr.length ) {
        endIndex = numsArr.length
    }

    let count = endIndex - startIndex +1

    numsArr.splice(startIndex, count);

}
let sum = numsArr.reduce((acc, el) => acc + el, 0)


    console.log(sum);
}

arrayManipulations ([1, 7, 7, 1, 2, 3], [7, 2] );



//   print:          5