function solve(input) {
    let wantedProfit = +input.shift();
    let index = 0;
    let cocktail = input[index++];
    let nCocktails = Number(input[index++]);
    let sumTotals = 0;

    while (true) {
        if (cocktail === "Party!") {
            console.log(`We need ${(wantedProfit - sumTotals).toFixed(2)} leva more.`)
            break;
        }
        let cocktailPrice = cocktail.length
        let totalCocktailPrice = nCocktails * cocktailPrice;
        if (totalCocktailPrice % 2 !== 0) {
            totalCocktailPrice = totalCocktailPrice - totalCocktailPrice * 0.25;
        }

        sumTotals += totalCocktailPrice;

        if (sumTotals >= wantedProfit) {
            console.log("Target acquired.");
            break;
        }
        cocktail = input[index++];
        nCocktails = Number(input[index++]);
    }
    console.log(`Club income - ${sumTotals.toFixed(2)} leva.`);
}

// solve(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
solve(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
