function solve(number, arr) {
    let output = '';
    for (let i = number - 1; i >= 0; i--) {
        output += arr[i] + ' ';
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50])