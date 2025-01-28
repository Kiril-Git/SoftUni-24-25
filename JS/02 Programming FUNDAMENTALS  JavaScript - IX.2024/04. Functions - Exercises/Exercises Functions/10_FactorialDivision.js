function factorialManipulator(n1, n2) {

    function factorial(n) {
        return n === 1 ? 1 : n * factorial(n - 1)
    }

    console.log((factorial(n1) / factorial(n2)).toFixed(2))
}

factorialManipulator(5, 2)

