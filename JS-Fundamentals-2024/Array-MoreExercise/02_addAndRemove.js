function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];
        if (command === 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }

    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('Empty')
    }
}