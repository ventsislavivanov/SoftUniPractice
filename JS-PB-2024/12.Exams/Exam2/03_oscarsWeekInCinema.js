function solve(input) {
    let movieName = input.shift();
    let typeHall = input.shift();
    let nTickets = Number(input.shift());
    let priceTicket = 0;

    switch (movieName) {
        case "A Star Is Born":
            switch (typeHall) {
                case 'normal': priceTicket = 7.5; break;
                case 'luxury': priceTicket = 10.5; break;
                case 'ultra luxury': priceTicket = 13.5; break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (typeHall) {
                case 'normal': priceTicket = 7.35; break;
                case 'luxury': priceTicket = 9.45; break;
                case 'ultra luxury': priceTicket = 12.75; break;
            }
            break;
        case "Green Book":
            switch (typeHall) {
                case 'normal': priceTicket = 8.15; break;
                case 'luxury': priceTicket = 10.25; break;
                case 'ultra luxury': priceTicket = 13.25; break;
        }
            break;
        case "The Favourite":
            switch (typeHall) {
                case 'normal': priceTicket = 8.75; break;
                case 'luxury': priceTicket = 11.55; break;
                case 'ultra luxury': priceTicket = 13.95; break;
            }
            break;
    }

    console.log(`${movieName} -> ${(nTickets * priceTicket).toFixed(2)} lv.`)
}

solve(["A Star Is Born", "luxury", "42"]);
solve(["Green Book", "normal", "63"]);

