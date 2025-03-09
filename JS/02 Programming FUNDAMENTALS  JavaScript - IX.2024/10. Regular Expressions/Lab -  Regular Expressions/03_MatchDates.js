function matchDatesByReg (inputArr) {


    let regex = /\b(\d{2})([\/.-])([A-Z][a-z]{2})\2(\d{4})\b/g

    let matches = inputArr[0].matchAll(regex)

    for(let el of matches) {

        console.log(`Day: ${el[1]}, Month: ${el[3]}, Year: ${el[4]}`)
    }




}

matchDatesByReg(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])







// Print:               Day: 13, Month: Jul, Year: 1928
//                      Day: 10, Month: Nov, Year: 1934
//                      Day: 25, Month: Dec, Year: 1937

//