function roundNum(num, precision) {

   

    if (precision > 15) {
        precision = 15
    }
    
    let roundedNum = parseFloat(num.toFixed(precision))

    console.log(roundedNum)
}

roundNum(10.5,3)
