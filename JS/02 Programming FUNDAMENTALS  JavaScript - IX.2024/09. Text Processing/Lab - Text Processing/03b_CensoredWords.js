function strManipulations (inputStr, kWord) {


let replacement = '*'.repeat(kWord.length)
let newStr = inputStr.replaceAll(kWord, replacement)

    console.log(newStr)
}

strManipulations ('Find the hidden word', 'hidden')




// Print:          Find the ****** word

//

