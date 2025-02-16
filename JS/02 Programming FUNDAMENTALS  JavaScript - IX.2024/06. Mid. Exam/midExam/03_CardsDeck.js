function arrayManipulator (inputArr) {

    let deckArr = inputArr.shift().split(', ')
    let iters = +inputArr.shift()


    for (let i = 0; i < iters; i++) {

        let commandArr = inputArr.shift().split(', ')
        let command = commandArr[0]
        let value = ''
        let index = 0

        switch (command) {

            case 'Add':
            value = commandArr[1]
            
            if (!deckArr.includes(value)) {
                deckArr.push(value)
                console.log('Card successfully added')
                }
                else {
                    console.log('Card is already in the deck')
                }
            break

            case 'Remove':
            value = commandArr[1]
            index = deckArr.indexOf(value)

            if (index === -1) {
                console.log('Card not found')
            }
            else {
                deckArr.splice(index, 1)
                console.log('Card successfully removed')
            }
            break

            case 'Remove At':
            index = commandArr[1]

            if (index >= 0 && index < deckArr.length) {
                deckArr.splice(index, 1)
                console.log('Card successfully removed')
            }
            else {
                console.log('Index out of range')
            }
            break

            case 'Insert':
                index = commandArr[1]
                value = commandArr[2]

                if (index >= 0 && index < deckArr.length) {
                    
                    if (!deckArr.includes(value)) {
                    deckArr.splice(index, 0, value)
                    console.log('Card successfully added')
                    }
                    else {
                        console.log('Card is already added')
                    }
                }
                else {
                    console.log('Index out of range')
                }
            break
        }
    }



    console.log(deckArr.join(', '))
}


arrayManipulator (["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"])	
    




// print:              Card successfully added
//                     Card successfully added
//                     Card successfully removed
//                     Queen of Hearts, Jack of Spades, King of Clubs, King of Diamonds
//