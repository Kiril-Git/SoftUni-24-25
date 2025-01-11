function generateSpecialNumbers(n){

    let line = ""

    for (let i = 1111; i <= 9999; i++){

        let currentNum = i.toString()
        let counterOf4 = 0

        for ( let j = 0; j < currentNum.length; j++){

            let temp = Number(currentNum[j])

            if (n % temp === 0){

                counterOf4++
            }
        }
            if (counterOf4 === 4) {
                line += currentNum + " "
        }
    }

    console.log(line.trim())
}

generateSpecialNumbers(11)