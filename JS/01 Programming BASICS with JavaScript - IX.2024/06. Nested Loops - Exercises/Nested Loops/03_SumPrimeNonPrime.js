function calculatePrimeAndNonPrimeSums(input) {

let index = 0
let currentInput = input[index]

let sumPrimes = 0
let sumNonPrimes = 0

    while(currentInput !== "stop") {

        let num = Number(currentInput)

        if (num < 0) {
            console.log(`Number is negative.`)
        }
        else if (num === 1 || num === 0){
            sumNonPrimes += num
        }
        else if (num === 2) {
            sumPrimes += 2
        }
        else if (num % 2 === 0) {
            sumNonPrimes += num
        }
        else{

            let isPrime = true

        for (let i = 3; i <= Math.sqrt(num); i += 2){

            if(num % i === 0){
                sumNonPrimes += num
                isPrime = false
                break
            }
        }
        if (isPrime){
            sumPrimes += num
        }

    }
        index++
        currentInput = input[index]
    }
    console.log(`Sum of all prime numbers is: ${sumPrimes}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimes}`)

}

calculatePrimeAndNonPrimeSums(["3", "9", "0", "7", "19", "4", "stop"])