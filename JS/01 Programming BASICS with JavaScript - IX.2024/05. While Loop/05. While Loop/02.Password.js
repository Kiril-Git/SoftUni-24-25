function loginWithPassword (input) {

    let username = input[0]
    let password = input[1]

    let index = 2
    let attemptedPassword = input[index]         // To store the passwords entered by the user

    while (attemptedPassword !== password){

        index++
        attemptedPassword = input[index] 
    }

    console.log(`Welcome ${username}!`)
} 

loginWithPassword(["Nakov", "1234", "Pass", "1324", "1234"])