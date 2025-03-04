function arrayManipulations (inputArr) {

    let guestList = []
    let guest = inputArr.shift()


    while (guest !== 'PARTY') {

        let firstCh = +guest[0]
        
        if (isNaN(firstCh)) {
            guestList.push(guest)
        }
        else {
            guestList.unshift(guest)
        }

        guest = inputArr.shift()
    }


    for (let el of inputArr) {
        let ind = guestList.indexOf(el)

        if (ind !== -1) {
        guestList.splice(ind, 1)
        }
    }

    let vipGuests = guestList.filter(el => !isNaN(el[0]))
    let regularGuests = guestList.filter(el => isNaN(el[0]))

    console.log(guestList.length)
    console.log(vipGuests.join('\n'))
    console.log(regularGuests.join('\n'))

}

arrayManipulations(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
    ]
    )