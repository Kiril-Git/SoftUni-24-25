function arrayManipulations (inputArr) {


    let guestList = []

    while (inputArr[0] !== 'PARTY') {
            guestList.push(inputArr.shift())
    }

    inputArr.shift()

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

arrayManipulations(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])






// Print:              2
//                     7IK9Yo0h
//                     tSzE5t0p 

//