function solve(input) {
    let budget = +input.shift();
    let nSeries = +input.shift();
    let sum = 0;
    let index = 0;
    let name = input[index++];
    let price = Number(input[index++]);

    for (let i = 0; i < nSeries; i++) {
        switch (name) {
            case 'Thrones': price = price - price * 0.5; break;
            case 'Lucifer': price = price - price * 0.4; break;
            case 'Protector': price = price - price * 0.3; break;
            case 'TotalDrama': price = price - price * 0.2; break;
            case 'Area': price = price - price * 0.1; break;
        }

        sum += price

        name = input[index++];
        price = Number(input[index++]);
    }

    if (budget >= sum) {
        console.log(`You bought all the series and left with ${(budget - sum).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(sum - budget).toFixed(2)} lv. more to buy the series!`);
    }
}

solve(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"])

solve(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])
