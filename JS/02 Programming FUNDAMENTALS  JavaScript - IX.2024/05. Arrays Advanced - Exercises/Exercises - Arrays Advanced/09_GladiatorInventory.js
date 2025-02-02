function arrManipulations (inputArr) {

    inputArr.push('lastElement')
    let inventoryArr = inputArr.shift().split(' ')
    let commandArr = inputArr.shift().split(' ')


    while (inputArr.length > 0) {

        let command = commandArr[0]
        let item = commandArr[1]

        switch (command) {

            case 'Buy':
                if (!inventoryArr.includes(item))
                    inventoryArr.push(item)
            break

            case 'Trash':
                if (inventoryArr.includes(item))
                    inventoryArr = inventoryArr.filter(el => el !== item)
            break

            case 'Repair':
                if (inventoryArr.includes(item))
                    inventoryArr = inventoryArr.filter(el => el !== item)
                    inventoryArr.push(item)
            break

            case 'Upgrade':
                let itemtokens = item.split('-')
                item = itemtokens[0]
                let upgrade = itemtokens[1]

                if (inventoryArr.includes(item)){
                   let index = inventoryArr.indexOf(item)
                   let upgradedEl = item + ':' + upgrade
                   inventoryArr.splice(index +1, 0, upgradedEl)
                }
            break
        }

        commandArr = inputArr.shift().split(' ')
    }

    console.log(inventoryArr.join(' '))
}


arrManipulations (['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'] )


//   print:   SWORD SWORD:Steel Bag Spear

