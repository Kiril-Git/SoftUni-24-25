function loginVerification(input) {


    let username = input[0]
    let password = username.split("").reverse().join("")
    let counter = 0

    for (let i = 1; i < input.length; i++) {

        let temp = input[i]

        if (temp === password) {
            console.log("User " + username + " logged in.")
            return
        }
        else{
            counter++
            if (counter === 4) {
                console.log("User " + username + " blocked!")
                return
            }
            else {
                console.log("Incorrect password. Try again.")

            }
        }
    }
}

loginVerification(['sunny','rainy','cloudy','sunny','not sunny']) 