function strManipulations(inputArr) {

    inputArr.pop()
    let key = inputArr.shift()

    for (let el of inputArr) {

        let commandArr = el.split('>>>')
        let command = commandArr.shift()

        switch (command) {

            case 'Contains':
            if ( key.includes(commandArr[0])) {
                console.log(`${key} contains ${commandArr[0]}`)
            }
            else {
                console.log("Substring not found!" )
            }
            break

            case 'Flip':
                let [casing, ind, endInd] = commandArr
                let newCased = ''

                switch(casing) {
                    case 'Upper':
                        newCased = key.slice(ind, endInd).toUpperCase()
                    break

                    case 'Lower':
                        newCased = key.slice(ind, endInd).toLowerCase()
                    break
                }
                key = key.slice(0, ind) + newCased + key.slice(endInd)
                console.log(key)
            break

            case 'Slice':
                let [start, end] = commandArr
                key = key.slice(0, start) + key.slice(end)
                console.log(key)
            break
        }
    }

    console.log('Your activation key is: ' + key)

}

strManipulations(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
    






    // Print:          abghijklmnopqrstuvwxyz
    //                 abgHIJKLMNOPQRstuvwxyz
    //                 abgHIjkLMNOPQRstuvwxyz
    //                 Substring not found!
    //                 Substring not found!
    //                 Your activation key is: abgHIjkLMNOPQRstuvwxyz

    //