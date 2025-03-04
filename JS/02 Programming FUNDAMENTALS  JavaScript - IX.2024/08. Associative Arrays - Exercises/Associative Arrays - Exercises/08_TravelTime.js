function manipulatingObj (inputArr) {


    let destinations = {}

    for (let el of inputArr) {

        let [country, city, price] = el.split(' > ')
        price = +price

        if (!destinations[country]) {
            destinations[country]  = {}
        }

        if (!destinations[country][city] || price < destinations[country][city]) {
            destinations[country][city] = price
        }
    }

    let sortedCountries = Object.keys(destinations).sort((a, b) => a.localeCompare(b))

    for (let elCountry of sortedCountries) {

        let sortedCities = Object.entries(destinations[elCountry])
        .sort((a, b) => a[1] - b[1])       // Sort cities by price
        .map(([city, price]) => `${city} -> ${price}`)
        .join(' ')

        console.log(`${elCountry} -> ${sortedCities}`)
    }
}

manipulatingObj ([ "Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200" ] )


