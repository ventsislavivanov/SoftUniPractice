function solve(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        arr[i] < 0 ? result.unshift(el) : result.push(el)
    }

    console.log(result.join('\n'));
}

solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);