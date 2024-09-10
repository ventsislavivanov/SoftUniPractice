function solve(input) {
    let voucher = Number(input.shift());
    let boughtTicked = 0;
    let otherPurchase = 0;

    for (let i = 0; i < input.length; i++) {
        let inputElement = input[i];
        if (inputElement === 'End') {
            break;
        }
        let purchaseLength = inputElement.length;
        let moviePrice = 0;
        let otherPrice = 0;
        let currentPrice = 0;

        if (purchaseLength > 8) {
            moviePrice = inputElement[0].charCodeAt(0) + inputElement[1].charCodeAt(0);
            currentPrice = moviePrice;
        } else {
            otherPrice = inputElement[0].charCodeAt(0);
            currentPrice = otherPrice;
        }

        if (currentPrice > voucher) {
            break;
        }

        if (moviePrice > 0) {
            voucher -= moviePrice;
            boughtTicked++;
        }
        if (otherPrice > 0) {
            voucher -= otherPrice;
            otherPurchase++;
        }
    }

    console.log(`${boughtTicked}`);
    console.log(`${otherPurchase}`);
}

// solve(["300", "Captain Marvel", "popcorn", "Pepsi"]);
solve(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);
