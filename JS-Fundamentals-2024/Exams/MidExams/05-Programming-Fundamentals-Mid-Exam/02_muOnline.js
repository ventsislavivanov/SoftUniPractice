function solve(str) {
    let health = 100;
    let bitcoins = 0;
    let roomCount = 0;

    let rooms = str.split("|");
    for (const room of rooms) {
        roomCount++;
        const tokens = room.split(" ");
        const command = tokens.shift();
        const value = Number(tokens.shift());

        switch (command) {
            case 'potion':
                let addedHealth = value;

                if (health + value > 100) {
                    addedHealth = 100 - health;
                }

                health += addedHealth;

                console.log(`You healed for ${addedHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
                break;
        }
    }

    console.log("You've made it!")
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");