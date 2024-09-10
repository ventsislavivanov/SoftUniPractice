function solve(input) {
    let holidayPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let amount = puzzels * 2.6 +
                dolls * 3 +
                bears * 4.1 +
                minions * 8.2 +
                trucks * 2;
    let allToys = puzzels + dolls + bears + minions + trucks;
    
    let totalAmount = 0;
    let discount = 0;
    if (allToys >= 50) {
        discount = amount * 25 / 100;
    }

    totalAmount = amount - discount;
    let profit = totalAmount - (totalAmount * 10 / 100);

    if (profit >= holidayPrice) {
        let left = (profit - holidayPrice).toFixed(2);
        console.log(`Yes! ${left} lv left.`);
    } else {
        let needed = (holidayPrice - profit).toFixed(2);
        console.log(`Not enough money! ${needed} lv needed.`)
    }
}

solve(
    (["40.8",
        "20",
        "25",
        "30",
        "50",
        "10"])
       
);