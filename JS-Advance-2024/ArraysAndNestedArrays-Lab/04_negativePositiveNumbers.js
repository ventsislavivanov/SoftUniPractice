function solve(arr) {
    let result = [];
    for (const el of arr) {
        if (el >= 0) {
            result.push(el);
        } else {
            result.unshift(el);
        }
    }

    console.log(result.join('\n'));
}

solve([7, -2, 8, 9]);