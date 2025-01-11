function checkSwimmingWorldRecord(recordInSeconds, distanceInMeters, timePerMeter) {
    // Calculate the base time without any delays
    let baseTime = distanceInMeters * timePerMeter;

    // Calculate the total delay caused by water resistance
    let resistanceDelay = Math.floor(distanceInMeters / 15) * 12.5;

    // Calculate Ivan's total time
    let totalTime = baseTime + resistanceDelay;

    // Determine if Ivan has broken the world record
    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }
}

// Example usage
checkSwimmingWorldRecord(10464, 1500, 20);          // Outputs: "No, he failed! He was 20786.00 seconds slower."
checkSwimmingWorldRecord(55555.67, 3017, 5.03);     // Outputs: "Yes, he succeeded! The new world record is 17688.01 seconds."
