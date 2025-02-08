function arrayManipulations (inputArr) {

    let chestArr = inputArr.shift().split('|')
    let commandsStr = inputArr.shift()
    let indVal = 0

    while (commandsStr !== 'Yohoho!') {

        let commandsArr = commandsStr.split(' ')
        let command = commandsArr.shift()

        switch (command) {

            case 'Loot':
                for (let el of commandsArr) {
                    if (!chestArr.includes(el))
                        chestArr.unshift(el)
                }
            break

            case 'Drop':
                indVal = commandsArr[0]
                if (indVal >= 0 && indVal < chestArr.length) {
                    let el = chestArr.splice(indVal, 1)
                    chestArr.push(el)
                }
            break

            case 'Steal':
                indVal = commandsArr[0]
                let slicedEls = chestArr.splice(-indVal)
                console.log(slicedEls.join(', '))
            break
        }
        commandsStr = inputArr.shift()
    }

    
    if (chestArr.length !== 0){
        indVal = chestArr.reduce((acc, el) => acc + el.length, 0)
        indVal /= chestArr.length
        console.log(`Average treasure gain: ${indVal.toFixed(2)} pirate credits.`)
    }
    else {
        console.log('Failed treasure hunt.')
    }
}

arrayManipulations(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])




// print:          Medallion, Cup, Gold
//                 Average treasure gain: 5.40 pirate credits.
//