function sumSecondsToTime(input) {

    let timeAthlet1 = Number(input[0])
    let timeAthlet2 = Number(input[1])
    let timeAthlet3 = Number(input[2])

    let sumAthletsTimes = timeAthlet1 + timeAthlet2 + timeAthlet3

    let minutes = Math.floor(sumAthletsTimes / 60) 
    let seconds = sumAthletsTimes % 60
    
    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    }
    else {
        console.log(`${minutes}:${seconds}`)
    }
}

sumSecondsToTime(["35", "45", "44"])