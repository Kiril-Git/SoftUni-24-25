function printReversedHalves (inputStr) {

    let midInd = inputStr.length / 2

    let firstHalf = inputStr.slice(0, midInd).split('').reverse().join('')
    let secondHalf = inputStr.slice(midInd).split('').reverse().join('')



    console.log(firstHalf)
    console.log(secondHalf)

    
}

printReversedHalves('tluciffiDsIsihTgnizamAoSsIsihT')  





// Print:          ThisIsDifficult
//                 ThisIsSoAmazing

//