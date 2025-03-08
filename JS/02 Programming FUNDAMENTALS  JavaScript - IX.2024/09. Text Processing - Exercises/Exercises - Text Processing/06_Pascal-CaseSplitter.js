function pascalCaseSplitter (inputStr) {

    let words = inputStr.match(/[A-Z][a-z]*/g)






    console.log(words.join(', '))
}

pascalCaseSplitter('S6plitMeIfYouCanHaHaYouCantOrYouCan')



// Print:              Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

//