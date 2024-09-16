function solve(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const j = arr.length - 1 - i;
        const temp = arr[i];

        arr[i] = arr[j];
        arr[j] = temp;

    }

    console.log(arr.join(' '));
}

solve(['abc', 'def', 'hig', 'klm', 'nop'])

