function solve(matrix) {
    let equalCounter = 0;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex]
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const col = row[colIndex];

            if (rowIndex !== matrix.length - 1) {
                if (col === row[colIndex + 1]) {
                    equalCounter++;
                }

                if (col === matrix[rowIndex + 1][colIndex]) {
                    equalCounter++;
                }
            } else if (col === row[colIndex + 1] || col === matrix[rowIndex][colIndex + 1]) {
                equalCounter++;
            }
        }
    }

    console.log(equalCounter)
}

solve([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);