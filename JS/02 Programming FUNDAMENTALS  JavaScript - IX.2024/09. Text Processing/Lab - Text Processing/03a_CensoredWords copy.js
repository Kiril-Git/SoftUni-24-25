function strManipulations (inputStr, kWord) {


    let newStr = inputStr.replace(new RegExp(kWord, 'g'), '*'.repeat(kWord.length))

    //     The i flag makes it case-insensitive          ↓
    // let newStr = inputStr.replace(new RegExp(kWord, 'gi'), '*'.repeat(kWord.length))

    console.log(newStr)
}

strManipulations ('Find the hidden word', 'hidden')


// Print:          Find the ****** word

//

