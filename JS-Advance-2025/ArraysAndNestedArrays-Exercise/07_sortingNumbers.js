function solve(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    const length = arr.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        result.push(arr[i]);
        result.push(arr[length - (i + 1)]);

        if (length % 2 !== 0 && (i + 1) === Math.floor(length / 2)) {
            result.push(arr[length - (i + 2)]);
        }
    }

    return result
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
//[-3, 65, 1, 63, 3, 56, 18, 52]
