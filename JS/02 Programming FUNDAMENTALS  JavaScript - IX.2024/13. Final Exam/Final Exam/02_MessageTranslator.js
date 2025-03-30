function regVerifications (inputArr) {

    inputArr.shift()

    let regex = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/

    for (let el of inputArr) {

            let matches = el.match(regex)

            if (matches) {
                let command = matches[1]
                let message = matches[2]

                let translated = message.split('').map(ch => ch.charCodeAt(0)).join(' ')
                console.log(command + ': ' + translated)
            }
            else {
                console.log('The message is invalid')
            }

    }
}

regVerifications((["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])
    )



    


    // Print:                  Send: 73 118 97 110 105 115 72 101 114 101
    //                         The message is invalid

    //