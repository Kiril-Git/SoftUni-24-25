function generatePass(inputArr) {

    let passStr = inputArr[0] + inputArr[1].toLowerCase()
    let kWord = inputArr[2].toUpperCase().split('')
    let vowels = "aeiou";
    let newPass = []
    let kInd = 0;

    for (let el of passStr) {

        if (vowels.includes(el)) {

            newPass.unshift(kWord[kInd]);

            kInd = (kInd + 1) % kWord.length;
        }
        else{
            newPass.unshift(el)
        }
    }


    console.log('Your generated password is ' +  newPass.join(''))
}

generatePass ([ 'ilovepizza', 'ihatevegetables', 'orange' ] )





// Print:              Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO

//


