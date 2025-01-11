function calculateShapeArea (input) {

    let inputShape = input[0]

    if (inputShape === "square"){
        let side = Number(input[1])
        let area = side * side

        console.log(area.toFixed(3))
    }
    else if (inputShape ===  "rectangle") {
        let side1 = Number(input[1])
        let side2 = Number(input[2])

        let area = side1 * side2

        console.log(area.toFixed(3))
    }
    else if (inputShape ===  "circle") {
        let radius = Number(input[1])
        let area = Math.PI * radius * radius

        console.log(area.toFixed(3))
    }
    else if (inputShape ===  "triangle") {
        let b = Number(input[1])
        let h = Number(input[2])

        let area = (b * h) / 2

        console.log(area.toFixed(3))
    }
    else{
        console.log("Invalid input. The shape must be square, rectangle, circle, or triangle.")
    }
}

calculateShapeArea(["triangle", "4.5", "20"])

