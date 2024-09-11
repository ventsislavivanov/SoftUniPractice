function solve(maxRow) {
    for (let row = 1; row <= maxRow; row++) {
        console.log(`${row} `.repeat(row));
    }
}

solve(6);