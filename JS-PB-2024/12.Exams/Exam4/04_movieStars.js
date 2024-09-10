function solve(input) {
    let budget = +input.shift();

    let index = 0;
    let command = input[index++];

    while (true) {
        if (command === 'ACTION') {
            break;
        }
        let salary = 0

        if (command.length > 15) {
            salary = budget * 0.2;
        } else {
            salary = Number(input[index++]);
        }

        budget -= salary;
        if (budget < 0) {
            break;
        }

        command = input[index++]
    }

    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
        ;
    } else {
        console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
    }
}

// solve(["90000",
//     "Christian Bale",
//     "70000.50",
//     "Leonard DiCaprio",
//     "Kevin Spacey",
//     "24000.99"])
// solve(["170000",
//     "Ben Affleck",
//     "40000.50",
//     "Zahari Baharov",
//     "80000",
//     "Tom Hanks",
//     "2000.99",
//     "ACTION"])
solve(['1000', 'John Cena', '800', 'Freddy Kim', '3000', 'ACTION']) 