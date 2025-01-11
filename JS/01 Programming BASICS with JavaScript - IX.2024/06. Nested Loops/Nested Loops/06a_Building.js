function printBuildingRooms (floors, rooms){


    for (let f = floors; f >= 1; f--){

        let result = ""

        for (let r = 0; r < rooms; r++){

            if (f === floors){
                result += `L${f}${r} `
            }
            else if (f % 2 === 0) {
                result += `O${f}${r} `
        }
        else {
        result += `A${f}${r} `
        }
    }

    console.log(result)
}
}
printBuildingRooms(6, 4)