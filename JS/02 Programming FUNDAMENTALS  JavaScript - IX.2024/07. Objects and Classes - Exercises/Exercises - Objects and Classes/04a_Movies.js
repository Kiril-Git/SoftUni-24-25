function objManipulations (inputArr) {

    let movies = {}

    for (let el of inputArr) {

        let commandArr = []
        let name = ''
        let director = ''
        let date = ''


        if (el.includes('directedBy')) {

            commandArr = el.split(' directedBy ')
            name = commandArr[0]
            director = commandArr[1]

            if (movies[name]) {
            movies[name].director = director
            }
        }
        else if (el.includes('onDate')) {
            commandArr = el.split(' onDate ')
            name = commandArr[0]
            date = commandArr[1]

            if (movies[name]) {
            movies[name].date = date
            }
        }
        else {
            commandArr = el.split('addMovie ')
            name = commandArr[1]      
            
            movies[name] = {date: '', director: ''}
        }

    }

        for (let key in movies) {
            if (movies[key].date && movies[key].director) {

                        console.log(key + ', ' + movies[key].date + ', ' + movies[key].director)

            }

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






// print string:               Fast and Furious 30.07.2018 Rob Cohen
//                             Godfather 29.07.2018 Francis Ford Coppola
//

