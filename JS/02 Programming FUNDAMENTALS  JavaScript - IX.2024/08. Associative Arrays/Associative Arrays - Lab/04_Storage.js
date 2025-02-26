function manipulatingMap (inputArr) {

    let storageMap = new Map()


    for (let el of inputArr) {

        let [product, quantity] = el.split(' ')
        quantity = +quantity

        if (storageMap.has(product)) {        //  or:     let temp = storageMap.get(product) + quantity
            storageMap.set(product, storageMap.get(product) + quantity)
        }
        else {
            storageMap.set(product, quantity)
        }
    }

    // for (let el of storageMap) {                                        
    //     console.log(el[0] + ' -> ' + el[1])
    // }

    for (let [product, quantity] of storageMap) {
        console.log(product + ' -> ' + quantity);
    }
     
}

manipulatingMap(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'] )







// print:                  tomatoes -> 10
//                         coffee -> 45
//                         olives -> 100

//