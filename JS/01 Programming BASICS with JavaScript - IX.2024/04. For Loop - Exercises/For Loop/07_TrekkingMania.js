function calculateClimbersPercentage (input) {

    const MUSALA_LIMIT = 5;            // Groups up to 5 people climb Musala
    const MONTBLANC_LIMIT = 12;        // Groups from 6 to 12 people climb Montblanc
    const KILIMANJARO_LIMIT = 25;      // Groups from 13 to 25 people climb Kilimanjaro
    const K2_LIMIT = 40;               // Groups from 26 to 40 people climb K2
    const EVEREST_MIN = 41;            // Groups of 41 or more people climb Everest

    let musalaClimbers = 0;          // Number of climbers assigned to climb Musala
    let montblancClimbers = 0;       // Number of climbers assigned to climb Montblanc
    let kilimanjaroClimbers = 0;     // Number of climbers assigned to climb Kilimanjaro
    let k2Climbers = 0;              // Number of climbers assigned to climb K2
    let everestClimbers = 0;         // Number of climbers assigned to climb Everest

    let totalClimbers = 0;           // Total number of climbers across all groups

    let groupsCount = Number(input[0])

    for(let i = 1; i <= groupsCount; i++) {

        let temp = Number(input[i])
        totalClimbers += temp

        if (temp <= MUSALA_LIMIT) {
            musalaClimbers += temp
        }
        else if (temp <= MONTBLANC_LIMIT) {
            montblancClimbers += temp
        }
        else if (temp <= KILIMANJARO_LIMIT) {
            kilimanjaroClimbers += temp
        }
        else if (temp <= K2_LIMIT) {
            k2Climbers += temp

        }else if(temp >= EVEREST_MIN){
            everestClimbers += temp
        }
    }

console.log(`${(musalaClimbers / totalClimbers * 100).toFixed(2)}%`)
console.log(`${(montblancClimbers / totalClimbers * 100).toFixed(2)}%`)
console.log(`${(kilimanjaroClimbers / totalClimbers * 100).toFixed(2)}%`)
console.log(`${(k2Climbers / totalClimbers * 100).toFixed(2)}%`)
console.log(`${(everestClimbers / totalClimbers * 100).toFixed(2)}%`)

}

calculateClimbersPercentage(["5", "25", "41", "31", "250", "6"])
    