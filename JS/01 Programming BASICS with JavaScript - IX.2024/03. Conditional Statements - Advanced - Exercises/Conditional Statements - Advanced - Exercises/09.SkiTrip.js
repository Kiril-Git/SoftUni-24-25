function calculate_ski_vacation_cost(input) {

    // Room prices per night
const PRICE_ROOM_FOR_ONE = 18.00;
const PRICE_APARTMENT = 25.00;
const PRICE_PRESIDENT_APARTMENT = 35.00;

// Discounts based on the number of nights (less than 10, between 10 and 15, more than 15)
const DISCOUNT_APARTMENT_LESS_THAN_10 = 0.70;                       // 30% discount
const DISCOUNT_APARTMENT_BETWEEN_10_AND_15 = 0.65;                  // 35% discount
const DISCOUNT_APARTMENT_MORE_THAN_15 = 0.50;                       // 50% discount

const DISCOUNT_PRESIDENT_APARTMENT_LESS_THAN_10 = 0.90;             // 10% discount
const DISCOUNT_PRESIDENT_APARTMENT_BETWEEN_10_AND_15 = 0.85;        // 15% discount
const DISCOUNT_PRESIDENT_APARTMENT_MORE_THAN_15 = 0.80;             // 20% discount

// Review adjustments
const POSITIVE_REVIEW_BONUS = 1.25;                                 // Adds 25% if the review is positive
const NEGATIVE_REVIEW_PENALTY = 0.9;                               // Reduces 10% if the review is negative

let days = Number(input[0]);                                        // Number of days for the stay (integer between 0 and 365)
let roomType = input[1];                                            // Type of room ("room for one person", "apartment", or "president apartment")
let review = input[2];                                              // Review of the stay ("positive" or "negative")

let nighs = days - 1
let total

switch(roomType){

    case "room for one person":

        total = nighs * PRICE_ROOM_FOR_ONE

        if(review === "positive"){
            total *= POSITIVE_REVIEW_BONUS
        }
        else{
            total *= NEGATIVE_REVIEW_PENALTY
        }
        break

    case "apartment":

        total = nighs * PRICE_APARTMENT

        if(days < 10){
            total *= DISCOUNT_APARTMENT_LESS_THAN_10
        }
        else if (days <= 15){
            total *= DISCOUNT_APARTMENT_BETWEEN_10_AND_15
        }
        else{
            total *= DISCOUNT_APARTMENT_MORE_THAN_15
        }

        if(review === "positive"){
            total *= POSITIVE_REVIEW_BONUS
        }
        else{
            total *= NEGATIVE_REVIEW_PENALTY
        }
        break

    case "president apartment":

        total = nighs * PRICE_PRESIDENT_APARTMENT

        if(days < 10){
            total *= DISCOUNT_PRESIDENT_APARTMENT_LESS_THAN_10
        }
        else if (days <= 15){
            total *= DISCOUNT_PRESIDENT_APARTMENT_BETWEEN_10_AND_15
        }
        else{
            total *= DISCOUNT_PRESIDENT_APARTMENT_MORE_THAN_15
        }

        if(review === "positive"){
            total *= POSITIVE_REVIEW_BONUS
        }
        else{
            total *= NEGATIVE_REVIEW_PENALTY
        }
        break
}

console.log(total.toFixed(2))
}

calculate_ski_vacation_cost(["30", "president apartment", "negative"])