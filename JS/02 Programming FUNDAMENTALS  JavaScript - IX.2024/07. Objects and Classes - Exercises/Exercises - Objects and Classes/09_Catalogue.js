function sorting(inputArr) {


let catalog = {}

for (let el of inputArr) {

    let [product, price] = el.split(' : ')
    price = +price
    let initial = product[0]

    if (!catalog[initial]) {
        catalog[initial] = []
    }

    catalog[initial].push({product, price})
}

let sortedInitials = Object.keys(catalog).sort()

for( let el of sortedInitials) {

    console.log(el)

    let sortedProducts = catalog[el].sort((a, b) => a.product.localeCompare(b.product))

    for (let el of sortedProducts) {
        console.log(`  ${el.product}: ${el.price}`)
    }
}


}

sorting([ 'Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10'
        , 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10' ] )