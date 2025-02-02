function solve(a, b, c) {
    const total = a.length + b.length + c.length;
    // const avg = Math.floor(total / 3);
    const avg = total / 3 | 0;

    console.log(total);
    console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');