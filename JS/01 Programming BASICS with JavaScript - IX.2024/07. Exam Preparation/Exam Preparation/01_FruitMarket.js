function fruitExpenseCalculator (strawberriesPrice, bananasKg, orangesKg, raspberriesKg, strawberriesKg){

    let strawberriesTotal = strawberriesKg * strawberriesPrice

    let raspberriesPrice = strawberriesPrice / 2

    let raspberriesTotal = raspberriesKg * raspberriesPrice
    let orangesTotal = orangesKg * (raspberriesPrice * 0.6)
    let bananasTotal = bananasKg * (raspberriesPrice * 0.2)

    let total = strawberriesTotal + raspberriesTotal + orangesTotal + bananasTotal

    console.log(total.toFixed(2))
}

fruitExpenseCalculator(48, 10, 3.3, 6.5, 1.7 )