function manipulatingObj (inputArr) {

let resourcesMap = new Map()

for (let i = 0; i < inputArr.length; i +=2) {

    let resource = inputArr[i]
    let quantity = +inputArr[i +1]

    if (!resourcesMap.has(resource)) {
        resourcesMap.set(resource, 0)
    }

    resourcesMap.set(resource, resourcesMap.get(resource) + quantity)
}


for (let [resource, quantity] of resourcesMap) {
    console.log(resource + ' -> ' + quantity)
    }

}

manipulatingObj ([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ] )




// Print:              gold -> 170
//                     silver -> 10
//                     copper -> 17

//