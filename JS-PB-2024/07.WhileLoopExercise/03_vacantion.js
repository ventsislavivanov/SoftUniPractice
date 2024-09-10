function solve(input) {
    let neededMoney = Number(input.shift());
    let currentMoney = Number(input.shift());

    let indexAction = 0;
    let indexAmount = 1

    let action = input[indexAction];
    let amount = Number(input[indexAmount]);

    let counterDays = 0;
    let counterSpend = 0;
    let isNoVacantion = false;
    let totalAmount = currentMoney;


    while(neededMoney > totalAmount) {
        counterDays++;
        if (action === 'spend') {
            totalAmount -= amount;
            if(totalAmount <= 0) {
                totalAmount = 0
            }
            
            counterSpend++;
            if (counterSpend === 5) {
                isNoVacantion = true;
                break;
            }
        } else if(action === 'save') {
            totalAmount += amount;
            counterSpend = 0;
        }

        indexAction += 2;
        indexAmount += 2;
        action = input[indexAction];
        amount = Number(input[indexAmount]);
    }

    if (isNoVacantion) {
        console.log(`You can't save the money.`);
        console.log(`${counterDays}`);
    } else {
        console.log(`You saved the money for ${counterDays} days.`);
    }
}



solve(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
    
    