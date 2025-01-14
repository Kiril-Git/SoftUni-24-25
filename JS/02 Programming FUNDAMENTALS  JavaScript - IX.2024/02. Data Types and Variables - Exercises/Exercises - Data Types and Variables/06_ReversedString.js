function printStrReversed (input) {

    reversedStr = ''

for (let i = input.length -1; i >= 0 ; i--) {

        let temp = input[i]
        reversedStr += temp

}


console.log(reversedStr)

} 

printStrReversed ('star')