function solve(arr) {
    arr.sort((a, b) => a - b);
    const result = arr.slice(0, 2);

    console.log(result.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);