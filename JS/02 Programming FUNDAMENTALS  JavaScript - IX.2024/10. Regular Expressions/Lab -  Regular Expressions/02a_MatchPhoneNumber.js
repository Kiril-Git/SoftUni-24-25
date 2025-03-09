function matchPhoneNumesByReg (inputArr) {


    let regex = /\+359([- ])2\1\d{3}\1\d{4}\b/g
    let matches = inputArr[0].match(regex) || []





    console.log(matches.join(', '))
}

matchPhoneNumesByReg(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])






// Print:          +359 2 222 2222, +359-2-222-2222

//