function delRepChars(inputStr) {






    console.log(inputStr.replace(/(.)\1+/g, '$1'))
}

delRepChars('aaaaabbbbbcdddeeeedssaa')



// Print:      abcdedsa

//