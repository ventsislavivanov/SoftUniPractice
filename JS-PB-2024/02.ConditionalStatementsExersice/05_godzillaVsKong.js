function solve(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothes = Number(input[2]);

    let decor = budget * 0.1;
    let amountClothes = statists * clothes;

    if (statists > 150) {
        amountClothes = amountClothes - amountClothes * 0.1
    }

    let filmCost = decor + amountClothes

    if (filmCost > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(filmCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - filmCost).toFixed(2)} leva left.`);
    }
}

solve(["20000",
    "120",
    "55.5"])
    ;

// solve(["15437.62",
//     "186",
// "57.99"]);
        