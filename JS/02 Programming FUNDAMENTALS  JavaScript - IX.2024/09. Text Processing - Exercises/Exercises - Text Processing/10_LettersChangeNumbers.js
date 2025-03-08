function asciiPosOperations (inputStr) {

    let stArr = inputStr.split(/\s+/)
    let total = 0

    for (let el of stArr) {

        let left = el[0]
        let right = el.slice(-1)
        let num = +el.slice(1, -1)
        
        let sum = 0
        let pos = 0

        if (left >= 'A' && left <= 'Z') {

            pos = left.charCodeAt(0) -64
            sum = num / pos
        }
        else if (left >= 'a' && left <= 'z'){

            pos = left.charCodeAt(0) -96
            sum = num * pos        
        }


        if (right >= 'A' && right <= 'Z') {

            pos = right.charCodeAt(0) -64
            sum -= pos
        }
        else if (right >= 'a' && right <= 'z'){

            pos = right.charCodeAt(0) -96
            sum += pos        
        }

        total += sum
    }



    console.log(total.toFixed(2))
}

asciiPosOperations('A12b s17G')


