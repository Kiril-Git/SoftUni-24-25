let number = 1

switch(number){
    case 1:
        console.log("Low number")
        break
    case 2:
        console.log("Mid number")
        break
    case 3:
        console.log("High number")
        break
    default:
        console.log("Not a valid number!")
        break
}

let input = "1:2"

let result = input.split(":")

let [team1, team2] = input.split(":")

let team1score = Number(result[0])

console.log(team1score)
console.log(result[1])
console.log(team1, `:`, team2)
