function barcodeIdentifier (inputArr) {

    inputArr.shift()
    let regex = /(^|(?<=\s))@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/g


        for (let el of inputArr) {

            if (el.match(regex)) {

                let productGroup = ''
                for (let ch of el) {

                    if (!isNaN(ch)) {
                        productGroup += ch
                    }
                }
                if (productGroup !== '') {
                    console.log('Product group: ' + productGroup)
                }
                else{
                    console.log('Product group: 00')
                }
            }
            else {
                console.log('Invalid barcode')
            }
        }
}

barcodeIdentifier(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]) 








// Print:              Product group: 00
//                     Product group: 0
//                     Product group: 46

//