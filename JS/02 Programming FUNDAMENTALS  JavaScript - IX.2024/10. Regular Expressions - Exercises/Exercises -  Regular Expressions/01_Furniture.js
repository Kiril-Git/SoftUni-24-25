function calcFurnitureBill (inputArr) {


let regex = />>([A-Z][A-Za-z]*)<<(\d+\.?\d*)!(\d+)/
let total = 0

console.log('Bought furniture:')

for (let el of inputArr) {
    
    let match = regex.exec(el)

    if (match) {
    let [_, item, price, quantity] = match
    quantity = +quantity
    price = +price

    total += price * quantity
    console.log(item)
    }
}



console.log(`Total money spend: ${total.toFixed(2)}`)
}

calcFurnitureBill(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'] )







// Print:              Bought furniture:
//                     Sofa
//                     TV
//                     Total money spend: 2436.69

//