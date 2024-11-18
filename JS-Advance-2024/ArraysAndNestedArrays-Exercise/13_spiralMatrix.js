function solve(rows, cols) {
    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    let num = 1;

    let top = 0;
    let bottom = rows - 1;

    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        // Fill top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // Fill right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // Fill bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        // Fill left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    // Print the matrix row by row
    matrix.forEach(row => console.log(row.join(' ')));
}

solve(5, 5)