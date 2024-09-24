function solve(commands) {
    let wagons = commands.shift().split(' ').map(Number);
    const maxPassengers = Number(commands.shift());

    for (const command of commands) {
        const tokens = command.split(' ').map(Number);
        if (tokens.length === 2) {
            wagons.push(tokens[1])
        } else {
            for (const wagonKey in wagons) {
                if (tokens[0] + wagons[wagonKey] <= maxPassengers) {
                    wagons[wagonKey] = wagons[wagonKey] + tokens[0];
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']) //72 54 21 12 4 75 23 10 0
solve(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']); // 10 10 10 10 10 10 10