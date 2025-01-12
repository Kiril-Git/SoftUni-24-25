function printOdsInRange(n) {

    let counter = 1
    let i = 1
    let sum = 0

    while (counter <= n) {

        if(i % 2 != 0) {

            console.log(i)
            sum += i
            counter++
        }
        
        i++
    }

    console.log('Sum: ' + sum)
}

printOdsInRange(5)