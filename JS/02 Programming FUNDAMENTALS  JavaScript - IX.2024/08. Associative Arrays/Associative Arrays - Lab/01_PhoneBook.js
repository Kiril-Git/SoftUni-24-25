function phoneBookModifier(inputArr) {


    let phoneBook = {}

    for (let el of inputArr) {

        let [name, phoneNum] = el.split(' ')
        phoneBook[name] = phoneNum

    }

    for (let key in phoneBook) {
        console.log(key + ' -> ' + phoneBook[key])
    }
}

phoneBookModifier(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'] )




// Print:          Tim -> 0876566344
//                 Peter -> 0877547887
//                 Bill -> 0896543112

//