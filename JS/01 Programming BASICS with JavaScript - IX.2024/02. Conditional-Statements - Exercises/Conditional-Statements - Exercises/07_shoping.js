function calculate_budget_for_components(input) {

    const VIDEO_CARD_PRICE = 250

    let petar_budget = Number(input[0])
    let num_video_cards = Number(input[1])
    let num_processors = Number(input[2])
    let num_ram_modules = Number(input[3])

    let sum_video_cards = num_video_cards * 250

    const PROCESSOR_PRICE_PERCENTAGE = sum_video_cards * 0.35
    const RAM_PRICE_PERCENTAGE = sum_video_cards * 0.1

    let sum_processors = num_processors * PROCESSOR_PRICE_PERCENTAGE
    let sum_ram_modules = num_ram_modules * RAM_PRICE_PERCENTAGE

    let total = sum_video_cards + sum_processors + sum_ram_modules

    if(num_video_cards > num_processors){
        total *= 0.85
    }

    if(petar_budget >= total){
        console.log(`You have ${(petar_budget - total).toFixed(2)} leva left!`)
    }
    else{
        console.log(`Not enough money! You need ${(total - petar_budget).toFixed(2)} leva more!`)
    }
}

calculate_budget_for_components(["920.45", "3", "1", "1"])