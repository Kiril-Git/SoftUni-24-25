function distancesConverter(meters) {

    const KILOMETER_TO_MILE = 0.621371;


    let kms = meters / 1000
    let miles = kms * KILOMETER_TO_MILE


    console.log(`${meters} meters is equal to ${kms} kilometers.`)
    console.log(`${kms} kilometers is equal to ${miles.toFixed(2)} miles.`)
}

distancesConverter(1852)

