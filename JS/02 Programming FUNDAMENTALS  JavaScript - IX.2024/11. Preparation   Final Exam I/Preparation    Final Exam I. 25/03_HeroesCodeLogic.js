function assArrManipulator(inputArr) {

    inputArr.pop()
    let iters = inputArr.shift()
    let partyList = {}

    for (let i = 0; i < iters; i++) {

        let [member, hPoints, mPoints] = inputArr.shift().split(' ')
            hPoints = +hPoints
            mPoints = +mPoints

        partyList[member] = {hp: hPoints, mp: mPoints}
    }


    for (let el of inputArr) {

        let commandArr = el.split(' - ')
        let command = commandArr[0]
        let mName = commandArr[1]
        let amount = +commandArr[2]


        switch (command) {

            case 'CastSpell':
                let spell = commandArr[3]

                if (partyList[mName].mp >= amount) {
                    partyList[mName].mp -= amount

                    console.log(`${mName} has successfully cast ${spell} and now has ${partyList[mName].mp} MP!`)
                }
                else{
                    console.log(`${mName} does not have enough MP to cast ${spell}!`)
                }
            break

            case 'TakeDamage':
                let attacker = commandArr[3]

                partyList[mName].hp -= amount

                if (partyList[mName].hp > 0) {
                    console.log(`${mName} was hit for ${amount} HP by ${attacker} and now has ${partyList[mName].hp} HP left!`)
                }
                else{
                    delete partyList[mName]
                    console.log(`${mName} has been killed by ${attacker}!`)
                }
            break

            case 'Recharge':

                if (partyList[mName].mp + amount > 200) {
                    amount = 200 - partyList[mName].mp
                }
                partyList[mName].mp += amount
                console.log(`${mName} recharged for ${amount} MP!`)
            break

            case 'Heal':

                if (partyList[mName].hp + amount > 100) {
                    amount = 100 - partyList[mName].hp
                }
                partyList[mName].hp += amount
                console.log(`${mName} healed for ${amount} HP!`)
            break
        }
    }



    Object.entries(partyList).forEach(([Key, values]) => {
        console.log(`${Key}\n  HP: ${values.hp}\n  MP: ${values.mp}`)
    })

}

assArrManipulator([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]
    )






// Print:                      SirMullich healed for 30 HP!
//                             Adela recharged for 50 MP!
//                             Tyris does not have enough MP to cast Fireball!
//                             Tyris has been killed by Fireball!
//                             Ivor has been killed by Mosquito!
//                             Adela
//                             HP: 90
//                             MP: 200
//                             SirMullich
//                             HP: 100
//                             MP: 40

//

