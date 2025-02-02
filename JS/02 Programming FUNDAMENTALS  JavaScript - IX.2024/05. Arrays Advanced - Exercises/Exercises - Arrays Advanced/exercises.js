function shiftArrEls (numsArr) {

let firstEl = 0
let secondEl = 0




    let iters = Math.floor(numsArr.length / 2)

for (let i = 0; i < iters; i ++) {

    firstEl = numsArr[i]
    secondEl = numsArr[i +1]
    let sum = firstEl +secondEl

    numsArr.splice(i, 2, sum)

} 




    console.log(numsArr.join(' '))
}

shiftArrEls ([1, 2, 3, 4, 5, 5])