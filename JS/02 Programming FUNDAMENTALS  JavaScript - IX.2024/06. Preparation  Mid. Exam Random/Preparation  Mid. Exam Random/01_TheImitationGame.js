function decript (inputArr) {

    let encriptedMessage = inputArr.shift().split('')
    let commandStr = inputArr.shift() 

    while (commandStr !== 'Decode') {

        let commandArr = commandStr.split('|')
        let command = commandArr[0]
        let el = ''

        switch (command) {

            case 'Move':
                let iters = commandArr[1]

            for (let i = 0; i < iters; i++) {
                let temp = encriptedMessage.shift()
                encriptedMessage.push(temp)
            }
            break

            case 'Insert':                  //    expect more than a 1-char element  ↓
                let ind = commandArr[1]
                el = commandArr[2];                                 
                encriptedMessage.splice(ind, 0, ...el.split(''));

            break

            case 'ChangeAll':
                el = commandArr[1]
                let replacement = commandArr[2]

                for (let i = 0; i < encriptedMessage.length; i++) {

                    let temp = encriptedMessage[i]

                    if (temp === el) {
                        encriptedMessage[i] = replacement
                    }
                }
            break
        }
        commandStr = inputArr.shift()
    }


    console.log('The decrypted message is: ' + encriptedMessage.join(''))
}

decript([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode', ] )





//  Print:          The decrypted message is: howareyou?
//