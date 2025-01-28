function calculateCinemaIncome(input) {

    const PREMIERE_PRICE = 12.00;
    const NORMAL_PRICE = 7.50;
    const DISCOUNT_PRICE = 5.00;

    let screeningType = input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])

    let seats
    let projectionIncome 

    switch(screeningType){

        case "Premiere":
            seats = rows * cols
            projectionIncome = seats * PREMIERE_PRICE
            break

        case "Normal":
            seats = rows * cols
            projectionIncome = seats * NORMAL_PRICE
            break
        
        case "Discount":
            seats = rows * cols
            projectionIncome = seats * DISCOUNT_PRICE
            break
    }

    console.log(`${(projectionIncome).toFixed(2)} leva`)
}

calculateCinemaIncome(["Discount", "12", "30"])
    