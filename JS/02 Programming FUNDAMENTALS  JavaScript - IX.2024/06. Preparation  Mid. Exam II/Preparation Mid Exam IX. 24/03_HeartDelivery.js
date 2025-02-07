function arrayModifier (inputArr) {

    let homesArr = inputArr.shift().split('@').map(Number)
    let commandStr = inputArr.shift()

    const HEARTS_DECREASE_AMOUNT = 2;
    let i = 0
    let failedHoses = homesArr.length

    while (commandStr != 'Love!') {

        let commandArr = commandStr.split(' ')
        let command = commandArr[0]
        let jumpLength = +commandArr[1]

            i += jumpLength 

            if (i < 0 || i >= homesArr.length) {
                i = 0
            }
            if (homesArr[i] === 0){
                console.log(`Place ${i} already had Valentine's day.`)
            }            
            else if (homesArr[i] === 2){
                homesArr[i] -= HEARTS_DECREASE_AMOUNT
                console.log(`Place ${i} has Valentine's day.`)
                failedHoses--
            }
            else if (homesArr[i] > 2){
                homesArr[i] -= HEARTS_DECREASE_AMOUNT
            }     

            
        commandStr = inputArr.shift()
    }

    console.log("Cupid's last position was " + i + '.')
    failedHoses !== 0 ? console.log('Cupid has failed ' + failedHoses + ' places.')
                        :console.log('Mission was successful.')
}

arrayModifier(["4@2@4@2", "Jump 1", "Jump 2", "Jump 1", "Jump 2", "Jump 2", "Jump 2", "Love!"])






// print:              Place 1 has Valentine's day.
//                     Place 3 has Valentine's day.
//                     Place 0 has Valentine's day.
//                     Place 2 has Valentine's day.
//                     Cupid's last position was 2.
//                     Mission was successful.
//