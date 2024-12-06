function solve(arr) {
    let str = arr.shift();

    let line = arr.shift();
    while(line !== 'Done') {
        const tokens = line.split(' ');
        const command = tokens[0];

        if (command === 'Change') {
            const char = tokens[1];
            const replacement = tokens[2];

            while (str.includes(char)) {
                str = str.replace(char, replacement);
            }

            console.log(str);
        } else if (command === 'Includes') {
            const checker = tokens[1];
            console.log(str.includes(checker) ? 'True' : 'False');
        } else if (command === 'End') {
            const checker = tokens[1];
            console.log(str.endsWith(checker) ? 'True' : 'False');
        } else if (command === 'Uppercase') {
            str = str.toUpperCase();

            console.log(str);
        } else if (command === 'FindIndex') {
            const char = tokens[1];

            console.log(str.indexOf(char));
        } else if (command === 'Cut') {
            const startIndex = Number(tokens[1]);
            const count = Number(tokens[2]);

            str = str.slice(startIndex, startIndex + count);
            console.log(str);
        }

        line = arr.shift()
    }
}

// solve(["//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"])

solve(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])
