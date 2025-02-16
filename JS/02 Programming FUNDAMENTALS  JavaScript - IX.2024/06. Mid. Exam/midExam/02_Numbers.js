function arrayManipulator (inputArr) {

    let numsArr = inputArr.shift().split(' ').map(Number)
    let commanStr = inputArr.shift()

    while (commanStr !== 'Finish') {

        let commandArr = commanStr.split(' ')
        let command = commandArr[0]
        let value = +commandArr[1]
        let index = 0

        switch (command) {

            case 'Add':
            numsArr.push(value)
            break

            case 'Remove':
                index = numsArr.indexOf(value)

                if (index !== -1) {
                numsArr.splice(index, 1)
                }
            break

            case 'Replace':
                let replacement = +commandArr[2]
                index = numsArr.indexOf(value)
                
                if (index !== -1) {
                numsArr[index] = replacement
                }
            break

            case 'Collapse':

            numsArr = numsArr.filter(el => el >= value)
            break
        }

        commanStr = inputArr.shift()
    }

    
    console.log(numsArr.join(' '))
}


arrayManipulator(["7 20 -1 10", "Collapse 8", "Finish"])	
    
    
    



// print:                  20 10
//