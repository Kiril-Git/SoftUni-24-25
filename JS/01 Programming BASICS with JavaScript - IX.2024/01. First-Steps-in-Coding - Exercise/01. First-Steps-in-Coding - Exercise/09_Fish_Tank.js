function aquariumVolumeCalculator(input) {

    let lengthCm = Number(input[0]);                                // Дължина в см – цяло число в интервала [10 … 500]
    let widthCm = Number(input[1]);                                 // Широчина в см – цяло число в интервала [10 … 300]
    let heightCm = Number(input[2]);                                // Височина в см – цяло число в интервала [10 … 200]
    let occupiedPercentage = Number(input[3].trim());               // Процент – реално число в интервала [0.000 … 100.000]

    const OCCUPIED_PERCENTAGE_FACTOR = 1 - occupiedPercentage / 100

    let aquariumVolumeCubicCm = lengthCm * widthCm * heightCm;      // Volume in cubic centimeters
    let aquariumVolumeLiters = aquariumVolumeCubicCm / 1000;        // Convert cubic centimeters to liters
    
    let litersOfWater = aquariumVolumeLiters * OCCUPIED_PERCENTAGE_FACTOR

    console.log(litersOfWater.toFixed(3))
}

aquariumVolumeCalculator(["85 ", "75 ", "47 ", "17 "] )