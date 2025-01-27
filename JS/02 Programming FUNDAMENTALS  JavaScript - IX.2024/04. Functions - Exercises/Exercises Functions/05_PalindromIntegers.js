function palindromeIdentifier(inputArr) {

for (let el of inputArr) {

    let temp = el

    let revNum = +temp.toString().split('').reverse().join('')

    console.log(temp === revNum ? true : false)

    }

}

palindromeIdentifier([123,323,421,121])