function planVacation(input) {

    let budget = Number(input[0])
    let season = input[1]

    let destination
    let availableSum
    let accommodationType;

    if (budget > 0 && budget <= 100){

        destination = "Bulgaria"
        
        switch (season) {

            case "summer":
            availableSum = budget * 0.3
            accommodationType = "Camp"
            break

            case "winter":
                availableSum = budget * 0.7
                accommodationType = "Hotel"
                break

                default:
                    console.log("Invalid season");
                    return;
        }
    }

    else if (budget <= 1000){

        destination = "Balkans"
        
        switch (season) {

            case "summer":
            availableSum = budget * 0.4
            accommodationType = "Camp"
            break

            case "winter":
                availableSum = budget * 0.8
                accommodationType = "Hotel"
                break

                default:
                    console.log("Invalid season");
                    return;
        }
    }
    else{

        destination = "Europe"
        availableSum = budget * 0.9
        accommodationType = "Hotel"
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${accommodationType} - ${(availableSum).toFixed(2)}`)
  }

  planVacation(["1500", "summer"])






  