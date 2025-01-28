function calculateOscarNomination (input){

    let actorName = input[0];                       // Name of the actor
    let initialPoints = Number(input[1]);           // Initial points from the academy
    let juryCount = Number(input[2]);              // Number of evaluators

    let sumPoints = initialPoints

    for (let i = 3; i < input.length; i+=2){

        let juryName = input[i]
        let juryMemberPoints = Number(input[i+1])
        let chars = juryName.length
        let temp = 0

        temp = (juryMemberPoints * chars) / 2 
        sumPoints += temp

        if(sumPoints > 1250.5){

            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(sumPoints).toFixed(1)}!`)
            return
        }
    }
    console.log(`Sorry, ${actorName} you need ${(1250.5 - sumPoints).toFixed(1)} more!`)

}

calculateOscarNomination(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
    
    