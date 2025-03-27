function calcCalories (inputArr) {

    let text = inputArr[0]

    let regex = /([#|])([A-Z a-z]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]+)\1/g
    let matches = text.matchAll(regex)
    let totalCals = 0
    let artelna = []            //  !!!  use arr to keep reps

    for (let el of matches) {

        let product = el[2]
        let expDate = el[3] 
        let calories = +el[4]

        artelna.push({product, expDate, calories})
        totalCals += calories

    }

    let days = Math.floor(totalCals / 2000)
    
    console.log(`You have food to last you for: ${days} days!`)

    artelna.forEach(el => {
        console.log(`Item: ${el.product}, Best before: ${el.expDate}, Nutrition: ${el.calories}`)
    })
    
}

calcCalories(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])


