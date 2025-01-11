function numberInRangeCheck(input) {

    let num = Number(input[0])
    
    let result

    if(num < -100 || num > 100 || num === 0){
        result = "No"
    }
    else{
        result = "Yes"
    }
    console.log(result)
}

numberInRangeCheck(["-25"])

