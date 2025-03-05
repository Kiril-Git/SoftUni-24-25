function strManipulations(inputText, kWord) {





    return inputText.toLowerCase().split(kWord.toLowerCase()).length - 1;
}

console.log(strManipulations('softuni is great place for learning new programming languages', 'softuni' )); 




// Print:         1

//

