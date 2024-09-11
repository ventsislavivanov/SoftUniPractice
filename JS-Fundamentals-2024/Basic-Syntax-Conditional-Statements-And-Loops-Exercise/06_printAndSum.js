function solve(n, m) {
    let sum = 0;
    let comb = '';
    for (let i = n; i <=m ; i++) {
        comb += i + ' ';
        sum += i;
    }
    console.log(comb)
    console.log('Sum: ' +sum)
}

solve(5, 10);