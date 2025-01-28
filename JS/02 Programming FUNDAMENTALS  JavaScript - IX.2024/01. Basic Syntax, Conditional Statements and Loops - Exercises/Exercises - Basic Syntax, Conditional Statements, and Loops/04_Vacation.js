function vacationCostCalculator(groupSize, category, day) {

    let total = 0

    switch (day) {

        case 'Friday':
            if (category === "Students") {
                total = groupSize * 8.45
                if (groupSize >= 30) {
                    total *= 0.85
                }
            }
            else if (category === "Business") {
                if (groupSize >= 100) {
                    groupSize -= 10
                }
                total = groupSize * 10.9
            }
            else if (category === "Regular") {
                total = groupSize * 15
                if (groupSize >= 10 && groupSize <= 20) {
                    total *= 0.95
                }
            }

        break

        case 'Saturday':
            if (category === "Students") {
                total = groupSize * 9.8
                if (groupSize >= 30) {
                    total *= 0.85
                }
            }
            else if (category === "Business") {
                if (groupSize >= 100) {
                    groupSize -= 10
                }
                total = groupSize * 15.6
            }
            else if (category === "Regular") {
                total = groupSize * 20
                if (groupSize >= 10 && groupSize <= 20) {
                    total *= 0.95
                }
            }

        break

        case 'Sunday':
            if (category === "Students") {
                total = groupSize * 10.46
                if (groupSize >= 30) {
                    total *= 0.85
                }
            }
            else if (category === "Business") {
                if (groupSize >= 100) {
                    groupSize -= 10
                }
                total = groupSize * 16
            }
            else if (category === "Regular") {
                total = groupSize * 22.5
                if (groupSize >= 10 && groupSize <= 20) {
                    total *= 0.95
                }
            }

        break
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}

vacationCostCalculator(40, "Regular", "Saturday" )

