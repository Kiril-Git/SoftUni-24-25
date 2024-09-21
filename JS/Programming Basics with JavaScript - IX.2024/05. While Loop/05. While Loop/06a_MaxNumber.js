function findMaxNumber(input) {
    let index = 0;
    let currentNum = input[index];
    let maxNum = Number.MIN_SAFE_INTEGER;  // Initialize to the smallest possible value

    while (currentNum !== "Stop") {
        let temp = Number(currentNum);

        if (temp > maxNum) {
            maxNum = temp;
        }

        index++;
        currentNum = input[index];
    }

    console.log(maxNum);
}

findMaxNumber(["-10", "20", "-30", "Stop"]);
