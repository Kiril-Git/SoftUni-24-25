function arr2object(inputArr) {

    let flights = inputArr[0]
    let statusUpdates = inputArr[1]
    let soughtStatusArr = inputArr[2]
    let soughtStatus = soughtStatusArr[0]

    let flightsObj = {}

    for (let el of flights) {

        let [flightCode, ...destinationArr] = el.split(' ')
        let destination = destinationArr.join(' ')

        let addEl = true
        
        for (let el2 of statusUpdates) {

            let [flightCode2, ...statusArr] = el2.split(' ')
            let status = statusArr.join(' ')

            if (soughtStatus === 'Ready to fly') {

                if ( flightCode === flightCode2) {
                    addEl = false
                    break
                }
            }
            else {
                addEl = false
                if (flightCode === flightCode2) {
                    addEl = true
                    break
                }
            } 
        }
        if (addEl) {
        flightsObj[destination] = soughtStatus
        }

    }

    for (let key in flightsObj) {

console.log(`{ Destination: '${key}', Status: '${flightsObj[key]}' }`)
    }

}

arr2object([['WN612 Alabama',
    'WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK430 Cancelled'],
     ['Cancelled']
 ]
 

 )