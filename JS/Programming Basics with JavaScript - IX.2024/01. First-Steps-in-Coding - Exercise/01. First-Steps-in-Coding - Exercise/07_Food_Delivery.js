function foodDeliveryCostCalculator(input) {

    const CHICKEN_MENU_PRICE = 10.35
    const FISH_MENU_PRICE = 12.4
    const VEGETARIAN_MENU_PRICE = 8.15
    const DELIVERY = 2.5
    const DESERT_FACTOR_CALCULATION = 20 / 100      // 20%

    let chickenMenuCount = Number(input[0])         // Брой пилешки менюта
    let fishMenuCount = Number(input[1])            // Брой менюта с риба
    let vegetarianMenuCount = Number(input[2])      // Брой вегетариански менюта

    let chickenMenuSum = chickenMenuCount * CHICKEN_MENU_PRICE
    let fishMenuSum = fishMenuCount * FISH_MENU_PRICE
    let vegetarianMenuSum = vegetarianMenuCount * VEGETARIAN_MENU_PRICE

    let mainCourseSum = chickenMenuSum + fishMenuSum + vegetarianMenuSum
    let desertSum = mainCourseSum * DESERT_FACTOR_CALCULATION

    let total = mainCourseSum + desertSum + DELIVERY

    console.log(total)
}

foodDeliveryCostCalculator(["2 ", "4 ", "3 "] )