function fruitPriceCalculator(input) {

    let fruit = input[0]
    let day = input[1]
    let quantity = Number(input[2])

    let total

    if(day === "Sunday" || day === "Saturday"){

        if(fruit === "banana"){
            total = quantity * 2.7
        }
        else if (fruit === "apple"){
            total = quantity * 1.25
        }
        else if (fruit === "orange"){
            total = quantity * 0.9
        }
        else if (fruit === "grapefruit"){
            total = quantity * 1.6
        }
        else if (fruit === "kiwi"){
            total = quantity * 3
        }
        else if (fruit === "pineapple"){
            total = quantity * 5.6
        }
        else if (fruit === "grapes"){
            total = quantity * 4.2
        }
        else {
            console.log("error")
            return
        }
    }
    else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {

        if(fruit === "banana"){
            total = quantity * 2.5
        }
        else if (fruit === "apple"){
            total = quantity * 1.2
        }
        else if (fruit === "orange"){
            total = quantity * 0.85
        }
        else if (fruit === "grapefruit"){
            total = quantity * 1.45
        }
        else if (fruit === "kiwi"){
            total = quantity * 2.7
        }
        else if (fruit === "pineapple"){
            total = quantity * 5.5
        }
        else if (fruit === "grapes"){
            total = quantity * 3.85
        }
        else {
            console.log("error")
            return
        }
    }
    else{
        console.log("error")
        return
    }

    console.log(total.toFixed(2))
}

fruitPriceCalculator(["apple", "Tuesday", "2"])