function solve(input) {
    let budget = +input.shift();
    let destination = input.shift();
    let season = input.shift();
    let nDays = +input.shift();


    let price = 0;
    switch (season) {
        case 'Winter':
            switch (destination) {
                case 'Dubai': price = 45000; break;
                case 'Sofia': price = 17000; break;
                case 'London': price = 24000; break;
            }
            break;
        case 'Summer':
            switch (destination) {
                case 'Dubai': price = 40000; break;
                case 'Sofia': price = 12500; break;
                case 'London': price = 20250; break;
            }
            break;
    }

    let totalPrice = nDays * price;
    if (destination === 'Dubai') {
        totalPrice = totalPrice * 0.7;
    }
    if (destination === 'Sofia') {
        totalPrice = totalPrice * 1.25;
    }

    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

solve(["400000",
    "Sofia",
    "Winter",
    "20"])

solve(["1000000",
    "Dubai",
    "Summer",
    "5"])

solve(["200000",
    "London",
    "Summer",
    "7"])


