function solve(input) {
    let budgetGroup = Number(input.shift());
    let season = input.shift();
    let counterGroup = Number(input.shift());

    let rent = 0;

    if(season === "Spring") {
        rent = 3000;
    } else if(season === 'Summer' || season === 'Autumn') {
        rent = 4200;
    } else if(season === 'Winter') {
        rent = 2600;
    }

    if(counterGroup <= 6) {
        rent = rent - rent * 0.1;
    } else if(counterGroup >= 7 && counterGroup <= 11) {
        rent = rent - rent * 0.15;
    } else if (counterGroup >= 12) {
        rent = rent - rent * 0.25;
    }

    if(season !== 'Autumn' && counterGroup % 2 === 0) {
        rent = rent - rent * 0.05
    }

    let leftMoney = (budgetGroup - rent).toFixed(2);
    let neededMoney = (rent - budgetGroup).toFixed(2);
    if(budgetGroup >= rent) {
        console.log(`Yes! You have ${leftMoney} leva left.`);
    } else {
        console.log(`Not enough money! You need ${neededMoney} leva.`);
    }
}

solve(["2000",
    "Winter",
    "13"])
    
    
    