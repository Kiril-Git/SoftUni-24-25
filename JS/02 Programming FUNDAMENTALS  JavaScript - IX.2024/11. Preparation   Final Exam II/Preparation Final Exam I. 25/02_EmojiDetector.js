function regZada4ka(inputArr) {

    let text = inputArr[0]

    let digits = text.replace(/\D/g, '').split('').map(Number)
    let threshold = digits.reduce((acc, el) => acc * el, 1)

    let regex = /(\*{2}|:{2})([A-Z][a-z]{2,})\1/g
    let matches = text.matchAll(regex)

    let coolArr = []
    let counter = 0

    for (let el of matches) {
        let sum = 0
        counter++

        for (let ch of el[2]) {
            sum += ch.charCodeAt(0)
        }

        if (sum >= threshold) {
            coolArr.push(el[0])
        }
    }



    console.log(`Cool threshold: ${threshold}`)
    console.log(`${counter} emojis found in the text. The cool ones are:`)
    console.log(coolArr.join('\n'))
}

regZada4ka((["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]))







// Print:                  Cool threshold: 540
//                         4 emojis found in the text. The cool ones are:
//                         ::Smiley::
//                         **Tigers**
//                         ::Mooning::

//