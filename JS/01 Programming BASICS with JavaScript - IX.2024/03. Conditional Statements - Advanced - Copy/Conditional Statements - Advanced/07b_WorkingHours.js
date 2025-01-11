function checkOpeningHours(input) {
    let time = Number(input[0]);
    let day = input[1];

    // Default to closed
    let status = "closed";

    const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]

    // Check for working days (Monday to Saturday)
    if (workingDays.includes(day)) {
        
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
  
  