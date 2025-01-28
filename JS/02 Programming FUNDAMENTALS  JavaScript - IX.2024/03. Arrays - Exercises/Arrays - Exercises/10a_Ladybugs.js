function arrManipulator (inputArr) {

let fieldSize = +inputArr[0]
let ladybugsStr = inputArr[1].split(' ')

let ladybugArr = []

for (let j = 0; j < fieldSize; j++){

        ladybugArr.push(0)
    
}

for (let i = 0; i < ladybugsStr.length; i++) {

    let temp = ladybugsStr[i]
    
    if (temp >= 0 && temp < fieldSize) {
    ladybugArr[temp] = 1
    }

}

for (let i = 2; i < inputArr.length; i++) {

    let command = inputArr[i].split(' ')

    let takeOffInd = +command[0]
    let direction = command[1]
    let steps = +command[2]

    if (takeOffInd >= 0 && takeOffInd < fieldSize && direction === 'right'){

        let landingInd = takeOffInd + steps


        if (ladybugArr[takeOffInd] === 1) {

            ladybugArr[takeOffInd] = 0

            for (let j = landingInd; j < fieldSize; j +=steps) {

                if (ladybugArr[j] === 0){

                    ladybugArr[j] = 1
                    break
                }

            }

    }
}
    else if (takeOffInd >= 0 && takeOffInd < fieldSize && direction === 'left'){

        let landingInd = takeOffInd - steps

        if (ladybugArr[takeOffInd] === 1) {

            ladybugArr[takeOffInd] = 0

            for (let j = landingInd; j >= 0; j -=steps) {

                if (ladybugArr[j] === 0){

                    ladybugArr[j] = 1
                    break
                }

            }

    }
    }

}


console.log(ladybugArr.join(' '))
}

arrManipulator([ 3, '0 1', '0 right 1', '2 right 1' ] )