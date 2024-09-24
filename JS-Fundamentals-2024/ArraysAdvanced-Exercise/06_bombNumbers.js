function solve(sequence, bomb) {
    const bombNum = bomb.shift();
    const powerBomb = bomb.shift();
    const index = sequence.indexOf(bombNum);

    while (sequence.includes(bombNum)) {
        let elementsToRemove = 2 * powerBomb + 1
        let startIndex = index - powerBomb;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }

        sequence.splice(startIndex, elementsToRemove);
    }

    let sum = 0;
    for (const el of sequence) {
        sum += Number(el);
    }

    console.log(sum);
}

// solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);