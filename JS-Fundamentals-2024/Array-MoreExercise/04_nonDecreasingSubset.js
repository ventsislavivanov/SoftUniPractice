function solve(arr) {
    let max = arr[0];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const currEl = arr[i];

        if (currEl >= max) {
            max = currEl;
            result.push(currEl);
        }
    }

    console.log(result.join(' '));
}

function solve2(arr) {
    let max = arr[0];

    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }

        return el >= max;
    });

    console.log(result.join(' '));

}


// solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);