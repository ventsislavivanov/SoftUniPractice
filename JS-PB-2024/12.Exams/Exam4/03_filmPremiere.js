function solve(input) {
    let movie = input.shift();
    let packet = input.shift();
    let nTickets = +input.shift();

    let priceTicket = 0;
    switch (movie) {
        case 'John Wick':
            switch (packet) {
                case 'Drink': priceTicket = 12; break;
                case 'Popcorn': priceTicket = 15; break;
                case 'Menu': priceTicket = 19; break;
            }
            break;
        case 'Star Wars':
            switch (packet) {
                case 'Drink': priceTicket = 18; break;
                case 'Popcorn': priceTicket = 25; break;
                case 'Menu': priceTicket = 30; break;
            }
            break;
        case 'Jumanji':
            switch (packet) {
                case 'Drink': priceTicket = 9; break;
                case 'Popcorn': priceTicket = 11; break;
                case 'Menu': priceTicket = 14; break;
            }
            break;
    }
    let totalPrice = nTickets * priceTicket;
    if (movie === 'Jumanji' && nTickets === 2) {
        totalPrice = totalPrice - totalPrice * 0.15;
    }
    if (movie === 'Star Wars' && nTickets >= 4) {
        totalPrice = totalPrice - totalPrice * 0.3;
    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

solve(["John Wick", "Drink", "6"])
solve(["Star Wars", "Popcorn", "4"])
solve(["Jumanji", "Menu", "2"])
