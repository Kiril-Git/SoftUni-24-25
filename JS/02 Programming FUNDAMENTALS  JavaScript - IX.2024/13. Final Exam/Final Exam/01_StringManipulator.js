function strManipulator (inputArr) {

    inputArr.pop()
    let text = inputArr.shift()

    for (let el of inputArr) {

        let commandArr = el.split(' ')
        let command = commandArr[0]
        let subStr = ''

        switch (command) {

            case 'Translate':
                subStr = commandArr[1]
                let replacement = commandArr[2]

                text = text.split(subStr).join(replacement)
                console.log(text)
            break

            case 'Includes':
                subStr = commandArr[1]
                
                if (text.includes(subStr)) {
                    console.log('True')
                }
                else {
                    console.log('False')
                }
            break

            case 'Start':
                subStr = commandArr[1]

                if (text.startsWith(subStr)) {
                    console.log('True')
                }
                    else {
                        console.log('False')
                    }
            break

            case 'Lowercase':
                text = text.toLowerCase()
                console.log(text)
            break

            case 'FindIndex':
                subStr = commandArr[1]
                console.log(text.lastIndexOf(subStr))
            break

            case 'Remove':
                let ind = +commandArr[1]
                let count = +commandArr[2]

                text = text.slice(0, ind) + text.slice(ind + count)
                console.log(text)
            break
        }
    }
}

strManipulator(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])
    








    // Print:              *S0ftUni is the B3St Plac3**
    //                     2
    //                     False
    //                     *s0ftuni is the b3st plac3**
    //                     21
    //                     *sis the b3st plac3**

    //