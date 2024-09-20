function solve(arr) {
    const rotations = Number(arr.pop());


    for (let i = 0; i < rotations; i++) {
        const firstEl = arr.pop();
        arr.unshift(firstEl)
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);