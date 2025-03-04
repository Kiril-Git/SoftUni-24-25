function manipulatingObj (inputArr) {

let resourcesObj = {}

for (let i = 0; i < inputArr.length; i +=2) {

    let resource = inputArr[i]
    let quantity = +inputArr[i +1]

    if (!resourcesObj[resource]) {
        resourcesObj[resource] = 0
    }

    resourcesObj[resource] += quantity
}


for (let el in resourcesObj) {
    console.log(el + ' -> ' + resourcesObj[el])
    }

}

manipulatingObj ([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ] )




// Print:              gold -> 170
//                     silver -> 10
//                     copper -> 17

//