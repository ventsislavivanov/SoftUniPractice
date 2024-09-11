function solve(a, b, c) {
    let input = [a, b, c];

    input.sort(function (a, b) {
        return b - a;
    });

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}

solve(0, 0, 2);