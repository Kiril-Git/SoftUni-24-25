function assArrManipulations (inputArr) {


    let iters = +inputArr.shift()
    
    let garage = {}

    for (let i = 0; i < iters; i++) {

        let [brand, miles, litres] = inputArr.shift().split('|')
            miles = +miles
            litres = +litres

            garage[brand] = {mileage: miles, fuel: litres}
    }


    let commandStr = inputArr.shift()

    while (commandStr !== 'Stop') {

        let commandArr = commandStr.split(' : ')
        let command = commandArr[0]

        let car = commandArr[1]
        let km = 0
        let lit = 0

        switch (command) {

            case 'Drive': 
            km = +commandArr[2]
            lit = +commandArr[3]

            if (garage[car]['fuel'] < lit) {
                console.log('Not enough fuel to make that ride')
            }
            else{
                garage[car]['fuel'] -= lit
                garage[car]['mileage'] += km
                console.log(`${car} driven for ${km} kilometers. ${lit} liters of fuel consumed.`)
            }

            if (garage[car]['mileage'] >= 100000) {
                console.log(`Time to sell the ${car}!`)
                delete garage[car]
            }
            break

            case 'Refuel': 
            lit = +commandArr[2];

            garage[car]['fuel'] + lit <= 75 ? garage[car]['fuel'] += lit : (lit = 75 - garage[car]['fuel'], garage[car]['fuel'] = 75)
        
            console.log(`${car} refueled with ${lit} liters`)
            break;
        
            case 'Revert': 
            km = +commandArr[2]
            
            garage[car]['mileage'] -= km

            garage[car]['mileage'] < 10000 ? garage[car]['mileage'] = 10000 : console.log(`${car} mileage decreased by ${km} kilometers`)
            break
        }

        commandStr = inputArr.shift()
    }



    Object.entries(garage).forEach(([car, details]) => {
        console.log(`${car} -> Mileage: ${details.mileage} kms, Fuel in the tank: ${details.fuel} lt.`);
    });
}


assArrManipulations([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )








//   print:                Not enough fuel to make that ride
//                         Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
//                         Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
//                         Time to sell the Aston Martin Valkryie!
//                         Lamborghini Veneno refueled with 1 liters
//                         Bugatti Veyron mileage decreased by 2000 kilometers
//                         Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
//                         Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
//                         Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.

//