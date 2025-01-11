function printDivisibleBy9 (input) {

    let num1 = Number(input[0])
    let num2 = Number(input[1])

    let sum = 0
    let ourString = ""

    for (let i = num1; i <= num2; i++) {

        if(i % 9 === 0) {

            sum += i

            ourString += i.toString() + "\n"
        }
    }
    console.log(`The sum: ${sum}`)
    console.log(ourString)
}

printDivisibleBy9(["100", "200"])