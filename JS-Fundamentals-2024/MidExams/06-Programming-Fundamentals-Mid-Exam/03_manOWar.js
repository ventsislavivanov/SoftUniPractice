function solve(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());

    let line = input.shift();

    while (line !== "Retire") {
        let tokens = line.split(" ");
        let command = tokens.shift();

        if (command === "Fire") {
            const index = Number(tokens.shift());
            const damage = Number(tokens.shift());

            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;

                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command === "Defend") {
            const startIndex = Number(tokens.shift());
            const endIndex = Number(tokens.shift());
            const damage = Number(tokens.shift());

            if (startIndex >= 0 &&
                startIndex < pirateShip.length &&
                endIndex >= 0 &&
                endIndex < pirateShip.length
            ) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;

                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.")
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            const index = Number(tokens.shift());
            let healing = Number(tokens.shift());

            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += healing;

                if (pirateShip[index] > maxHealth){
                    pirateShip[index] = maxHealth;
                }
            }
        } else if (command === 'Status') {
            const count = pirateShip
                .filter(s => s < maxHealth * 0.2).length;
            console.log(`${count} sections need repair.`);
        }

        line = input.shift();
    }

    const pirateShipSum = pirateShip.reduce((a, b) => a + b);
    const warshipSum = warShip.reduce((a, b) => a + b);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}

solve([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

// solve(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"]);
