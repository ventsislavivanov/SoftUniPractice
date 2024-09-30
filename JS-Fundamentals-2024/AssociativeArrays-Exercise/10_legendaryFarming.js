function solve(str) {
    const materialsData = str.split(" ");
    const keyMaterialQuantity = { shards: 0, fragments: 0, motes: 0 };
    const junkMaterialQuantity = {};
    const legendary = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    }

    while (materialsData.length > 0) {
        const quantity = Number(materialsData.shift());
        const material = materialsData.shift().toLowerCase();

        if (material in keyMaterialQuantity) {
            keyMaterialQuantity[material] += quantity;

            if (keyMaterialQuantity[material] >= 250) {
                keyMaterialQuantity[material] -= 250;
                const legendaryItem = legendary[material];
                console.log(`${legendaryItem} obtained!`);
                break;
            }
        } else if (material in junkMaterialQuantity) {
            junkMaterialQuantity[material] += quantity;
        } else {
            junkMaterialQuantity[material] = quantity;
        }
    }

    const keyMaterialEntries = Object.entries(keyMaterialQuantity).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (const [material, quantity] of keyMaterialEntries) {
        console.log(`${material}: ${quantity}`);
    }

    const junkMaterialEntries = Object.entries(junkMaterialQuantity).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [material, quantity] of junkMaterialEntries) {
        console.log(`${material}: ${quantity}`);
    }
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')