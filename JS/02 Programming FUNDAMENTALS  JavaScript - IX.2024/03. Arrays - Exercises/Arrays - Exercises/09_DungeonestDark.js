function stringManipulator (input) {

    let health = 100
    let coins = 0

    let rooms = input.split("|")

    for (let i = 0; i < rooms.length; i++) {

        let room = rooms[i].split(' ')
        let host = room[0]
        let value = +room[1]

        if (host === 'potion') {

            if ((health + value) > 100) {
                value = 100 - health
                health = 100
            }
            else {
                health += value
            }

            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${health} hp.`)
        }

        else if (host === 'chest') {
            coins += value

            console.log(`You found ${value} coins.`)
        }

        else {

            if ( health - value > 0) {

                health -= value
                console.log(`You slayed ${host}.`)
            }
            else {
                
                console.log(`You died! Killed by ${host}.`)
                console.log(`Best room: ${i +1}`)
                return
            }
        }
    }
     
console.log("You've made it!")
console.log(`Coins: ${coins}`)
console.log(`Health: ${health}`)

}

stringManipulator("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")

