function findEqualEvenOddSumNumbers (num1, num2) {

    let line = ""

for (let i = num1; i <= num2; i++){

    let currentNum = i.toString() 
    let sum1 = 0
    let sum2 = 0
    
    for (let j = 0; j < currentNum.length; j++){

        let n = Number(currentNum[j])

        if (j % 2 === 0){
            
            sum1 += n
        }
        else{
            sum2 += n
        }
    }
        if (sum1 === sum2){

            line += currentNum + " "
    }
}

        console.log(line.trim())
    
}

findEqualEvenOddSumNumbers(100000, 100050 )