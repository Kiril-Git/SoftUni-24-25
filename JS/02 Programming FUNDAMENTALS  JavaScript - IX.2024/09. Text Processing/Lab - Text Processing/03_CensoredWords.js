function strManipulations (inputStr, kWord) {


    let newStr = inputStr.split(kWord).join('*'.repeat(kWord.length))


    console.log(newStr)
}

strManipulations ('Find the hidden word', 'hidden')





// Print:          Find the ****** word

//