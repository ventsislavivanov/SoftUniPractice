function solve(num) {
    let isEqual = true;
    let numAsString = num.toString();
    let sum = 0;

    for (let i = 1; i < numAsString.length ; i++) {
        const curr = Number(numAsString[i]);
        const last = Number(numAsString[i - 1]);
        if (last && curr !== last) {
            isEqual = false;
        }
        sum += curr;
    }

    console.log(isEqual);
    console.log(sum);
}

function solve2(num) {
    let isEqual = true;
    let sum = 0

    num.toString()
        .split('')
        .map((x, i , self) => {
            if (x !== self[0]) {
                isEqual = false
            }
            sum += Number(x);
        })

    console.log(isEqual);
    console.log(sum);
}

solve(2222222);