function assArrManipulator (inputArr) {

    inputArr.pop()
    let iters = inputArr.shift()
    
    let collection = {}

    for (let i = 0; i < iters; i++) {

        let [piece, author, tonality] = inputArr.shift().split('|')
        collection[piece] = {composer: author, key: tonality}
    }


    for (let el of inputArr) {

        let commandArr = el.split('|')
        let command = commandArr[0]
        let pName = commandArr[1]

        let tonality = ''
        let author = ''


        switch (command) {

            case 'Add':
            if (collection[pName]) {
                console.log(`${pName} is already in the collection!`)
            }
            else{
                author = commandArr[2]
                tonality = commandArr[3]
                collection[pName] = {composer: author, key: tonality}
                console.log(`${pName} by ${author} in ${tonality} added to the collection!`)
            }
            break

            case 'Remove':
                if (collection[pName]) {
                    delete collection[pName]
                    console.log(`Successfully removed ${pName}!`)
                }
                else{
                    console.log(`Invalid operation! ${pName} does not exist in the collection.`)
                }
            break

            case 'ChangeKey':
                if (collection[pName]) {
                    tonality = commandArr[2]
                    collection[pName].key = tonality
                    console.log(`Changed the key of ${pName} to ${tonality}!`)
                }
                else{
                    console.log(`Invalid operation! ${pName} does not exist in the collection.`)
                }
            break
        }
    }



    Object.entries(collection).forEach(([key, values]) => {
            console.log(`${key} -> Composer: ${values.composer}, Key: ${values.key}`)
    })
}

assArrManipulator([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )








// Print:                  Sonata No.2 by Chopin in B Minor added to the collection!
//                         Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
//                         Fur Elise is already in the collection!
//                         Successfully removed Clair de Lune!
//                         Changed the key of Moonlight Sonata to C# Major!
//                         Fur Elise -> Composer: Beethoven, Key: A Minor
//                         Moonlight Sonata -> Composer: Beethoven, Key: C# Major
//                         Sonata No.2 -> Composer: Chopin, Key: B Minor
//                         Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor

                                //