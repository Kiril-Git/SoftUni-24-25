function manipulatingMap (inputArr) {

    let belejnikMap = new Map()

    for (let el of inputArr) {

        let [student, ...grades] = el.split(' ')
        grades = grades.map(Number)

        if (belejnikMap.has(student)) {
            belejnikMap.get(student).push(...grades)
        }
        else {
            belejnikMap.set(student, grades)
        }
    }

    
    [...belejnikMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([student, grades]) => {
            let avgGrade = (grades.reduce((acc, el) => acc + el, 0) / grades.length).toFixed(2)
                console.log(student + ': ' + avgGrade)
        })

}

manipulatingMap (['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'] )






// Print:                  Lilly: 5.25
//                         Tammy: 3.00
//                         Tim: 5.75

//