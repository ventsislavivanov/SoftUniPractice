function solve(input) {
    let money = Number(input.shift());
    let year = Number(input.shift());

    for (let i = 1800; i <= year ; i++) {
        if (i % 2 === 0) {
            money -= 12000;
        } else  {
            money -= 12000 + ((18 + i - 1800) * 50);
        }
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`)
    }
}

solve(['50000', '1802'])