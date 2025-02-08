function arrayManipulations (inputArr) {

    let inventoryArr = inputArr.shift().split(', ')
    let commandStr = inputArr.shift()


    while (commandStr !== 'Craft!') {

        let commandArr = commandStr.split(' - ')
        let command = commandArr[0]
        let item = commandArr[1]

        switch (command) {

            case 'Collect':

            if (!inventoryArr.includes(item)) {
                inventoryArr.push(item)
            }
            break

            case 'Drop':

            inventoryArr = inventoryArr.filter(el => el !== item)
            break

            case 'Combine Items':
            let itemsArr = item.split(':')
            item = itemsArr[0]

            if (inventoryArr.includes(item)) {
                let ind = inventoryArr.indexOf(item) +1
                inventoryArr.splice(ind, 0, itemsArr[1])
            }
            break

            case 'Renew':
                if (inventoryArr.includes(item)) {
                    inventoryArr = inventoryArr.filter(el => el !== item)
                    inventoryArr.push(item)
                }
            break
        }
        commandStr = inputArr.shift()
    }


    console.log(inventoryArr.join(', '))
}

arrayManipulations([ 'Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!' ] )

