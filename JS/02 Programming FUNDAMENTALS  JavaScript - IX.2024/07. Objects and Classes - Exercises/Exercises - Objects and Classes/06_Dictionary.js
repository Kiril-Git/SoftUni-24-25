function json2ArrObjts (inputArr) {


    let dictionary = {}

    for (let el of inputArr) {

        let obj = JSON.parse(el)

        let key = Object.keys(obj)[0]
        let value = obj[key]


        dictionary[key] = value
    }

    let sortedKeys = Object.keys(dictionary).sort()


    for (let key of sortedKeys) {

    console.log(`Term: ${key} => Definition: ${dictionary[key]}`)
    }
}

json2ArrObjts([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )





    

    // Print:              Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
    //                     Term: Bus => Definition: A large motor vehicle carrying passengers by road, ...
    //                     Term: Coffee => Definition: A hot drink made from the roasted and ground ...
    //                     Term: Microphone => Definition: An instrument for converting sound waves into ...
    //                     Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something
    //