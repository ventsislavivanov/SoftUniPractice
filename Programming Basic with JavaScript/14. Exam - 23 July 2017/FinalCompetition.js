function finalCompetitions([arg1, arg2, arg3, arg4]) {
    let numbersOfDancer = Number(arg1);
    let points = parseFloat(arg2);
    let season = arg3;
    let place = arg4;
    
    let price = 0;
    let percentCost = 0;

    if(place == "Bulgaria" ) {
        price = points * numbersOfDancer
        if (season == "summer") {
        	percentCost = 0.05;
        } else if (season == "winter"){
        	percentCost = 0.08;
        }
    } else if (place == "Abroad") {
        price = points * numbersOfDancer + (points * numbersOfDancer) * 0.5;
        if (season == "summer") {
        	percentCost = 0.1;
        } else if (season == "winter") {
        	percentCost = 0.15;
        }
    }

    let moneyAfterCost = price -  price * percentCost;
    let moneyForCharity = moneyAfterCost * 0.75;
    let remainingMoney = moneyAfterCost - moneyForCharity;
    let moneyForDancer = remainingMoney / numbersOfDancer;

    console.log("Charity - " + (moneyForCharity).toFixed(2));
    console.log("Money per dancer - " + (moneyForDancer).toFixed(2));
    console.log();
}

finalCompetitions(["1", "89.5", "summer", "Abroad"]);

finalCompetitions(["25", "98", "winter", "Bulgaria"]);