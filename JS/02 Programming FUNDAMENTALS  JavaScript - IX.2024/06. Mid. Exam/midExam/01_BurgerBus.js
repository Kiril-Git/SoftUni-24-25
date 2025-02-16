function profitCalculator (inputArr) {

    let iters = +inputArr.shift()

    let total = 0

    for (let i = 1; i <= iters; i++) {

        let city = inputArr.shift()
        let income = +inputArr.shift()
        let expences = +inputArr.shift()

        let sum = 0

        if (i % 5 === 0) {

            income *= 0.9
            sum = income - expences
        }
        else if (i % 3 === 0) {
            
            expences *= 1.5
            sum = income - expences
        }
        else {
        sum = income - expences
        }

        console.log(`In ${city} Burger Bus earned ${sum.toFixed(2)} leva.`)

        total += sum
    }



    console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`)
}

profitCalculator(["5", "Lille", "2226.00", "1200.60", "Rennes", "6320.60", "5460.20"
                , "Reims", "600.20", "452.32", "Bordeaux", "6925.30", "2650.40", "Montpellier", "680.50", "290.20"])







                // print:              In Lille Burger Bus earned 1025.40 leva.
                //                     In Rennes Burger Bus earned 860.40 leva.
                //                     In Reims Burger Bus earned -78.28 leva.
                //                     In Bordeaux Burger Bus earned 4274.90 leva.
                //                     In Montpellier Burger Bus earned 322.25 leva.
                //                     Burger Bus total profit: 6404.67 leva.
                //