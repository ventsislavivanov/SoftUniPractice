function solve(input) {
    let drink = input.shift();
    let taste = input.shift();
    let n = +input.shift();

    let price = 0;
    switch (drink) {
        case 'Espresso':
            switch (taste) {
                case 'Without':
                    price = 0.9;
                    break;
                case 'Normal':
                    price = 1;
                    break;
                case 'Extra':
                    price = 1.2;
                    break;
            }
            break;
        case 'Cappuccino':
            switch (taste) {
                case 'Without':
                    price = 1;
                    break;
                case 'Normal':
                    price = 1.2;
                    break;
                case 'Extra':
                    price = 1.6;
                    break;
            }
            break;
        case 'Tea':
            switch (taste) {
                case 'Without':
                    price = 0.5;
                    break;
                case 'Normal':
                    price = 0.6;
                    break;
                case 'Extra':
                    price = 0.7;
                    break;
            }
            break;
    }
    let total = price * n;
    if (taste === 'Without') {
        total = total  - total * 0.35;
    }
    if (drink === 'Espresso' && n >= 5) {
        total = total - total * 0.25;
    }
    if (total > 15) {
        total = total - total * 0.2;
    }

    console.log(`You bought ${n} cups of ${drink} for ${(total).toFixed(2)} lv.`)
}

solve(["Espresso", "Without", "10"])
solve(["Cappuccino", "Normal", "13"])
solve(["Tea", "Extra", "3"])
