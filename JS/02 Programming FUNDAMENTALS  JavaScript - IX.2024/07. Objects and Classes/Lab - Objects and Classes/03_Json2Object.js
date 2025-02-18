function printJson2Object(inputStr) {

    let obj = JSON.parse(inputStr)

    for(let key in obj) {

        console.log(key + ': ' + obj[key])
    }

}

printJson2Object('{"name": "George", "age": 40, "town": "Sofia"}')







// print:              name: George
//                     age: 40
//                     town: Sofia
//