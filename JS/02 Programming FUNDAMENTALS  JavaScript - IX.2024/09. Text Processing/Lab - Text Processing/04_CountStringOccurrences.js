function strManipulations (inputText, kWord) {

    let regex = new RegExp(`\\b${kWord}\\b`, 'gi')
    let matches = inputText.match(regex)
    return matches ? matches.length : 0


}

console.log(strManipulations('This is a word and it also is a sentence', 'is' ))




