function solve(input) {
    let amount = Number(input[0]);
    amount = Math.floor(amount * 100)
    let coins = 0;

    while(amount > 0) {
        if(amount >= 200) {
            amount -= 200;
            coins++;
        } else if(amount >= 100) {
            amount -= 100;
            coins++;
        } else if(amount >= 50) {
            amount -= 50;
            coins++;
        } else if(amount >= 20) {
            amount -= 20;
            coins++;
        }  else if(amount >= 10) {
            amount -= 10;
            coins++;
        } else if(amount >= 5) {
            amount -= 5;
            coins++;
        }  else if(amount >= 2) {
            amount -= 2;
            coins++;
        } else if(amount >= 1) {
            amount -= 1;
            coins++;
        }
    }

    console.log(coins)
}

// solve(["1.23"]);
// solve(["2"])
// solve(["0.56"])
solve(["2.73"])