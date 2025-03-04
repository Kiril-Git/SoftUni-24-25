function manipulatingObj(inputArr) {

    let emplsIDsObj = {}

    for (let el of inputArr) {

        let [compName, emplId] = el.split(' -> ')

        if (!emplsIDsObj[compName]) {
            emplsIDsObj[compName] = []
        }

        if (!emplsIDsObj[compName].includes(emplId)) {
            emplsIDsObj[compName].push(emplId)
        }
    }



    Object.entries(emplsIDsObj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([k, v]) => {

            console.log(k + '\n -- ' + v.join('\n -- '))
    })
    
}

manipulatingObj([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ] )





// Print:          HP
//                 -- BB12345
//                 Microsoft
//                 -- CC12345
//                 SoftUni
//                 -- AA12345
//                 -- BB12345

//