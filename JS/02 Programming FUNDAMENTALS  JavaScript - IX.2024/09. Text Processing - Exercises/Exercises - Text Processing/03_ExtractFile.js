function extractFileInfo(inputStr) {

    let slashInd = inputStr.lastIndexOf('\\') +1
    let dotInd = inputStr.lastIndexOf('.')

    let fileName = inputStr.slice(slashInd, dotInd)
    let fileExt = inputStr.slice(dotInd +1)


    console.log('File name: ' + fileName)
    console.log('File extension: ' + fileExt)

}

extractFileInfo('C:\\Internal\\training-internal\\Template.pptx')





// Print:          File name: Template
//                 File extension: pptx

//