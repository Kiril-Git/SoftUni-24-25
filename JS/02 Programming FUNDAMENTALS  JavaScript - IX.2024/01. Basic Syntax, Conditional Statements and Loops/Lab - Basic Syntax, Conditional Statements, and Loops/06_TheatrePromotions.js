function priceCalculator(dayType, custAge) {


    if (custAge < 0 || custAge > 122) {
        console.log("Error!")
        return;
}

        let price = 0

switch(dayType){

    case 'Weekday':

    if (custAge >= 0 && custAge <= 18)
        price = 12

    else if (custAge <= 64)
        price = 18

    else if (custAge <= 122)
        price = 12
    break

    case 'Weekend':

    if (custAge >= 0 && custAge <= 18)
        price = 15

    else if (custAge <= 64)
        price = 20

    else if (custAge <= 122)
        price = 15
    break

    case 'Holiday':

    if (custAge >= 0 && custAge <= 18)
        price = 5

    else if (custAge <= 64)
        price = 12

    else if (custAge <= 122)
        price = 10
    break
}

console.log(price + "$")
}

priceCalculator('Holiday', -15 )

