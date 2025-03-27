function strManipulations (inputArr) {

    inputArr.pop()
    let username = inputArr.shift()

    for (let el of inputArr) {

        let commandArr = el.split(' ')
        let command = commandArr[0]
        let ch = ''

        switch (command) {

            case 'Letters':
                let casing = commandArr[1]

                switch (casing) {
                    case 'Lower':
                        username = username.toLowerCase()
                    break

                    case 'Upper':
                        username = username.toUpperCase()
                    break
                }
                console.log(username)
            break

            case 'Reverse':
                let ind = +commandArr[1]
                let endInd = +commandArr[2]

                if (ind >= 0 && ind <= endInd && endInd < username.length) {

                    let subStr = username.slice(ind, endInd +1).split('').reverse().join('')
                    console.log(subStr)
                }
                break

                case 'Substring':

                if (username.includes(commandArr[1])) {
                    username = username.replace(commandArr[1], '')
                    console.log(username)
                }
                else {
                    console.log(`The username ${username} doesn't contain ${commandArr[1]}.`)
                }
            break

            case 'Replace':
                ch = commandArr[1]
                username = username.split(ch).join('-')
                console.log(username)
            break

            case 'IsValid':
                ch = commandArr[1]
                if (username.includes(ch)) {
                    console.log('Valid username.')
                }
                else {
                    console.log(`${ch} must be contained in your username.`)
                }
            break
        }
    }



}

strManipulations(["John",
    "Letters Lower",
    "Substring SA",
    "IsValid @",
    "Registration"]
    )







    // Print:              john
    //                     The username john doesn't contain SA.
    //                     @ must be contained in your username.

    //