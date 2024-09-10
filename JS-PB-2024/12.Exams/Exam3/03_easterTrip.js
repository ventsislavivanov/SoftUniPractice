function solve(input) {
    let country = input.shift();
    let dates = input.shift();
    let overnightsStay = +input.shift();

    let price = 0;
    switch (country) {
        case 'France':
            switch (dates) {
                case '21-23': price = 30; break;
                case '24-27': price = 35; break;
                case '28-31': price = 40; break;
            }
            break;
        case 'Italy':
            switch (dates) {
                case '21-23': price = 28; break;
                case '24-27': price = 32; break;
                case '28-31': price = 39; break;
            }
            break;
        case 'Germany':
            switch (dates) {
                case '21-23': price = 32; break;
                case '24-27': price = 37; break;
                case '28-31': price = 43; break;
            }
            break;
    }

    console.log(`Easter trip to ${country} : ${(price * overnightsStay).toFixed(2)} leva.`);
}

solve(["Germany", "24-27", "5"])
solve(["Italy", "21-23", "7"])
solve((["France", "28-31", "8"])
)