function solve(data) {

    let biggest = Number.MIN_SAFE_INTEGER
    let result = [];

    data.forEach(x => {
        if (x >= biggest) {
            biggest = x;
            result.push(biggest);
        }
    })

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(solve([1, 2, 3, 4]));
// console.log(solve([20, 3, 2, 15, 6, 1]));