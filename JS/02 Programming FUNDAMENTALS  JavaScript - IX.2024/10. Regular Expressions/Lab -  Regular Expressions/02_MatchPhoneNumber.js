function matchPhoneNumesByReg (inputArr) {


    let regex = /\+359([- ])2\1\d{3}\1\d{4}\b/g
    let matches = inputArr[0].matchAll(regex)

    let correctNums = []

    for (let el of matches) {
        correctNums.push(el[0])

    }



    console.log(correctNums.join(', '))
}

matchPhoneNumesByReg(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])






// Print:          +359 2 222 2222, +359-2-222-2222

//