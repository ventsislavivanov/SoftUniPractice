function solve(input) {
    let priceStrawberries = +input.shift();
    let kgBananas = +input.shift();
    let kgOranges = +input.shift();
    let kgRaspberries = +input.shift();
    let kgStrawberries = +input.shift();

    let priceRaspberries = priceStrawberries / 2;
    let priceOrange = priceRaspberries * 0.6;
    let priceBananas = priceRaspberries * 0.2;

    let sumStrawberries = priceStrawberries * kgStrawberries;
    let sumRaspberries = priceRaspberries * kgRaspberries;
    let sumOrange = priceOrange * kgOranges;
    let sumBananas = priceBananas * kgBananas;
    console.log((sumRaspberries + sumOrange + sumBananas +sumStrawberries).toFixed(2));
}

solve(["48", "10", "3.3", "6.5", "1.7"]);
// solve(["63.5", "3.57", "6.35", "8.15", "2.5"])