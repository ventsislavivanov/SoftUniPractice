function solve(input) {
    let ageLily = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let toyPrice = Number(input.shift());

    let toyCounter = 0, moneyCounter = 0;
    for (let i = 1; i <= ageLily; i++) {
        if(i % 2 === 0) {
            moneyCounter++;
        } else {
            toyCounter++;
        }        
    }

    let birthDayMoney = 0;
    for (let i = 1; i <= moneyCounter; i++) {
        birthDayMoney += i * 10;        
    }

    birthDayMoney = birthDayMoney - moneyCounter;
    let sevedMoney = birthDayMoney + toyPrice * toyCounter;

    let leftMoney = (sevedMoney - washingMachinePrice).toFixed(2);
    let neededMoney = (washingMachinePrice - sevedMoney).toFixed(2);

    if(sevedMoney >= washingMachinePrice) {
        console.log(`Yes! ${leftMoney}`);
    } else {
        console.log(`No! ${neededMoney}`);
    }
}

solve(["21",
    "1570.98",
    "3"])
    
    