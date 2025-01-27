function passwordValidator(input) {

    let valid = true

    function passLength(input) {
        return input.length > 5 && input.length < 11
    }

    function lettersAndDigits(input) {
        return /^[a-zA-Z0-9]+$/.test(input);
    }

    function hasAtLeastTwoDigits(input) {          
        return /\d.*\d/.test(input);                  //  or     const matches = str.match(/\d/g)
    }                                                 //         return matches && matches.length >= 2;
    


    if (!passLength(input)) {
        valid = false
        console.log('Password must be between 6 and 10 characters')
    }

    if (!lettersAndDigits(input)) {
        valid = false
        console.log('Password must consist only of letters and digits')
        }

    if (!hasAtLeastTwoDigits(input)) {
        valid = false
        console.log('Password must have at least 2 digits')
    }

    if (valid) {
        console.log('Password is valid')
    }
}

passwordValidator('MyPass123')