function matchNamesByReg (inputStr) {

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let matches = inputStr.match(regex)

    // let correctNames = []

    // for (let el of matches) {
    //     correctNames.push(el[0])
    // }



    console.log(matches.join(' '))

}

matchNamesByReg ("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")





// Print:          Ivan Ivanov Test Testov

//