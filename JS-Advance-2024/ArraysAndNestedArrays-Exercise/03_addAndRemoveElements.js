function solve(commands) {
    let n= 1;
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'add':
                result.push(n);
            break;
            case 'remove':
                result.pop();
                break;
        }

        n++;
    }

    return result.length ? result.join('\n') : 'Empty';
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));