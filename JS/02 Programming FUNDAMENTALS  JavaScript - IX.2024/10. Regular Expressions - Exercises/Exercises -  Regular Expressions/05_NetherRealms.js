function extractInfoByReg (inputStr) {

    let namesArr = inputStr.split(/\s*,\s*/)
        .sort((a, b) => a.localeCompare(b))

    let healthReg = /[^0-9+\-*\/.]/g
    let dammageReg = /[-]?\d+[.]?\d*/g


    for (let el of namesArr) {
        let health = 0
        let damage = 0

        let healthMatch = el.match(healthReg)
        let dammageMatch = el.match(dammageReg)

        if (healthMatch) {

        health = healthMatch
        .map(el => el.charCodeAt(0))
        .reduce((a, b) => a + b, 0)
        }

        if (dammageMatch) {

            for (let el of dammageMatch) {

                let temp = el

                if (el[0] === '-') {
                    temp = +el.slice(1)
                    damage -= temp
                }
                else {
                    temp = +temp
                    damage += temp
                }
            }
            
        }

        for (let ch of el) {
            if (ch === '*') {
                damage *= 2
            }
            else if (ch === '/') {
                damage /= 2
            }
        }
    
        console.log(`${el} - ${health} health, ${damage.toFixed(2)} damage`)
    }

}

extractInfoByReg('M3ph1st0**, Azazel')
