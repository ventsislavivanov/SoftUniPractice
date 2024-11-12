function solve(matrix) {
    let main = 0;
    let sec = 0;

    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
        sec += matrix[i][matrix.length - 1 - i]
    }

    console.log(main, sec)
}

solve([[20, 40],
    [10, 60]]
);
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);