function asciiPosOperations(inputStr) {
    
    let stArr = inputStr.split(/\s+/);
    let total = 0;

    for (let el of stArr) {
        let left = el[0];
        let right = el.slice(-1);
        let num = +el.slice(1, -1);
        let sum = num;

        let leftPos = left.toLowerCase().charCodeAt(0) - 96;
        sum = left === left.toUpperCase() ? sum / leftPos : sum * leftPos;

        let rightPos = right.toLowerCase().charCodeAt(0) - 96;
        sum = right === right.toUpperCase() ? sum - rightPos : sum + rightPos;

        total += sum;
    }

    console.log(total.toFixed(2));
}

asciiPosOperations('A12b s17G'); 




// Output:              330.00

//
