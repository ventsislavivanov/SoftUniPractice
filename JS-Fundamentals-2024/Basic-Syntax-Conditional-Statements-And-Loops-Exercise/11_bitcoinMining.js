function solve(arr) {
    let bitcoinCount = 0;
    let firstBitcoinDay = 0;
    let money = 0
    let currentDay = 1;

    for (let i = 0; i < arr.length; i++) {
        let gold = arr[i];

        if (currentDay % 3 === 0) {
            gold *= 0.7;
        }

        let moneyFromGold = gold * 67.51;
        money += moneyFromGold;

        while (money >= 11949.16) {
            bitcoinCount++;

            if (bitcoinCount === 1) {
                firstBitcoinDay = currentDay
            }

            money -= 11949.16;
        }

        currentDay++;
    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstBitcoinDay > 0 ) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);