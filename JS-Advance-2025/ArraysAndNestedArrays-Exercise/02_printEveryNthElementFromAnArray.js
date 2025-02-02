function solve(arr, step) {
    let sequence = [];

    for (let i = 0; i < arr.length; i += step) {
        sequence.push(arr[i]);
    }

    return sequence;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));
console.log(solve(['1', '2', '3', '4', '5'], 6));