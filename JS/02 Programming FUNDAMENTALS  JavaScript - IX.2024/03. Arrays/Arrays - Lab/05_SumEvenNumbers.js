function sumEvenNumbers (inputArr) {


    let sum =0

    for (let el of inputArr) {

        let temp = +el

        if (temp % 2 === 0) {
            sum += temp
        }
    }

    console.log(sum)
}

sumEvenNumbers(['1','2','3','4','5','6'])