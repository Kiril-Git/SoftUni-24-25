function assembleAddressBook(inputArr) {

    
    let addressBook = {};

    for (let el of inputArr) {

        let [name, address] = el.split(':');
        addressBook[name] = address;
    }

    Object.entries(addressBook)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}


assembleAddressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'] )







// Print:                      Bill -> Ornery Rd
//                             Peter -> Carlyle Ave
//                             Tim -> Doe Crossing

//