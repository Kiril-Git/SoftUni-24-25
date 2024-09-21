function trackDailySteps (input) {

    const DAILY_STEP_GOAL = 10000;                  // The number of steps Gabi aims to achieve daily

    let index = 0;                                  // To track the current index in the input array
    let currentInput = input[index];                // To store the current step count or command from the input

    let totalSteps = 0;                             // To store the total number of steps Gabi has taken

    while (totalSteps < DAILY_STEP_GOAL || index === input.size) {

        if (currentInput === "Going home") {

            totalSteps += Number(input[index+1])
            break
        }
        else{
            totalSteps += Number(currentInput)
        }

        index++
        currentInput = input[index]; 
    } 

    if (totalSteps >= DAILY_STEP_GOAL) {
        console.log(`Goal reached! Good job!`)
        console.log(`${totalSteps - DAILY_STEP_GOAL} steps over the goal!`)
    }
    else{
        console.log(`${DAILY_STEP_GOAL - totalSteps} more steps to reach goal.`)
    }
    
}

trackDailySteps(["1000", "1500", "2000", "6500"])