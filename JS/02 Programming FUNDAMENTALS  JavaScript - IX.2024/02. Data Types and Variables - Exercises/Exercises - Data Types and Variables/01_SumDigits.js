function sumDigits(num) {

    
    let strNum = String(num)            // or    let strNum = num.toString().split('')    or num + ''
    let sum = 0

    for (let i = 0; i < strNum.length; i++) {

        let temp = strNum[i]
        sum += Number(temp)
    }

console.log(sum)
}

sumDigits(78)