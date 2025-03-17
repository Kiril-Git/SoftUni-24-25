function passwordGenerator (inputArr) {

    let rawPass = inputArr.shift()
    let commandStr = inputArr.shift()


    while (commandStr !== 'Done') {

        let commandArr = commandStr.split(' ') 
        let command = commandArr[0]

        switch (command) {

            case 'TakeOdd':
            let newPass = ''

            for (let i = 0; i < rawPass.length; i++) {

                if (i % 2 !== 0) {
                    newPass += rawPass[i]
                }
            }
            rawPass = newPass
            console.log(rawPass)
            break

            case 'Cut':
                let ind = +commandArr[1]
                let count = +commandArr[2]

                rawPass = rawPass.slice(0, ind) + rawPass.slice(ind + count);
                console.log(rawPass)
            break

            case 'Substitute':
                let subStr = commandArr[1]
                let substitute = commandArr[2]

                if (rawPass.includes(subStr)) {             //      replaceAll !== judge
                    while (rawPass.includes(subStr)) {
                    rawPass = rawPass.replace(subStr, substitute)
                    }
                    console.log(rawPass)
                }
                else {
                    console.log('Nothing to replace!')
                }
            break
        }
        commandStr = inputArr.shift()
    }
    

    console.log('Your password is: ' +  rawPass)

}

passwordGenerator((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
    )
