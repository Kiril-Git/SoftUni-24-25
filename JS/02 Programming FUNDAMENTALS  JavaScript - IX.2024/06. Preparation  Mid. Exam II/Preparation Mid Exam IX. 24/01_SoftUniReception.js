function calculateReceptionTime(inputArr) {

    let studentsCount = +inputArr.pop()
    let totalEfficiency = inputArr.map(Number).reduce((acc, el) => acc + el, 0)

    let totalTime = 0

    while (studentsCount > 0) {
        totalTime++
        if (totalTime % 4 !== 0) {
            studentsCount -= totalEfficiency
        }
    }

    console.log(`Time needed: ${totalTime}h.`)
}

calculateReceptionTime(['3','2','5','40'])



// print:      Time needed: 5h.


