function solve(input) {
    let money = +input.shift();
    let profitPerDay = +input.shift();
    let costAllPeriod= +input.shift();
    let giftPrice = +input.shift();

    let savedMoney = 5 * money;
    let profitMoney = 5 * profitPerDay;
    let totalSave = savedMoney + profitMoney;
    let currentMoney = totalSave - costAllPeriod;

    if (currentMoney >= giftPrice) {
        console.log(`Profit: ${currentMoney.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${(giftPrice - currentMoney).toFixed(2)} BGN.`);
    }
}

solve([5.12, 32.05, 15, 150]);
solve([2.10, 17.50, 20.20, 148.50]);