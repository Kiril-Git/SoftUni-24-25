function maintainingGuestList(inputArr) {

    let guestsArr = []

    inputArr.forEach((entry) => {

        let [name, ...commandArr] = entry.split(' ')
        let command = commandArr.join(' ')

        if (command === 'is going!') {

            guestsArr.includes(name) ? console.log(name + ' is already in the list!') 
            
            : guestsArr.push(name)
        }
        else if (command === 'is not going!') {

            guestsArr.includes(name) ? (guestsArr = guestsArr.filter((el) => el !== name)) 

           : console.log(name + ' is not in the list!')
        }

    })
    console.log(guestsArr.join('\n'))
}


maintainingGuestList (
    ['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'] )


    
    //      print:   ↓↓↓
    
    //      John is not in the list!
    //      Allie