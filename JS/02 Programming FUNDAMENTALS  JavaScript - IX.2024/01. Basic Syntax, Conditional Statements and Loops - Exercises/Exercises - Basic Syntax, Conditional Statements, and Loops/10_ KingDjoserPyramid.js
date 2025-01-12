function materialsCalculator(sideUnitsBase, increment) {

let stoneUnits = 0
let marbleUnits = 0
let lapisUnits = 0
let goldUnits = 0

let sideUnits = sideUnitsBase
let layerCounter = 1

while (sideUnits != 1 && sideUnits != 2) {

    stoneUnits += (sideUnits - 2 ) * (sideUnits - 2) 

    if (layerCounter % 5 != 0) {
        marbleUnits += sideUnits * 4 - 4
    }
    else {
        lapisUnits += sideUnits * 4 - 4
    }

    layerCounter++
    sideUnits -= 2
}



console.log('Stone required: ' + Math.ceil(stoneUnits * increment))
console.log('Marble required: ' + Math.ceil(marbleUnits * increment))
console.log('Lapis Lazuli required: ' + Math.ceil(lapisUnits * increment))
if (sideUnits === 2) {
    sideUnits = 4
}
console.log('Gold required: ' + Math.ceil(sideUnits * increment))
console.log('Final pyramid height: ' + Math.floor(layerCounter * increment))


}

materialsCalculator(23, 0.5)