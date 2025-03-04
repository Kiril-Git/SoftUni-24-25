function manipulatingMap (inputStr) {
    let inputArr = inputStr.toLowerCase().split(' ')

    let keyMaterials = new Map()
    let junkMaterials = new Map()

    keyMaterials.set('shards', 0)
    keyMaterials.set('fragments', 0)
    keyMaterials.set('motes', 0)

    let material = ''

    for (let i = 0; i < inputArr.length; i += 2) {

        let quantity = +inputArr[i]
        material = inputArr[i +1]

        if (keyMaterials.has(material)) {
        keyMaterials.set(material, keyMaterials.get(material) + quantity)

        if (keyMaterials.get(material) >= 250) {
            keyMaterials.set(material, keyMaterials.get(material) -250)

            switch (material) {

                case 'shards':
                    console.log('Shadowmourne obtained!')
                break
                case 'fragments':
                    console.log('Valanyr obtained!')
                break
                case 'motes':
                    console.log('Dragonwrath obtained!')
                break
            }
            break
        }
        }
        else {
            if (!junkMaterials.has(material)) {
                junkMaterials.set(material, 0)
            }
            junkMaterials.set(material, junkMaterials.get(material) + quantity)
        }
    }



    let sortedMaterials = [...keyMaterials.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

    for (let [material, quantity] of sortedMaterials) {
        console.log(`${material}: ${quantity}`)
    }

    [...junkMaterials.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([k, v]) => {
            console.log(k + ': ' + v)  
                }) 

}

manipulatingMap ('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')






// Print:              Valanyr obtained!
//                     fragments: 5
//                     shards: 5
//                     motes: 3
//                     leathers: 6
//                     stones: 5

//