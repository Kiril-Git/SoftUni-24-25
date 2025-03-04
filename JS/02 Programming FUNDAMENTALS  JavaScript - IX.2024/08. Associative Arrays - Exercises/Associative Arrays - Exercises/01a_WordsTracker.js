function manipulatingMap (inputArr) {


    let soughtWords = inputArr.shift().split(' ')
    let wordsObj = {}

    soughtWords.forEach(el => wordsObj[el] = 0)

    for (let el of inputArr) {

        if (wordsObj.hasOwnProperty(el)){
            wordsObj[el] += 1
        }
    }

    Object.entries(wordsObj)
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