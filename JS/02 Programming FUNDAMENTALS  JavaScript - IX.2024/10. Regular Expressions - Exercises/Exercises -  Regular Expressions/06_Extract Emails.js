function extractEmailsByReg (inputStr) {

    let textArr = inputStr.split(' ')

    let regex = /\b[a-z0-9A-Z]+(?:[_.-][a-z0-9A-Z]+)*@[a-z]+(?:-[a-z]+)*(?:\.[a-z]+(?:-[a-z]+)*)+\b/g

    for (let el of textArr) {

        let match = el.match(regex)

        if (match) {

            console.log(el)
        }
    }


}

extractEmailsByReg('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk. for more information.')