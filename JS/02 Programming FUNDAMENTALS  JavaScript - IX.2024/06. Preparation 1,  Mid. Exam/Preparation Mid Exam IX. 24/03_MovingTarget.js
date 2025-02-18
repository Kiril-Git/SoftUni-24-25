function arrayManipulator(inputArr) {

    let targetsArr = inputArr.shift().split(' ').map(Number)
    let commandStr = inputArr.shift()

    while (commandStr !== 'End') {

        let commandArr = commandStr.split(' ')
        let command = commandArr[0]
        let index = +commandArr[1]
        let value = +commandArr[2]

        switch (command) {

            case 'Shoot':
            if (index >= 0 && index < targetsArr.length) {
                targetsArr[index] -= value

                if (targetsArr[index] <= 0)
                targetsArr.splice(index, 1)
            }
            break

            case 'Add':
            if (index < 0 || index >= targetsArr.length) {
                console.log('Invalid placement!')
            }
            else {
                targetsArr.splice(index, 0, value)
            }
            break

            case 'Strike':
                if (index - value >= 0 && index + value < targetsArr.length) {
                    targetsArr.splice(index - value, value * 2 + 1)
                }else {
                    console.log("Strike missed!");
                }
            break
        }
        commandStr = inputArr.shift()
    }



    console.log(targetsArr.join('|'))
}

arrayManipulator (["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"])
    


// Print:      Invalid placement!
//             52|100