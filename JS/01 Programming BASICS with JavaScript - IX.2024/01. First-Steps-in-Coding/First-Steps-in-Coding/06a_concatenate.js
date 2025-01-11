function concatenateData(input) {
    const [forename, surname, age, city] = input

console.log(`You are ${forename} ${surname}, a ${age}-years old person from ${city}.`)
}

concatenateData(["Donga", "Stankov", 18, "Sofia"])