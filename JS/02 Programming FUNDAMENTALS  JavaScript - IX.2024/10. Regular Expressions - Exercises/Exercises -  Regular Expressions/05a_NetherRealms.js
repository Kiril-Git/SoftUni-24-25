function extractInfoByReg(inputStr) {
    let namesArr = inputStr.split(/\s*,\s*/).sort((a, b) => a.localeCompare(b));

    let healthReg = /[^0-9+\-*\/.]/g
    let damageReg = /[-+]?\d*\.?\d+/g;

    for (let el of namesArr) {
        let health = 0;
        let damage = 0;

        let healthMatch = el.match(healthReg);
        let damageMatch = el.match(damageReg);

        
        if (healthMatch) {
            health = healthMatch.map(ch => ch.charCodeAt(0)).reduce((a, b) => a + b, 0);
        }

        if (damageMatch) {
            damage = damageMatch.map(Number).reduce((a, b) => a + b, 0);
        }

        for (let ch of el) {
            if (ch === '*') damage *= 2;
            else if (ch === '/') damage /= 2;
        }

        console.log(`${el} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}

extractInfoByReg('M3ph1st0**, Azazel')
