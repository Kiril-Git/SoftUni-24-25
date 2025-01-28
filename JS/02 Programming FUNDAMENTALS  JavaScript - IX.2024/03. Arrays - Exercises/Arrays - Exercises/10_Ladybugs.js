function arrManipulator (inputArr) {

let fieldSize = +inputArr[0]
let ladybugsStr = inputArr[1].split(' ')          //  optional:     .split(' ').map(Number);


let ladybugArr = []

for (let j = 0; j < fieldSize; j++) {             //  or    let ladybugArr = Array(fieldSize).fill(0);
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

    if (takeOffInd < 0 || takeOffInd >= fieldSize || ladybugArr[takeOffInd] !== 1){
        continue
    }

        ladybugArr[takeOffInd] = 0
    

    switch(direction) {

        case 'right':
        for (let j = takeOffInd +steps; j < fieldSize; j += steps) {

            if (ladybugArr[j] === 0){

                ladybugArr[j] = 1
                break
            }
        }
        break
        case 'left':

            for (let j = takeOffInd -steps; j >= 0; j -= steps) {

                if (ladybugArr[j] === 0){

                    ladybugArr[j] = 1
                    break
                }
            }
            break
    }

}


console.log(ladybugArr.join(' '))
}

arrManipulator([ 5, '3', '3 left 2', '1 left -2'] )