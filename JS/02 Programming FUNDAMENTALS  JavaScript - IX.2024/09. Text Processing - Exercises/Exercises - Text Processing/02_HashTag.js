function hashTagAlphaLocator (inputStr) {

    let textArr = inputStr.split(' ')

    for (let el of textArr) {


        if(/^#[A-Za-z]+$/.test(el)){

            console.log(el.slice(1))
        }
    }


    
}

hashTagAlphaLocator('Nowadays everyone uses # to tag a #special word in #socialMedia')