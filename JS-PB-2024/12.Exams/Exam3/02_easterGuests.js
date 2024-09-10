function solve(input) {
    let nGuests = +input.shift();
    let budget = +input.shift();

    let kuzunakPrice = 4;
    let eggPrice = 0.45

    let kuzunaciN = Math.ceil(nGuests / 3);
    let eggsN = Math.ceil(nGuests * 2);

    let costMoney = kuzunaciN * kuzunakPrice + eggsN * eggPrice;
    if (budget >= costMoney) {
        console.log(`Lyubo bought ${kuzunaciN} Easter bread and ${eggsN} eggs.`);
        console.log(`He has ${(budget - costMoney).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(costMoney - budget).toFixed(2)} lv. more.`);
    }
}


solve(["10",
    "35"])
solve(["9",
    "12"])
