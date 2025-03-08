function fillTheWords(inputKW, inputT) {


    let kWords = inputKW.split(', ')

    let placeholders = inputT.match(/\*+/g)


    for (let el of placeholders) {

            let matchingWord = kWords.find(e => e.length === el.length)


            if (matchingWord) {

            inputT = inputT.replace(el, matchingWord)

            kWords.splice(kWords.indexOf(matchingWord), 1)
            }
    }



    console.log(inputT)
}

fillTheWords('great, learning', 'softuni is ***** place for ******** new programming languages' )



// Print:          softuni is great place for learning new programming languages

//