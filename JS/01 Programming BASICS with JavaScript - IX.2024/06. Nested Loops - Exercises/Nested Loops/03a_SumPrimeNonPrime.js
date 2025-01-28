function calculatePrimeAndNonPrimeSums(input) {

    let index = 0;
    let currentInput = input[index];

    let sumPrimes = 0;
    let sumNonPrimes = 0;

    while (currentInput !== "stop") {

        let num = Number(currentInput);

        if (num < 0) {
            console.log(`Number is negative.`);
        } 
        else if (num === 1) {
            sumNonPrimes += num;
        } 
        else if (num === 2) {
            // 2 is a prime number
            sumPrimes += 2;
        } 
        else if (num % 2 === 0) {
            // Even numbers (greater than 2) are non-prime
            sumNonPrimes += num;
        } 
        else {
            // Check for prime numbers greater than 2 (odd numbers)
            let isNonPrime = false;
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) {
                    // If divisible by any number, it's non-prime
                    sumNonPrimes += num;
                    isNonPrime = true;
                    break;
                }
            }
            // If it was not divisible by any number, it is a prime
            if (!isNonPrime) {
                sumPrimes += num;
            }
        }

        index++;
        currentInput = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrimes}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimes}`)
}

calculatePrimeAndNonPrimeSums(["3", "9", "0", "7", "19", "4", "stop"])
