function calculateMovieBudget(input) {

    let budget = Number(input[0])
    let extras = Number(input[1])
    let costumeCost = Number(input[2])

    let decorCost = budget * 0.1
    let costumesSum = extras * costumeCost

    if (extras > 150) {
        costumesSum *= 0.9
    }

    let totalSum = decorCost + costumesSum

    if (totalSum <= budget){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`)
    }

}

calculateMovieBudget(["9587.88", "222", "55.68"])