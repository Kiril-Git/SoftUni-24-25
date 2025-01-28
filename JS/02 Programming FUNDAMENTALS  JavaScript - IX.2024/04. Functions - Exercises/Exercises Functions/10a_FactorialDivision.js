function factorialManipulator(n1, n2) {


    function factorial(n) {

        let result = 1
        for (let i = 1; i <= n; i++) {

            result *= i
        }
        return result
    }


    const factorialN1 = factorial(n1)
    const factorialN2 = factorial(n2)

    console.log((factorialN1 / factorialN2).toFixed(2))
}

factorialManipulator(5, 2)

