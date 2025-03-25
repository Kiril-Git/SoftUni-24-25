function dajbaCalculator (inputArr) {

    const DAILY_FOOD_CONSUMPTION = 0.3;
    const DAYS_IN_MONTH = 30;

    let foodKg = inputArr[0]
    let heyKg = inputArr[1]
    let coverKg = inputArr[2]
    let pigWeight = inputArr[3]

    let shortige = false

    for (let i = 1; i <= 30; i++) {

        foodKg -= DAILY_FOOD_CONSUMPTION

        if (i % 2 === 0) {
            heyKg -= foodKg * 0.05
        }

        if (i % 3 === 0) {
            coverKg -= pigWeight / 3
        }

        if (heyKg < 0 || coverKg < 0 || foodKg < 0) {
            shortige = true
            break
        }

    }

    if (!shortige) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${heyKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
    }
    else {
        console.log ('Merry must go to the pet store!')
    }

}

dajbaCalculator (["10", "5", "5.2", "1"])





// Print:      Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87.
//