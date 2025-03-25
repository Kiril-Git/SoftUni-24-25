function calculateReceptionTime(inputArr) {

    let studentsCount = +inputArr.pop()

    let totalEfficiency = inputArr.map(Number).reduce((acc, el) => acc + el, 0)

    let totalTime = Math.ceil(studentsCount / totalEfficiency)

    let breaks = Math.floor(totalTime / 3)

    totalTime += breaks

    console.log(`Time needed: ${totalTime}h.`)
}

calculateReceptionTime(['3','2','5','40'])


// 80%
