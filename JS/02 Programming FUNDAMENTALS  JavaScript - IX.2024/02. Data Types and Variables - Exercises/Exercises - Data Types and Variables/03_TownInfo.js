function printTownInfo(townName, population, area){

    let validation = 'successful'

    if (townName.length < 3) {
        console.log(`Town name must be at least 3 characters!`)
        validation = 'unsuccessful'
    }
    if (population < 0) {
        console.log('Population must be a positive number!')
        validation = 'unsuccessful'
    }
    if (area < 0) {
        console.log('Area must be a positive number!')
        validation = 'unsuccessful'
    }


    if (validation === 'successful') {
    console.log(`Town ${townName} has population of ${population} and area ${area} square km.`)
    }

}

printTownInfo('Sofia', 1286383, 492 ) 

