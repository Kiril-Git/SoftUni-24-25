function arr2object(inputArr) {

    let flights = inputArr[0]
    let statusUpdates = inputArr[1]
    let soughtStatus = inputArr[2][0]

    let flightsObj = {}

    for (let el of flights) {

        let [flightCode, ...destinationArr] = el.split(' ')
        let destination = destinationArr.join(' ')

        flightsObj[flightCode] = { Destination: destination, Status: "Ready to fly"}
    }
        
        for (let el of statusUpdates) {

            let [flightCode, ...statusArr] = el.split(' ')
            let status = statusArr.join(' ')

            if (flightsObj.hasOwnProperty(flightCode)) {

                flightsObj[flightCode].Status = status
            }

        }

    
    for (let key in flightsObj) {

        if (flightsObj[key].Status === soughtStatus) {
            console.log(flightsObj[key])
        }
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






//  print:             {Destination: 'Alabama', Status: 'Cancelled'}
//                     {Destination: 'California', Status: 'Cancelled'}
//                     {Destination: 'Texas', Status: 'Cancelled'}

//