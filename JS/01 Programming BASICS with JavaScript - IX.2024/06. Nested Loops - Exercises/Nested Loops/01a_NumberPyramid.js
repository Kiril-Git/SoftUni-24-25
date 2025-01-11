function printNumberPyramid(n) {
    let col = 0;
    let i = 1;

    while (i <= n) {
        col++;
        let line = "";                          // Initialize the line to an empty string

        for (let j = 1; j <= col; j++) {
            line += i + " ";                    // Add the current number to the line with a space
            i++;

            if (i > n) {
                break;
            }
        }

        console.log(line.trim());               // Print the current row and remove trailing space
    }
}

printNumberPyramid(12);
