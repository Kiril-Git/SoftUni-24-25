function checkOpeningHours(input) {
    let time = Number(input[0]);
    let day = input[1];

    // Default to closed
    let status = "closed";

    // Check for working days (Monday to Saturday)
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || 
        day === "Thursday" || day === "Friday" || day === "Saturday") {
        
        // Check if time is within working hours
        if (time >= 10 && time <= 18) {
            status = "open";
        }
    }

    console.log(status);
}

// Example usage
checkOpeningHours(["11", "Monday"]);  // Output: open
checkOpeningHours(["19", "Friday"]);  // Output: closed
checkOpeningHours(["11", "Sunday"]);  // Output: closed
  
  