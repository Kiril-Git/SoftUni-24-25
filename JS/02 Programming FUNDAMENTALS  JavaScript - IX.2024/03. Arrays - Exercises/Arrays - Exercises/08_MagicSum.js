function  magicSumIdentifier (inputArr, magicNum) {


    for (let i = 0; i < inputArr.length; i++) {
        let num = inputArr[i]

        for (let j = i +1; j < inputArr.length; j++) {

            let temp = inputArr[j]
            let sum = num + temp

                if (sum === magicNum ){
                    console.log(num + ' ' + temp)
                
            }
        }
    }
}

magicSumIdentifier([14, 20, 60, 13, 7, 19, 8], 27 )