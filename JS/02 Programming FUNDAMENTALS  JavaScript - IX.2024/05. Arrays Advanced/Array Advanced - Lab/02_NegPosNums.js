function arrayManipulator(inputArr) {

let preAppendedArr_lol = []

for (let el of inputArr) {

    let temp = +el

    temp < 0 ? preAppendedArr_lol.unshift(temp) : preAppendedArr_lol.push(temp)
}


return preAppendedArr_lol.join('\n')
}

console.log(arrayManipulator(['3', '-2', '0', '-1']))
