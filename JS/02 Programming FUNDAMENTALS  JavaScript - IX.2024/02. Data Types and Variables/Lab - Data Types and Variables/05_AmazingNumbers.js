function amazingNumIdentifier (num) {

let splitedNum = num.toString().split('')
let sum = 0

for (let i = 0; i < splitedNum.length; i++) {

    let temp = Number(splitedNum[i])
    sum += temp
}

let result = sum.toString().includes('9') 


console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`)
}

amazingNumIdentifier (1233)

