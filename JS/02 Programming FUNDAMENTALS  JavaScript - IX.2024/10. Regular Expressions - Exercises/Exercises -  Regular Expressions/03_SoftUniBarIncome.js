function calcBarTurnover (inputArr) {

    //                       The ? makes the preceding quantifier lazy  ↓
    let regex = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*?(\d+(\.\d+)?)\$/;
    let total = 0

    for (let el of inputArr) {

        let match = regex.exec(el)

        if (match) {

            let [_, name, product, quantity, price] = match
            quantity = +quantity
            price = +price
            
            let sum = price * quantity
            total += sum

            console.log(name + ': ' + product + ' - ' + sum.toFixed(2))

        }
    }

    console.log('Total income: ' + total.toFixed(2))
}


    calcBarTurnover(['%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift']
        )






        // print:              George: Croissant - 20.60
        //                     Peter: Gum - 1.30
        //                     Maria: Cola - 2.40
        //                     Total income: 24.30

        //