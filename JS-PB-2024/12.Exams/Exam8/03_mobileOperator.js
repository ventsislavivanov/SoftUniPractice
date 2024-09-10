function solve(input) {
    let period = input.shift();
    let typeContract = input.shift();
    let isInternet = input.shift() === 'yes';
    let nMonth = +input.shift();

    let price = 0;
    switch (period) {
        case 'one':
            switch (typeContract) {
                case 'Small': price = 9.98; break;
                case 'Middle': price = 18.99; break;
                case 'Large': price = 25.98; break;
                case 'ExtraLarge': price = 35.99; break;
            }
            break;
        case 'two':
            switch (typeContract) {
                case 'Small': price = 8.58; break;
                case 'Middle': price = 17.09; break;
                case 'Large': price = 23.59; break;
                case 'ExtraLarge': price = 31.79; break;
            }
            break;
    }

    if (isInternet) {
        if (price > 30) {
            price = price + 3.85;
        } else if(price > 10 && price <= 30) {
            price = price + 4.35;
        } else if (price < 10) {
            price = price + 5.5;
        }
    }

    let totalSum = price * nMonth;

    if (period === 'two') {
        totalSum = totalSum - totalSum * 0.0375;
    }

    console.log(totalSum.toFixed(2) + " lv.");
}

solve(["one", "Small", "yes", "10"]);
solve(["two", "Large", "no", "10"]);
