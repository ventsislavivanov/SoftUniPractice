function inventory(input) {
    const heroes = {};
    input.forEach(line => {
        let [name, level, items] = line.split(' / ');
        heroes[name] = {};
        heroes[name]['level'] = Number(level);
        heroes[name]['items'] = items;
    });
    const entries = Object.entries(heroes);
    const sorted = entries.sort((a, b) => a[1].level - b[1].level);
    for (const hero of sorted) {
        console.log(`Hero: ${hero[0]}`);
        console.log(`level => ${hero[1]['level']}`);
        console.log(`items => ${hero[1]['items']}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
//# sourceMappingURL=03_inventory.js.map