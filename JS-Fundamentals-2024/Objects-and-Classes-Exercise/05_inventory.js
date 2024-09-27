function solve(arr) {
    const heroes = [];

    for (const heroStr of arr) {
        let [heroName, level, items] = heroStr.split(' / ');
        const hero = {
            name: heroName,
            level: Number(level),
            items
        }
        heroes.push(hero);
    }

    const sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (const heroObj of sortedHeroes) {
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }
}


solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

// solve([
//         'Batman / 2 / Banana, Gun',
//         'Superman / 18 / Sword',
//         'Poppy / 28 / Sentinel, Antara'
//     ]
// );