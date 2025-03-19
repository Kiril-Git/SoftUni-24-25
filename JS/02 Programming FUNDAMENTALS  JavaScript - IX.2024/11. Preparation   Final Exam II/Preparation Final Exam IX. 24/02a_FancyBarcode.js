function barcodeIdentifier(inputArr) {

    inputArr.shift(); 
    
    let regex = /^@#+([A-Z][A-Za-z\d]{4,}[A-Z])@#+$/;

    inputArr.forEach(el => {
        let match = el.match(regex);
        
        if (match) {                        //    ↓                     \D → Matches any non-digit character
            let productGroup = match[1].replace(/\D/g, '') || '00';
            console.log(`Product group: ${productGroup}`);
        } 
        else {
            console.log('Invalid barcode');
        }
    });
}

barcodeIdentifier(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);








// Print:              Product group: 00
//                     Product group: 0
//                     Product group: 46

//
