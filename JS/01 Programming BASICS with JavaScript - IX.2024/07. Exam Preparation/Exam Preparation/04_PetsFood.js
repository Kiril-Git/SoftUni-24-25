function calculatePetFoodStatistics(input){

    let days = Number(input[0])
    let foodTotal = Number(input[1])
    let dogFoodTotal = 0
    let catFoodTotal = 0
    let daysCounter = 0
    let biscuits = 0

    for(let i = 2; i < input.length; i+=2){

        let dogDailyFood = Number(input[i])
        let catDailyFood = Number(input[i+1])

        dogFoodTotal += dogDailyFood
        catFoodTotal += catDailyFood

        daysCounter++
        if( daysCounter === 3){
        biscuits += (dogDailyFood + catDailyFood)               // Every 3rd day, as a reward, biscuits are given
        daysCounter = 0
        }
    }

    let totalEatenFood = dogFoodTotal + catFoodTotal
 

    console.log(`Total eaten biscuits: ${Math.round(biscuits * 0.1)}gr.`)
    console.log(`${((totalEatenFood / foodTotal) * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${((dogFoodTotal / totalEatenFood) * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${((catFoodTotal / totalEatenFood) * 100).toFixed(2)}% eaten from the cat.`)

}

calculatePetFoodStatistics(["3", "1000", "300", "20", "100", "30", "110", "40"]);

