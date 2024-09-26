function solve(input) {
    let energy = +input.shift();
    let command = input.shift();
    let battleCount = 0;

    while (command !== "End of battle") {
        const distance = Number(command);

        if (energy >= distance) {
            battleCount++;
            energy -= distance
        } else {
            console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${energy} energy`)
            break;
        }

        if (battleCount % 3 === 0) {
            energy += battleCount;
        }

        command = input.shift();
    }

    if (command === "End of battle") {
        console.log(`Won battles: ${battleCount}. Energy left: ${energy}`);
    }
}

solve((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
);
// solve((["200",
//     "54",
//     "14",
//     "28",
//     "13",
//     "End of battle"])
// );