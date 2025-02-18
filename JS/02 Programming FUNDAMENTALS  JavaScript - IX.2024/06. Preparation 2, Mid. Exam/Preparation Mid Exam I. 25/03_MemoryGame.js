function arrayManipulations (inputArr) {

    let elsArr = inputArr.shift().split(' ')
    let commandStr = inputArr.shift()
    let iters = 0

    while (commandStr !== 'end' && elsArr.length > 0) {

        iters++
        let commandArr = commandStr.split(' ').map(Number)

        let ind1 = 0
        commandArr[0] < commandArr [1] ?  ind1 = commandArr.shift() : ind1 = commandArr.pop()
        let ind2 = commandArr.pop()


        if (ind1 < 0 || ind2 < 0 || ind1 >= elsArr.length || ind2 >= elsArr.length || ind1 === ind2) {

            ind1 = elsArr.length / 2
            let el1 = `-${iters}a`;

            elsArr.splice(ind1, 0, el1)
            elsArr.splice(ind1, 0, el1)

            console.log('Invalid input! Adding additional elements to the board')
            commandStr = inputArr.shift()
            continue
        }
        
        let el1 = elsArr[ind1]
        let el2 = elsArr[ind2]

        if (el1 === el2) {
            elsArr.splice(ind1, 1)
            elsArr.splice(ind2 -1, 1)
            console.log(`Congrats! You have found matching elements - ${el1}!`)
        }
        else if (el1 !== el2) {
            console.log("Try again!")
        }

        commandStr = inputArr.shift()
    }



    if (elsArr.length > 0) {
        console.log('Sorry you lose :(')
        console.log(elsArr.join(' '))
    }
    else {
        console.log(`You have won in ${iters} turns!`)
    }

}

arrayManipulations(  [ "1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end" ] ) 






// Print:          Congrats! You have found matching elements - 1!
//                 Invalid input! Adding additional elements to the board
//                 Congrats! You have found matching elements - 2!
//                 Congrats! You have found matching elements - 3!
//                 Congrats! You have found matching elements - -2a!
//                 Sorry you lose :(
//                 4 4 5 5
//

