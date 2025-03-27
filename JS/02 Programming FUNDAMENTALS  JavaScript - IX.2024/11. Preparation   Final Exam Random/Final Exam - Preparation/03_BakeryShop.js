function mapManipulations (inputArr) {

    inputArr.pop()
    let gastronom = new Map()
    let sold = 0

    for (let el of inputArr) {

        let [command, quantity, product] = el.split(' ')
            quantity = +quantity
            
            if (quantity <= 0) continue

            switch (command) {

                case 'Receive':

                if (!gastronom.has(product)) {
                gastronom.set(product, 0)
                }
                gastronom.set(product, gastronom.get(product) + quantity)
                break

                case 'Sell':

                    if (!gastronom.has(product)) {
                        console.log(`You do not have any ${product}.`)
                        }
                    else {
                        if (gastronom.get(product) < quantity) {
                            quantity = gastronom.get(product)
                            console.log(`There aren't enough ${product}. You sold the last ${quantity} of them.`)
                        }
                        else {
                            console.log(`You sold ${quantity} ${product}.`)
                        }

                        gastronom.set(product, gastronom.get(product) - quantity)
                        sold += quantity
                    }

                    if(gastronom.get(product) === 0) gastronom.delete(product)
                break
            }
    }

    for (let [product, quantity] of gastronom) {
            console.log(`${product}: ${quantity}`)
    }

    console.log(`All sold: ${sold} goods`)
}

mapManipulations([  "Receive 105 cookies",
                    "Receive 11 donuts",
                    "Receive 15 пасти",
                    "Sell 10 donuts",
                    "Sell 1 bread",
                    "Sell 20 пасти",
                    'Complete'
                ])









// Принт:                  You sold 10 donuts.
//                         You do not have any bread.
//                         There aren't enough пасти. You sold the last 15 of them.
//                         cookies: 105
//                         donuts: 1
//                         All sold: 25 goods

//
    