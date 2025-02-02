function solve(matrix) {
    const maxNumberInRow = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        maxNumberInRow.push(Math.max(...matrix[rowIndex]));
    }

    return Math.max(...maxNumberInRow);
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
));
// solve([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]
// );