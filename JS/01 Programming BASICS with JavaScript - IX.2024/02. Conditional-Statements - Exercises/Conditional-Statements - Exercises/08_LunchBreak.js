function check_lunch_break_for_episode(input) {

    let seriesName = input[0]
    let episodeDuration = Number(input[1])
    let breakDuration = Number(input[2])
    
    let lunchTime = breakDuration * 0.125
    let breakTime = breakDuration * 0.25

    let totalTime = episodeDuration + lunchTime + breakTime

    if(breakDuration >= totalTime){

        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(breakDuration - totalTime)} minutes free time.`)
    }
    else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(totalTime - breakDuration)} more minutes.`)
    }
}

check_lunch_break_for_episode(["Teen Wolf", "48", "60"])
