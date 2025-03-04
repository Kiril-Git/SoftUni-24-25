function manipulatingMap (inputArr) {


    let soughtWords = inputArr.shift().split(' ')
    let wordsMap = new Map()

    soughtWords.forEach(el => wordsMap.set(el, 0))

    for (let el of inputArr) {

        if (wordsMap.has(el)){
            wordsMap.set(el, wordsMap.get(el) + 1)
        }
    }

    [...wordsMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => {

            console.log(k + ' - ' + v)
    })
    
}


manipulatingMap ([ 'this sentence', 
                        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 
                        'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task' ] )







        // Print:              this - 3
        //                     sentence - 2

        //