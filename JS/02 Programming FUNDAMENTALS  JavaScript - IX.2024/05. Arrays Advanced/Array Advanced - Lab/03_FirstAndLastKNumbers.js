function arrayManipulator(inputArr) {

    let indexK = inputArr.shift()

    console.log(inputArr.slice(0, indexK).join(' '))
    console.log(inputArr.slice(inputArr.length -indexK).join(' '))

}

arrayManipulator([3, 6, 7, 8, 9] )
