function solve(arr, commands) {
    let newArr = [];
    for (const el of commands) {
        const tokens = el.split(' ');
        const command = tokens.shift();
        const index = Number(tokens.shift());


        switch (command) {
            case 'add':
                arr.splice(index, 0, Number(tokens));
                break;
            case 'addMany':
                for (let i = 0; i < tokens.length; i++) {
                    arr.splice(index + i, 0, Number(tokens[i]));
                }
                break;
            case 'contains':
                const printIndex = arr.includes(index) ? arr.indexOf(index) : -1;
                console.log(printIndex);
                break;
            case 'remove':
                arr.splice(index, 1);
                break;
            case 'shift':
                for (let i = 0; i < index; i++) {
                    const element = arr.shift();
                    arr.push(element);
                }
                break;
            case 'sumPairs':
                let result = [];
                while (arr.length > 0) {
                    const first = arr.shift();
                    const second = arr.shift();

                    let sum = 0;
                    if (second !== undefined) {
                        sum = first + second
                    } else {
                        sum = first;
                    }

                    result.push(sum);
                }

                if (result.length > 0) {
                    arr = result;
                }
                break;
            case 'print':
                for (let el of arr) {
                    newArr.push(el);
                }
                break;
        }
    }

    console.log('[ ' + newArr.join(', ') + ' ]');
}

solve([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
