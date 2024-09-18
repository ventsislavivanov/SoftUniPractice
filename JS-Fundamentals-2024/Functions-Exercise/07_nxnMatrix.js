function solve(num) {
    for (let row = 0; row < num; row++) {
        let combo = ''
        for (let col = 0; col < num; col++) {
            combo += num + ' ';
        }
        console.log(combo)
    }
}

solve(3);
// solve(7);