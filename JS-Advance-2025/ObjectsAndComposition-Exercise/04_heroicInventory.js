function solve(arr) {
    const heroes = [];

    for (const heroStr of arr) {
        let [name, level, items] = heroStr.split(' / ');
        heroes.push({ name, level: Number(level), items: items ? items.split(', ') : [] });
    }

    return JSON.stringify(heroes);
}

// console.log(solve(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// ));
console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']
));



