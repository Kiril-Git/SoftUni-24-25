function printWeekDay (num) {

    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let day = ''

    if (num >= 1 && num <= 7) {
        day = weekDays[num -1]
    }
    else {
        day = 'Invalid day!'
    }



    console.log(day)
}

printWeekDay('5')