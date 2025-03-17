function identifyValidDest(inputStr) {

    let regex = /([=\/])([A-Z][A-Za-z]{2,})\1/g

    let destinations = [];
    let points = 0

    let matches = [...inputStr.matchAll(regex)]

    if(matches) {
        matches.forEach(el => {
            let destination = el[2]
            destinations.push(destination)
            points += destination.length
        });
    }

    console.log('Destinations: ' + (destinations.length > 0 ? destinations.join(', ') : ''))

    console.log('Travel Points: ' + points)
}

identifyValidDest("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/NewYork/=i=")






// Print:                  Destinations: Hawai, Cyprus, NewYork
//                         Travel Points: 18

//


