function pairWordsIdentifier (inputArr) {

    let regex = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g

    let matches = [...inputArr[0].matchAll(regex)]
    let matchCount = 0
    let mirrored = []

    for (let el of matches) {
        matchCount++

        let pair = el[0].match(/[A-Za-z]+/g)

        if (pair[0] === pair[1].split('').reverse().join('')) {

            let temp = pair[0] + ' <=> ' + pair[1]
            mirrored.push(temp)
        }

    }

    if (matchCount === 0) {
        console.log("No word pairs found!")

        if (mirrored.length === 0) {
            console.log("No mirror words!")
        }
    }
    else if (mirrored.length === 0) {
        console.log(matchCount + ' word pairs found!')
        console.log("No mirror words!")
    }
    else {
        console.log(matchCount + ' word pairs found!')
        console.log('The mirror words are: \n' + mirrored.join(', '))
    }
}

pairWordsIdentifier([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )






    // Print:                      5 word pairs found!
    //                             The mirror words are:
    //                             Part <=> traP, leveL <=> Level, sAw <=> wAs

    //