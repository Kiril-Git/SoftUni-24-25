function animalClassifier (input) {

    let animal = input[0]

    let animalType = "unknown"

    switch(animal){
        case "dog": 
            animalType = "mammal"
            break

        case "snake":
            animalType = "reptile"
            break

        case "crocodile":
            animalType = "reptile"
            break

        case "tortoise":
            animalType = "reptile"
            break
    }

    console.log(animalType)
}

animalClassifier(["dog"])