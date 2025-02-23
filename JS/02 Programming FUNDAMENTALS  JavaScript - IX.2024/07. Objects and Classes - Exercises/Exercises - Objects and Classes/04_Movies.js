function objManipulations (inputArr) {

    let movies = []

    for (let el of inputArr) {

        let commandArr = []
        let name = ''
        let director = ''
        let date = ''


        if (el.includes('directedBy')) {

            commandArr = el.split(' directedBy ')
            name = commandArr[0]
            director = commandArr[1]

            let movie = movies.find(el => el.name === name)

            if (movie) {
            movie.director = director
            }
        }
        else if (el.includes('onDate')) {
            commandArr = el.split(' onDate ')
            name = commandArr[0]
            date = commandArr[1]

            let movie = movies.find(el => el.name === name)

            if (movie) {
            movie.date = date
            }
        }
        else {
            commandArr = el.split('addMovie ')
            name = commandArr[1]      
            
            movies.push({ name })
        }
    }

    let completeMovies = movies.filter(el => el.director && el.date)

    for (let el of completeMovies) {

        console.log(JSON.stringify(el))
    }
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




 


    // Print JSON:             {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
    //                         {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
    //