function solve(input) {
    let easterBread = Number(input.shift());
    let index = 0;
    let command = input[index++];
    let bestChef = '';
    let bestPoints = 0;

    for (let i = 0; i < easterBread; i++) {
        let points = 0;
        let chef = command
        command = input[index++];

        while (command !== 'Stop') {
            let currentPoint = Number(command);
            points += currentPoint;
            command = input[index++];
        }

        console.log(`${chef} has ${points} points.`);

        if (points > bestPoints) {
            bestPoints = points;
            bestChef = chef
            console.log(`${chef} is the new number 1!`);
        }

        command = input[index++];
    }

    console.log(`${bestChef} won competition with ${bestPoints} points!`);
}


solve(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop",]);
// solve(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);
