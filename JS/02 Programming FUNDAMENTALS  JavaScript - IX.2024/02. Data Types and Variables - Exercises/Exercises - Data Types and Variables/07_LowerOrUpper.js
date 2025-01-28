function ASCIIvaluesIdentifier (letterInput) {


    let letterCode = letterInput.charCodeAt(0)
    let answer = 'lower-case'

    if (letterCode >= 65 && letterCode <= 90){
        answer = 'upper-case'
    }

    console.log(answer)
}

ASCIIvaluesIdentifier('f')

