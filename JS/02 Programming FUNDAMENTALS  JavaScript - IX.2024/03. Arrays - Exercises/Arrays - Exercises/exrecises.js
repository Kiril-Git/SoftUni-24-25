function arrManipulator(inputArr) {
    let fieldSize = +inputArr[0];
    let ladybugsStr = inputArr[1].split(' ').map(Number);

    // Initialize the field
    let ladybugArr = Array(fieldSize).fill(0);

    // Place ladybugs
    for (let i = 0; i < ladybugsStr.length; i++) {
        let index = ladybugsStr[i];
        if (index >= 0 && index < fieldSize) {
            ladybugArr[index] = 1;
        }
    }

    // Process commands
    for (let i = 2; i < inputArr.length; i++) {
        let command = inputArr[i].split(' ');

        let takeOffInd = +command[0];
        let direction = command[1];
        let steps = +command[2];
        let landingInd;

        // Skip invalid or empty indexes
        if (takeOffInd < 0 || takeOffInd >= fieldSize || ladybugArr[takeOffInd] !== 1) {
            continue;
        }

        // Remove the ladybug from the starting position
        ladybugArr[takeOffInd] = 0;

        // Handle negative steps by reversing direction
        if (steps < 0) {
            steps = Math.abs(steps);
            direction = direction === 'right' ? 'left' : 'right';
        }

        // Determine landing index and move the ladybug
        if (direction === 'right') {
            for (let j = takeOffInd + steps; j < fieldSize; j += steps) {
                if (ladybugArr[j] === 0) {
                    ladybugArr[j] = 1;
                    break;
                }
            }
        } else if (direction === 'left') {
            for (let j = takeOffInd - steps; j >= 0; j -= steps) {
                if (ladybugArr[j] === 0) {
                    ladybugArr[j] = 1;
                    break;
                }
            }
        }
    }

    console.log(ladybugArr.join(' '));
}

// Example Test Cases
arrManipulator([5, '3', '3 left 2', '1 left -2']); // Output: 0 0 0 1 0
arrManipulator([3, '0 1', '0 right 1', '2 right 1']); // Output: 0 1 0
arrManipulator([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']); // Output: 0 0 0
