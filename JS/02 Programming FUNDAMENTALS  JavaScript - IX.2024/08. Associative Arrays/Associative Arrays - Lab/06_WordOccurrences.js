function manipulatingMap (inputArr) {


    let wordsMap = new Map()

    for (let el of inputArr) {

        if (!wordsMap.has(el)) {
            wordsMap.set(el, 0)
        }
        wordsMap.set(el, wordsMap.get(el) + 1)
    }



    [...wordsMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .forEach(([k, v]) => {
            console.log(k + ' -> ' + v + ' times')  
            
                // console.log(`${k} -> ${v} time${v > 1 ? "s" : ""}`)
    })                         


}

manipulatingMap (["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", 
                                                "And", "finally", "the", "third", "sentence"])









// print:                  sentence -> 3 times
//                         Here -> 2 times
//                         is -> 2 times
//                         the -> 2 times
//                         first -> 1 times
//                         another -> 1 times
//                         And -> 1 times
//                         finally -> 1 times
//                         third -> 1 times       

//