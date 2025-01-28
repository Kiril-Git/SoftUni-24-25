function maxSequenceIdentifier (inputArr) {

    let index = 0
    let els = 0

    let sequenceArr = []

    for (let i = inputArr.length -1; i >= 0 ; i--) {

        let num = +inputArr[i]
        let reps = 0

        for (let j = i; j >= 0; j--) {

            let temp = +inputArr[j]

            if (temp === num ){
                reps++
            }
            else {
                break
            }
        }
        if (reps >= els) {
            index = i
            els = reps
        }
    }

    for (let i = index; i > index -els; i--) {

        sequenceArr.push(inputArr[i])
    }



    console.log(sequenceArr.join(' '))
}

maxSequenceIdentifier([4, 4, 4, 4])

