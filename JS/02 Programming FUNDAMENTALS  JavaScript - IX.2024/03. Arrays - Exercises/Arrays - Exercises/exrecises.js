function arrManipulator(inputArr) {
    let fieldSize = +inputArr[0];
    let ladybugsStr = inputArr[1].split(" ").map(Number);

    // Initialize the field with 0s
    let ladybugArr = Array(fieldSize).fill(0);

    // Place ladybugs in the field
    ladybugsStr.forEach((index) => {
        if (index >= 0 && index < fieldSize) {
            ladybugArr[index] = 1;
        }
    });

    // Process commands
    for (let i = 2; i < inputArr.length; i++) {
        let [takeOffInd, direction, steps] = inputArr[i].split(" ");
        takeOffInd = +takeOffInd;
        steps = +steps;

        // Skip invalid indexes or if no ladybug is present
        if (
            takeOffInd < 0 ||
            takeOffInd >= fieldSize ||
            ladybugArr[takeOffInd] !== 1
        ) {
            continue;
        }

        // Remove the ladybug from the starting position
        ladybugArr[takeOffInd] = 0;

        // Determine the movement direction
        let landingInd = takeOffInd;
        steps = Math.abs(steps); // Always move forward
        
        while (true) {
            landingInd =
                direction === "right" ? landingInd + steps : landingInd - steps;

            // If the landing index is out of bounds, the ladybug flies away
            if (landingInd < 0 || landingInd >= fieldSize) {
                break;
            }

            // If the landing cell is free, place the ladybug and stop
            if (ladybugArr[landingInd] === 0) {
                ladybugArr[landingInd] = 1;
                break;
            }
        }
    }

    // Print the final state of the field
    console.log(ladybugArr.join(" "));
}

// Example Test Cases
arrManipulator([3, "0 1", "0 right 1", "2 right 1"]); // Output: 0 1 0
arrManipulator([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]); // Output: 0 0 0
arrManipulator([5, "3", "3 left 2", "1 left -2"]); // Output: 0 0 0 1 0
