function charsRangePrinter(firstCh, secondCh) {

    let start = Math.min(secondCh.charCodeAt(0), firstCh.charCodeAt(0))
    let end = Math.max(secondCh.charCodeAt(0), firstCh.charCodeAt(0))


    let charArr = Array.from({length: end - start -1}, (_, i) => String.fromCharCode(start + i +1))



    console.log(charArr.join(' ')) 
}

charsRangePrinter('C', '#' )

