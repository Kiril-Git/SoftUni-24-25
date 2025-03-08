function fillTheWords(inputKW, inputT) {


    let kWords = inputKW.split(', ')

    for (let el of kWords) {
        let stars = '*'.repeat(el.length)

        inputT = inputT.replace(stars, el)
    }



    console.log(inputT)
}

fillTheWords('great, learning', 'softuni is ***** place for ******** new programming languages' )




// Print:          softuni is great place for learning new programming languages

//