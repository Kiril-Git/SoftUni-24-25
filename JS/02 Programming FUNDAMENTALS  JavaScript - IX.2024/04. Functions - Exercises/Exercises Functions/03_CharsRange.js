function charsRangePrinter(firstCh, secondCh) {

    let start = Math.min(secondCh.charCodeAt(0), firstCh.charCodeAt(0))
    let end = Math.max(secondCh.charCodeAt(0), firstCh.charCodeAt(0))


    let charArr = []

    for (let i = start +1; i < end; i++) {

        charArr.push( String.fromCharCode(i))

    }

    console.log(charArr.join(' ')) 
}

charsRangePrinter('C', '#' )

