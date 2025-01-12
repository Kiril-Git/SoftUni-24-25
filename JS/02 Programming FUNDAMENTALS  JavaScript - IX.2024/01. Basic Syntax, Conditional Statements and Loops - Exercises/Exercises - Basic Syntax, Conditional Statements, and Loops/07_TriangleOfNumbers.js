function trianglePrinter(num) {

    let singleLine = ''

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {

        singleLine += i + ' '
        }
        console.log(singleLine)
        singleLine = ''
    }

}

trianglePrinter(3)