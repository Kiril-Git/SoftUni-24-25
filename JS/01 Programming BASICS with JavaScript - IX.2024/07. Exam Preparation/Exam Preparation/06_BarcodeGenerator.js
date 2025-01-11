function generateBarcode(start, end){

    let startNum = start.toString()
    let endNum = end.toString()
    let result = ""

    for (let i = Number(startNum[0]); i <= Number(endNum[0]); i++) {

        for (let j = Number(startNum[1]); j <= Number(endNum[1]); j++) {

            for (let k = Number(startNum[2]); k <= Number(endNum[2]); k++) {

                for (let l = Number(startNum[3]); l <= Number(endNum[3]); l++) {

                    if( i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 & l % 2 !== 0) {

                        result += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(result.trim())
  
}
generateBarcode(2345, 6789)
