function ASCIIvaluesIdentifier (letterInput) {


    //      let letterCode = letterInput.charCodeAt(0)

    let answer = 'lower-case'

    if (letterInput === letterInput.toUpperCase()){
        answer = 'upper-case'
    }

    console.log(answer)
}

ASCIIvaluesIdentifier('d')

