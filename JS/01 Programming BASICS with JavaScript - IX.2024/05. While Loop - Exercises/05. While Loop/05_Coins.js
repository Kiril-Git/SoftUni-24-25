function calculateMinCoins (input) {

    let amount = Number(input[0]);                  // Convert the input to a number
    let lv = Math.floor(amount);                    // Extract the leva part
    let st = Math.round((amount - lv) * 100);       // Extract the stotinki part and round


    let coinsCounter = 0
        
        if (lv === 1){
            coinsCounter++
        }
        else if (lv === 2) {
            coinsCounter++
        }
        else if (lv % 2 === 0) {

            coinsCounter += lv / 2

        }
        else{
            coinsCounter += Math.floor(lv / 2) +1
        }

        while (st !== 0 && !isNaN(st)) {        
        

        if (st >= 90){

            coinsCounter += 3
            st -= 90
        }
        else if (st >= 80){
            coinsCounter += 3
            st -= 80
        }
        else if (st >= 70){
            coinsCounter += 2
            st -= 70
        }
        else if (st >= 60){
            coinsCounter += 2
            st -= 60
        }
        else if (st >= 50){
            coinsCounter += 1
            st -= 50
        }
        else if (st >= 40){
            coinsCounter += 2
            st -= 40
        }
        else if (st >= 30){
            coinsCounter += 2
            st -= 30
        }
        else if (st >= 20){
            coinsCounter += 1
            st -= 20
        }
        else if (st >= 10){
            coinsCounter += 1
            st -= 10
        }
        else if (st >= 5){
            coinsCounter += 1
            st -= 5
        }
        else if (st >= 2){
            coinsCounter += 1
            st -= 2
        }
        else if (st >= 1){
            coinsCounter += 1
            st -= 1
        }
    }

    console.log(coinsCounter)
}

calculateMinCoins(["9.59"])