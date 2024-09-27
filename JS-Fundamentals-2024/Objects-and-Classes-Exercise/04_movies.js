function solve(input) {
    let movies = [];

    for (const command of input) {
        if (command.includes('addMovie')) {
            const tokens = command.split('addMovie ');
            const movieName = tokens[1];

            movies.push({name: movieName});
        } else  if (command.includes('directedBy')) {
            const [movieName, movieDirector] = command.split(' directedBy ');
            const existingMovie = movies.find(movieObj => movieObj.name === movieName);

            if (existingMovie) {
                existingMovie.director = movieDirector;
            }
        } else if (command.includes('onDate')) {
            const [movieName, movieDate] = command.split(' onDate ');
            const existingMovie = movies.find(movieObj => movieObj.name === movieName);

            if (existingMovie) {
                existingMovie.date = movieDate;
            }
        }
    }

    for (const movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }
}

solve([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);

// solve([
//         'addMovie The Avengers',
//         'addMovie Superman',
//         'The Avengers directedBy Anthony Russo',
//         'The Avengers onDate 30.07.2010',
//         'Captain America onDate 30.07.2010',
//         'Captain America directedBy Joe Russo'
//     ]
// );