function findCommonElements (arr1, arr2) {


    for (let i = 0; i < arr1.length; i++) {
        let temp1 = arr1[i]

        for (let j = 0; j < arr2.length; j++) {         //  or       if (arr2.includes(temp1)) {}
            let temp2 = arr2[j]

            if (temp1 === temp2) {
                console.log(temp1)
            }
        }
    }
}

findCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
    )