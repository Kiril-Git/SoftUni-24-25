function classifyAge(num) {


    let ageGroup

    if (num < 0) {

        ageGroup = 'out of bounds'
    }
    else if (num <= 2) {

        ageGroup = 'baby'
    }
    else if (num <= 13) {

        ageGroup = 'child'
    }
    else if (num <= 19) {

        ageGroup = 'teenager'
    }
    else if (num <= 65) {

        ageGroup = 'adult'
    }
    else if (num > 65) {

        ageGroup = 'elder'
    }


    console.log(ageGroup)


}

classifyAge(3)


