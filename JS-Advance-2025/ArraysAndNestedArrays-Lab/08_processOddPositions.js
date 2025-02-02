function solve(arr) {
    return  arr.filter((v, i) => i % 2 !== 0)
        .map((el) => el * 2)
        .reverse();
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));;