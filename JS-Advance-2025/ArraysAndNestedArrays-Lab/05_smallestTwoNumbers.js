function solve(arr) {
    return arr.sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));