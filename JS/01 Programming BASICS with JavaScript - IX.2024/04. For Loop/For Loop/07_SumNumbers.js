function sumOfDigits (input){

    let text = input[0]
    let sum = 0

    for(let char of text){

        let num = Number(char)
        sum += num
    }

    console.log(`The sum of the digits is:${sum} `)
}

sumOfDigits(["1234"])