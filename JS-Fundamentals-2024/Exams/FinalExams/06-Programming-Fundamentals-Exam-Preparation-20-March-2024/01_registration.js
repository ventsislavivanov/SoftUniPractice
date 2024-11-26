function solve(arr) {
    let user = arr.shift();

    let line = arr.shift();
    while (line !== 'Registration') {
        const tokens = line.split(' ');
        const command = tokens[0];

        if (command === 'Letters') {

            if (tokens[1] === 'Lower') {
                user = user.toLowerCase()
            } else if (tokens[1] === 'Upper') {
                user = user.toUpperCase();
            }

            console.log(user);
        } else if (command === 'Reverse') {
            const startIndex = Number(tokens[1]);
            const endIndex = Number(tokens[2]);

            if (startIndex > 0 && startIndex <= user.length || endIndex >= 0 && endIndex < user.length) {
                console.log(user.slice(startIndex, endIndex + 1)
                    .split('')
                    .reverse()
                    .join(''));
            }
        } else if (command === 'Substring') {
            const substring = tokens[1];
            if (user.includes(substring)) {
                while (user.includes(substring)) {
                    user = user.replace(substring, '');
                }

                console.log(user)
            } else {
                console.log(`The username ${user} doesn't contain ${substring}.`);
            }
        } else if (command === 'Replace') {
            const char = tokens[1];
            while (user.includes(char)) {
                user = user.replace(char, '-');
            }

            console.log(user);
        } else if (command === 'IsValid') {
            const char = tokens[1];

            if (user.includes(char)) {
                console.log('Valid username.');
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }

        line = arr.shift();
    }
}

solve(['John', 'Letters Lower', 'Substring SA', 'IsValid @', 'Registration']);
// solve(['ThisIsSoftUni', 'Reverse 1 3', 'Replace S', 'Substring hi', 'Registration',])
//sih
// ThisIs-oftUni
// TsIs-oftUni