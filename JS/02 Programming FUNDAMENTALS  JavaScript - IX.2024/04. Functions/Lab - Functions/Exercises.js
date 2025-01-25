function certificatePrinter (gradeInput, namesArr) {


    let forename = namesArr[0]
    let surname = namesArr[1]

    if ( gradeInput >= 5) {
        printBorder()

    return `${forename} ${surname}\nVery good (${gradeInput.toFixed(2)})`
    }
    else{
        return 'Student does not qualify'
    }


    
    function printBorder() {
        console.log('~~~-{@}~~~');
        console.log('--   Certificate   --');
        console.log('~~~-  ~---~  ~~~');
    }

}

const serctificateData = certificatePrinter(5.25, ['Peter', 'Carter'])
console.log(serctificateData)
