function calculate_hotel_stay_cost(input) {

    // Prices per night
const STUDIO_PRICE_MAY_OCTOBER = 50.00;
const STUDIO_PRICE_JUNE_SEPTEMBER = 75.20;
const STUDIO_PRICE_JULY_AUGUST = 76.00;

const APARTMENT_PRICE_MAY_OCTOBER = 65.00;
const APARTMENT_PRICE_JUNE_SEPTEMBER = 68.70;
const APARTMENT_PRICE_JULY_AUGUST = 77.00;

// Discount thresholds and percentages
const STUDIO_DISCOUNT_7_NIGHTS_MAY_OCTOBER = 0.95;          // 5% discount for studio in May and October for more than 7 nights
const STUDIO_DISCOUNT_14_NIGHTS_MAY_OCTOBER = 0.7;         // 30% discount for studio in May and October for more than 14 nights
const STUDIO_DISCOUNT_14_NIGHTS_JUNE_SEPTEMBER = 0.8;      // 20% discount for studio in June and September for more than 14 nights
const APARTMENT_DISCOUNT_14_NIGHTS_ALL_MONTHS = 0.9;       // 10% discount for apartment for more than 14 nights

let month = input[0];                                       // The month of the stay, e.g., "May", "June", etc.
let nights = Number(input[1]);                              // The number of nights for the stay, converted to a number

let totalApartment
let totalStudio

switch(month) {

    case "May":

        totalApartment = nights * APARTMENT_PRICE_MAY_OCTOBER
        totalStudio = nights * STUDIO_PRICE_MAY_OCTOBER

        if(nights > 7 && nights <= 14){
            totalStudio *= STUDIO_DISCOUNT_7_NIGHTS_MAY_OCTOBER
        }
        else if(nights > 14) {
            totalStudio *= STUDIO_DISCOUNT_14_NIGHTS_MAY_OCTOBER
            totalApartment *= APARTMENT_DISCOUNT_14_NIGHTS_ALL_MONTHS
        }
        break

    case "October":

        totalApartment = nights * APARTMENT_PRICE_MAY_OCTOBER
        totalStudio = nights * STUDIO_PRICE_MAY_OCTOBER

        if(nights > 7 && nights <= 14){
            totalStudio *= STUDIO_DISCOUNT_7_NIGHTS_MAY_OCTOBER
        }
        else if(nights > 14) {
            totalStudio *= STUDIO_DISCOUNT_14_NIGHTS_MAY_OCTOBER
            totalApartment *= APARTMENT_DISCOUNT_14_NIGHTS_ALL_MONTHS
        }
        break

    case "June":

        totalApartment = nights * APARTMENT_PRICE_JUNE_SEPTEMBER
        totalStudio = nights * STUDIO_PRICE_JUNE_SEPTEMBER

        if(nights > 14) {
            totalStudio *= STUDIO_DISCOUNT_14_NIGHTS_JUNE_SEPTEMBER
            totalApartment *= APARTMENT_DISCOUNT_14_NIGHTS_ALL_MONTHS
        }
        break

    case "September":

        totalApartment = nights * APARTMENT_PRICE_JUNE_SEPTEMBER
        totalStudio = nights * STUDIO_PRICE_JUNE_SEPTEMBER

        if(nights > 14) {
            totalStudio *= STUDIO_DISCOUNT_14_NIGHTS_JUNE_SEPTEMBER
            totalApartment *= APARTMENT_DISCOUNT_14_NIGHTS_ALL_MONTHS
        }
        break

    case "July":

        totalApartment = nights * APARTMENT_PRICE_JULY_AUGUST
        totalStudio = nights * STUDIO_PRICE_JULY_AUGUST

        if(nights > 14) {
            totalApartment *= APARTMENT_DISCOUNT_14_NIGHTS_ALL_MONTHS
        }
        break

    case "August":

        totalApartment = nights * APARTMENT_PRICE_JULY_AUGUST
        totalStudio = nights * STUDIO_PRICE_JULY_AUGUST

        if(nights > 14) {
            totalApartment *= APARTMENT_DISCOUNT_14_NIGHTS_ALL_MONTHS
        }
        break
}

console.log(`Apartment: ${(totalApartment).toFixed(2)} lv.`)
console.log(`Studio: ${(totalStudio).toFixed(2)} lv.`)
}

calculate_hotel_stay_cost(["August", "20"])

