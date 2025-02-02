function arrayManipulator (numsArr, commandsArr) {

let commandTokens = commandsArr.shift().split(' ')
let command = commandTokens[0]
let index = 0
let el = 0

while (command !== 'print') {

    switch (command) {

        case 'add':
            index = +commandTokens[1]
            el = +commandTokens[2]
            numsArr.splice(index, 0, el)
        break

        case 'addMany':
            commandTokens.shift()
            index = +commandTokens.shift()
            let many = commandTokens.map(Number)

            numsArr.splice(index, 0, ...many)
        break

        case 'contains':
            el = +commandTokens[1]
            index = numsArr.indexOf(el)
            console.log(index)
        break
 
        case 'remove':
            index = +commandTokens[1]
            if (index >= 0 && index < numsArr.length)
            numsArr.splice(index, 1)
        break

        case 'shift':
            let shiftValue = +commandTokens[1]

            for (let i = 0; i < shiftValue; i++) {
                let temp = numsArr.shift()
                numsArr.push(temp)
            }
        break

        case 'sumPairs':
            let iters = Math.floor(numsArr.length / 2)

            for (let i = 0; i < iters; i ++) {

                firstEl = numsArr[i]
                secondEl = numsArr[i +1]
                let sum = firstEl + secondEl

                numsArr.splice(i, 2, sum)
            }
        break
    }
    commandTokens = commandsArr.shift().split(' ')
    command = commandTokens[0]
}


console.log('[ ' + numsArr.join(', ') + ' ]')
}

arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])



//     print:       -1
//                  [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]