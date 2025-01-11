function projectCreation(input) {
    const TIME_FOR_ONE_PROJECT = 3

    let [name, projects] = input
    timeNeeded = projects * TIME_FOR_ONE_PROJECT

    console.log(`The architect ${name} will need ${timeNeeded} hours to complete ${projects} project/s.`)
}

projectCreation(["Kozhata", "4"])

