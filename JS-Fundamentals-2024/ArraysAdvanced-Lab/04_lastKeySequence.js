function solve(n, k) {
    let sequence = [1]
    for (let index = 1; index < n; index++) {
        const lastKey = sequence.slice(-k);

        let sum = 0;
        for (const number of lastKey) {
            sum += number;
        }

        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}

solve(6, 3);