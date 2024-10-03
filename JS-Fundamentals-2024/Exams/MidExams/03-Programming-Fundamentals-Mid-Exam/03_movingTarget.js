function solve(input) {
    let sequence = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line !== 'End') {
        let [command, index, value] = line.split(' ');
        index = Number(index);
        value = Number(value);
        const curEl = sequence[index];

        switch (command) {
            case 'Shoot':
                if (sequence.includes(curEl)) {
                    sequence[index] = curEl - value;
                }

                if (sequence[index] <= 0) {
                    sequence.splice(index, 1);
                }
                break;
            case 'Add':
                if (index < 0 || index >= sequence.length) {
                    console.log("Invalid placement!");
                } else {
                    sequence.splice(index, 0, value);
                }
                break;
            case 'Strike':
                if (index < 0 || index >= sequence.length ||
                    index + value < 0 || index + value >= sequence.length ||
                    index - value < 0 || index - value >= sequence.length
                ) {
                    console.log("Strike missed!");
                } else {
                    let elementsToRemove = 2 * value + 1
                    let startIndex = index - value;
                    sequence.splice(startIndex, elementsToRemove);
                }
                break;
        }

        line = input.shift();
    }
    console.log(sequence.join('|'));
}

// solve(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
solve(["1 2 3 4 5", "Strike 0 1", "End"]);
