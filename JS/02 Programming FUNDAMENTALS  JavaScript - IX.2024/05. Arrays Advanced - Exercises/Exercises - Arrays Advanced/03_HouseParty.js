function maintainingGuestList(inputArr) {

    let guestsArr = []

    for (let el of inputArr) {

        let commandArr = el.split(' ')
        let name = commandArr.shift()
        let command = commandArr.join(' ')

        switch (command) {

            case 'is going!':

            if (!guestsArr.includes(name)) {
                guestsArr.push(name)
            }
            else {
                console.log(name + ' is already in the list!')
            }
            break

            case 'is not going!':

            if (guestsArr.includes(name)) {
                let nameInd = guestsArr.indexOf(name)
                guestsArr.splice(nameInd, 1) 

 //  or     guestsArr = guestsArr.filter((el) => el !== name);

            }
            else {
                console.log(name + ' is not in the list!')
            }
            break
        }
    }
    console.log(guestsArr.join('\n'))
}


maintainingGuestList (
    ['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'] )



    //      print:   ↓↓↓
    
    //      John is not in the list!
    //      Allie