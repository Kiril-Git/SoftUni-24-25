function calculateTicketStatistics(input) {
    let index = 0;
    let currentInput = input[index];

    let student = 0;
    let standard = 0;
    let kid = 0;
    let totalTickets = 0;

    while (currentInput !== "Finish") {
        let movieName = input[index++];
        let capacity = Number(input[index++]);

        let seatsCounter = 0;

        // Process tickets for each movie until "End" or "Finish"
        while (true) {
            currentInput = input[index];

            if (currentInput === "End" || currentInput === "Finish") {
                break; // Break if movie ends or if input finishes
            }

            let ticketType = input[index++];

            // Count the tickets based on their type
            switch (ticketType) {
                case "student":
                    student++;
                    seatsCounter++;
                    break;
                case "standard":
                    standard++;
                    seatsCounter++;
                    break;
                case "kid":
                    kid++;
                    seatsCounter++;
                    break;
            }
        }

        console.log(`${movieName} - ${(seatsCounter / capacity * 100).toFixed(2)}% full.`);
        totalTickets += seatsCounter;

        // Move to the next movie or end the loop
        index++;
        currentInput = input[index];
    }

    // Final output for ticket summary
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

calculateTicketStatistics([
    "Taxi", "10", "standard", "kid", "End", 
    "Scary Movie", "6", "student", "student", 
    "Finish"
]);
