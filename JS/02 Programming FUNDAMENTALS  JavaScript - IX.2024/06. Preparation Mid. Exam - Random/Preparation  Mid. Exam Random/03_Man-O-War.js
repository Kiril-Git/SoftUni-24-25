function arrayManipulations (inputArr) {


    let pirateShipArr = inputArr.shift().split('>').map(Number)
    let warShipArr = inputArr.shift().split('>').map(Number)
    let healt = +inputArr.shift()
    let commandStr = inputArr.shift()

    let pirateStatus = 0
    let warshipStatus = 0

    while (commandStr !== 'Retire') {

        let commandArr = commandStr.split(' ')
        let command = commandArr[0]
        let index = 0
        let value = 0

        switch (command) {

            case 'Fire':
                index = +commandArr[1]
                value = +commandArr[2]

                if (index >= 0 && index < warShipArr.length) {
                    warShipArr[index] -= value

                    if (warShipArr[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.')
                        return
                    }
                }
            break

            case 'Defend':
                index = +commandArr[1]
                let endInd = +commandArr[2]
                value = +commandArr[3]

                if (index >= 0 && index <= endInd && endInd < pirateShipArr.length) {

                    for (let i = index; i <= endInd; i++) {
                        pirateShipArr[i] -= value

                        if (pirateShipArr[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.")
                            return
                        }
                    }
                }
            break

            case 'Repair':
                index = +commandArr[1]
                value = +commandArr[2]

                if (index >= 0 && index < pirateShipArr.length) {
                    pirateShipArr[index] += value

                    if (pirateShipArr[index] > healt) {
                        pirateShipArr[index] = healt
                    }
                }
            break

            case 'Status':
            for (let el of pirateShipArr) {

                if (el < healt * 0.2) {
                    pirateStatus++
                }
            }
            console.log(`${pirateStatus} sections need repair.`)
            pirateStatus = 0
            break
        }

        commandStr = inputArr.shift()
    }

    pirateStatus = pirateShipArr.reduce((acc, el) => acc + el, 0)
    warshipStatus = warShipArr.reduce((acc, el) => acc + el, 0)
    
    console.log('Pirate ship status: ' +  pirateStatus)
    console.log('Warship status: ' + warshipStatus)
}


arrayManipulations(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]) 





// print:          2 sections need repair.
//                 Pirate ship status: 135
//                 Warship status: 205