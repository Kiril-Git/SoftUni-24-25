function printOdsInRange(n) {

    let sum = 0

    for (i = 1; i <= n *2; i++) {

        if(i % 2 != 0) {

            console.log(i)
            sum += i
        }
    }

    console.log('Sum: ' + sum)
}

printOdsInRange(5)