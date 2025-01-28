function strConcatinator(strInput, iters) {



return Array(iters).fill(strInput).join('') 
}



const concatStr = strConcatinator('abc', 3)
console.log(concatStr)