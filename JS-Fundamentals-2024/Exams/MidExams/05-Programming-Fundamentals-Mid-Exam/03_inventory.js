function solve(input) {
    let items = input.shift().split(", ");
    let line = input.shift();

    while (line !== 'Craft!') {
        let [command, item] = line.split(" - ");

        switch (command) {
            case 'Collect':
                if (!items.includes(item)) {
                    items.push(item);
                }
                break;
            case 'Drop':
                if (items.includes(item)) {
                    const index = items.indexOf(item);
                    items.splice(index, 1);
                }
                break;
            case 'Combine Items':
                const tokens = item.split(":");
                const oldItem = tokens.shift();
                const newItem = tokens.shift();
                if (items.includes(oldItem)) {
                    const index = items.indexOf(oldItem);
                    items.splice(index, 0, newItem);
                }
                break;
            case 'Renew':
                if (items.includes(item)) {
                    const index = items.indexOf(item);
                    items.splice(index, 1);
                    items.push(item);
                }
                break;
        }

        line = input.shift();
    }

    console.log(items.join(", "));
}
// solve([
//         'Iron, Wood, Sword',
//         'Collect - Gold',
//         'Drop - Wood',
//         'Craft!'
//     ]
// );

solve([
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]
);