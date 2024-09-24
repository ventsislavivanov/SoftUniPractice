function solve(arr) {
    let guests = [];
    for (const command of arr) {
        const tokens = command.split(' ');
        const name = tokens[0];

        if (tokens.includes('not') ) {
            if (guests.includes(name)) {
                const idx = guests.indexOf(name);
                guests.splice(idx, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                guests.push(name);
            }
        }
    }

    console.log(guests.join('\n'));
}

// solve(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
solve(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);