function arrayRotation(inputArr, rots) {



for ( let i = 0; i < rots; i++) {

    let temp = inputArr.shift()

    inputArr.push(temp)
}


console.log(inputArr.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2)

