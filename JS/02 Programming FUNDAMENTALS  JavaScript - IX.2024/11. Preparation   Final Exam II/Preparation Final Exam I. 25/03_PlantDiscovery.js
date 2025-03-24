function assArrManipulator(inputArr) {

    inputArr.pop()
    let iters = +inputArr.shift()

    let herbarium = {}

    for (let i = 0; i < iters; i++) {

        let [plant, pRarity] = inputArr.shift().split('<->')
            pRarity = +pRarity

        herbarium[plant] = {rarity: pRarity, rating: []}
    }


    for (let el of inputArr) {

        let commandArr = el.split(': ')
        let command = commandArr.shift()
        let pName = ''
        let rValue = 0
            
        switch (command) {

            case 'Rate':
                commandArr = commandArr[0].split(' - ')
                pName = commandArr[0]
                
                if (herbarium[pName]) {
                    rValue = +commandArr[1]
                    herbarium[pName].rating.push(rValue)
                }
                else {
                    console.log('error')
                }
            break

            case 'Update':
                commandArr = commandArr[0].split(' - ')
                pName = commandArr[0]
                
                if (herbarium[pName]) {
                    rValue = +commandArr[1]
                    herbarium[pName].rarity = rValue
                }
                else {
                    console.log('error')
                }
            break

            case 'Reset':
                commandArr = commandArr[0].split(' - ')
                pName = commandArr[0]
                
                if (herbarium[pName]) {
                    herbarium[pName].rating.length = 0
                }
                else {
                    console.log('error')
                }
            break
        }
    }

    console.log('Plants for the exhibition:')

    Object.entries(herbarium).forEach(([key, values]) => {
        // if (values.rating.length === 0) values.rating.push(0)
        // let avRating = values.rating.reduce((acc, el) => acc + el, 0) 
        //     avRating /= values.rating.length
            let avRat = values.rating.length
                ? values.rating.reduce((acc, el) => acc + el, 0) / values.rating.length
                : 0
                
        console.log(`- ${key}; Rarity: ${values.rarity}; Rating: ${avRat.toFixed(2)}`)
    })
}

assArrManipulator((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
    )





    // Print:              Plants for the exhibition:
    //                     - Arnoldii; Rarity: 4; Rating: 0.00
    //                     - Woodii; Rarity: 5; Rating: 7.50
    //                     - Welwitschia; Rarity: 2; Rating: 7.00

    //