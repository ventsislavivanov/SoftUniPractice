function solve(input) {
    let n = Number(input.shift());

    let water = 20;
    let internet = 15;
    let totalElectricity = 0;
    let totalOther = 0;

    for (let i = 0; i < n; i++) {
        let electricity = Number(input[i]);
        let other = (electricity + water + internet) * 1.2;
        totalElectricity += electricity;
        totalOther += other;
    }

    let totalWater = water * n;
    let totalInternet = internet * n;
    let all = (totalElectricity + totalWater + totalInternet + totalOther) / n;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${(totalWater).toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${all.toFixed(2)} lv`);
}

solve([
    '5',
    '68.63',
    '89.25',
    '132.53',
    '93.53',
    '63.22'

])