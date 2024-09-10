function solve(input) {
    let team = input.shift();
    let nMatches = +input.shift();
    let countW = 0;
    let countD = 0;
    let countL = 0;
    let totalPoints = 0;

    if (nMatches === 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else if (nMatches > 0) {
        for (let i = 0; i < nMatches; i++) {
            let current = input[i];
            let points = 0;
            switch (current) {
                case "W":
                    points = 3;
                    countW++;
                    break;
                case "D":
                    points = 1;
                    countD++;
                    break;
                case "L":
                    points = 0;
                    countL++;
                    break;
            }

            totalPoints += points;
        }

        console.log(`${team} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${(countW / nMatches * 100).toFixed(2)}%`);
    }
}

// solve(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
// solve(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
solve(["Chelsea", "0"]);
