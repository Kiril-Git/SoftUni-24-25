function calculateFreeSpace (input) {

    let width = Number(input[0]);                   // Width of the apartment in meters
    let length = Number(input[1]);                  // Length of the apartment in meters
    let height = Number(input[2]);                  // Height of the apartment in meters

    let totalFreeSpace = width * length * height;   // Total available space in cubic meters

    let index = 3;                                  // To keep track of the current index of input
    let currentInput = input[index];                // Number of boxes being moved at each step

    let boxesTaken = 0;                             // To keep track of total boxes taken

    while (currentInput !== "Done"){

        let currentBoxes = Number(currentInput)

        boxesTaken += currentBoxes

        if(boxesTaken > totalFreeSpace) {

            console.log(`No more free space! You need ${boxesTaken - totalFreeSpace} Cubic meters more.`)
            return
        }

        index++
        currentInput = input[index];                // Number of boxes being moved at each step

    }
    console.log(`${totalFreeSpace - boxesTaken} Cubic meters left.`)

}

calculateFreeSpace(["10", "10", "2", "20", "20", "20", "20", "122"])