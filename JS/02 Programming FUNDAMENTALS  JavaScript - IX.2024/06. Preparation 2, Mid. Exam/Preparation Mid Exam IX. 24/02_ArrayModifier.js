function arrayModifier(inputArr) {

    let numsArr = inputArr.shift().split(' ').map(Number)
    let commandStr = inputArr.shift()

    while (commandStr !== 'end') {

        let commandArr = commandStr.split(' ')
        let command = commandArr[0]
        let ind1 = 0                                    //      index 1
        let ind2 = 0
        let el1 = 0                                     //      element 1
        let el2 = 0

         
        switch (command) {

            case 'swap' :
                ind1 = +commandArr[1]
                ind2 = +commandArr[2]
                el1 = numsArr[ind1]
                el2 = numsArr[ind2]

                numsArr[ind1] = el2
                numsArr[ind2] = el1
            break

            case 'multiply' :
                ind1 = +commandArr[1]
                ind2 = +commandArr[2]
                el1 = numsArr[ind1]
                el2 = numsArr[ind2]

                numsArr[ind1] *= el2
    //          numsArr.splice(ind2, 1)                 the second el remains in the array
            break

            case 'decrease' :

            numsArr = numsArr.map(el => el - 1)
            break
        }

        commandStr = inputArr.shift()
    }

    console.log(numsArr.join(', '))
}

arrayModifier( [ '23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end' ] )

