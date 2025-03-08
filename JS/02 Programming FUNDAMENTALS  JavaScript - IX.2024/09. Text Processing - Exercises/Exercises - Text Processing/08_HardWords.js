function fillTheWords(inputArr) {


    let kWords = inputArr.pop()
    let textArr = inputArr[0].split(' ')

    for (let el of kWords) {

        let mask = '_'.repeat(el.length)

        for (let i = 0; i < textArr.length; i++) {

            let temp = textArr[i]

            if (temp === mask) {
                textArr[i] = el
            }
            else if (temp.includes('_')) {

                let punctMark = ''

                for (let j = 0; j < temp.length; j++) {

                    if (temp[j] !== '_') {

                        punctMark = temp[j]
                        temp = temp.slice(0, -1)
                    }
                }
                if (temp === mask) {

                    el += punctMark
                    textArr[i] = el
                }
            }
        }
    }
    console.log(textArr.join(' '))
    }

fillTheWords (['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
    )







    // print:          Hi, grandma! I'm so glad to write to you. During the winter vacation, so amazing things happened. ...

    //