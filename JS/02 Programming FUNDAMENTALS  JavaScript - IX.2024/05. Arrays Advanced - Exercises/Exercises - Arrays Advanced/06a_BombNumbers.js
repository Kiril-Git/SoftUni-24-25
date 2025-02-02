function arrayManipulations (numsArr, commandsArr) {

    let num = commandsArr[0];
    let power = commandsArr[1];


    while (numsArr.includes(num)) {

        let numIndex = numsArr.indexOf(num);
        let startIndex = Math.max(0, numIndex - power);
        let endIndex = Math.min(numsArr.length -1, numIndex + power)

        let count = endIndex - startIndex +1

        numsArr.splice(startIndex, count);

}
    let sum = numsArr.reduce((acc, el) => acc + el, 0)

    console.log(sum);
}

arrayManipulations ([1, 7, 7, 1, 2, 3], [7, 2] );
