function calculatePriceByCity(input) {

let product = input[0]
let city = input[1]
let quantity = Number (input[2])

if(city === "Sofia"){
    if(product === "coffee"){
        console.log(quantity * 0.5)
    }
    if(product === "water"){
        console.log(quantity * 0.8)
    }
    if(product === "beer"){
        console.log(quantity * 1.2)
    }
    if(product === "sweets"){
        console.log(quantity * 1.45)
    }
    if(product === "peanuts"){
        console.log(quantity * 1.6)
    }
}
else if (city === "Plovdiv"){
    if(product === "coffee"){
        console.log(quantity * 0.4)
    }
    if(product === "water"){
        console.log(quantity * 0.7)
    }
    if(product === "beer"){
        console.log(quantity * 1.15)
    }
    if(product === "sweets"){
        console.log(quantity * 1.3)
    }
    if(product === "peanuts"){
        console.log(quantity * 1.5)
    }
}
else if (city === "Varna"){
    if(product === "coffee"){
        console.log(quantity * 0.45)
    }
    if(product === "water"){
        console.log(quantity * 0.7)
    }
    if(product === "beer"){
        console.log(quantity * 1.10)
    }
    if(product === "sweets"){
        console.log(quantity * 1.35)
    }
    if(product === "peanuts"){
        console.log(quantity * 1.55)
    }
}
}

calculatePriceByCity(["coffee", "Varna", "2"])