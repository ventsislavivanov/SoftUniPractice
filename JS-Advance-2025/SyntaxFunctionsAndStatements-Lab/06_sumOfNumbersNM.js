function solve(n, m) {
    n = Number(n);
    m = Number(m);

    const end = m - n
    let sum = 0;
    
    for (let i = 0; i <= end ; i++) {
        sum += n + i;
    }

    console.log(sum)
}

solve('-8', '20');