function calculateGardenBudget(input) {

    const ROSE_PRICE = 5;
    const DAHLIA_PRICE = 3.80;
    const TULIP_PRICE = 2.80;
    const NARCISSUS_PRICE = 3;
    const GLADIOLUS_PRICE = 2.50;

    let flowerType = input[0];              // Type of flower (Roses, Dahlias, Tulips, Narcissus, Gladiolus)
    let flowerCount = Number(input[1]);     // Number of flowers
    let budget = Number(input[2]);          // Available budget

    let total

    switch (flowerType) {

        case "Roses":

        total = flowerCount * ROSE_PRICE 

            if (flowerCount > 80) {
                total = flowerCount * ROSE_PRICE * 0.9
            }
            break

        case "Dahlias":

        total = flowerCount * DAHLIA_PRICE 

            if (flowerCount > 90) {
                total = flowerCount * DAHLIA_PRICE * 0.85
            }
            break

        case "Tulips":

        total = flowerCount * TULIP_PRICE 

            if (flowerCount > 80) {
                total = flowerCount * TULIP_PRICE * 0.85
            }
            break

        case "Narcissus":

        total = flowerCount * NARCISSUS_PRICE

            if (flowerCount < 120) {
                total = flowerCount * NARCISSUS_PRICE * 1.15
            }
            break

        case "Gladiolus":

        total = flowerCount * GLADIOLUS_PRICE * 1.2

            if (flowerCount < 80) {
                total = flowerCount * GLADIOLUS_PRICE * 1.2
            }
            break
    }

    if(budget >= total) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }
}

calculateGardenBudget(["Roses", "55", "250"])