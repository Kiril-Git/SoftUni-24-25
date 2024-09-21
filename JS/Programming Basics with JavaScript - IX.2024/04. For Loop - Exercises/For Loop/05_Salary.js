function calculateRemainingSalary(input) {

    const FINE_FACEBOOK = 150;              // Fine for visiting Facebook
    const FINE_INSTAGRAM = 100;             // Fine for visiting Instagram
    const FINE_REDDIT = 50;                 // Fine for visiting Reddit

    let tabsCount = Number(input[0]);      // Number of open browser tabs (n)
    let salary = Number(input[1]);         // Initial salary

    let website;                           // Variable to store the name of the current website being checked
    let sum = 0

    for(let i = 0; i < input.length; i++){

        if( i > 1){
        
            website = input[i]

            switch(website){

                case"Facebook":
                sum += FINE_FACEBOOK
                break

            case"Instagram":
                sum += FINE_INSTAGRAM
                break

            case"Reddit":
                sum += FINE_REDDIT
                break

            default:
                sum += 0
            break
            }
            if(sum >= salary){
                console.log(`You have lost your salary.`)
                return
            }
        }
    }
    console.log(salary - sum)
}

calculateRemainingSalary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
