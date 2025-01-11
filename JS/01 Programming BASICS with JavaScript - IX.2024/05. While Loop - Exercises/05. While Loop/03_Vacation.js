function planVacationSavings (input) {

    const vacationCost = Number(input[0]);          // The amount of money Jessie needs for the vacation
    const initialSavings = Number(input[1]);        // Jessie's initial savings amount
    const SPEND = "spend";                          // The "spend" action when Jessie spends money
    const SAVE = "save";                            // The "save" action when Jessie saves money
    const MAX_SPENDING_DAYS = 5;                    // The maximum number of consecutive days Jessie can spend money

    let index = 2
    let dayType = input[index]
    let daylyMoney = input[index+1]

    let totalSum = initialSavings
    let spendingDaysCounter = 0
    let dayCounter = 0

    while(totalSum < vacationCost){

        let tempMoney = Number(daylyMoney)
        dayCounter++


        if (dayType === SPEND){
            spendingDaysCounter++
            totalSum -= tempMoney
            if (totalSum < 0){
                totalSum = 0
            }
        }
        else if( dayType === SAVE) {
            totalSum += tempMoney
            spendingDaysCounter = 0
        }

        if (spendingDaysCounter === MAX_SPENDING_DAYS){
            console.log(`You can't save the money.`)
            console.log(dayCounter)
            return
        }


        index += 2
        dayType = input[index]
        daylyMoney = input[index+1]
    }

    console.log(`You saved the money for ${dayCounter} days.`)

}

planVacationSavings(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])

