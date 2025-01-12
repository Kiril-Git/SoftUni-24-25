function leapYearCalculator (num) {

    Boolean = 'no'

    if (num % 400 === 0) {

        Boolean = 'yes'
    }
    else if (num % 4 === 0 && num % 100 != 0) {

        Boolean = 'yes'
    }



    console.log(Boolean)
}

leapYearCalculator(4)