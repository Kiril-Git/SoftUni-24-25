function arrManipulations(inputArr) {

    inputArr.pop(); 
    let destinations = inputArr.shift(); 

    

    for (let el of inputArr) {
        let commandArr = el.split(':');
        let command = commandArr[0];

        switch (command) {

            case 'Add Stop': {
                let ind = +commandArr[1];
                let destination = commandArr[2];

                if (ind >= 0 && ind <= destinations.length) {
                    destinations = destinations.slice(0, ind) + destination + destinations.slice(ind);
                }
                console.log(destinations);
                break;
            }

            case 'Remove Stop': {
                let ind = +commandArr[1];
                let endInd = +commandArr[2];

                if (ind >= 0 && endInd < destinations.length && ind <= endInd) {
                    destinations = destinations.slice(0, ind) + destinations.slice(endInd + 1);
                }
                console.log(destinations);
                break;
            }

            case 'Switch': {
                let oldStr = commandArr[1];
                let newStr = commandArr[2];

                if (destinations.includes(oldStr)) {
                    destinations = destinations.split(oldStr).join(newStr);     // Replace all occurrences
                }
                console.log(destinations);
                break;
            }
        }
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

arrManipulations([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
