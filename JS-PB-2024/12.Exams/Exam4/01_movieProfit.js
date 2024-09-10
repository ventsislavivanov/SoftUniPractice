function solve(input) {
    let movie = input.shift();
    let nDays = +input.shift();
    let nTickets = +input.shift();
    let priceTicket = +input.shift();
    let cinemaTax = +input.shift();

    let totalTicketsPrice = priceTicket * nTickets * nDays;
    let percent = totalTicketsPrice * cinemaTax / 100;

    console.log(`The profit from the movie ${movie} is ${(totalTicketsPrice - percent).toFixed(2)} lv.`);
}

solve(["The Programmer", "20", "500", "7.50", "7"]);
solve(["Python Basics", "40", "34785", "10.45", "14"]);
solve(["The Jungle", "22", "20500", "9.37", "30"]);
