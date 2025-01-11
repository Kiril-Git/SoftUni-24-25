function evaluateSwimmingPerformance (input){

    let currentRecordTime = Number(input[0])
    let distanceInMetres = Number(input[1]) 
    let timePerMeter = Number(input[2]) 

    let extraTime = Math.floor(distanceInMetres / 15) * 12.5
    let timeIvan = distanceInMetres * timePerMeter + extraTime

    if(timeIvan < currentRecordTime){
        console.log(`Yes, he succeeded! The new world record is ${timeIvan.toFixed(2)} seconds.`)
    }
    else{
        console.log(`No, he failed! He was ${(timeIvan - currentRecordTime).toFixed(2)} seconds slower.`)
    }
}

evaluateSwimmingPerformance(["55555.67", "3017", "5.03"])