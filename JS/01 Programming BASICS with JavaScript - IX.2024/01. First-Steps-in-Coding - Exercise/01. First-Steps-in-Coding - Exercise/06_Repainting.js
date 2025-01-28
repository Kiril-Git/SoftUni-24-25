function paintingCostCalculator (input) {

    const DUST_SHEET_COST_PER_SQM = 1.5
    const PAINT_COST_PER_LITER = 14.5
    const PAINT_THINNER_COST_PER_LITER = 5
    const CARRY_BAGS_EXPENSE = 0.4
    const ADDITIONAL_DUST_SHEET_SQM = 2
    const ADDITIONAL_PAINT_LITERS_FACTOR = 10 / 100     //  10%
    const LABOUR_HOURLY_RATE_FACTOR = 30 / 100          //  30%

    let dustSheetSizeSqm = Number(input[0])
    let paintAmountLiters = Number(input[1])
    let paintThinnerAmountLiters = Number(input[2])
    let workingHoursNeeded = Number(input[3])    

    let paintReserveAmount = paintAmountLiters * ADDITIONAL_PAINT_LITERS_FACTOR
    let paintTotalCost = (paintAmountLiters + paintReserveAmount) * PAINT_COST_PER_LITER

    let paintThinnerCost = paintThinnerAmountLiters * PAINT_THINNER_COST_PER_LITER
    let dustSheetCost = (dustSheetSizeSqm + ADDITIONAL_DUST_SHEET_SQM) * DUST_SHEET_COST_PER_SQM

    let totalMaterialCost =  paintTotalCost + paintThinnerCost + dustSheetCost + CARRY_BAGS_EXPENSE

    let labourCost = totalMaterialCost * LABOUR_HOURLY_RATE_FACTOR * workingHoursNeeded

    let totalCost = totalMaterialCost + labourCost

    console.log(totalCost)
}

paintingCostCalculator(["10 ", "11 ", "4 ", "8 "] )