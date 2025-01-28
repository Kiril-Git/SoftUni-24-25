function ASCIIvaluesIdentifier (ch1, ch2, ch3) {


    let charsArr = ''
    let valuesArr = ''

    charsArr += ch3
    charsArr += ch2
    charsArr += ch1


    for (let i = 0; i < charsArr.length; i++) {

        let temp = charsArr[i]
        let letterCode = temp.charCodeAt(0)
        valuesArr += letterCode + ' '
    }


    console.log(charsArr)
    console.log(valuesArr)
}

ASCIIvaluesIdentifier('%', '2', 'o' )

