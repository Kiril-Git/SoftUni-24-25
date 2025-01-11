function checkOpeningHours(input) {

    let time = Number(input[0])
    let day = input[1]

    let status

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday") {
       
        if (time < 10 || time > 18) {
            status = "closed"
        }
        else{
            status = "open"
        }

    } else if (day === "Sunday") {
        status = "closed"
    } 

    console.log(status)
}

checkOpeningHours(["11", "Monday"])