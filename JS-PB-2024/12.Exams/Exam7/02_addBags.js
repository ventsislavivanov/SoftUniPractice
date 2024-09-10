function solve(input) {
    let luggageOver20 = +input.shift();
    let luggageKg = +input.shift();
    let nDays = +input.shift();
    let nLuggage = +input.shift();

    let priceLuggage = 0;
    if (luggageKg < 10) {
        priceLuggage = luggageOver20 * 0.2;
    } else if(luggageKg >= 10 && luggageKg <= 20) {
        priceLuggage = luggageOver20 * 0.5;
    } else if (luggageKg > 20) {
        priceLuggage = luggageOver20;
    }

    if (nDays < 7) {
        priceLuggage = priceLuggage * 1.4;
    } else if (nDays >= 7 && nDays <= 30) {
        priceLuggage = priceLuggage * 1.15;
    } else if (nDays > 30) {
        priceLuggage = priceLuggage * 1.1;
    }

    let total = priceLuggage * nLuggage
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}

solve(["30", "18", "15", "2"]);
solve(["25.50", "5", "36", "6"]);
solve(["63.80", "23", "3", "1"]);
