function countValidCombinations (input) {

    let num = Number(input[0])

    let combCounter = 0

    for (let i = 0; i<= num; i++){

        for (let j = 0; j <= num; j++){

            for (let k = 0; k <= num; k++){

                if (i + j + k === num) {

                combCounter++
                }

            }
        
        }
    }
    console.log(combCounter)
}

countValidCombinations(["25"])