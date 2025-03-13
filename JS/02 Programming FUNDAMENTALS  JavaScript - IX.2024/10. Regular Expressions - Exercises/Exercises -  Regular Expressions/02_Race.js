function calcRaceRanking (inputArr) {

    let participants = inputArr.shift().split(', ')
    let racers = {}

    let nameReg = /[A-Za-z]/g
    let digitReg = /\d/g

    for (let el of inputArr) {
        let nameMatch = el.match(nameReg)

        if (nameMatch) {
            let name = nameMatch.join('')

            if (participants.includes(name)) {
                let digitMatch = el.match(digitReg)
                let digitSum = digitMatch.map(Number).reduce((a, b) => a + b, 0)

                if (!racers[name])  racers[name] = 0
                racers[name] += digitSum
            }
        }
    }

    let sorted = Object.entries(racers)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name)

    console.log('1st place: ' + sorted[0])
    console.log('2nd place: ' + sorted[1])
    console.log('3rd place: ' + sorted[2])

}


calcRaceRanking(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
    )








    // Print:              1st place: George
    //                     2nd place: Peter
    //                     3rd place: Tom

    //