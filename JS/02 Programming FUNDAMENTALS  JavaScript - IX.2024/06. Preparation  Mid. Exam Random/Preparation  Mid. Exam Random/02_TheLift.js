function  arrayManipulations (inputArr) {

    const MAX_PEOPLE_PER_WAGON = 4;

    let queueSize = +inputArr.shift()
    let liftArr = inputArr.shift().split(' ').map(Number)
    let avSeats = 0


    for (let i = 0; i < liftArr.length; i++) {

        let temp = liftArr[i]

        if (temp < MAX_PEOPLE_PER_WAGON) {
        avSeats = MAX_PEOPLE_PER_WAGON - temp

        if (queueSize >= avSeats) {
            liftArr[i] += avSeats
            queueSize -= avSeats
        }
        else {
            liftArr[i] += queueSize
            console.log('The lift has empty spots!')
            queueSize = 0
            break
        }
    }
    }
    // let liftState = liftArr.reduce((acc, el) => acc + el, 0)


    if (queueSize > 0) {
        console.log(`There isn't enough space! ${queueSize} people in a queue!`)
        console.log(liftArr.join(' '))
    }
    else {
        console.log(liftArr.join(' '))

    }
}

arrayManipulations([ "20", "0 2 0" ] )






// print:          There isn't enough space! 10 people in a queue!
//                 4 4 4
//