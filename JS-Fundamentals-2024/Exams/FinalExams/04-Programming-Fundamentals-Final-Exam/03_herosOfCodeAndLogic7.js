function solve(input) {
    const n = input.shift();
    const heros = {};

    for (let i = 0; i < n; i++) {
        const [name, hp, mp] = input.shift().split(' ');
        heros[name] = {};
        heros[name]['hp'] = Number(hp);
        heros[name]['mp'] = Number(mp);
    }

    let line = input.shift();
    while (line !== "End") {
        const tokens = line.split(" - ");
        const command = tokens.shift();
        const name = tokens.shift();

        if (command === "CastSpell") {
            const mana = Number(tokens[0]);
            const spell = tokens[1];

            if (mana <= heros[name]['mp']) {
                heros[name]['mp'] -= mana;
                console.log(`${name} has successfully cast ${spell} and now has ${heros[name]['mp']} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`)
            }
        } else if (command === "TakeDamage") {
            const dmg = Number(tokens[0]);
            const attacker = tokens[1];

            if (dmg < heros[name]['hp']) {
                heros[name]['hp'] -= dmg;
                console.log(`${name} was hit for ${dmg} HP by ${attacker} and now has ${heros[name]['hp']} HP left!`);
            } else {
                delete heros[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }

        } else if (command === "Recharge") {
            let drinkingMana = Number(tokens[0]);


            if (heros[name]['mp'] + drinkingMana > 200) {
                drinkingMana = 200 - heros[name]['mp'];
            }
            heros[name]['mp'] += drinkingMana;

            console.log(`${name} recharged for ${drinkingMana} MP!`);
        } else if (command === "Heal") {
            let healing = Number(tokens[0]);

            if (heros[name]['hp'] + healing > 100) {
               healing = 100 - heros[name]['hp'];
            }
            heros[name]['hp'] += healing;

            console.log(`${name} healed for ${healing} HP!`);
        }

        line = input.shift();
    }

    for (const key in heros) {
        console.log(key);
        console.log(`  HP: ${heros[key]['hp']}`);
        console.log(`  MP: ${heros[key]['mp']}`);
    }
}

// solve([
//         "2",
//         "Solmyr 85 120",
//         "Kyrre 99 50",
//         "Heal - Solmyr - 10",
//         "Recharge - Solmyr - 50",
//         "TakeDamage - Kyrre - 66 - Orc",
//         "CastSpell - Kyrre - 15 - ViewEarth",
//         "End"
//     ]
// );
//Solmyr healed for 10 HP!
// Solmyr recharged for 50 MP!
// Kyrre was hit for 66 HP by Orc and now has 33 HP left!
// Kyrre has successfully cast ViewEarth and now has 35 MP!
// Solmyr
//   HP: 95
//   MP: 170
// Kyrre
//   HP: 33
//   MP: 35

solve([
        "4",
        "Adela 90 150",
        "SirMullich 70 40",
        "Ivor 1 111",
        "Tyris 94 61",
        "Heal - SirMullich - 50",
        "Recharge - Adela - 100",
        "CastSpell - Tyris - 1000 - Fireball",
        "TakeDamage - Tyris - 99 - Fireball",
        "TakeDamage - Ivor - 3 - Mosquito",
        "End"
    ]
);
//SirMullich healed for 30 HP!
// Adela recharged for 50 MP!
// Tyris does not have enough MP to cast Fireball!
// Tyris has been killed by Fireball!
// Ivor has been killed by Mosquito!
// Adela
//   HP: 90
//   MP: 200
// SirMullich
//   HP: 100
//   MP: 40