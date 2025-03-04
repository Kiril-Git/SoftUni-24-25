function parkingLotTracker (inputArr) {

let carParking = new Set()

for (let el of inputArr) {

    let [command, regNumber] = el.split(', ')

    if (command === 'IN') {
        carParking.add(regNumber)
    }
    else if (command === 'OUT') {
        carParking.delete(regNumber)
    }
}


if (carParking.size > 0) {
    let sortedCars = Array.from(carParking).sort()
    console.log(sortedCars.join('\n'))
}
else {
    console.log('Parking Lot is Empty')
}
}

parkingLotTracker (['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 
                    'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'] )


                    

                    
    // Print:              CA2822UU
    //                     CA2844AA
    //                     CA9876HH
    //                     CA9999TT

    //