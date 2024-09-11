function solve(x1, y1, x2, y2) {
    let a = Math.abs((x2 - x1));
    let b = Math.abs((y2 - y1));
    let c = Math.sqrt((a * a + b * b));
    console.log(c);
}

solve(2, 4, 5, 0);