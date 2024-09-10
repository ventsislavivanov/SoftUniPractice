function solve(input) {
    let nDays = Number(input.shift());
    let foodKg = Number(input.shift());
    let dogFoodPerDayInKg = Number(input.shift());
    let catFoodPerDayInKg = Number(input.shift());
    let turtleFoodPerDayInKg = Number(input.shift()) / 1000;

    let totalNeedFood = dogFoodPerDayInKg * nDays + catFoodPerDayInKg * nDays + turtleFoodPerDayInKg * nDays;

    if(foodKg >= totalNeedFood) {
        console.log(`${Math.floor(foodKg - totalNeedFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeedFood -foodKg)} more kilos of food are needed.`);
    }
}

solve