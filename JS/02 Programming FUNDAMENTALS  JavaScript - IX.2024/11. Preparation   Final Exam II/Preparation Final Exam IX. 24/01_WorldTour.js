function arrManipulations (inputArr) {

    inputArr.pop()
    let destinations = inputArr.shift()

    for (let el of inputArr) {

        let commandArr = el.split(':')
        let command = commandArr[0]

        let destination = null
        let ind = 0

        switch (command) {

            case 'Add Stop':
                ind = +commandArr[1]
                destination = commandArr[2]

                if (ind >= 0 && ind < destinations.length) {
                    let temp = destinations.slice(ind)

                    destinations = destinations.slice(0, ind) + destination + temp
                }
            break

            case 'Remove Stop':
                ind = +commandArr[1]
                let endInd = +commandArr[2]

                if (ind >= 0 && ind <= endInd && endInd < destinations.length) {
                    endInd ++

                    let temp = destinations.slice(endInd)
                    destinations = destinations.slice(0, ind) + temp
                }
            break

            case 'Switch':
                destination = commandArr[1]

                if (destinations.includes(destination)) {
                    let substitute = commandArr[2]

                    destinations = destinations.replace(destination, substitute)
                }
            break
        }
        console.log(destinations)

    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`)
}



arrManipulations (["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"])






// Print:              Hawai::RomeCyprys-Greece
//                     Hawai::Rome-Greece
//                     Bulgaria::Rome-Greece
//                     Ready for world tour! Planned stops: Bulgaria::Rome-Greece

//

    