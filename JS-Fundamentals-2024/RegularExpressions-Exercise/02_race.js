function solve(arr) {
    const names = arr.shift().split(', ');
    let command = arr.shift();
    let racers = {};
    names.forEach((name) => {racers[name] = 0});

    const letterPattern = /[a-z]/gi; // с флага i се прави стринга да е case-insensitive
    const digitPattern = /\d/g;

    while (command !== 'end of race') {
        const letterMatches = command.match(letterPattern);
        const name = letterMatches.join('');

        const digitMatches = command.match(digitPattern);
        const distance = digitMatches.map(Number).reduce((a, b) => a + b);

        if (name in racers) {
            racers[name] += distance;
        }

        command = arr.shift();
    }

    const sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);

// solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
//     'Mi*&^%$ch123o!#$%#nne787) ',
//     '%$$B(*&&)i89ll)*&) ',
//     'R**(on%^&ald992) ',
//     'T(*^^%immy77) ',
//     'Ma10**$#g0g0g0i0e',
//     'end of race']
// );