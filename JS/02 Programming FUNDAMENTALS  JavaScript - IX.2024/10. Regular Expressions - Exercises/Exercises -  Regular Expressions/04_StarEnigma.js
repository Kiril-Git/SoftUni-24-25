function decryptMessages (inputArr) {


    inputArr.shift()
    let attacked = []
    let destroyed = []

    let starReg = /[star]/gi
    let regex = /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/

    for (let el of inputArr) {

        let starMatch = el.match(starReg)
        let count = starMatch ? starMatch.length : 0

        let shiftedStr = el
            .split('')
            .map(el => String.fromCharCode(el.charCodeAt(0) - count))
            .join('')
        
    

        let match = regex.exec(shiftedStr)

        if (match) {

            let [_, name, population, attack, soldiers] = match

            if (attack === 'A') {
                attacked.push(name)
            }
            else if (attack === 'D') {
                destroyed.push(name)
            }
        }
    }

    attacked.sort((a, b) => a.localeCompare(b)) 
    destroyed.sort((a, b) => a.localeCompare(b)) 

    console.log('Attacked planets: ' + attacked.length)
    attacked.forEach(el => console.log(`-> ${el}`))

    console.log('Destroyed planets: ' + destroyed.length)
    destroyed.forEach(el => console.log(`-> ${el}`))


}

decryptMessages(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR'] )






// Print:              Attacked planets: 0
//                     Destroyed planets: 2
//                     -> Cantonica
//                     -> Coruscant

//