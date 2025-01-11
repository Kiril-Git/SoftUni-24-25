function calculateAccountBalance (input) {

    let balance = 0;                            // To store the total balance in the account
    let index = 0;                              // To keep track of the current index in the input array
    let deposit = input[index]                  // To store the current deposit amount

    while (deposit !== "NoMoreMoney") {

        let temp = Number(deposit)

        if (temp <  0){
            console.log("Invalid operation!")
            break
        }
        else{
            balance += temp
            console.log(`Increase: ${(temp).toFixed(2)}`)
        }
        
        index ++ 
        deposit = input[index]  

    }
    console.log(`Total: ${(balance).toFixed(2)}`)
}

calculateAccountBalance(["120", "45.55", "-150", "20"])

