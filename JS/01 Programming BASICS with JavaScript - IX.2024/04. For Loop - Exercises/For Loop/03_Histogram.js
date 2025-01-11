function calculateHistogram(input) {

    let numsCount = Number(input[0])

    // Counters for each range
    let countRange1 = 0;        // Count for numbers < 200
    let countRange2 = 0;        // Count for numbers between 200 and 399
    let countRange3 = 0;        // Count for numbers between 400 and 599
    let countRange4 = 0;        // Count for numbers between 600 and 799
    let countRange5 = 0;        // Count for numbers >= 800

    // To store the percentages
    let p1 = 0;                 // Percentage for numbers < 200
    let p2 = 0;                 // Percentage for numbers between 200 and 399
    let p3 = 0;                 // Percentage for numbers between 400 and 599
    let p4 = 0;                 // Percentage for numbers between 600 and 799
    let p5 = 0;                 // Percentage for numbers >= 800


    for(i = 1; i <= numsCount; i++){
        
        let temp = Number(input[i])

        if(temp > 0 && temp < 200){
            countRange1++
        }
        else if(temp < 400){
            countRange2++
        }
        else if(temp < 600){
            countRange3++
        }
        else if(temp < 800){
            countRange4++
        }
        else if(temp <= 1000){
            countRange5++
        }
    }

    p1 = countRange1 / numsCount * 100
    p2 = countRange2 / numsCount * 100
    p3 = countRange3 / numsCount * 100
    p4 = countRange4 / numsCount * 100
    p5 = countRange5 / numsCount * 100


    console.log(`${(p1).toFixed(2)}%`)
    console.log(`${(p2).toFixed(2)}%`)
    console.log(`${(p3).toFixed(2)}%`)
    console.log(`${(p4).toFixed(2)}%`)
    console.log(`${(p5).toFixed(2)}%`)
}

calculateHistogram(["3", "1", "2", "999"])