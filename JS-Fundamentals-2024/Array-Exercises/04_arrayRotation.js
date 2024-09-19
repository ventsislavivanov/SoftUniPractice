function solve(arr, rotations) {
    for (let i = 1; i <=rotations ; i++) {
        const firsEl = arr.shift();
        arr.push(firsEl);
    }

    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);