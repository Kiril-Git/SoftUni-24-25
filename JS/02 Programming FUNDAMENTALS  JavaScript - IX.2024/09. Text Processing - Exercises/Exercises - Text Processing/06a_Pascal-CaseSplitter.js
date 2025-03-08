function pascalCaseSplitter (inputStr) {


    let wordsArr = []
    let wordStr = inputStr[0]
    inputStr = inputStr.slice(1)


    for (i = 0; i < inputStr.length; i++) {

        if (inputStr[i] >= 'A' && inputStr[i] <= 'Z') {

            wordsArr.push(wordStr)
            wordStr = inputStr[i]
        }
        else{
            wordStr += inputStr[i]
        }
    }
    wordsArr.push(wordStr)


    console.log(wordsArr.join(', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')







// Print:              Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

//
