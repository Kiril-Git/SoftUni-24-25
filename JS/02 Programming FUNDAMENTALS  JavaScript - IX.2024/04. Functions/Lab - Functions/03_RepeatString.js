function strConcatinator(strInput, iters) {

    let result = ''

for (let i = 0; i < iters; i++){

     result += strInput

}
return result
}



const concatStr = strConcatinator('abc', 3)
console.log(concatStr)