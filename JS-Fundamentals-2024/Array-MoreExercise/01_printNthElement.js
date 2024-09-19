function solve(arr) {
    const step = arr.pop();

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % step === 0) {
            result.push(arr[i]);
        }
    }

    console.log(result.join(' '));
}