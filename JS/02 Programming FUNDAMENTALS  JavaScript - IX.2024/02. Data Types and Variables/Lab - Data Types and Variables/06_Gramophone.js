function spinCalculator (bandName, albumName, songName) {

    const FULL_ROTATION_TIME_SECONDS = 2.5;

    let bNLength = bandName.length
    let aNLength = albumName.length
    let sNLength = songName.length

    let sondDurationInSec = bNLength * aNLength * sNLength / 2

    let spinNum = Math.ceil(sondDurationInSec / FULL_ROTATION_TIME_SECONDS)


    

console.log(`The plate was rotated ${spinNum} times.`)
}

spinCalculator('Black Sabbath', 'Paranoid', 'War Pigs')
