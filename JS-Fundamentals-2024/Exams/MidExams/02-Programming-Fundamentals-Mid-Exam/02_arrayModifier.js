function solve(input) {
    let sequence = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line !== 'end') {
        let [command, index1, index2] = line.split(' ');

        index1 = Number(index1);
        index2 = Number(index2);

        const el1 = sequence[index1];
        const el2 = sequence[index2];

        switch (command) {
            case 'swap':
                sequence.splice(index1, 1, el2);
                sequence.splice(index2, 1, el1);
                break;
            case 'multiply':
                const multiply = el1 * el2;
                sequence.splice(index1, 1, multiply);
                break;
            case 'decrease':
                sequence = sequence.map(el => el - 1);
                break;
        }

        line = input.shift();
    }

    console.log(sequence.join(', '))
}

solve(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
solve(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);