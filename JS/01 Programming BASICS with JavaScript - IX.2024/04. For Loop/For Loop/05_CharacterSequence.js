function printCharacters(input) {

    let text = input[0].split("")

    for (let i = 0; i < text.length; i++){

        let char = text[i]

        console.log(char)
    }
}

printCharacters(["ice cream"])

