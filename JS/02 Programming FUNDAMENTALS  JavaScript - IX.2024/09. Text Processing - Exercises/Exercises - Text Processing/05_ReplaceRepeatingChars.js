function delRepChars(inputStr) {


    let nonRepsStr = ''
    
    for (let el of inputStr) {

        if (el !== nonRepsStr.at(-1)) {
            nonRepsStr += el
        }
    }


    console.log(nonRepsStr)
}

delRepChars('aaaaabbbbbcdddeeeedssaa')



// Print:      abcdedsa

//