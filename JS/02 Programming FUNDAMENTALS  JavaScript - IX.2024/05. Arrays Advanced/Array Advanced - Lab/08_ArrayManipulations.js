function arrayManipulator(inputArr) {

    let numsArr = inputArr.shift().split(' ')

    for (let el of inputArr) {

        let commandArr = el.split(' ')

            let command = commandArr[0]
            let indOrEl = commandArr[1]                     // index or element

            switch(command) {

                case 'Add':
                    numsArr.push(indOrEl)
                    break

                case 'Remove':
                    numsArr = numsArr.filter(el => el !== indOrEl)
                    break

                case 'RemoveAt':
                    numsArr.splice(indOrEl, 1)              //  1 - remove 1 el
                    break

                case 'Insert':
                    let index = commandArr[2]

                    numsArr.splice(index, 0, indOrEl)       //  0 - remove 0 els
                    break                                   
            }
    }

    console.log(numsArr.join(' '))
}

arrayManipulator(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'] )

 