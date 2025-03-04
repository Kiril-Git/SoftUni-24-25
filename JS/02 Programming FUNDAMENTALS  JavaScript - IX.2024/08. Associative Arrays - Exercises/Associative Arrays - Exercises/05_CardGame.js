function manipulatingMDArrs (inputArr) {


    let players = new Map()

    for (let el of inputArr) {

        let [name, deck] = el.split(': ')
        let cards = deck.split(', ')

        if (!players.has(name)) {
            players.set(name, new Set())
        }

        let playerDeck = players.get(name)

        for (let el of cards) {
            playerDeck.add(el)
        }
    }

    let powerValues = {
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }

    let typeMultipliers = {
        'S': 4, 'H': 3, 'D': 2, 'C': 1
    }

    let playerScores = new Map()

    for (let [player, deck] of players) {

        let totalValue = 0

        for (let el of deck) {

            let powerPart = el.slice(0, -1)
            let typePart = el.slice(-1)

            let power = isNaN(powerPart) ? powerValues[powerPart] : Number(powerPart)
            let multiplier = typeMultipliers[typePart]

            totalValue += power * multiplier
        }

        playerScores.set(player, totalValue)

    }

    // let sortedPlayers = [...playerScores.entries()]
    // .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

    for (let [player, totalScore] of playerScores) {

        console.log(`${player}: ${totalScore}`)
    }
}

manipulatingMDArrs ([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    
    )