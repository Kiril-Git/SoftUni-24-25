function specialNumbersIdentifier(num) {



    for (let i = 1; i <= num; i++) {

        let temp = i
        let strNum = temp.toString().split('')
        let sum = 0
        let special = 'False'

        for (let j = 0; j < strNum.length; j++) {

            let currentNum = strNum[j]
            sum += Number(currentNum)
            
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            special = 'True'
        }

        console.log(temp + ' -> ' + special)
    }
}

specialNumbersIdentifier(20)