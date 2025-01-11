function calculateToyShopEarnings (input){

    const PUZZLE_PRICE = 2.60;
    const TALKING_DOLL_PRICE = 3.00;
    const TEDDY_BEAR_PRICE = 4.10;
    const MINION_PRICE = 8.20;
    const TRUCK_PRICE = 2.00;

    let tripCost = Number(input[0]) 
    let puzzles = Number(input[1]) 
    let dolls = Number(input[2]) 
    let poohbears = Number(input[3]) 
    let minions = Number(input[4]) 
    let trucks = Number(input[5])

    let totalToys = puzzles + dolls + poohbears + minions + trucks
    let totalSum = puzzles * PUZZLE_PRICE + dolls * TALKING_DOLL_PRICE + poohbears * TEDDY_BEAR_PRICE + minions * MINION_PRICE + trucks * TRUCK_PRICE

    if (totalToys >= 50){
        totalSum *= 0.75
    }
    let shopRent = totalSum * 0.1
    totalSum -= shopRent

    if(totalSum >= tripCost) {
        console.log(`Yes! ${(totalSum - tripCost).toFixed(2)} lv left.`)
    }
    else{

        console.log(`Not enough money! ${(tripCost - totalSum).toFixed(2)} lv needed.`)
    }
}

calculateToyShopEarnings(["320", "8", "2", "5", "5", "1"])