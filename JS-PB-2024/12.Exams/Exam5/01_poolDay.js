function solve(input) {
    let nPeople = +input.shift();
    let tax = +input.shift();
    let loungePrice = +input.shift();
    let umbrellaPrice = +input.shift();

    let totalTickets = nPeople * tax;
    let nLounge = Math.ceil((nPeople * 0.75));
    let totalLounge = nLounge * loungePrice;
    let nUmbrella = Math.ceil((nPeople / 2));
    let totalUmbrella = nUmbrella * umbrellaPrice;
    let total = totalTickets + totalLounge + totalUmbrella;

    console.log(`${total.toFixed(2)} lv.`);
}

solve(["21", "5.50", "4.40", "6.20"]);
solve(["50", "6", "8", "4"]);
