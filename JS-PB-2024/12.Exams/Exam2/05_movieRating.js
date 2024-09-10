function solve(input) {
    let nMovies = +input.shift();

    let highestRatingScore = Number.MIN_SAFE_INTEGER;
    let highestMovieName = '';
    let lowestRatingScore = Number.MAX_SAFE_INTEGER;
    let lowestMovieName = '';
    let sumRating = 0;

    let index = 0;
    for (let i = 0; i < nMovies; i++) {
        let currentMovie = input[index++];
        let currentRating = +input[index++];
        sumRating += currentRating;

        if (currentRating < lowestRatingScore) {
            lowestRatingScore = currentRating;
            lowestMovieName = currentMovie;
        }
        if (currentRating > highestRatingScore) {
            highestRatingScore = currentRating;
            highestMovieName = currentMovie;
        }
    }

    console.log(`${highestMovieName} is with highest rating: ${(highestRatingScore).toFixed(1)}`);
    console.log(`${lowestMovieName} is with lowest rating: ${(lowestRatingScore).toFixed(1)}`);
    console.log(`Average rating: ${(sumRating/nMovies).toFixed(1)}`);
}

// solve(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
solve(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);

