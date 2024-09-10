function solve(input) {
    let budget = +input.shift();
    let nStatists = +input.shift();
    let priceOutfit = +input.shift();
    let decor = budget * 0.1;
    if (nStatists > 150) {
        priceOutfit = priceOutfit - priceOutfit * 0.1;
    }

    let totalPriceOutfit = priceOutfit * nStatists;
    let movieCost = decor + totalPriceOutfit;

    if (movieCost > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(movieCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - movieCost).toFixed(2)} leva left.`);
    }
}

solve(["20000", "120", "55.5"]);
solve(["15437.62", "186", "57.99"]);
solve(["9587.88", "222", "55.68"]);

