function solve(arr) {
    const equipment = arr.shift().split(' ');

    for (const el of arr) {
        let [command, item] = el.split(' ');

        switch (command) {
            case 'Buy':
                if (!equipment.includes(item)) {
                    equipment.push(item);
                }
                break;
            case 'Trash':
                if (equipment.includes(item)) {
                    const index = equipment.indexOf(item);
                    equipment.splice(index,1);
                }
                break;
            case 'Repair':
                if (equipment.includes(item)) {
                    const index = equipment.indexOf(item);
                    equipment.splice(index,1);
                    equipment.push(item);
                }
                break;
            case 'Upgrade':
                const tokens = item.split('-');
                const basicItem = tokens.shift();
                const upgradeItem = tokens.shift();
                if (equipment.includes(basicItem)) {
                    const index = equipment.indexOf(basicItem);
                    equipment.splice(index + 1,0, `${basicItem}:${upgradeItem}`);
                }
                break;
        }
    }

    console.log(equipment.join(' '));
}

// solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']); //SWORD SWORD:Steel Bag Spear
solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']); //SWORD Spear Shield