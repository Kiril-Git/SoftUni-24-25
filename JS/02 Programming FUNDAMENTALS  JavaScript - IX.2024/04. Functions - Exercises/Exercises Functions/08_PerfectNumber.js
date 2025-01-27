function perfectNumberIdentifier(inputNum) {

    function isPerfectNumber(num) {

        let sum = 0
        for (let i = 1; i <= num /2; i++) {

            if (num % i === 0)  sum += i        // num % i === 0 ? sum += i : sum += 0
        }
        return num === sum
    }


    
    if (isPerfectNumber(inputNum)) {
        console.log('We have a perfect number!')
    }
    else {
        console.log("It's not so perfect.")
    }

}

perfectNumberIdentifier(6)