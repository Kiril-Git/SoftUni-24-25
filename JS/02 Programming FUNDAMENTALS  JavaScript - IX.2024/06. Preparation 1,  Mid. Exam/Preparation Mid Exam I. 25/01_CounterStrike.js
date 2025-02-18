function arrayManipulations(inputArr) {

    let initialEnergy = +inputArr.shift()
    let distanceValue = inputArr.shift()

    let wonBattles = 0
    let terminated = false

    while (distanceValue !== 'End of battle') {

        distanceValue = +distanceValue

        if (initialEnergy >= distanceValue) {
            initialEnergy -= distanceValue
            wonBattles++
            if(wonBattles % 3 === 0) 
                initialEnergy += wonBattles
        }
        else {
            terminated = true
            break
        }

        distanceValue = inputArr.shift()
    }


    if (terminated) {
        console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`)
    }
    else{
    console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`)
    }
}

arrayManipulations(["100", "10", "10", "10", "1", "2", "3", "73", "10"])






//   Print:         Not enough energy! Game ends with 7 won battles and 0 energy
//

    