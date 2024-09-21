function calculateTimeAfter15Minutes(hours, minutes) {
    // Add 15 minutes
    minutes += 15;

    // If minutes are 60 or more, increment hours and adjust minutes
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }

    // If hours reach 24, reset to 0
    if (hours >= 24) {
        hours -= 24;
    }

    // Format minutes with leading zero if needed
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    console.log(`${hours}:${formattedMinutes}`);
}

// Example usage
calculateTimeAfter15Minutes(1, 46); // Outputs: "2:01"
calculateTimeAfter15Minutes(23, 59); // Outputs: "0:14"
