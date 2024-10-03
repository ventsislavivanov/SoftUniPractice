function solve(input) {
    let sequence = input.shift().split(' ');
    let line = input.shift();
    let movesCount = 0;

    while (line !== 'end') {
        movesCount++;
        const [firstIndex, secondIndex] = line.split(' ').map(Number);

        if (firstIndex === secondIndex || firstIndex < 0 || secondIndex < 0 || firstIndex >= sequence.length || secondIndex >= sequence.length) {
            const index = Math.floor(sequence.length / 2);
            sequence.splice(index, 0, `-${movesCount}a`);
            sequence.splice(index, 0, `-${movesCount}a`);

            console.log("Invalid input! Adding additional elements to the board");
        } else {
            if (sequence[firstIndex] === sequence[secondIndex]) {
                console.log((`Congrats! You have found matching elements - ${sequence[firstIndex]}!`));
                const maxIndex = Math.max(firstIndex, secondIndex);
                const minIndex = Math.min(firstIndex, secondIndex);
                sequence.splice(maxIndex, 1);
                sequence.splice(minIndex, 1);
            } else {
                console.log("Try again!");
            }
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${movesCount} turns!`);
            return;
        }

        line = input.shift()
    }

    console.log("Sorry you lose :(");
    console.log(sequence.join(' '));
}

// solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// solve(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
solve(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);