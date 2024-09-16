function solve(lostFightCount, hamletPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldCount = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 === 0) {
            expenses += hamletPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            shieldCount++;
        }
        if (shieldCount % 2 === 0 && shieldCount > 0) {
            expenses += armorPrice;
            shieldCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}