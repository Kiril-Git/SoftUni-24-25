function check_exam_arrival_time (input) {

    let examHour = Number(input[0]);        // The hour of the exam, an integer between 0 and 23
    let examMinute = Number(input[1]);      // The minute of the exam, an integer between 0 and 59
    let arrivalHour = Number(input[2]);     // The hour of arrival, an integer between 0 and 23
    let arrivalMinute = Number(input[3]);   // The minute of arrival, an integer between 0 and 59

    let minsDiff 
    let hoursDiff
    let examTime = examHour * 60 + examMinute
    let arrivalTime = arrivalHour * 60 + arrivalMinute

    if(examTime >= arrivalTime){

        minsDiff = examTime - arrivalTime
        
        if(minsDiff > 30 && minsDiff < 60){
            console.log(`Early`)
            console.log(`${minsDiff} minutes before the start`)
        }
        else if (minsDiff <= 30 && minsDiff > 0){
            console.log(`On time`)
            console.log(`${minsDiff} minutes before the start`)
        }
        else if (minsDiff > 59) {

            hoursDiff = Math.floor(minsDiff / 60)
            minsDiff -= hoursDiff * 60

            console.log(`Early`)
            if(minsDiff < 10){
                console.log(`${hoursDiff}:0${minsDiff} hours before the start`)
            }
            else{
            console.log(`${hoursDiff}:${minsDiff} hours before the start`)
        }
        }
        else{
            console.log("On time")
        }
    }

    if(arrivalTime > examTime){

        minsDiff = arrivalTime - examTime

        if(minsDiff < 60){
            console.log(`Late`)
            console.log(`${minsDiff} minutes after the start`)
        }
        else if (minsDiff > 59) {

            hoursDiff = Math.floor(minsDiff / 60)
            minsDiff -= hoursDiff * 60

            console.log(`Late`)
            if(minsDiff < 10){
                console.log(`${hoursDiff}:0${minsDiff} hours after the start`)
            }
            else{
            console.log(`${hoursDiff}:${minsDiff} hours after the start`)
        }
        }
    }
}

check_exam_arrival_time(["14", "00", "13", "55"])
    