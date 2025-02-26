
[a, b, ...rest] = [10, 20, 30, 40, 50, 60]

// console.log(rest)


function phoneBookModifier(inputArr) {


    let phoneBook = {}

    for (let el of inputArr) {

        let [name, phoneNum] = el.split(' ')
        phoneBook[name] = phoneNum

    }

    // let entrySorted = Object.entries(phoneBook).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

    let sortedKeys = Object.keys(phoneBook).sort((a, b) => a.localeCompare(b))


    for (let key of sortedKeys) {
        console.log(key + ' -> ' + phoneBook[key])
    }



    // for (let [key, val] of entrySorted) {
    //     console.log(key + ' -> ' + val)
    // }
}


phoneBookModifier(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'] )


console.log('M A P ↓')



let map = new Map()

map.set('Donga', 23)
map.set('Buzema', 23)
map.set('shepard', 13)

if (map.has('shepard')) {
    map.delete('shepard')       //  Defensive programming approach. 
}


console.log(map)
console.log(map.get('Donga'))

for (let el of map) {

    console.log(el[0] + ' ' + el[1])
}



