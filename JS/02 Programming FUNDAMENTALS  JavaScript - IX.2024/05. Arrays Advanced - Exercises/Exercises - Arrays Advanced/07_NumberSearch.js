function arraysManypulations(numsArr, commandArr) {

let sliceCount = commandArr[0]
let spliceCount = commandArr[1]
let num = commandArr[2]

let newArr = numsArr.slice(0, sliceCount)
newArr.splice(0, spliceCount)
newArr = newArr.filter(el => el === num)


console.log(`Number ${num} occurs ${newArr.length} times.`)
}

arraysManypulations ([7, 1, 5, 8, 2, 7], [3, 1, 5] )        

//  Print:       Number 5 occurs 1 times.

