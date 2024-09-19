function solve(arr) {
    let health = 100;
    let coins = 0;
    let roomCount = 1;

    const rooomsStirng = arr[0];
    const rooms = rooomsStirng.split('|');
    for (const room of rooms) {
        const roomElements = room.split(' ');
        const commandOrAnimal = roomElements[0];
        const value = Number(roomElements[1]);

        if(commandOrAnimal === 'potion') {
            let addHealth = value;

            if (addHealth + health > 100) {
                addHealth = 100 - health;
            }

            health += addHealth

            console.log(`You healed for ${addHealth} hp.`);
            console.log(`Current health: ${health} hp.`)
        } else if (commandOrAnimal === 'chest') {
            coins += value;
            console.log(`You found ${coins} coins.`);
        } else {
            health -= value;

            if (health > 0) {
                console.log(`You slayed ${commandOrAnimal}.`)
            } else {
                console.log(`You died! Killed by ${commandOrAnimal}.`)
                console.log(`Best room: ${roomCount}`);
                return;
            }
        }

        roomCount++
    }


    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);