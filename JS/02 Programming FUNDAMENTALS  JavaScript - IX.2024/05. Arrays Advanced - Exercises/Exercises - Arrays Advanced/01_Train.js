function arrayManipulations(inputArr) {

    let trainArr = inputArr.shift().split(' ').map(Number)
    let carriageCapacity = Number(inputArr.shift()) 

    for (let el of inputArr) {

        let commandArr = el.split(' ')
        let command = commandArr[0]

        if (command === 'Add') {

            let newCarriage = Number(commandArr[1])
            trainArr.push(newCarriage)
        }
        else {
            let passengers = Number(command)

            let firstCapacityIndex = trainArr.findIndex(el => el + passengers <= carriageCapacity)

            if (firstCapacityIndex !== -1) {

             trainArr[firstCapacityIndex] += passengers
            }
        }
    }
    


    console.log(trainArr.join(' '))
}

arrayManipulations(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'] )




//   print:      72 54 21 12 4 75 23 10 0
