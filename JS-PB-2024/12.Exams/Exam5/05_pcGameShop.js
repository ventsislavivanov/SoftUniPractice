function solve(input) {
    let nSoldGames = +input.shift();
    let countH = 0;
    let countF = 0;
    let countO = 0;
    let countOther = 0;

    for (let i = 0; i < nSoldGames; i++) {
        let currentGame = input[i];

        switch (currentGame) {
            case 'Hearthstone': countH++; break;
            case 'Fornite': countF++; break;
            case 'Overwatch': countO++; break;
            default: countOther++; break;
        }
    }

    console.log(`Hearthstone - ${(countH / nSoldGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(countF / nSoldGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(countO / nSoldGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(countOther / nSoldGames * 100).toFixed(2)}%`);
}

// solve(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
solve(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
