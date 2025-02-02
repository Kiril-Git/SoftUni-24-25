function arraySorting (inputArr) {

let sortedArr = inputArr.sort((a, b) => b - a)

let newSort = []

while (sortedArr.length > 0) {

    let largestEl = sortedArr.shift()
    let smallestEl = sortedArr.pop()

    newSort.push(largestEl)
    newSort.push(smallestEl)

}


console.log(newSort.join(' '))
}

arraySorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])



//  print:      94 1 69 2 63 3 52 18 31 21