function solve(input) {
    let kuzunaciN=  Number(input.shift());
    let eggsD =  Number(input.shift());
    let cookiesKg=  Number(input.shift());

    let kuzunakPrice = 3.2;
    let eggsPricePerD = 4.35;
    let cookiesPerKG = 5.4;
    let paintPerEggs = 0.15;

    let total = (kuzunaciN * kuzunakPrice)
        + (eggsPricePerD * eggsD)
        + (cookiesPerKG * cookiesKg)
        + (12 * paintPerEggs * eggsD);

    console.log(total.toFixed(2))
}
solve(["3",
    "2",
    "3"])
solve(["4",
    "4",
    "3"])
