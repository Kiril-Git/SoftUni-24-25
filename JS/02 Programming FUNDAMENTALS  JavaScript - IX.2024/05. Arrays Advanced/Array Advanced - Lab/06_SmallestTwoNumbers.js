function identifySmallestNumbers(inputArr) {


let sortedArr = inputArr.sort((a, b) => a - b)
            .slice(0, 2)



console.log(sortedArr.join(' '))
}

identifySmallestNumbers([30, 15, 50, 5])

