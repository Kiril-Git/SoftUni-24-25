function fillTheWords(inputArr) {



    let kWords = inputArr.pop().sort((a, b) => b.length - a.length)
    let text = inputArr[0]


    for (let el of kWords) {
        let stars = '_'.repeat(el.length)

        text = text.replace(stars, el)
    }



    console.log(text)
    }



fillTheWords (['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
    )







        // print:          Hi, grandma! I'm so glad to write to you. During the winter vacation, so amazing things happened. ...

    //