function fillTheWords(inputKW, inputT) {


    let kWords = inputKW.split(', ')
    let textArr = inputT.split(' ')


    for (let el of kWords) {
        let stars = '*'.repeat(el.length)

        for (let i = 0; i < textArr.length; i++) {

            if (textArr[i] === stars) {
                textArr[i] = el
            }
        }


    }



    console.log(textArr.join(' '))
}

fillTheWords('great, learning', 'softuni is ***** place for ******** new programming languages' )




// Print:          softuni is great place for learning new programming languages

//