function findFavoriteBook (input){

    let favoriteBook = input[0];            // The favorite book Ani is searching for
    let index = 1;                          // Index to keep track of the current book being checked
    let currentBook = input[index];         // The current book being checked
    let checkedBooks = 0;                   // Counter to track the number of books checked


    while (currentBook !== "No More Books") {

        if (currentBook === favoriteBook){

            console.log(`You checked ${checkedBooks} books and found it.`)
            return
        }
        checkedBooks++

        
        index++
        currentBook = input[index]
    }
    console.log(`The book you search is not here!`)
    console.log(`You checked ${checkedBooks} books.`)
}

findFavoriteBook(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])