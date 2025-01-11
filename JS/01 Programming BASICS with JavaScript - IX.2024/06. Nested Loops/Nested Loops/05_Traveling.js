function calculateTravelSavings(input) {

    let index = 0

    while (input[index] !== "End") {

        let destination = input[index++]
        let budget = Number(input[index++])

        while ( budget > 0){

            let temp = Number(input[index++])

            budget -= temp
        }
        console.log(`Going to ${destination}!`)
    }
}

calculateTravelSavings(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])