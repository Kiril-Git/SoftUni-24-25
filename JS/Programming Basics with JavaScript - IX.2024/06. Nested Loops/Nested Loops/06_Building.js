function printBuildingRooms (floors, rooms){


    for (let f = floors; f >= 1; f--){

        let result = ""

        if (f === floors){
            for (let r = 0; r < rooms; r++){
                result += `L${f}${r} `
        }
    }
    else if (f % 2 === 0) {
        for (let r = 0; r < rooms; r++){
            result += `O${f}${r} `
    }
    }
    else{
        for (let r = 0; r  < rooms; r++){
            result += `A${f}${r} `
    }
    }
    console.log(result.trim())
        
    }
}
printBuildingRooms(6, 4)