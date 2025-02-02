function twoCriteriaSorting (inputArr) {



inputArr.sort ((a, b) => {
    
    return a.length - b.length || a.localeCompare(b)
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

