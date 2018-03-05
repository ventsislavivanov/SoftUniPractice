function diagonalSum(matrix) {
    let diagonal = 0;
    let otherDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {
        diagonal += matrix[row][row];
        otherDiagonal += matrix[row][matrix.length - row - 1]
    }
    console.log(diagonal + ' ' +otherDiagonal);
}

diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);