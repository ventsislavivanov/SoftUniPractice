function solve(n, k) {
    let sequence = [1];

    for(let i = 1; i < n; i++){
        sequence[i] = sumLastK(sequence, k);
    }

    function sumLastK(array = sequence, k) {
        k = array.length > k ? k : array.length;
        let sum = 0;

        for(let i = 1; i <= k; i++){
            sum += array[array.length - i];
        }

        return sum;
    }

    return sequence;
}

console.log(solve(8, 2));