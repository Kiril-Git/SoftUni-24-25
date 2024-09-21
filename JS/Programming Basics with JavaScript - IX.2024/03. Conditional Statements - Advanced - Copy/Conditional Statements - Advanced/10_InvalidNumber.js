function checkValidNumber(input) {


    let num = Number(input[0])
    let result

    if(num >= 100 || num <= 200 || num === 0 ){
       result = ""
    }
    else{
       result = "invalid"
    }
}

checkValidNumber(["200"])