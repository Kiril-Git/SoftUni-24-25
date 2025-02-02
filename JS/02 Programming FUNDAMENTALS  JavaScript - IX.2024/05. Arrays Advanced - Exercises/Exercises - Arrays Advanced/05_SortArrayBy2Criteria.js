function twoCriteriaSorting (inputArr) {



inputArr.sort ((a, b) => {
    
    let lengthComparison = a.length - b. length

    if ( lengthComparison !== 0) {

        return lengthComparison
    }

    return a.localeCompare(b)
})


console.log(inputArr.join('\n'))
}

twoCriteriaSorting (['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])


// print:   ↓↓↓

// Jack
// Isacc
// George
// Theodor
// Harrison