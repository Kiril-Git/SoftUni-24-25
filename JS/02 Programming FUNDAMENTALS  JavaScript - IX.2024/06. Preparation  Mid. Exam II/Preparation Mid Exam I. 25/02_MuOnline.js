function strOperations (inputStr) {

    let inputArr  = inputStr.split('|')
    let potion = 100
    let chest = 0
    let bestRoom = 0

    for (let el of inputArr) {

        let commandArr = el.split(' ')
        let command = commandArr[0]
        let value =  +commandArr[1]
        bestRoom++

        switch (command) {

            case 'potion':
                (potion + value > 100) ? (value = 100 - potion, potion = 100) : potion += value

                console.log(`You healed for ${value} hp.`)
                console.log(`Current health: ${potion} hp.`)
            break

            case 'chest':
                chest += value
                console.log(`You found ${value} bitcoins.`)
            break

            default:
            if (potion - value > 0) {
                potion -= value;
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
            break
        }
    }
    console.log("You've made it!")
    console.log('Bitcoins: ' + chest)
    console.log('Health: ' + potion)

}

strOperations("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")






// Print:          You slayed cat.
//                 You healed for 10 hp.
//                 Current health: 100 hp.
//                 You slayed orc.
//                 You found 10 bitcoins.
//                 You slayed snake.
//                 You found 110 bitcoins.
//                 You've made it!
//                 Bitcoins: 120
//                 Health: 65
//