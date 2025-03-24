function strManipulations(inputArr) {

    inputArr.pop()
    let message = inputArr.shift()

    for (let el of inputArr) {

        let commandArr = el.split(':|:')
        let command = commandArr[0]
        let strInd = commandArr[1]

        switch(command) {

            case 'InsertSpace':

                strInd = +strInd
                message = message.slice(0, strInd) + ' ' + message.slice(strInd)
            break

            case 'Reverse':

                if (message.includes(strInd)) {
                    let revStr = strInd.split('').reverse().join('')
                    message = message.replace(strInd, '')
                    message += revStr
                }
                else {
                    console.log('error')
                    continue
                }
            break

            case 'ChangeAll':
                // message = message.replaceAll(strInd, commandArr[2])
                // message = message.split(strInd).join(commandArr[2])

                let regex = new RegExp(strInd, "g")
                message = message.replace(regex, commandArr[2])
            break
        }
        console.log(message)
    }

    console.log(`You have a new text message: ${message}`)
}


strManipulations([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])







//   Print:                Howare?uoy
//                         Howareyou?
//                         error
//                         How areyou?
//                         How are you?
//                         You have a new text message: How are you?
// 
// 

