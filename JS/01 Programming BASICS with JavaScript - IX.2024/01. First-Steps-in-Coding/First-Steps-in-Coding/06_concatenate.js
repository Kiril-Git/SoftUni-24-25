function concatenateData(input) {
    let forename = input[0]
    let surname = input[1]
    let age = input[2]
    let city = input[3]

console.log(`You are ${forename} ${surname}, a ${age}-years old person from ${city}.`)
}

concatenateData(["Donga", "Stankov", 18, "Sofia"])