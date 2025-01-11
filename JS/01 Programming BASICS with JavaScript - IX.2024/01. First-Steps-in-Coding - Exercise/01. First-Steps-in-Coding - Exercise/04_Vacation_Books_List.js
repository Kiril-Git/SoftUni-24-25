function readingCalculator(input){

let bookPages = Number(input[0])
let pagesPerHour = Number(input[1])
let daysToReadBook = Number(input[2])

let hoursToReadBook = bookPages / pagesPerHour
let pagesPerDayToRead = hoursToReadBook / daysToReadBook

console.log(pagesPerDayToRead)
}

readingCalculator(["212", "20 ", "2"])


 