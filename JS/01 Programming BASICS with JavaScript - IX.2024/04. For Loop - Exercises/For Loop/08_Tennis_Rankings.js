function calculateTennisRankings (input){

    const WIN_POINTS = 2000;                // Points for winning a tournament
    const FINAL_POINTS = 1200;              // Points for reaching the final
    const SEMI_FINAL_POINTS = 720;          // Points for reaching the semi-final

    let tournamentsCount = Number(input[0]);    // Number of tournaments Grigor has participated in
    let initialPoints = Number(input[1]);       // Starting points in the rankings

    let totalPoints = initialPoints
    let wonTournaments = 0;                     // To count the number of tournaments Grigor won


    for (let i = 2; i < input.length; i++){

        let temp = input[i]

        switch (temp){

            case "W": 
                totalPoints += WIN_POINTS
                wonTournaments++
                break

            case "F":
                totalPoints += FINAL_POINTS
                break

            case "SF":
                totalPoints += SEMI_FINAL_POINTS
                break   
        }
    }
    console.log("Final points:", totalPoints)
    console.log(`Average points: ${Math.floor((totalPoints - initialPoints ) / tournamentsCount)}`)
    console.log(`${(wonTournaments / tournamentsCount * 100).toFixed(2)}%`)

}

calculateTennisRankings(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])

