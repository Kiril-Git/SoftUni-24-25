function arrayManipulator (inputArr) {

let shoppingList = inputArr.shift().split('!')
let commandStr = inputArr.shift()


while (commandStr !== 'Go Shopping!') {

    let commandArr = commandStr.split(' ')
    let command = commandArr[0]
    let item = commandArr[1]

    switch (command) {

        case 'Urgent':
        if (!shoppingList.includes(item)) {
            shoppingList.unshift(item)
        }
        break

        case 'Unnecessary':
        shoppingList = shoppingList.filter(el => el !== item)
        break

        case 'Correct':
            if (shoppingList.includes(item)) {
                let newItem = commandArr[2]
                let index = shoppingList.indexOf(item)
                shoppingList[index] = newItem
            }
        break

        case 'Rearrange':
        if (shoppingList.includes(item)) {
            shoppingList = shoppingList.filter(el => el !== item)
            shoppingList.push(item)
        }
        break
    }

    commandStr = inputArr.shift()
}



console.log(shoppingList.join(', '))
}

arrayManipulator (["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])



    // print:          Milk, Onion, Salt, Water, Banana