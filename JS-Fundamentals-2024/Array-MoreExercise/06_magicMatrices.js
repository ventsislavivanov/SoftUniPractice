function solve(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let currentArray = matrix[row];

        let rowSum = 0;
        let colSum = 0;

        for (let col = 0; col < currentArray.length; col++) {

            rowSum += currentArray[col];
            colSum += matrix[col][row];
        }

        if (rowSum !== colSum) {
            console.log(false);
            return ;
        }
    }

    console.log(true)
}

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);