function containsWord(kWord, inputText) {


    let textArr = inputText.toLowerCase().split(' ')

    if (textArr.includes(kWord.toLowerCase())) {
        console.log(kWord)
    }
    else {
        console.log(kWord + ' not found!')

    }

    
}


containsWord('javascript', 'JavaScript is the best programming language' )





// Print:      javascript

//


