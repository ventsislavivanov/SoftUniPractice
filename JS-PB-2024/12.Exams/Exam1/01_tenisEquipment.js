function solve(input) {
    let priceTennisRocket = +input.shift();
    let nTennisRocket = +input.shift();
    let nPairShoes = +input.shift();
    let pricePairShoes = priceTennisRocket / 6;

    let totalTennisRockets = priceTennisRocket * nTennisRocket;
    let totalPairShoes = pricePairShoes * nPairShoes;

    let otherEquipment = (totalTennisRockets + totalPairShoes) * 0.2;
    let totalEquipment = totalTennisRockets + totalPairShoes + otherEquipment;

    let dMoney = totalEquipment / 8;
    let sMoney = totalEquipment * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(dMoney)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sMoney)}`);
}
solve(['850', '4', '2']);