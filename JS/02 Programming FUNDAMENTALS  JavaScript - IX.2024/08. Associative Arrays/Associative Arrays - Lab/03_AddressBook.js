function assembleAddressBook (inputArr) {


    let addressBook = {}

    for (let el of inputArr) {

        let [name, address] = el.split(':')

            addressBook[name] = address
        
    }

    let addressBookSorted = Object.keys(addressBook).sort((a, b) => a.localeCompare(b))

    for (let k of addressBookSorted) {
        console.log(k + ' -> ' + addressBook[k])
    }

}

assembleAddressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'] )







// Print:                      Bill -> Ornery Rd
//                             Peter -> Carlyle Ave
//                             Tim -> Doe Crossing

//