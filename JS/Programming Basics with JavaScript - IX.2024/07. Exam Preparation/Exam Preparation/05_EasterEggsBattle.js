function easterEggBattle(input) {

    let scoreFella1 = Number(input[0])
    let scoreFella2 = Number(input[1])

    let index = 2
    let currentInput = input[index]

    while (currentInput !== "End") {

        if (currentInput === "one"){
            scoreFella2--
            if(scoreFella2 === 0){
                console.log(`Player two is out of eggs. Player one has ${scoreFella1} eggs left.`)
                return
            } 
        }
        else if (currentInput === "two"){
            scoreFella1--
            if(scoreFella1 === 0){
                console.log(`Player one is out of eggs. Player two has ${scoreFella2} eggs left.`)
                return
            } 
        }
        index++
        currentInput = input[index]
    }
    console.log(`Player one has ${scoreFella1} eggs left.`)
    console.log(`Player two has ${scoreFella2} eggs left.`)

}
easterEggBattle(["5", "4", "one", "two", "one", "two", "two", "End"])
