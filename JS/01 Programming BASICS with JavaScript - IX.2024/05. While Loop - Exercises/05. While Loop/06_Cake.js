function trackCakePieces (input) {

   let cakeW = Number(input[0])
   let cakeL = Number(input[1])
   let index = 2

   let currentInput = input[index]
   let guestsGreediness = 0

    let totalPieces = cakeW * cakeL

    while (currentInput !== "STOP"){

        let piecesGrabs = Number(currentInput)
        guestsGreediness += piecesGrabs

        if (guestsGreediness > totalPieces) {
             
            console.log(`No more cake left! You need ${guestsGreediness - totalPieces} pieces more.`)
            return
        }


        index++
        currentInput = input[index]
    }
    console.log(`${totalPieces - guestsGreediness} pieces are left.`)

}

trackCakePieces(["10", "10", "20", "20", "20", "20", "21"])