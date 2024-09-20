function solve(commands) {
    let arr = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                arr.push(firstNum);
                break;
            case 'Remove':
                arr = arr.filter(el => el !== firstNum);
                break;
            case 'RemoveAt':
                arr.splice(firstNum, 1);
                break;
            case 'Insert':
                arr.splice(secondNum, 0, firstNum);
                break;
        }
    }

    console.log(arr.join(" "));
}

solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
//4 53 6 8 43 3
// solve(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
//6 2 6 65 42 8