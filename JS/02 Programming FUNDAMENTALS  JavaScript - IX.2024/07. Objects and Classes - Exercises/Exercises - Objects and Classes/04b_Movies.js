function objManipulations (inputArr) {

    let movies = []

    for (let el of inputArr) {

        if (el.includes('directedBy')) {

            let [movieName, director] = el.split(' directedBy ')
            let movie = movies.find(el => el.name === movieName)

            if (movie) {
            movie.director = director
            }
        }
        else if (el.includes('onDate')) {

            let [movieName, date] = el.split(' onDate ')
            let movie = movies.find(el => el.name === movieName)

            if (movie) {
            movie.date = date
            }
        }
        else {
            let movieName = el.replace('addMovie ', '')

            movies.push({ name: movieName })
        }
    }

    let completeMovies = movies.filter(el => el.director && el.date)

        console.log(JSON.stringify(completeMovies, null, 2))
    
}

objManipulations ([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )





    

    // Print JSON:                     [
    //                                     {
    //                                     "name": "Fast and Furious",
    //                                     "date": "30.07.2018",
    //                                     "director": "Rob Cohen"
    //                                     },
    //                                     {
    //                                     "name": "Godfather",
    //                                     "director": "Francis Ford Coppola",
    //                                     "date": "29.07.2018"
    //                                     }
    //                                 ]
    //