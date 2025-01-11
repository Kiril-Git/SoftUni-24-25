function calculateTicketStatistics(input) {

    let index = 0
    let currentInput = input[index]

    let student = 0
    let standard = 0
    let kid = 0
    let totalTickets = 0

    while (currentInput !== "Finish"){

        let movieName = input[index++]
        let capacity = Number(input[index++])

        let seatsCounter = 0

        while (currentInput !== "End" && currentInput !== "Finish"){

            let ticketType = input[index]

            switch(ticketType) {
                case "student":
                    student++
                    seatsCounter++
                    break

                case "standard":
                    standard++
                    seatsCounter++
                    break

                case "kid":
                    kid++
                    seatsCounter++
                    break
            }
            if( seatsCounter >= capacity){
                break
            }
            
            index++
            currentInput = input[index]
        }
        console.log(`${movieName} - ${(seatsCounter/capacity * 100).toFixed(2)}% full.`)

        totalTickets += seatsCounter

        if (currentInput === "Finish"){
            break
        }
        index++
        currentInput = input[index]
    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(student/totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standard/totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kid/totalTickets * 100).toFixed(2)}% kids tickets.`)

}

calculateTicketStatistics(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])

