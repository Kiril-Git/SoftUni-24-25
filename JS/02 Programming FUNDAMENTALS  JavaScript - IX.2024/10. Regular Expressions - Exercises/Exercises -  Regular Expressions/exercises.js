function extractEmailsByReg(inputStr) {
    
    let regex = /(^|(?<=\s))[a-z\d]+(?:[._-][a-z\d]+)*@[a-z]+(?:-[a-z]+)*(\.[a-z]+)+\b/g

    let matches = inputStr.match(regex);

    if (matches) {
        matches.forEach(email => console.log(email));
    }
}


extractEmailsByReg(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`);