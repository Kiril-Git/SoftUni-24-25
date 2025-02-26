function scheduleMeetings (inputArr) {

    let meetingJurnal = {}

    for (let el of inputArr) {

        let [day, name] = el.split(' ')

        if (!meetingJurnal[day]) {
            
            meetingJurnal[day] = name
            console.log(`Scheduled for ${day}`)
        }
        else {
            console.log(`Conflict on ${day}!`)
        }
    }

    for (let el in meetingJurnal) {
        console.log(`${el} -> ${meetingJurnal[el]}`)
    }
}

scheduleMeetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'] )




// Print:          Scheduled for Monday
//                 Scheduled for Wednesday
//                 Conflict on Monday!
//                 Scheduled for Friday
//                 Monday -> Peter
//                 Wednesday -> Bill
//                 Friday -> Tim

//