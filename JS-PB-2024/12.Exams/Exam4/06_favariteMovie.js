function solve(input) {
    let index = 0;
    let command = input[index];
    let countMovie = 0;
    let maxPoint = Number.MIN_SAFE_INTEGER;
    let bestMovie = ''

    while (command !== 'STOP') {
        countMovie++;
        if (countMovie === 7) {
            console.log("The limit is reached.");
            break;
        }
        let points = 0;
        let labelLength = command.length;
        for (let i = 0; i < labelLength; i++) {
            let char = command[i].charCodeAt(0);
            if (char >= 65 && char <= 90) {
                char = char - labelLength;
            } else if (char >= 97 && char <= 122) {
                char = char - (2 * labelLength);
            }
            points += char;
        }

        if (maxPoint < points) {
            maxPoint = points;
            bestMovie = command;
        }

        index++;
        command = input[index];
    }

    console.log(`The best movie for you is ${bestMovie} with ${maxPoint} ASCII sum.`);
}

// solve(["Matrix",
//     "Breaking bad",
//     "Legend",
//     "STOP"])
solve(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"])
