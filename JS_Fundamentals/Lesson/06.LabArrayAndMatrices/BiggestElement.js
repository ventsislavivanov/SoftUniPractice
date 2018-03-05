// function biggestElement(matrix) {
//     console.log(
//         matrix.map(arr => arr.sort((a, b) => a < b)[0])
//             .sort((a, b) => a < b)[0]
//     );
// }

function biggestElement(matrix) {
    let min = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > min) {
                min = matrix[row][col];
            }
        }
    }
    console.log(min);
}

// function biggestElement(matrix) {
//     let biggestNum = Number.NEGATIVE_INFINITY;
//     matrix.forEach(
//         row => row.forEach(
//             col => biggestNum = Math.max(biggestNum, col)
//         )
//     );
//     console.log(biggestNum);
// }

biggestElement([[20, 50, 10], [8, 33, 145]]);