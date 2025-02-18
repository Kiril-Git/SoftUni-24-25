function printObjectValues (inputStr) {

    let allKeys = Object.keys(inputStr)

    for (let key of allKeys) {
        
        let value = inputStr[key]

        console.log(key + ' -> ' + value)
    }

}

printObjectValues({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" } )





// print:                              name -> Sofia
//                                     area -> 492
//                                     population -> 1238438
//                                     country -> Bulgaria
//                                     postCode -> 1000
//