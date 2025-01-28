let hungry = true
let input = ["pizza", "pasta", "Burger", "Full"]

let index = 0

while (hungry) {
    let currentDish = input[index++]

console.log(currentDish)

    if (currentDish === "Full") {
        console.log("I'm full!")
        hungry = false
    }
}
console.log("- - -")


do{
    console.log("Hello - first do then check ;-)")
}while (false)


    