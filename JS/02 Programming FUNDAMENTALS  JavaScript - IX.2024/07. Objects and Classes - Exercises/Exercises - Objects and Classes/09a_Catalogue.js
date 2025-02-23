function sorting(inputArr) {

    let catalogue = []

    for (let el of inputArr) {

        let [product, price] = el.split(' : ')
        price = +price

        catalogue.push ({ product, price})

    }

    catalogue.sort((a, b) => a.product.localeCompare(b.product))
    let temp = null

    for (let el of catalogue) {

        let init = el.product[0]

        if (temp !== init) {
            console.log(init)
            temp = init

        }
        console.log(`  ${el.product}: ${el.price}`)
    }
}

sorting([ 'Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10'
        , 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10' ] )

