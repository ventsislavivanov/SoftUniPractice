function solve(input) {
    let groceries = input.shift().split('!');
    let line = input.shift();

    while (line !== 'Go Shopping!') {
        const [command, item, newItem] = line.split(' ');
        const index = groceries.indexOf(item);

        switch (command) {
            case 'Urgent':
                if (! groceries.includes(item)) {
                    groceries.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (groceries.includes(item)) {
                    groceries.splice(index, 1);
                }
                break;
            case 'Correct':
                if (groceries.includes(item)) {
                    groceries[index] = newItem;
                }
                break;
            case 'Rearrange':
                if (groceries.includes(item)) {
                    groceries.splice(index, 1);
                    groceries.push(item);
                }
                break;
            default: break;
        }

        line = input.shift();
    }

    console.log(groceries.join(', '));
}

// solve(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
