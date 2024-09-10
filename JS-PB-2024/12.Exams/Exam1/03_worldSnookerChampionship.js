function solve(input) {
    let stage = input.shift();
    let ticketType = input.shift();
    let nTickets = +input.shift();
    let isPic = input.shift() === 'Y';

    let priceTicket = 0;
    switch (ticketType) {
        case 'Standard':
            switch (stage) {
                case 'Quarter final':
                    priceTicket = 55.5;
                    break;
                case 'Semi final':
                    priceTicket = 75.88;
                    break;
                case 'Final':
                    priceTicket = 110.1;
                    break;
            }
            break;
        case 'Premium':
            switch (stage) {
                case 'Quarter final':
                    priceTicket = 105.2;
                    break;
                case 'Semi final':
                    priceTicket = 125.22;
                    break;
                case 'Final':
                    priceTicket = 160.66;
                    break;
            }
            break;
        case 'VIP':
            switch (stage) {
                case 'Quarter final':
                    priceTicket = 118.9;
                    break;
                case 'Semi final':
                    priceTicket = 300.4;
                    break;
                case 'Final':
                    priceTicket = 400;
                    break;
            }
            break;
    }

    let allTicketPrice = nTickets * priceTicket;

    if (allTicketPrice > 4000) {
        allTicketPrice = allTicketPrice - allTicketPrice * 0.25;
        isPic = false;
    } else if (allTicketPrice > 2500) {
        allTicketPrice = allTicketPrice - allTicketPrice * 0.1;
    }

    if (isPic) {
        allTicketPrice = allTicketPrice + (40 * nTickets);
    }

    console.log(allTicketPrice.toFixed(2));
}

// solve(['Final', 'Premium', '25', 'Y'])
solve(['Semi final', 'VIP', '9', 'Y'])