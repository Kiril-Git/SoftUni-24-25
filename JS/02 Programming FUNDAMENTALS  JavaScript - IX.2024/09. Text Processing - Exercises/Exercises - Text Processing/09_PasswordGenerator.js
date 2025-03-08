function generatePass(inputArr) {

    let passStr = inputArr[0] + inputArr[1].toLowerCase()
    let kWord = inputArr[2].toUpperCase().split('')
    let vowels = "aeiou";
    let newPass = []

    for (let el of passStr) {

        if (vowels.includes(el)) {
            let temp = kWord.shift()
            kWord.push(temp)

            newPass.unshift(temp)
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



