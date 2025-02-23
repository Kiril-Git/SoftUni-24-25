function objManipulations (inputArr, inputArr2) {

    let products = {}

    for (let i = 0; i < inputArr.length; i +=2) {

        let productName = inputArr[i]
        let quantity = +inputArr[i +1] 

        products[productName] = quantity

    }


    for (let i = 0; i < inputArr2.length; i +=2) {

        let productName = inputArr2[i]
        let quantity = +inputArr2[i +1] 

        if (!products[productName]) {
            products[productName] = 0
        }

        products[productName] += quantity

    }


    for (let key in products) {
        console.log(key + ' -> ' + products[key])

    }
}

objManipulations    ([ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ]
                    ,[ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ] )








// Print:              Chips -> 5
//                     CocaCola -> 9
//                     Bananas -> 44
//                     Pasta -> 11
//                     Beer -> 2
//                     Flour -> 44
//                     Oil -> 12
//                     Tomatoes -> 70
//