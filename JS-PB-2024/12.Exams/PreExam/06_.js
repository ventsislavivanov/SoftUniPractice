function solve(input) {
    let n = +input.shift();
    let overnightStays = +input.shift();
    let transportCards = +input.shift();
    let ticketsMuseum = +input.shift();

    let priceOvernightStays = 20;
    let priceTransport = 1.6;
    let priceMuseum = 6

    let allOvernights = priceOvernightStays * overnightStays;
    let transport = transportCards * priceTransport;
    let museum = ticketsMuseum * priceMuseum;
    let totalPerPerson = allOvernights + transport + museum;
    let totalGroup = totalPerPerson * n;

    console.log((totalGroup * 1.25).toFixed(2))
}

solve([20, 14, 30, 6]);
solve(['131', '9', '33', '46'])
