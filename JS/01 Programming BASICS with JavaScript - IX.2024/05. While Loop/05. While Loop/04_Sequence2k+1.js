function printSequence2kPlus1 (input) {

    let n = Number(input[0]);           // The input number 'n', the upper limit for the sequence
    let sum = 1

    while (sum <= n) {

        console.log(sum)

        sum *= 2
        sum += 1
    }
}

printSequence2kPlus1(["17"])