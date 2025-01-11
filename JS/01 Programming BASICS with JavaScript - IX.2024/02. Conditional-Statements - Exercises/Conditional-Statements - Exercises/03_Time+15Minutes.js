function calculateTimeAfter15Minutes(input) {

    let inputHour = Number(input[0])
    let inputMin = Number(input[1])

    let newHour = inputHour
    let NewMin = inputMin + 15

    if (NewMin > 59 && newHour === 23) {
        NewMin -= 60
        newHour = 0
    }
    else if (NewMin > 59) {
            NewMin -= 60
            newHour++
    }
 
    

    if(NewMin < 10) {
        console.log(`${newHour}:0${NewMin}`)
    }
    else {
        console.log(`${newHour}:${NewMin}`)
    }
}


calculateTimeAfter15Minutes(["23", "59"])




